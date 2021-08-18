import { debounce } from '@util-lite/debounce';
import { IPopoverProps } from './props';

interface IGenUsePopoverOptions {
  reactive: Function,
  watch: Function,
  onMounted: Function,
  onUnmounted: Function,
  toRefs: Function,
  visibleKey: string,
}

export function genUsePopover(options: IGenUsePopoverOptions) {
  const {
    reactive,
    watch,
    onMounted,
    toRefs,
    onUnmounted,
    visibleKey,
  } = options || {};

  return function usePopover(props: IPopoverProps) {
    const state = reactive({
      // scroll container, 滚动容器
      scrollEl: null,
      // timer id for hide popover, 隐藏popover的定时器id
      timerId: null,
      // popover if visible, popover是否可见
      innerVisible: false,
      debounceUpdatePopper: null,
    });

    function genPopoverAttrs(className: string, opts = {
      trigger: 'manual',
      placement: 'top',
    }) {
      const { popover, popoverAttrs } = props;
      const attrs = {
        ...opts,
        disabled: !popover && !popoverAttrs.content,
        'popper-class': className,
      } as Record<string, any>;

      if (typeof popover === 'string') {
        attrs.content = popover;
      }

      return {
        [visibleKey]: state.innerVisible,
        ...attrs,
        ...popoverAttrs,
      };
    }

    function delayHidePopover() {
      if (props.duration && state.innerVisible) {
        state.timerId = setTimeout(() => {
          state.innerVisible = false;
        }, props.duration);
      }
    }

    watch(() => props.popoverVisible, (val: boolean) => {
      state.innerVisible = val;

      if (!val && state.timerId) clearTimeout(state.timerId);
      if (val) delayHidePopover();
    });

    onMounted(() => {
      const {
        popoverVisible, scrollWrapper, scrollDebounce,
      } = props;
      state.innerVisible = popoverVisible;

      if (scrollWrapper) {
        // 滚动元素, scroll elment
        const el = scrollWrapper === 'window'
          ? window
          : document.querySelector(scrollWrapper);

        if (el) {
          state.scrollEl = el;
          state.debounceUpdatePopper = debounce(() => {
            // @ts-ignore
            const ref = this.$refs.popover;
            if (ref && typeof ref.updatePopper === 'function') {
              ref.updatePopper();
            }
          }, scrollDebounce);
          el.addEventListener('scroll', state.debounceUpdatePopper);
        }
      }

      delayHidePopover();
    });

    onUnmounted(() => {
      if (state.scrollEl && state.debounceUpdatePopper) {
        state.scrollEl.removeEventListener('scroll', state.debounceUpdatePopper);
      }

      if (state.timerId) clearTimeout(state.timerId);
    });

    return {
      ...toRefs(state),
      genPopoverAttrs,
    };
  };
}
