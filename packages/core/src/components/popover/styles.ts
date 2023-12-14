import { Content } from '@radix-ui/react-popover';

import { styled, theme } from '@/global/themes';
import { fadeIn, fadeOut } from '@/global/animations';

export const CustomContent = styled(Content, {
  background: theme.colors.white100,
  borderWidth: '1px',
  borderColor: theme.colors.gray200,
  borderStyle: 'solid',
  padding: '15px',
  borderRadius: theme.radii.base,
  transition: 'all',
  transitionDuration: '0.3s',
  '&[data-state=open]': {
    animation: fadeIn + ' 200ms ease-out',
  },
  '&[data-state=closed]': {
    animation: fadeOut + ' 130ms ease-out',
  },
});
