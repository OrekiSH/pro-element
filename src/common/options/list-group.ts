import {
  popoverProps, textFieldColorProps, optionProps,
} from '../props';

export const ListGroupOption = {
  name: 'ElemListGroup',

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
  },
};
