import {
  onMounted, onUnmounted, ref, watch, computed,
} from 'vue';
import { IPopoverProps } from '../common/props';
import { genUsePopover } from '../common/use-popover';

export function usePopoverNext(props: IPopoverProps, className: string) {
  return genUsePopover({
    onMounted,
    onUnmounted,
    ref,
    watch,
    computed,
    visibleKey: 'visible',
  })(props, className);
}
