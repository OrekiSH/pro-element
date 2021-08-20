import {
  onMounted, onUnmounted, ref, watch, getCurrentInstance,
} from 'vue';
import { ITextFeildColorProps } from '../common/props';
import { genUseTextFeildColor } from '../common/use-text-field-color';

export function useTextFeildColorNext(props: ITextFeildColorProps) {
  return genUseTextFeildColor({
    onMounted,
    onUnmounted,
    ref,
    watch,
    getCurrentInstance,
  })(props);
}
