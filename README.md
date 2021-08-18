# pro-element

## Props

```ts
// popover
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

// textField component slot
export interface ITextFieldProps {
  append: string | Function
  prepend: string | Function
  prefix: string | Function
  suffix: string | Function
}

// custom render component
export interface ICustomRenderProps {
  render: Function
  attrs?: Record<string, any>
  listeners?: Record<string, Function>
}
```