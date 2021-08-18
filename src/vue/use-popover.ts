import {
  onMounted, onUnmounted, reactive, toRefs, watch,
} from '@vue/composition-api';
import { IPopoverProps } from '../common/props';
import { genUsePopover } from '../common/use-popover';

export function usePopover(props: IPopoverProps) {
  return genUsePopover({
    onMounted,
    onUnmounted,
    reactive,
    toRefs,
    watch,
    visibleKey: 'value',
  })(props);
}
