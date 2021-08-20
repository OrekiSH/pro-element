import {
  onMounted, onUnmounted, ref, watch,
} from 'vue';
import { IPopoverProps } from '../common/props';
import { genUsePopover } from '../common/use-popover';

export function usePopoverNext(props: IPopoverProps) {
  return genUsePopover({
    onMounted,
    onUnmounted,
    ref,
    watch,
    visibleKey: 'visible',
  })(props);
}
