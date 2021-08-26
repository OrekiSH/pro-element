import {
  popoverProps, textFieldColorProps, optionProps,
} from '../props';

export const SelectOption = {
  name: 'ElemSelect',

  inheritAttrs: false,

  props: {
    ...popoverProps,
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

    /**
     * @language=zh
     * 首部内容/渲染函数
     */
    prefix: {
      type: [String, Function],
      default: '',
    },

    /**
     * @language=zh
     * 首部图标类名/渲染函数
     */
    prefixIcon: {
      type: String,
      default: '',
    },
  },

  mounted() {
    // @ts-ignore
    const ref = this.$refs.root;
    if (!ref) return;

    ['focus', 'blur'].forEach((k) => {
      // @ts-ignore
      this[k] = ref[k];
    });
  },
};
