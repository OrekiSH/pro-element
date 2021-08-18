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

// list group component, like select
export interface IOptionProps {
  valueKey: string;
  labelKey: string;
  childrenKey: string;
  disabledKey: string;
}

// textField component color
export interface ITextFeildColorProps {
  color: string
  borderColor: string
  backgroundColor: string
}
```

## Hooks

- use-popover: bind popover into element
- use-text-field-color: set color for textField
