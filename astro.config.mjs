// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Old URLs from the first version of the site (incl. the retired /fil/ mirror).
 * GitHub Pages is static, so each one becomes a small meta-refresh page.
 */
const moved = {
  '/communities': '/networks',
  '/communities/manila': '/networks',
  '/communities/iloilo': '/networks',
  '/about/team': '/about#team',
  '/give': '/partner',
  '/get-involved': '/partner',
  '/start-here': '/networks',
  '/events/coffee-talk-faith-and-ai': '/events',
  '/events/hack2026-manila': '/events',
  '/events/hack2027-champion-info-session': '/events',
  '/events/iloilo-creatives-meetup': '/events',
  '/stories/what-happened-at-hack2026': '/stories/what-happens-at-a-hack',
};
const filPages = [
  '',
  'about',
  'about/team',
  'start-here',
  'hack',
  'events',
  'communities',
  'communities/manila',
  'communities/iloilo',
  'projects',
  'projects/bible-in-your-dialect',
  'projects/church-website-kit',
  'projects/ofw-stories',
  'stories',
  'stories/why-indigitous-philippines',
  'stories/what-happened-at-hack2026',
  'stories/getting-started-as-a-creative',
  'resources',
  'get-involved',
  'give',
  'contact',
];
/** @type {Record<string, string>} */
const redirects = { ...moved };
for (const p of filPages) {
  const en = `/${p}`.replace(/\/$/, '') || '/';
  redirects[`/fil${p ? `/${p}` : ''}`] = moved[/** @type {keyof typeof moved} */ (en)] ?? en;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://indigitousph.github.io',
  redirects,
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/storybook') })],
  vite: { plugins: [tailwindcss()] },
});
