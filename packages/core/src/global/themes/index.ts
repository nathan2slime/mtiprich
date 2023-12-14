import { createStitches } from '@stitches/react';

export const { styled, css, theme } = createStitches({
  theme: {
    colors: {
      text100: '#FFFFFF',
      text200: '#232323',
      gray100: '#F9F9F9',
      white100: '#FFFFFF',
      gray200: '#E4E4E4',
      primary100: '#E25B4F',
    },
    toolbar: {
      background: '#FFFFFF',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#E4E4E4',
    },
    editor: {
      background: '#FFFFFF',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#E4E4E4',
    },
    space: {
      sm: '5px',
      md: '10px',
      lg: '15px',
    },
    fontSizes: {
      sm: '13px',
      md: '14px',
      base: '16px',
      lg: '18px',
      xl: '22px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      sm: '4px',
      md: '8px',
      base: '12px',
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
