export const TRANSLATIONS = {
  en: {
    HEADER_MENU_ITEM_HOME: `Home`,
    HEADER_MENU_ITEM_POSTS: `Posts`,
    HEADER_MENU_ITEM_ABOUT: `About`,
    HEADER_MENU_ITEM_TOGGLE_THEME: `Theme`,
    HEADER_MENU_ITEM_TOGGLE_THEME_DARK_ALT: `Dark`,
    HEADER_MENU_ITEM_TOGGLE_THEME_LIGHT_ALT: `Light`,
    HOME_HERO_H1: `Welcome to my personal website!`,
    HOME_HERO_H2: `Here I talk about my experiences and technologies, that I'm passionate about.`,
    HOME_HERO_BUTTON_PRIMARY: `My posts`,
    HOME_HERO_BUTTON_SECONDARY: `About me`,
    HOME_HERO_IMAGE_ALT: `Me as a Rick and Morty Character`,
    HOME_POSTS_TITLE: `Last Published Posts`,
    HOME_CATEGORY_TITLE: `By Category`,
    POST_PREVIEW_LINK: `Continue reading`,
    404: `Page not found`,
  },
  "pt-BR": {
    HEADER_MENU_ITEM_HOME: `Início`,
    HEADER_MENU_ITEM_POSTS: `Postagens`,
    HEADER_MENU_ITEM_ABOUT: `Sobre`,
    HEADER_MENU_ITEM_TOGGLE_THEME: `Tema`,
    HEADER_MENU_ITEM_TOGGLE_THEME_DARK_ALT: `Escuro`,
    HEADER_MENU_ITEM_TOGGLE_THEME_LIGHT_ALT: `Claro`,
    HOME_HERO_H1: `Bem vindo ao meu site pessoal!`,
    HOME_HERO_H2: `Aqui eu falo sobre minhas experiências e as tecnologias que sou apaixonado.`,
    HOME_HERO_BUTTON_PRIMARY: `Minhas postagens`,
    HOME_HERO_BUTTON_SECONDARY: `Sobre mim`,
    HOME_HERO_IMAGE_ALT: `Eu como um personagem de Rick and Morty`,
    HOME_POSTS_TITLE: `Posts publicados recentemente`,
    HOME_CATEGORY_TITLE: `Por categoria`,
    POST_PREVIEW_LINK: `Continue lendo`,
    404: `Página não encontrada`,
  },
};

type Translations = typeof TRANSLATIONS;
type TranslationsKeys = keyof Translations;
export type TranslationsOptions = keyof Translations[TranslationsKeys];

export const KNOWN_LANGUAGES = Object.keys(TRANSLATIONS);
