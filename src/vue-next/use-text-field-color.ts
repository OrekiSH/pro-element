import {
  onMounted, reactive, watch, getCurrentInstance,
} from 'vue';
import { ITextFeildColorProps } from '../common/props';
import { genUseTextFeildColor } from '../common/use-text-field-color';

export function useTextFeildColorNext(props: ITextFeildColorProps) {
  return genUseTextFeildColor({
    onMounted,
    reactive,
    watch,
    getCurrentInstance,
  })(props);
}
