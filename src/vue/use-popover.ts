import {
  onMounted, onUnmounted, ref, watch,
} from '@vue/composition-api';
import { IPopoverProps } from '../common/props';
import { genUsePopover } from '../common/use-popover';

export function usePopover(props: IPopoverProps) {
  return genUsePopover({
    onMounted,
    onUnmounted,
    ref,
    watch,
    visibleKey: 'value',
  })(props);
}
