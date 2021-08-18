import { ITextFeildColorProps } from './props';

interface IGenUseTextFeildColorOptions {
  reactive: Function
  watch: Function
  onMounted: Function
  getCurrentInstance: Function
}

export function genUseTextFeildColor(opts: IGenUseTextFeildColorOptions) {
  const {
    reactive,
    watch,
    onMounted,
    getCurrentInstance,
  } = opts || {};

  return function useTextFeildColor(props: ITextFeildColorProps) {
    const state = reactive({
      el: null as any,
    });

    function setBorderColor() {
      if (state.el) {
        state.el.style.borderColor = props.borderColor;
      }
    }

    function setBackgroundColor() {
      if (state.el) {
        state.el.style.backgroundColor = props.backgroundColor;
      }
    }

    function setFontColor() {
      if (state.el) {
        state.el.style.color = props.color;
      }
    }

    watch(() => props.color, () => {
      setFontColor();
    });

    watch(() => props.backgroundColor, () => {
      setBackgroundColor();
    });

    watch(() => props.borderColor, () => {
      setBorderColor();
    });

    const vm = getCurrentInstance();

    onMounted(() => {
      // @ts-ignore
      const el = vm?.refs?.input?.$el;
      if (!el) return;

      state.el = el.querySelector('.el-input__inner')
        || el.querySelector('.el-textarea__inner');

      setBorderColor();
      setBackgroundColor();
      setFontColor();
    });
  };
}
