import {
  onMounted, onUnmounted, reactive, toRefs, watch,
} from 'vue';
import { IPopoverProps } from '../common/props';
import { genUsePopover } from '../common/use-popover';

export function usePopoverNext(props: IPopoverProps) {
  return genUsePopover({
    onMounted,
    onUnmounted,
    reactive,
    toRefs,
    watch,
    visibleKey: 'visible',
  })(props);
}
