import { EL_TABLE_METHODS } from '../attrs';
import { tableProps } from '../props';

export const TableOption = {
  name: 'ElemTable',

  inheritAttrs: false,

  props: {
    ...tableProps,
  },

  mounted() {
    // @ts-ignore
    const ref = this.$refs.root;
    if (!ref) return;

    EL_TABLE_METHODS.forEach((k) => {
      // @ts-ignore
      this[k] = ref[k];
    });
  },
};
