import { customRenderProps } from '../common/props';

export /**
* custom render props
* 自定义渲染函数
*/
const CustomRender = {
  functional: true,
  props: {
    ...customRenderProps,
  },
  render: (h: Function, ctx: Record<string, any>) => (
    typeof ctx.props.render === 'function'
      ? ctx.props.render(h, ctx.props.attrs, ctx.props.listeners) : ''
  ),
};
