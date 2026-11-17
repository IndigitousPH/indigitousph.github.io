import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';
import type { Lang } from '@/i18n';

export type Localized<C extends CollectionKey> = CollectionEntry<C> & { slug: string };

/**
 * Entries for a language. English is the source of truth; a Filipino file with the
 * same slug replaces it on /fil pages, otherwise the English entry is used.
 */
export async function getLocalized<C extends CollectionKey>(
  collection: C,
  lang: Lang,
): Promise<Localized<C>[]> {
  const all = (await getCollection(collection)) as CollectionEntry<C>[];
  const bySlug = new Map<string, Localized<C>>();
  for (const pass of lang === 'en' ? ['en'] : ['en', lang]) {
    for (const entry of all) {
      const [entryLang, ...rest] = entry.id.split('/');
      if (entryLang !== pass) continue;
      const slug = rest.join('/');
      bySlug.set(slug, { ...entry, slug });
    }
  }
  return [...bySlug.values()];
}

export const byDateDesc = <T extends { data: { date: Date } }>(a: T, b: T) =>
  b.data.date.getTime() - a.data.date.getTime();

export const byDateAsc = <T extends { data: { date: Date } }>(a: T, b: T) =>
  a.data.date.getTime() - b.data.date.getTime();

export const byOrder = <T extends { data: { order: number } }>(a: T, b: T) =>
  a.data.order - b.data.order;

export function isUpcoming(date: Date, now = new Date()) {
  return date.getTime() >= now.getTime() - 24 * 60 * 60 * 1000;
}
