/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: ({ theme }) => theme('width'),
      minWidth: ({ theme }) => theme('width'),
      maxHeight: ({ theme }) => theme('height'),
      minHeight: ({ theme }) => theme('height'),
    },
  },
  plugins: [],
};
