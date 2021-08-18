import {
  onMounted, reactive, watch, getCurrentInstance,
} from '@vue/composition-api';
import { ITextFeildColorProps } from '../common/props';
import { genUseTextFeildColor } from '../common/use-text-field-color';

export function useTextFeildColor(props: ITextFeildColorProps) {
  return genUseTextFeildColor({
    onMounted,
    reactive,
    watch,
    getCurrentInstance,
  })(props);
}
