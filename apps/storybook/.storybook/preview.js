import 'highlight.js/styles/github-dark.css';

import '@mtiprich/core/dist/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: {
        disable: true,
      },
    },
  },
};

export default preview;
