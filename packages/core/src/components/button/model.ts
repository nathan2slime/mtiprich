import { VariantProps } from '@stitches/react';
import { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

export type MiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof Button>;
