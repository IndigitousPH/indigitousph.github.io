import { getCollection, getEntry, type CollectionEntry, type CollectionKey } from 'astro:content';

export type Entry<C extends CollectionKey> = CollectionEntry<C>;

/** All entries of a collection; `id` is the file name without extension (the URL slug). */
export async function getAll<C extends CollectionKey>(collection: C): Promise<Entry<C>[]> {
  return (await getCollection(collection)) as Entry<C>[];
}

export const byDateDesc = <T extends { data: { date: Date } }>(a: T, b: T) =>
  b.data.date.getTime() - a.data.date.getTime();

export const byDateAsc = <T extends { data: { date: Date } }>(a: T, b: T) =>
  a.data.date.getTime() - b.data.date.getTime();

export const byOrder = <T extends { data: { order: number } }>(a: T, b: T) =>
  a.data.order - b.data.order;

/** True while an event (or announcement) has not ended yet, at build time. */
export const isActive = (endDate: Date, now = new Date()) => endDate.getTime() > now.getTime();

/** Events that have not ended, soonest first. */
export async function getUpcomingEvents() {
  return (await getAll('events')).filter((e) => isActive(e.data.endDate)).sort(byDateAsc);
}

/** The next featured event, if any (powers EventFeature, EventHero and the countdown). */
export async function getFeaturedEvent() {
  const upcoming = await getUpcomingEvents();
  return upcoming.find((e) => e.data.featured) ?? undefined;
}

/** Typed access to src/content/site/site.json entries. */
export async function getSite<K extends 'announcement' | 'prayer' | 'prayerFocus'>(id: K) {
  const entry = await getEntry('site', id);
  if (!entry) throw new Error(`Missing "${id}" in src/content/site/site.json`);
  return entry.data as Extract<Entry<'site'>['data'], { id: K }>;
}
