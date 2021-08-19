export const popoverProps = {
  lite: {
    type: Boolean,
    default: true,
  },

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

  /**
   * @language=zh
   * 弹出框内容/渲染函数
   */
  popover: {
    type: [String, Function],
    default: '',
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

export interface IPopoverProps {
  lite: boolean;
  popoverVisible: boolean;
  popoverAttrs: Record<string, any>;
  popoverListeners: Record<string, any>;
  popover: string | Function;
  scrollWrapper: string;
  scrollDebounce: number;
  duration: number;
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
   * 尾部图标类名/渲染函数
   */
  suffix: {
    type: [String, Function],
    default: '',
  },

  /**
   * @language=zh
   * 首部图标类名/渲染函数
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
