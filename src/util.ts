import type { MarkdownHeading, MarkdownInstance } from 'astro';

import { TRANSLATIONS } from './consts';

export const translateBreadcrumbs = (lang: string, value: string) =>
  lang !== 'en'
    ? {
        home: `Início`,
        posts: `Postagens`,
        about: `Sobre`,
        'library-creation': `Criação de Biblioteca`,
      }[value] ?? value
    : value;

export function getLanguageFromURL(pathname: string) {
  const { lang, country }: Record<string, string> = {
    ...(/^\/(?<lang>\w+)/.exec(pathname)?.groups ?? {}),
    ...(/^\/(?<lang>\w+)-(?<country>\w+)/.exec(pathname)?.groups ?? {}),
  };

  return (
    lang || country ? (country ? `${lang}-${country}` : lang) : 'en'
  ) as TranslationsLangs;
}

type Translations = typeof TRANSLATIONS;
type TranslationsLangs = keyof Translations;
type TranslationsKeys = keyof Translations[TranslationsLangs];

export function getTranslation(lang: string, key: TranslationsKeys) {
  return (
    TRANSLATIONS?.[lang as TranslationsLangs]?.[key] || TRANSLATIONS.en?.[key]
  );
}

export type NestedHeading = Partial<
  MarkdownHeading & {
    children: NestedHeading[];
  }
>;

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
    parent.children?.push(node);
    stack.push(node);
  }

  return root?.children as any;
}

export const groupPagesByLang = <
  T extends MarkdownInstance<Record<string, unknown>>,
>(
  pages: T[],
) =>
  pages.reduce(
    (pages, page) => {
      const lang = page.url.split('/')[1];
      if (!pages[lang]) pages[lang] = [];
      pages[lang].push(page);
      return pages;
    },
    {} as { [lang: string]: T[] },
  );

export function addAstroEventListener(
  el: Element,
  type: string,
  cb: (...args: any) => any,
) {
  const registerEvent = () => {
    el.removeEventListener(type, cb);
    el.addEventListener(type, cb);
  };

  registerEvent();
  document.addEventListener('astro:after-swap', registerEvent);
  document.addEventListener('astro:page-load', registerEvent);
}
