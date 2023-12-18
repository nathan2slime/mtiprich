import { styled, theme } from '@/global/themes';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  maxWidth: '300px',
  gap: '15px',
  '& .header': {
    width: '100%',
  },
  '& .group': {
    display: 'grid',
    gap: '8px',
  },
  '& .title': {
    fontSize: theme.fontSizes.base,
    color: theme.colors.text200,
  },
  '& .description': {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.text200,
  },
  '& .fieldset': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '5px'
  },
  '& .field': {
    width: '80%',
  },
  '& .footer': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '4px',
    marginTop: '14px',
    alignItems: 'center',
  },
});
