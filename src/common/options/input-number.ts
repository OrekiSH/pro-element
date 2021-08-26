import {
  popoverProps, textFieldColorProps, textFieldProps,
} from '../props';

export const InputNumberOption = {
  name: 'ElemInputNumber',

  inheritAttrs: false,

  props: {
    ...popoverProps,
    ...textFieldProps,
    ...textFieldColorProps,
  },

  mounted() {
    // @ts-ignore
    const input = this.$refs?.root?.$el?.querySelector?.('input');
    if (!input) return;

    ['focus', 'blur', 'select'].forEach((k) => {
      // @ts-ignore
      this[k] = (...args) => input[k](...args);
    });
  },
};
