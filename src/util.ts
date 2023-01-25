import type { MarkdownInstance } from 'astro';

export function getLanguageFromURL(pathname: string) {
  const { lang, country }: any = {
    ...(/^\/(?<lang>\w+)/.exec(pathname)?.groups ?? {}),
    ...(/^\/(?<lang>\w+)-(?<country>\w+)/.exec(pathname)?.groups ?? {}),
  };

  return lang || country ? (country ? `${lang}-${country}` : lang) : 'en';
}

export const groupPagesByLang = <
  T extends MarkdownInstance<Record<string, unknown>>,
>(
  pages: T[],
) =>
  pages.reduce((pages, page) => {
    const lang = page.url.split('/')[1];
    if (!pages[lang]) pages[lang] = [];
    pages[lang].push(page);
    return pages;
  }, {} as { [lang: string]: T[] });
