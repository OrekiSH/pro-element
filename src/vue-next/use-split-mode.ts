import {
  computed, ref, watch,
} from 'vue';
import { ISplitModeProps } from '../common/props';

export interface IUseSplitModeNextProps extends ISplitModeProps {
  modelValue: string | number | string[] | number[]
}

export function useSplitModeNext(
  props: IUseSplitModeNextProps,
  attrs: Record<string, any>,
  emit: (event: string, ...args: any[]) => void,
) {
  function genInnerVal(): string {
    const { modelValue } = props;
    if (props.split && Array.isArray(modelValue)) {
      return modelValue.join(props.splitChar);
    }

    return (attrs.type === 'number' && modelValue === 0) ? '' : modelValue as string;
  }

  function genOuterVal(val: string) {
    if (!props.split) {
      return attrs.type === 'number' ? +val : val;
    }

    return val.split(props.splitChar);
  }

  const innerValRef = ref(genInnerVal());

  watch(() => props.modelValue, () => {
    innerValRef.value = genInnerVal();
  }, { deep: true });

  const listeners = computed(() => ({
    ...attrs,
    'onUpdate:modelValue': (val: string) => {
      const input = attrs?.['onUpdate:modelValue'];
      if (typeof input === 'function') input(genOuterVal(val));
    },
    onInput: (val: string) => {
      const input = attrs?.onInput;
      if (typeof input === 'function') input(genOuterVal(val));
    },
    onChange: (val: string) => {
      const change = attrs?.onChange;
      if (typeof change === 'function') change(genOuterVal(val));
    },
    onBlur: (...args: any[]) => {
      const blur = attrs?.onBlur;
      if (typeof blur === 'function') blur(...args);

      if (props.split) {
        const tokens = genOuterVal(innerValRef.value);
        if (Array.isArray(tokens)) {
          const val = tokens.filter(Boolean);
          emit('input', val);
          emit('update:modelValue', val);
          emit('change', val);
        }
      }
    },
  }));

  return {
    innerVal: innerValRef.value,
    listeners,
  };
}
