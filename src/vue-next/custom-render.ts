import { h } from 'vue';
import { customRenderProps, ICustomRenderProps } from '../common/props';

/**
 * custom render props
 * 自定义渲染函数
 */
export const CustomRenderNext = (props: ICustomRenderProps) => (typeof props.render === 'function'
  ? props.render(h, props.attrs, props.listeners) : '');

CustomRenderNext.props = customRenderProps;
