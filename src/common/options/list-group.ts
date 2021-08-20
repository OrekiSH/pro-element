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
  },
};
