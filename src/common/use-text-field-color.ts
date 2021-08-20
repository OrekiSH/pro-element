import { ITextFeildColorProps } from './props';

interface IGenUseTextFeildColorOptions {
  watch: Function
  onMounted: Function
  onUnmounted: Function
  getCurrentInstance: Function
  ref: Function
}

export function genUseTextFeildColor(opts: IGenUseTextFeildColorOptions) {
  const {
    watch,
    onMounted,
    onUnmounted,
    getCurrentInstance,
    ref,
  } = opts || {};

  return function useTextFeildColor(props: ITextFeildColorProps) {
    const elRef = ref(null);

    function set(prop: keyof ITextFeildColorProps) {
      if (elRef.value) {
        elRef.value.style[prop] = props[prop];
      }
    }

    watch(() => props.color, () => {
      set('color');
    });

    watch(() => props.backgroundColor, () => {
      set('backgroundColor');
    });

    watch(() => props.borderColor, () => {
      set('borderColor');
    });

    const vm = getCurrentInstance();

    onMounted(() => {
      // @ts-ignore
      const el = vm?.refs?.root?.$el;
      if (!el) return;

      elRef.value = el.querySelector('.el-input__inner')
        || el.querySelector('.el-textarea__inner');

      set('color');
      set('borderColor');
      set('backgroundColor');
    });

    onUnmounted(() => {
      elRef.value = null;
    });
  };
}
