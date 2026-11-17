import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Content lives in src/content/<collection>/<lang>/<slug>.md(x).
 * English (en) is required; a Filipino (fil) file with the same slug overrides it on /fil pages.
 * Set `placeholder: true` on sample content so it is labelled on the site.
 */
const base = '**/*.{md,mdx}';
const placeholder = z.boolean().default(false);
const image = z.string().optional(); // path under /public, e.g. "/images/events/hack.jpg"

const events = defineCollection({
  loader: glob({ pattern: base, base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    online: z.boolean().default(false),
    summary: z.string(),
    image,
    registerUrl: z.url().optional(),
    tags: z.array(z.string()).default([]),
    placeholder,
  }),
});

const communities = defineCollection({
  loader: glob({ pattern: base, base: './src/content/communities' }),
  schema: z.object({
    name: z.string(),
    region: z.string(),
    summary: z.string(),
    meets: z.string().optional(),
    image,
    contactUrl: z.string().optional(),
    order: z.number().default(99),
    placeholder,
  }),
});

export const projectTypes = ['app', 'web', 'content', 'game', 'research'] as const;

const projects = defineCollection({
  loader: glob({ pattern: base, base: './src/content/projects' }),
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

const stories = defineCollection({
  loader: glob({ pattern: base, base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    image,
    placeholder,
  }),
});

const team = defineCollection({
  loader: glob({ pattern: base, base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    community: z.string().optional(),
    photo: image,
    order: z.number().default(99),
    placeholder,
  }),
});

export const collections = { events, communities, projects, stories, team };
