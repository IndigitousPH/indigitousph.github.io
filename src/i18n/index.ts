import { en, type UIKey } from './en';

/**
 * The site is English-only for now (with small Filipino touches in the copy).
 * Short reusable UI strings live in en.ts so a Filipino version can be added later
 * by adding fil.ts and routing.
 */
export const languages = { en: 'English' } as const;
export type Lang = keyof typeof languages;
export const htmlLang = 'en-PH';

export const t = (key: UIKey) => en[key];

const TZ = 'Asia/Manila';

export function formatDate(date: Date, opts?: Intl.DateTimeFormatOptions) {
  return date.toLocaleDateString(htmlLang, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: TZ,
    ...opts,
  });
}

export function formatTime(date: Date) {
  return date.toLocaleTimeString(htmlLang, { hour: 'numeric', minute: '2-digit', timeZone: TZ });
}

/** "Nov 20, 5 PM to Nov 21, 5 PM" */
export function formatRange(start: Date, end: Date) {
  const day = (d: Date) => formatDate(d, { year: undefined, month: 'short', day: 'numeric' });
  const time = (d: Date) => formatTime(d).replace(':00', '');
  return `${day(start)}, ${time(start)} to ${day(end)}, ${time(end)}`;
}
