const plugin = require('tailwindcss/plugin');
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        code: 'Fira Code',
        paragraph: ['RocknRoll One', 'sans-serif'],
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
    plugin(function ({ matchUtilities, theme, e }) {
      matchUtilities(
        {
          glow: (value) => ({
            border: `1px solid ${value}`,
            filter: `drop-shadow(0 0 0.3rem ${value})`,
          }),
          'glow-t': (value) => ({
            borderTop: `1px solid ${value}`,
            filter: `drop-shadow(0 0 0.3rem ${value})`,
          }),
          'glow-b': (value) => ({
            borderBottom: `1px solid ${value}`,
            filter: `drop-shadow(0 0 0.3rem ${value})`,
          }),
          'glow-l': (value) => ({
            borderLeft: `1px solid ${value}`,
            filter: `drop-shadow(0 0 0.3rem ${value})`,
          }),
          'glow-r': (value) => ({
            borderRight: `1px solid ${value}`,
            filter: `drop-shadow(0 0 0.3rem ${value})`,
          }),
        },
        {
          values: flattenColorPalette(theme('colors')),
          type: ['color'],
          respectPrefix: true,
        },
      ),
        matchUtilities({
          'grid-area': (gridArea) => ({ gridArea }),
          'grid-areas': (gridAreas) => ({
            gridTemplateAreas: gridAreas.replaceAll(',', ' '),
          }),
        });
    }),
  ],
};
