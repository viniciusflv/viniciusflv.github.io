const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        code: 'Fira Code',
        paragraph: 'RocknRoll One',
      },
      colors: {
        dark: {
          darkest: '#21222c',
          background: '#282a36',
          currentLine: '#44475a',
          foreground: '#f8f8f2',
          comment: '#6272a4',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          purple: '#bd93f9',
          red: '#ff5555',
          yellow: '#f1fa8c',
        },
      },
      strokeWidth: ({ theme }) => theme('width'),
      maxWidth: ({ theme }) => theme('width'),
      minWidth: ({ theme }) => theme('width'),
      maxHeight: ({ theme }) => theme('height'),
      minHeight: ({ theme }) => theme('height'),
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        'grid-area': (gridArea) => ({ gridArea }),
        'grid-areas': (gridAreas) => ({
          gridTemplateAreas: gridAreas.replaceAll(',', ' '),
        }),
      });
    }),
  ],
};
