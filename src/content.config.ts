import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Everything that changes often lives here, not in components ("encapsulate what varies").
 * Markdown collections: src/content/<collection>/<slug>.md(x)
 * Site settings: src/content/site/site.json
 * Set `placeholder: true` on sample entries so they are labelled on the site.
 */
const md = '**/*.{md,mdx}';
const placeholder = z.boolean().default(false);
const image = z.string().optional(); // path under /public, e.g. "/images/hack-iloilo.jpg"

const events = defineCollection({
  loader: glob({ pattern: md, base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** Events disappear from the site once this passes. */
    endDate: z.coerce.date(),
    venue: z.string(),
    city: z.string(),
    online: z.boolean().default(false),
    fee: z.string().optional(),
    who: z.string().optional(),
    bring: z.string().optional(),
    summary: z.string(),
    registerUrl: z.url().optional(),
    registerLabel: z.string().optional(),
    /** Google Maps embed URL for the venue. */
    mapEmbed: z.url().optional(),
    image,
    tags: z.array(z.string()).default([]),
    /** Feature on the home page and #HACK hero while it is the next event. */
    featured: z.boolean().default(false),
    placeholder,
  }),
});

const networks = defineCollection({
  loader: glob({ pattern: md, base: './src/content/networks' }),
  schema: z.object({
    city: z.string(),
    region: z.string(),
    description: z.string(),
    meets: z.string().optional(),
    contactUrl: z.string().optional(),
    image,
    order: z.number().default(99),
    placeholder,
  }),
});

export const projectTypes = ['app', 'web', 'content', 'game', 'research'] as const;

const projects = defineCollection({
  loader: glob({ pattern: md, base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(projectTypes),
    summary: z.string(),
    year: z.number(),
    status: z.enum(['idea', 'building', 'live']).default('building'),
    url: z.url().optional(),
    repo: z.url().optional(),
    image,
    placeholder,
  }),
});

export const storyCategories = {
  hack: '#HACK',
  networks: 'Local Networks',
  prayer: 'Prayer',
  testimonies: 'Testimonies',
} as const;
export type StoryCategory = keyof typeof storyCategories;

const stories = defineCollection({
  loader: glob({ pattern: md, base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    summary: z.string(),
    category: z.enum(['hack', 'networks', 'prayer', 'testimonies']),
    image,
    placeholder,
  }),
});

const challenges = defineCollection({
  loader: glob({ pattern: md, base: './src/content/challenges' }),
  schema: z.object({
    tag: z.string(),
    problem: z.string(),
    partner: z.string(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: md, base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    serveBecause: z.string().optional(),
    photo: image,
    order: z.number().default(99),
    placeholder,
  }),
});

/** Small editable settings: announcement bar, prayer time, monthly prayer focus. */
const site = defineCollection({
  loader: file('./src/content/site/site.json'),
  schema: z.discriminatedUnion('id', [
    z.object({
      id: z.literal('announcement'),
      enabled: z.boolean(),
      text: z.string(),
      linkText: z.string().optional(),
      href: z.string().optional(),
      /** Hidden after this moment. */
      endDate: z.coerce.date(),
    }),
    z.object({
      id: z.literal('prayer'),
      /** e.g. "Every Thursday". Leave out until confirmed. */
      day: z.string().optional(),
      /** 24h Manila time, e.g. "20:00". */
      time: z.string().optional(),
      durationMinutes: z.number().default(60),
      /** Weekday for the calendar file. */
      weekday: z.enum(['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']).optional(),
      platform: z.string().optional(),
      link: z.string().optional(),
    }),
    z.object({
      id: z.literal('prayerFocus'),
      points: z.array(z.string()).length(3),
      guidePdf: z.string().optional(),
    }),
  ]),
});

export const collections = { events, networks, projects, stories, challenges, team, site };
