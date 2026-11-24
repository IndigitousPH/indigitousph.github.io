// @ts-check
import { writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Old URLs from the first version of the site (incl. the retired /fil/ mirror).
 * The build is static, so each one becomes a small meta-refresh page
 * (and, on Cloudflare Workers, a real 301 via dist/_redirects; see below).
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

/**
 * Cloudflare Workers reads dist/_redirects and answers with a real 301 before the
 * meta-refresh page is reached. GitHub Pages ignores the file.
 * @returns {import('astro').AstroIntegration}
 */
function cloudflareRedirects() {
  return {
    name: 'cloudflare-redirects',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const lines = Object.entries(redirects).map(([from, to]) => `${from} ${to} 301`);
        await writeFile(new URL('_redirects', dir), `${lines.join('\n')}\n`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  // Canonical URLs, the sitemap and robots.txt use this. Set SITE_URL when deploying
  // somewhere else (e.g. a Cloudflare Workers custom domain).
  site: process.env.SITE_URL || 'https://indigitousph.github.io',
  redirects,
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.includes('/storybook') }),
    cloudflareRedirects(),
  ],
  vite: { plugins: [tailwindcss()] },
});
