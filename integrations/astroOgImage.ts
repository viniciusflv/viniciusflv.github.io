import type { AstroIntegration } from 'astro';
import frontmatter from 'front-matter';
import { glob } from 'glob';
import { existsSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'path';
import satori, { type FontStyle, type FontWeight } from 'satori';
import { html } from 'satori-html';
import sharp from 'sharp';

export type AstroOgImageProps = {
  brand: string;
  favicon: string;
  content: string;
  fonts: { name: string; src: string; weight: FontWeight; style: FontStyle }[];
};

export function astroOgImage({
  __dirname,
  brand,
  favicon,
  content,
  fonts: customFonts = [],
}: AstroOgImageProps) {
  return {
    name: 'astro-og-image',
    hooks: {
      // "astro:config:setup": console.log,
      // "astro:config:done": console.log,
      // "astro:server:setup": console.log,
      // "astro:server:start": console.log,
      // "astro:server:done": console.log,
      // "astro:build:start": console.log,
      // "astro:build:setup": console.log,
      // "astro:build:generated": console.log,
      // "astro:build:ssr": console.log,
      'astro:build:done': async (opt) => {
        async function toBase64(path: string) {
          const buffer = await readFile(path);
          const base64 = (await sharp(buffer).png().toBuffer()).toString(
            'base64',
          );
          return `data:image/png;base64,${base64}`;
        }

        const markdownPaths = await glob(content);
        const brandBase64 = await toBase64(brand);
        const faviconBase64 = await toBase64(favicon);

        const pages = await Promise.all(
          opt.pages.map(async ({ pathname }) => {
            try {
              const path = join(opt.dir.pathname, pathname);
              const route = `/${pathname.slice(0, -1)}`;
              const markdownPath =
                markdownPaths.find((md) => md.match(route)) ?? ``;
              const file = await readFile(markdownPath, { encoding: `utf8` });
              const { attributes } = frontmatter<any>(file);

              const iconDir = attributes?.icon
                ? attributes?.icon.replace('@', join(__dirname, 'src'))
                : null;

              return {
                ...attributes,
                path,
                icon: iconDir
                  ? await toBase64(iconDir)
                  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
              };
            } catch {
              return;
            }
          }),
        );

        const fonts = await Promise.all(
          customFonts.map(async ({ src, ...rest }) => {
            const data = await readFile(src);
            return { data, ...rest };
          }),
        );

        await Promise.all(
          pages
            .filter(Boolean)
            .map(async ({ tag = `Vinícius Victorino`, title, icon, path }) => {
              const markup = html`
                <div
                  tw="
                    flex
                    w-full
                    h-full
                    bg-dracula-background
                  "
                >
                  <div
                    tw="
                      flex
                      absolute
                      w-full
                      h-full
                      m-8
                    "
                    style="
                      filter:blur(72px);
                      background-image:linear-gradient( -45deg, transparent 50%, rgb(139, 232, 253) 50% );
                    "
                  ></div>
                  <div
                    tw="
                      flex
                      justify-between
                      p-16
                      w-full
                      h-full
                    "
                  >
                    <div
                      tw="
                        absolute
                        bottom-8
                        left-8
                        flex
                        flex-col
                        p-8
                        w-2/3
                        h-full
                        rounded-lg
                        bg-dracula-background
                      "
                    ></div>
                    <div
                      tw="
                        flex
                        flex-col
                        items-start
                        p-16
                        w-2/3
                        rounded-lg
                        bg-white
                        border-2
                        border-dracula-darkest
                      "
                    >
                      <div
                        tw="
                        flex
                        flex-col
                        flex-grow
                        items-start
                        "
                      >
                        <strong
                          tw="
                          flex
                          items-center
                          justify-center
                          py-2
                          px-4
                          border-2
                          border-dracula-darkest
                          rounded-full
                          text-sm
                        "
                        >
                          ${tag}
                        </strong>
                        <h1 tw="text-6xl text-dracula-darkest">${title}</h1>
                      </div>
                      <div tw="flex justify-end w-full pt-8">
                        <img height="100" src="${icon}" />
                      </div>
                    </div>
                    <div tw="flex items-end relative -bottom-30">
                      <img width="350" src="${brandBase64}" />
                    </div>
                  </div>
                </div>
              `;

              const svg = await satori(markup, {
                width: 1200,
                height: 600,
                fonts,
                tailwindConfig: {
                  theme: {
                    extend: {
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
                    },
                  },
                },
              });

              const png = await sharp(Buffer.from(svg)).png().toBuffer();
              const fileName = join(path, `og-image.png`);
              if (existsSync(path)) writeFileSync(fileName, png);
            }),
        );

        await Promise.all(
          [48, 192, 512].map(async (size) => {
            const faviconSvg = await satori(
              html`
                <div tw="w-full h-full flex justify-center items-center">
                  <img height="100%" width="100%" src="${faviconBase64}" />
                </div>
              `,
              {
                width: size,
                height: size,
                fonts,
              },
            );

            const suffix = size !== 48 ? `-${size}x${size}` : '';
            const png = await sharp(Buffer.from(faviconSvg)).png().toBuffer();
            const fileName = join(opt.dir.pathname, `favicon${suffix}.png`);
            writeFileSync(fileName, png);
          }),
        );
      },
    },
  } satisfies AstroIntegration;
}
