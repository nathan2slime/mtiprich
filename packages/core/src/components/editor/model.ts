import { HTMLAttributes, ReactNode } from 'react';

export type EditorProps = HTMLAttributes<HTMLElement> & {
  value: string;
  onChangeValue: (value: string) => void;
  height?: number;
};

export type ToolbarDropdownOption = {
  value: boolean;
  name: string;
};

export type ToolbarDropdown = {
  [key: string]: boolean;
};

export type Toolbar = {
  name: any;
  action: () => void;
  icon: ReactNode;
  args?: object;
  component?: (value: ReactNode) => ReactNode;
};
