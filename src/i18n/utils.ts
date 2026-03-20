import en from '../locales/en.json';
import ja from '../locales/ja.json';
import es419 from '../locales/es-419.json';

const ui = {
  en,
  ja,
  'es-419': es419,
} as const;

export type Locale = keyof typeof ui;

// Type helper to flatten nested object keys
type FlattenKeys<T> = T extends object
  ? { [K in keyof T]: T[K] extends string ? `${K & string}` : `${K & string}.${FlattenKeys<T[K]> & string}` }[keyof T]
  : '';

type TranslationKey = FlattenKeys<typeof en>;

function flattenObject(obj: any, prefix = ''): Record<string, string> {
  return Object.keys(obj).reduce((acc: Record<string, string>, k: string) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
}

const flattenedUi: Record<Locale, Record<string, string>> = {
  en: flattenObject(en),
  ja: flattenObject(ja),
  'es-419': flattenObject(es419),
};

export function useTranslations(lang: Locale | undefined) {
  const safeLang = lang && lang in ui ? lang : 'en';
  const dictionary = flattenedUi[safeLang as Locale];
  const fallback = flattenedUi['en'];

  return function t(key: TranslationKey) {
    // Fallback to English if translation is missing
    return dictionary[key] || fallback[key] || key;
  };
}
