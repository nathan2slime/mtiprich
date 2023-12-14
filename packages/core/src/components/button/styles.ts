import { styled, theme } from '@/global/themes';

export const Button = styled('button', {
  background: theme.colors.primary100,
  fontFamily: 'inherit',
  fontSize: theme.fontSizes.base,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  borderRadius: theme.radii.md,
  color: theme.colors.text100,
  height: '40px',
  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
        opacity: 0.5,
      },
      false: {
        opacity: 1,
        pointerEvents: 'all',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
