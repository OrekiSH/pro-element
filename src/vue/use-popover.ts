import {
  onMounted, onUnmounted, ref, watch, computed,
} from '@vue/composition-api';
import { IPopoverProps } from '../common/props';
import { genUsePopover } from '../common/use-popover';

export function usePopover(props: IPopoverProps, className: string) {
  return genUsePopover({
    onMounted,
    onUnmounted,
    ref,
    watch,
    computed,
    visibleKey: 'value',
  })(props, className);
}
