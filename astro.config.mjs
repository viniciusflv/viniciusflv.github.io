import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import pwa from '@vite-pwa/astro';
import { astroExpressiveCode } from 'astro-expressive-code';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { dirname, resolve } from 'path';

import { astroOgImage } from './integrations/astroOgImage';

const __dirname = dirname(new URL('', import.meta.url).pathname);

// https://astro.build/config
export default defineConfig({
  // site: 'https://brown-baths-wash.loca.lt',
  site: 'https://viniciusflv.github.io',
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
  server: ({ command }) => ({
    port: command === 'dev' ? 3000 : 8000,
  }),
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  },
  integrations: [
    astroOgImage({
      __dirname,
      brand: resolve(__dirname, './src/assets/svg/me-ricknmorty.svg'),
      favicon: resolve(__dirname, './src/assets/svg/me-ricknmorty-face.svg'),
      content: resolve(__dirname, './src/**/*.mdx'),
      fonts: [
        {
          name: 'RocknRoll One',
          src: resolve(
            __dirname,
            './src/assets/fonts/RocknRollOne-Regular.ttf',
          ),
          weight: 400,
          style: 'normal',
        },
      ],
    }),
    astroExpressiveCode({
      theme: 'dracula',
      useThemedScrollbars: true,
      useThemedSelectionColors: true,
    }),
    pwa({
      mode: 'development',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.png'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Astro PWA',
        short_name: 'Astro PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404',
      },
      devOptions: {
        // enabled: true,
        suppressWarnings: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
    mdx(),
    tailwind(),
    react(),
    robotsTxt(),
    sitemap(),
  ],
  // experimental: {
  //   i18n: {
  //     routingStrategy: "prefix-always",
  //     defaultLocale: "en",
  //     locales: ["en", "pt-BR"],
  //     fallback: {
  //       "pt-BR": "en",
  //     },
  //   },
  // },
});
