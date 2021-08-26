import {
  popoverProps, textFieldColorProps, textFieldProps,
} from '../props';

export const AutocompleteOption = {
  name: 'ElemAutocomplete',

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

    ['focus'].forEach((k) => {
      // @ts-ignore
      this[k] = ref[k];
    });
  },
};
