import { VariantProps } from '@stitches/react';
import { ButtonHTMLAttributes } from 'react';

import { Toggle } from './styles';

export type MiToggleProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof Toggle> & {
    onPressedChange: (value: boolean) => void;
  };
