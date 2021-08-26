import { debounce } from '@util-lite/debounce';
import { IPopoverProps } from './props';

interface IGenUsePopoverOptions {
  ref: Function
  watch: Function
  onMounted: Function
  onUnmounted: Function
  visibleKey: string
  computed: Function
}

export function genUsePopover(options: IGenUsePopoverOptions) {
  const {
    ref,
    watch,
    onMounted,
    onUnmounted,
    visibleKey,
    computed,
  } = options || {};

  return function usePopover(props: IPopoverProps, className: string) {
    // popover if visible, popover是否可见
    const innerVisibleRef = ref(false);
    // scroll container, 滚动容器
    const scrollElRef = ref(null);
    // timer id for hide popover, 隐藏popover的定时器id
    const timerIdRef = ref(null);
    const debounceUpdatePopperRef = ref(null);

    function cleanUp() {
      innerVisibleRef.value = null;
      scrollElRef.value = null;
      timerIdRef.value = null;
      debounceUpdatePopperRef.value = null;
    }

    function genPopoverAttrs(popperClass: string, opts = {
      trigger: 'manual',
      placement: 'top',
    }) {
      const { popover, popoverAttrs } = props;
      const attrs = {
        ...opts,
        disabled: !popover && !popoverAttrs.content,
        'popper-class': popperClass,
      } as Record<string, any>;

      if (typeof popover === 'string') {
        attrs.content = popover;
      }

      return {
        [visibleKey]: innerVisibleRef.value,
        ...attrs,
        ...popoverAttrs,
      };
    }

    function delayHidePopover() {
      if (props.duration && innerVisibleRef.value) {
        timerIdRef.value = setTimeout(() => {
          innerVisibleRef.value = false;
        }, props.duration);
      }
    }

    watch(() => props.popoverVisible, (val: boolean) => {
      innerVisibleRef.value = val;

      if (!val && timerIdRef.value) clearTimeout(timerIdRef.value);
      if (val) delayHidePopover();
    });

    onMounted(() => {
      const {
        popoverVisible, scrollWrapper, scrollDebounce,
      } = props;
      innerVisibleRef.value = popoverVisible;

      if (scrollWrapper) {
        // 滚动元素, scroll elment
        const el = scrollWrapper === 'window'
          ? window
          : document.querySelector(scrollWrapper);

        if (el) {
          scrollElRef.value = el;
          debounceUpdatePopperRef.value = debounce(() => {
            // @ts-ignore
            const { popover } = this.$refs;
            if (popover && typeof popover.updatePopper === 'function') {
              popover.updatePopper();
            }
          }, scrollDebounce);
          el.addEventListener('scroll', debounceUpdatePopperRef.value);
        }
      }

      delayHidePopover();
    });

    onUnmounted(() => {
      if (scrollElRef.value && debounceUpdatePopperRef.value) {
        scrollElRef.value.removeEventListener('scroll', debounceUpdatePopperRef.value);
      }

      if (timerIdRef.value) clearTimeout(timerIdRef.value);

      cleanUp();
    });

    const innerPopoverAttrs = computed(() => genPopoverAttrs(className));

    return {
      innerVisible: innerVisibleRef,
      genPopoverAttrs,
      innerPopoverAttrs,
    };
  };
}
