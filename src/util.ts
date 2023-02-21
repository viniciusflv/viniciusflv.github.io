import type { MarkdownHeading, MarkdownInstance } from 'astro';

import { TRANSLATIONS } from './consts';

export function getLanguageFromURL(pathname: string) {
  const { lang, country }: Record<string, string> = {
    ...(/^\/(?<lang>\w+)/.exec(pathname)?.groups ?? {}),
    ...(/^\/(?<lang>\w+)-(?<country>\w+)/.exec(pathname)?.groups ?? {}),
  };

  return lang || country ? (country ? `${lang}-${country}` : lang) : 'en';
}

type Translations = typeof TRANSLATIONS;
type TranslationsLangs = keyof Translations;
type TranslationsKeys = keyof Translations[TranslationsLangs];

export function getTranslation(lang: string, key: TranslationsKeys) {
  return TRANSLATIONS[lang as TranslationsLangs][key];
}

export type NestedHeading = MarkdownHeading & {
  children: NestedHeading[];
};

export function unflattenHeading(headings: MarkdownHeading[]): NestedHeading[] {
  let root: NestedHeading = { depth: 0, slug: '', text: '', children: [] };
  let stack: NestedHeading[] = [root];

  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    const node: NestedHeading = {
      depth: heading.depth,
      slug: heading.slug,
      text: heading.text,
      children: [],
    };

    while (stack.length > heading.depth) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];
    parent.children.push(node);
    stack.push(node);
  }

  return root.children;
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
