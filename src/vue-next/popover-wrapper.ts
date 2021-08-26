import { createVNode, mergeProps, resolveComponent } from 'vue';
import { IPopoverWrapperProps } from '../common/props';
import { CustomRenderNext } from './custom-render';

export const popoverWrapperNext = (props: IPopoverWrapperProps) => (
  props.lite ? props.inner : createVNode(resolveComponent('el-popover'), mergeProps({
    ref: 'popover',
  }, props.innerPopoverAttrs), {
    reference: function reference() {
      return props.inner;
    },
    default: typeof props.popover === 'function' ? function () {
      return createVNode(CustomRenderNext, {
        render: props.popover,
      }, null);
    } : null,
  })
);
