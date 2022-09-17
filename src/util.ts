export function getLanguageFromURL(pathname: string) {
  const { lang, country }: any = {
    ...(/^\/(?<lang>\w+)/.exec(pathname)?.groups ?? {}),
    ...(/^\/(?<lang>\w+)-(?<country>\w+)/.exec(pathname)?.groups ?? {}),
  };

  return lang || country ? (country ? `${lang}-${country}` : lang) : 'en';
}
