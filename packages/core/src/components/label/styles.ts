import { Root } from '@radix-ui/react-label';

import { styled, theme } from '@/global/themes';

export const Label = styled(Root, {
  fontSize: theme.fontSizes.sm,
  color: theme.colors.text200
});
