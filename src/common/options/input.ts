import { popoverProps, textFieldColorProps, textFieldProps } from '../props';

export const InputOption = {
  name: 'ElemInput',

  inheritAttrs: false,

  props: {
    ...popoverProps,
    ...textFieldProps,
    ...textFieldColorProps,
  },

  mounted() {
    // @ts-ignore
    const ref = this.$refs.input;
    if (!ref) return;

    ['focus', 'blur', 'select'].forEach((k) => {
      // @ts-ignore
      this[k] = ref[k];
    });
  },
};
