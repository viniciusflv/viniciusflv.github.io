import * as fs from 'fs';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotstxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'path';
import puppeteer from 'puppeteer';

export function astroOpenGraph() {
  /** @type {import('astro').AstroIntegration} */
  const integration = {
    name: 'astro-og-image',
    hooks: {
      'astro:build:done': async ({ dir, routes }) => {
        console.log('TODO');

        // routes.map(({ route }) => console.log(route));

        // ========================================
        // let path = config.path;
        // // Filters all the routes that need OG image
        // let filteredRoutes = routes.filter((route) =>
        //   route?.component?.includes(path),
        // );

        // // Creates a directory for the images if it doesn't exist already
        // let directory = fileURLToPath(new URL(`./assets/${path}`, dir));
        // if (!fs.existsSync(directory)) {
        //   fs.mkdirSync(directory);
        // }

        // const browser = await puppeteer.launch({
        //   args: ['--no-sandbox', '--disable-setuid-sandbox'],
        // });
        // for (const route of filteredRoutes) {
        //   // Gets the title
        //   const pathname = route?.distURL?.pathname;
        //   // Skip URLs that have not been built (draft: true, etc.)
        //   if (!pathname) {
        //     continue;
        //   }
        //   const data = fs.readFileSync(pathname as any, 'utf-8') as any;
        //   let title = await data.match(/<title[^>]*>([^<]+)<\/title>/)[1];

        //   // Get the html
        //   const html = fs
        //     .readFileSync('og-image.html', 'utf-8')
        //     .toString()
        //     .replace('@title', title);

        //   const page = await browser.newPage();
        //   await page.setContent(html);
        //   await page.waitForNetworkIdle();
        //   await page.setViewport({
        //     width: 1200,
        //     height: 630,
        //   });

        //   await page.screenshot({
        //     path: fileURLToPath(
        //       new URL(`./assets/${pathname.split('/').at(-2)}.png`, dir),
        //     ),
        //     encoding: 'binary',
        //   });
        // }
        // await browser.close();
      },
    },
  };

  return integration;
}
