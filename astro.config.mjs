import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

import mermaid from 'mdx-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://stargazers.club',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
    remarkPlugins: [mermaid],
  },
  integrations: [
    react(),
    mdx({
      remarkPlugins: [mermaid],
    }),
    tailwind(),
    sitemap(),
    robotsTxt(),
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
