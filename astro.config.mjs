import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import fonts from 'astro-fonts-next';
import robotstxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { dirname, resolve } from 'path';

import { astroOpenGraph } from './og.plugin.mjs';

const __dirname = dirname(new URL('', import.meta.url).pathname);

// https://astro.build/config
export default defineConfig({
  site: 'https://viniciusflv.github.io',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
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
    tailwind(),
    sitemap(),
    robotstxt(),
    astroOpenGraph(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    fonts({
      url: [
        'https://fonts.googleapis.com/css2?family=RocknRoll+One:wght@400;700&display=swap',
      ],
    }),
    mdx({
      remarkPlugins: [
        function codeSnippet() {
          return function (tree) {
            tree.children.map((child) => {
              if (child.lang) {
                child.value =
                  `<div class="code-snippet">` +
                  `<div class="language-id">${child.lang}</div>` +
                  `<button disabled aria-pressed="false" class="copy-button">` +
                  `<svg class="copy" fill="currentColor" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="100%">` +
                  `<path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path>` +
                  `<path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>` +
                  `</svg>` +
                  `<svg class="check" fill="currentColor" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="100%">` +
                  `<path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>` +
                  `</svg>` +
                  `</button>` +
                  `${child.value}` +
                  `</div>`;
              }
            });
          };
        },
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
