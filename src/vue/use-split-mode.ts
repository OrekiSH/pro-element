import {
  computed, ref, watch,
} from '@vue/composition-api';
import { ISplitModeProps } from '../common/props';

export interface IUseSplitModeProps extends ISplitModeProps {
  value: string | number | string[] | number[]
}

export function useSplitMode(
  props: IUseSplitModeProps,
  attrs: Record<string, any>,
  emit: (event: string, ...args: any[]) => void,
) {
  function genInnerVal(): string {
    const { value } = props;
    if (props.split && Array.isArray(value)) {
      return value.join(props.splitChar);
    }

    return (attrs.type === 'number' && value === 0) ? '' : value as string;
  }

  function genOuterVal(val: string) {
    if (!props.split) {
      return attrs.type === 'number' ? +val : val;
    }

    return val === '' ? [] : val.split(props.splitChar);
  }

  const innerValRef = ref(genInnerVal());

  watch(() => props.value, () => {
    innerValRef.value = genInnerVal();
  }, { deep: true });

  const listeners = computed(() => ({
    ...attrs,
    input: (val: string) => {
      const input = attrs?.input;
      if (typeof input === 'function') input(genOuterVal(val));
    },
    change: (val: string) => {
      const change = attrs?.change;
      if (typeof change === 'function') change(genOuterVal(val));
    },
    blur: (...args: any[]) => {
      const blur = attrs?.blur;
      if (typeof blur === 'function') blur(...args);

      if (props.split) {
        const tokens = genOuterVal(innerValRef.value);
        if (Array.isArray(tokens)) {
          const val = tokens.filter(Boolean);
          emit('input', val);
          emit('change', val);
        }
      }
    },
  }));

  return {
    innerVal: innerValRef,
    listeners,
  };
}
