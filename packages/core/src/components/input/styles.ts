import { styled, theme } from '@/global/themes';

export const Input = styled('input', {
  background: theme.colors.white100,
  borderWidth: '1px',
  borderColor: theme.colors.gray200,
  outline: 'none',
  fontSize: theme.fontSizes.md,
  padding: '11px 8px',
  color: theme.colors.text200,
  borderRadius: theme.radii.sm,
  height: '40px',
  '&:focus': {
    borderColor: theme.colors.primary100
  }
});
