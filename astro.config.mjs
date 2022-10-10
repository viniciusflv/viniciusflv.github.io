import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import fonts from 'astro-fonts-next';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { dirname, resolve } from 'path';

const __dirname = dirname(new URL('', import.meta.url).pathname);

console.log(__dirname);

// https://astro.build/config
export default defineConfig({
  site: 'https://viniciusflv.github.io',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  },
  integrations: [
    react(),
    mdx(),
    tailwind(),
    sitemap(),
    robotsTxt(),
    partytown(),
    fonts({
      url: [
        'https://fonts.googleapis.com/css2?family=RocknRoll+One:wght@400;700&display=swap',
      ],
    }),
    compress({
      js: true,
      css: true,
      img: true,
      svg: true,
      html: {
        html5: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        caseSensitive: true,
        decodeEntities: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        removeTagWhitespace: true,
        trimCustomFragments: true,
        continueOnParseError: true,
        conservativeCollapse: true,
        removeEmptyAttributes: true,
        preventAttributesEscaping: true,
        removeRedundantAttributes: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true,
        collapseInlineTagWhitespace: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
  ],
});
