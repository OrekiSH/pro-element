import {
  popoverProps, textFieldColorProps, textFieldProps,
} from '../props';

export const CascaderOption = {
  name: 'ElemCascader',

  inheritAttrs: false,

  props: {
    ...popoverProps,
    ...textFieldProps,
    ...textFieldColorProps,
  },

  mounted() {
    // @ts-ignore
    const ref = this.$refs.root;
    if (!ref) return;

    ['getCheckedNodes'].forEach((k) => {
      // @ts-ignore
      this[k] = ref[k];
    });
  },
};
