// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://indigitousph.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fil'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/storybook'),
      i18n: { defaultLocale: 'en', locales: { en: 'en-PH', fil: 'fil-PH' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
