import { EditorContent } from '@tiptap/react';

import { styled, theme } from '@/global/themes';

export const Wrapper = styled('div', {
  width: '100%',
  overflow: 'hidden',
  borderWidth: theme.editor.borderWidth,
  borderRadius: theme.radii.base,
  borderColor: theme.editor.borderColor,
  background: theme.editor.background,
  borderStyle: theme.editor.borderStyle,
});

export const CustomEditor = styled(EditorContent, {
  height: 'inherit',
  padding: '13px',
});

export const Head = styled('div', {
  padding: '13px',
  overflowX: 'auto',
  flexWrap: 'wrap',
  borderBottomWidth: theme.toolbar.borderWidth,
  borderColor: theme.toolbar.borderColor,
  borderStyle: theme.toolbar.borderStyle,
  background: theme.toolbar.background,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '6px',
});
