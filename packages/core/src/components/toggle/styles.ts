import { styled, theme, } from '@/global/themes';

export const Toggle = styled('button', {
  width: '45px',
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
    variant: {
      outline: {
        background: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.gray200,
        borderStyle: 'solid',
        color: theme.colors.text200
      },
    },
    pressed: {
      true: {
        background: theme.colors.gray100
      },
      false: {
        background: 'transparent'
      },
    },
  },
  defaultVariants: {
    pressed: false,
  },
});
