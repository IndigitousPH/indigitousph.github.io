import { en, type UIKey } from './en';
import { fil } from './fil';

export const languages = { en: 'English', fil: 'Filipino' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const htmlLang: Record<Lang, string> = { en: 'en-PH', fil: 'fil-PH' };

const dictionaries: Record<Lang, Record<UIKey, string>> = { en, fil };

/** `const t = useTranslations(lang); t('nav.about')` */
export function useTranslations(lang: Lang) {
  return (key: UIKey) => dictionaries[lang][key] ?? en[key];
}

/** Language of the current URL. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'fil' ? 'fil' : 'en';
}

/** Turn a language-neutral path ("/about") into a localized one ("/fil/about"). */
export function localizePath(path: string, lang: Lang): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Strip the language prefix from a pathname. */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/fil(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Same page in another language. */
export function switchLangPath(pathname: string, target: Lang): string {
  return localizePath(stripLang(pathname), target);
}

/** Pick a value from a `{ en, fil }` copy object. */
export function pick<T>(copy: Record<Lang, T>, lang: Lang): T {
  return copy[lang] ?? copy[defaultLang];
}

export function formatDate(date: Date, lang: Lang, opts?: Intl.DateTimeFormatOptions) {
  return date.toLocaleDateString(htmlLang[lang], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'Asia/Manila',
    ...opts,
  });
}
