import { MiToggleProps } from './model';
import { Toggle } from './styles';

export const MiToggle = ({
  onPressedChange,
  pressed,
  ...props
}: MiToggleProps) => (
  <Toggle
    {...props}
    pressed={pressed}
    onClick={() => onPressedChange(!pressed)}
  />
);
