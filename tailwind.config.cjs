const plugin = require('tailwindcss/plugin');
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', ':global(.dark)'],
  theme: {
    extend: {
      fontFamily: {
        base: ['RocknRoll One', 'sans-serif'],
      },
      colors: {
        dracula: {
          darkest: 'hsl(235, 14%, 15%)',
          background: 'hsl(231, 15%, 18%)',
          currentLine: 'hsl(232, 14%, 31%)',
          foreground: 'hsl(60, 30%, 96%)',
          comment: 'hsl(225, 27%, 51%)',
          cyan: 'hsl(191, 97%, 77%)',
          green: 'hsl(135 94% 65%)',
          orange: 'hsl(31, 100%, 71%)',
          pink: 'hsl(326, 100%, 74%)',
          purple: 'hsl(265, 89%, 78%)',
          red: 'hsl(0, 100%, 67%)',
          yellow: 'hsl(65, 92%, 76%)',
        },
      },
      strokeWidth: ({ theme }) => theme('width'),
      maxWidth: ({ theme }) => theme('width'),
      minWidth: ({ theme }) => theme('width'),
      maxHeight: ({ theme }) => theme('height'),
      minHeight: ({ theme }) => theme('height'),
      lineHeight: ({ theme }) => theme('height'),
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
          'grid-rows-auto-fit': (value) => ({
            gridTemplateRows: `repeat(auto-fit,${value})`,
          }),
          'grid-cols-auto-fit': (value) => ({
            gridTemplateColumns: `repeat(auto-fit,${value})`,
          }),
          'grid-area': (gridArea) => ({ gridArea }),
          'grid-areas': (gridAreas) => ({
            gridTemplateAreas: gridAreas.replaceAll(',', ' '),
          }),
        });
    }),
  ],
};
