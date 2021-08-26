const commonPopoverProps = {
  /**
   * popover visible
   * 弹出框是否显示
   */
  popoverVisible: {
    type: Boolean,
    default: false,
  },

  /**
   * <el-popover> Attributes
   * 弹出框属性
   */
  popoverAttrs: {
    type: Object,
    default() { return {}; },
  },

  /**
   * <el-popover> Events
   * 弹出框事件
   */
  popoverListeners: {
    type: Object,
    default() { return {}; },
  },
};

interface ICommonPopoverProps {
  popoverVisible: boolean;
  popoverAttrs: Record<string, any>;
  popoverListeners: Record<string, any>;
}

const controlPopoverProps = {
  lite: {
    type: Boolean,
    default: true,
  },

  /**
   * @language=zh
   * 滚动容器选择器(window直接使用window字符串), 指定时会在滚动时更新popover的位置信息
   */
  scrollWrapper: {
    type: String,
    default: '',
  },

  /**
   * @language=zh
   * 滚动debounce延迟时间
   */
  scrollDebounce: {
    type: Number,
    default: 0,
  },

  /**
   * @language=zh
   * 显示时间, 毫秒。设为 0 则不会自动关闭
   */
  duration: {
    type: Number,
    default: 3000,
  },
};

interface IControlPopoverProps {
  lite: boolean;
  scrollWrapper: string;
  scrollDebounce: number;
  duration: number;
}

export const popoverProps = {
  ...commonPopoverProps,
  ...controlPopoverProps,

  /**
   * @language=zh
   * 弹出框内容/渲染函数
   */
  popover: {
    type: [String, Function],
    default: '',
  },
};

export interface IPopoverProps extends ICommonPopoverProps, IControlPopoverProps {
  popover: string | Function;
}

export const textFieldProps = {
  /**
   * @language=zh
   * 前置内容字符串/渲染函数
   */
  prepend: {
    type: [String, Function],
    default: '',
  },

  /**
   * @language=zh
   * 后置内容字符串/渲染函数
   */
  append: {
    type: [String, Function],
    default: '',
  },

  /**
   * @language=zh
   * 尾部内容/渲染函数
   */
  suffix: {
    type: [String, Function],
    default: '',
  },

  /**
   * @language=zh
   * 首部内容/渲染函数
   */
  prefix: {
    type: [String, Function],
    default: '',
  },
};

export interface ITextFieldProps {
  append: string | Function
  prepend: string | Function
  prefix: string | Function
  suffix: string | Function
}

export const customRenderProps = {
  render: {
    type: Function,
    default: null,
  },
  attrs: {
    type: Object,
    default: null,
  },
  listeners: {
    type: Object,
    default: null,
  },
};

export interface ICustomRenderProps {
  render: Function
  attrs?: Record<string, any>
  listeners?: Record<string, Function>
}

export const optionProps = {
  /**
   * @language=zh
   * 指定选项的值为选项对象的某个属性值
   */
  valueKey: {
    type: String,
    default: 'value',
  },

  /**
   * @language=zh
   * 指定选项标签为选项对象的某个属性值
   */
  labelKey: {
    type: String,
    default: 'label',
  },

  /**
   * @language=zh
   * 指定选项的子选项为选项对象的某个属性值
   */
  childrenKey: {
    type: String,
    default: 'children',
  },

  /**
   * @language=zh
   * 指定选项的禁用为选项对象的某个属性值
   */
  disabledKey: {
    type: String,
    default: 'disabled',
  },
};

export interface IOptionProps {
  valueKey: string;
  labelKey: string;
  childrenKey: string;
  disabledKey: string;
}

export const textFieldColorProps = {
  /**
   * @language=zh
   * 选择器边框颜色
   */
  borderColor: {
    type: String,
    default: '',
  },

  /**
   * @language=zh
   * 选择器背景颜色
   */
  backgroundColor: {
    type: String,
    default: '',
  },

  /**
   * @language=zh
   * 选择器字体颜色
   */
  color: {
    type: String,
    default: '',
  },
};

export interface ITextFeildColorProps {
  color: string
  borderColor: string
  backgroundColor: string
}

export const splitModeProps = {
  /**
   * @language=zh
   * 分隔模式，双向绑定值为根据splitChar分隔的数组
   */
  split: {
    type: Boolean,
    default: false,
  },

  /**
   * @language=zh
   * 分隔字符串
   */
  splitChar: {
    type: String,
    default: ' ',
  },
};

export interface ISplitModeProps {
  split: boolean
  splitChar: string
}

export interface ICommonColumnProps {
  placeholder?: string | Function
  attrs?: Record<string, any>
  listeners?: Record<string, Function>
}

export const imageColumnProps = {
  ...commonPopoverProps,
  /**
   * @language=zh
   * 图片类型的列是否启用预览
   */
  previewVisible: {
    type: Boolean,
    default: true,
  },

  /**
   * @language=zh
   * 图片类型的列图片地址转换函数
   */
  transformImageSrc: {
    type: Function,
    default: null,
  },
};

export interface IImageColumnProps extends ICommonPopoverProps, ICommonColumnProps {
  previewVisible: boolean
  transformImageSrc: Function
}

export type TAlign = 'left' | 'center' | 'right';

export const tableProps = {
  /**
   * @language=zh
   * 表格数据
   */
  data: {
    type: Array,
    default() { return []; },
  },

  /**
   * @language=zh
   * 表格列schema
   */
  columns: {
    type: Array,
    default() { return []; },
  },

  /**
   * @language=zh
   * 表格是否加载中
   */
  loading: {
    type: Boolean,
    default: false,
  },

  /**
   * @language=zh
   * 全局选中列表
   */
  selection: {
    type: Array,
    default() { return []; },
  },

  /**
   * @language=zh
   * 全局单选选中项
   */
  selectionItem: {
    type: Object,
    default: null,
  },

  /**
   * @language=zh
   * 为true时先选中的在全局选中列表的后面(栈)， 默认先选中的在全局选中列表的前面(队列)
   */
  stackSelection: {
    type: Boolean,
    default: false,
  },

  /**
   * @language=zh
   * 全局单元格对齐方式, left/center/right
   */
  align: {
    type: String,
    default: 'left',
  },

  /**
   * @language=zh
   * 全局表头对齐方式, left/center/right
   */
  headerAlign: {
    type: String,
    default: 'left',
  },

  /**
   * @language=zh
   * 当内容过长被隐藏时显示 tooltip
   */
  showOverflowTooltip: {
    type: Boolean,
    default: true,
  },

  /**
   * @language=zh
   * 全局列最小宽度
   */
  minWidth: {
    type: [Number, String],
    default: 100,
  },

  /**
   * @language=zh
   * 当单元格的值为空字符串/`null`/`undefined`时的后备渲染内容
   */
  placeholder: {
    type: String,
    default: '',
  },

  /**
   * @language=zh
   * 可输入组件是否回车换行
   */
  enterChangeLine: {
    type: Boolean,
    default: false,
  },

  ...controlPopoverProps,
};

export interface ITableProps extends IControlPopoverProps {
  loading: boolean
  data: Record<string, any>[]
  columns: Record<string, any>[]
  selection: Record<string, any>[]
  align: TAlign
  headerAlign: TAlign
  showOverflowTooltip: boolean
  minWidth: number | string
  placeholder: string | Function
  enterChangeLine: boolean
}

export interface ITableColumnProps extends ICommonColumnProps {
  label?: string | Function
  prop?: string
  render?: Function
  visible?: boolean
  previewProp?: boolean
  children?: ITableColumnProps[]
}

export interface IPopoverWrapperProps {
  lite: boolean
  inner: JSX.Element
  innerPopoverAttrs: Record<string, any>
  popover: string | Function
}
