import {
  popoverProps, textFieldColorProps, textFieldProps, optionProps,
} from '../props';

export const SelectOption = {
  name: 'ElemSelect',

  inheritAttrs: false,

  props: {
    ...popoverProps,
    ...textFieldProps,
    ...textFieldColorProps,
    ...optionProps,

    /**
     * @language=zh
     * 选择数据列表
     * Array<{ label: string, value: any, disabled: boolean, children?: Array }>
     */
    options: {
      type: Array,
      default() { return []; },
    },
  },

  mounted() {
    // @ts-ignore
    const ref = this.$refs.select;
    if (!ref) return;

    ['focus', 'blur'].forEach((k) => {
      // @ts-ignore
      this[k] = ref[k];
    });
  },
};
