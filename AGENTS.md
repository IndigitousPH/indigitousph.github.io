# AGENTS.md — Indigitous Philippines website

Read this file before you change anything. It applies to human contributors and to AI coding agents (Cursor, Codex, Copilot and others).

The source of truth for structure and copy is the team's **Wireframe & Copy Deck** (Nov 4, 2026). When the deck and the code disagree, follow the deck, or ask.

## What this is

This is the static website for **Indigitous Philippines**: a movement of Filipino believers using their gifts for missions in a digital age. It is part of the global [Indigitous](https://indigitous.org) movement. The name joins _indigenous_ (locally rooted, culturally adapted) and _digital_ (the tools and spaces where people now gather).

- Live: https://indigitousph.github.io (GitHub Pages)
- Language: English, with small Filipino touches. Helpers in `src/i18n/` keep the door open for Filipino later.
- Component showcase: `/storybook`

## Stack

- **Astro 7**, static output. There is no UI framework, and pages ship almost zero JS.
- **Tailwind CSS 4** via `@tailwindcss/vite`. Design tokens live in `src/styles/global.css` (`@theme`).
- **TypeScript** in strict mode. Path alias `@/*` points to `src/*`.
- **Content collections** (Markdown + Zod schemas). A missing date or broken link fails the build instead of the live site.
- **pnpm**, Node 22+.

## Commands

```bash
pnpm install       # install
pnpm dev           # dev server → http://localhost:4321
pnpm check         # astro check (types + content schemas)
pnpm build         # check + production build → dist/
pnpm preview       # serve dist/
pnpm preview:cf    # serve dist/ in the local Cloudflare Workers runtime (wrangler dev)
pnpm deploy:cf     # build + deploy to Cloudflare Workers (needs `wrangler login`)
pnpm format        # prettier
```

Run `pnpm build` before you call a change done. It must finish with **0 errors**. Test at **360px** wide, since most visitors arrive from Facebook or Messenger on a phone.

## Site map (from the deck)

| Page                  | URL                                  | Primary call to action                                |
| --------------------- | ------------------------------------ | ----------------------------------------------------- |
| Home                  | `/`                                  | Join a local network                                  |
| About                 | `/about`                             | Meet the team (`/about#team`)                         |
| Local Networks        | `/networks`                          | Find your local network (interest form at `#connect`) |
| #HACK                 | `/hack`                              | Register for the next #HACK                           |
| Pray & Online Workers | `/pray`                              | Join the prayer time                                  |
| Stories               | `/stories`, `/stories/[slug]`        | Read a story                                          |
| Partner & Give        | `/partner`                           | Partner with us                                       |
| Contact               | `/contact`                           | Send a message                                        |
| _Footer only_         | `/events`, `/projects`, `/resources` | Not in the deck; kept as extras                       |

- **Header:** Home · About · Local Networks · #HACK · Pray · Stories, plus a **Partner with us** button.
- **Footer:** Brand / Explore / Get involved / Stay connected, with the newsletter.
- **Old URLs** from the first version (including the retired `/fil/` pages) redirect via `redirects` in `astro.config.mjs`.

## Folder map

```
src/
  components/
    ui/        Button, Field, Choices, PillTag, SwitchTabs, Icon, Logo, Placeholder,
               Countdown, AnnouncementBar
    cards/     EventCard, NetworkCard, StoryCard, ProjectCard, TeamCard
    sections/  one file per block named in the deck (see table below)
    forms/     FormShell, InterestForm, PrayerForm, ContactForm
    layout/    Header, Footer
    */X.stories.ts   ← story for X.astro, rendered on /storybook
  config/site.ts     nav, socials, external links, form endpoints (edit links HERE)
  content/
    events/          #HACK and other events (date, endDate, venue, fee, register link)
    networks/        one file per local network
    stories/         Markdown stories (category: hack | networks | prayer | testimonies)
    challenges/      #HACK challenges (see _example.md)
    team/            team members
    projects/        projects (footer-only page)
    site/site.json   announcement bar, prayer time, monthly prayer focus
  content.config.ts  collection schemas
  i18n/              en.ts (short UI strings) + helpers (t, formatDate, formatRange)
  layouts/BaseLayout.astro   <head>, SEO, announcement, header, footer, shared scripts
  lib/content.ts     getAll, getFeaturedEvent, getSite, sort helpers
  pages/             one file per page; page copy sits in a `copy` object at the top
  styles/global.css  Tailwind import + brand tokens
public/              favicon, OG image, robots.txt, images
```

## Deck block → component

| Deck name                                    | Component                                                                             |
| -------------------------------------------- | ------------------------------------------------------------------------------------- |
| Header / Footer / AnnouncementBar            | `layout/Header`, `layout/Footer`, `ui/AnnouncementBar`                                |
| Hero / PageHero / EventHero                  | `sections/Hero`, `sections/PageHero`, `sections/EventHero` (+ `ui/Countdown`)         |
| Intro                                        | `sections/Intro`                                                                      |
| Pillars / IconList                           | `sections/FeatureGrid` (`variant="cards"` / `"plain"`)                                |
| EventFeature / EventDetails                  | `sections/EventFeature`, `sections/EventDetails`                                      |
| Gifts / StoryCards                           | `sections/Gifts`, `sections/StoryCards`                                               |
| CTABand / StartBand / GlobalBand             | `sections/CTABand`, `sections/StartBand`, `sections/GlobalBand`                       |
| SplitText / Timeline / Beliefs               | `sections/SplitText`, `sections/Timeline`, `sections/Beliefs`                         |
| TeamGrid                                     | `cards/TeamCard` in a grid on `/about`                                                |
| NetworkCards                                 | `cards/NetworkCard` in a grid on `/networks`                                          |
| Steps / ChallengeCards / Gallery / Accordion | `sections/Steps`, `sections/ChallengeCards`, `sections/Gallery`, `sections/Accordion` |
| PrayerFocus                                  | `sections/PrayerFocus`                                                                |
| InterestForm / PrayerForm / Contact form     | `forms/InterestForm`, `forms/PrayerForm`, `forms/ContactForm`                         |

## Core conventions (follow these)

1. **Encapsulate what varies.** Event dates, prayer times, the announcement and links change often. Keep them in `src/content/` or `src/config/site.ts`, never hard-coded in components.
2. **One job per component.** Each deck block is one component with typed `Props`, reused across pages. Before you add a new component, check whether an existing one does the job with a prop.
3. **Every component has a `*.stories.ts` file** next to it, and its variants show on `/storybook`. Components take plain props, not collection entries, so they can be demoed.
4. **Page copy lives at the top of each page** in a `copy` object. Short reusable UI strings (nav labels, buttons) go in `src/i18n/en.ts`.
5. **Events auto-expire.**
   - `getFeaturedEvent()` only returns events whose `endDate` is in the future.
   - Time-limited elements carry `data-hide-after` (use `Section`'s `hideAfter` prop), so the browser removes them even when the build is stale.
   - CI rebuilds daily.
6. **Use design tokens only.** Use `bg-brand-orange`, `text-ink`, `rounded-pill` and the other tokens. Don't use raw hex or arbitrary colors in components.
7. **Keep JavaScript minimal.** Only the countdown, the mobile menu, the story/event filters, form submit and the announcement dismiss use JS. The accordion is `<details>`.
8. **Accessibility.**
   - White text sits on `brand-orange-dark` (#C93A16), never on `brand-orange`.
   - Gradient and yellow surfaces use `ink` text.
   - Every photo needs `alt`. Use real `<button>`s and `<label>`s, and one `<h1>` per page.

## Voice and messaging (from the deck)

- **Positioning:** Indigitous Philippines is a movement of Filipino believers using their gifts for missions in a digital age.
- **Big idea:** God's mission has not changed. Where people gather has. Our world in the digital space is a mission field, and every gift has a place in it.
- **Tagline:** _Locally rooted. Digitally sent._
- **Sound like** a warm friend inviting you to the table, not a tech company selling a product. Lead with people and with Jesus; mention tools only as the means.

| Say                                             | Instead of           |
| ----------------------------------------------- | -------------------- |
| missions in a digital age                       | digital missions     |
| our world in the digital space                  | technology, tech     |
| local network (e.g. Indigitous Iloilo)          | community, chapter   |
| believers who serve online                      | digital missionaries |
| creatives, builders, storytellers, intercessors | techies, coders      |
| join, belong, serve                             | sign up, subscribe   |

- Use warm, hopeful, plain English: short sentences, easy to read aloud. Write to "you" and speak as "we".
- Filipino touches are welcome in small doses ("Tara!", "Kumusta?", "Salamat!"), never in the main headline.
- Use Scripture sparingly and always cite it, with at most one verse per page.
- Don't use jargon like "hackathon" without a one-line explanation the first time it appears on a page.

## Brand

The Indigitous global palette and fonts (from indigitous.org and the #HACK Brand Guidelines v.02.2026):

| Token               | Hex               | Use                                           |
| ------------------- | ----------------- | --------------------------------------------- |
| `brand-orange`      | #EF4E25           | Brand, gradients, decoration                  |
| `brand-orange-dark` | #C93A16           | Buttons and links with white text or on white |
| `brand-yellow`      | #EFE974           | Highlights, pills, the announcement bar       |
| `brand-pink`        | #F43F5E           | Small accents only                            |
| `ink` / `ink-2`     | #131313 / #262626 | Text, dark sections                           |
| `stone` / `mist`    | #D9D9D6 / #EFEFEF | Borders / light sections                      |

- **Type:** Noto Sans for text, Noto Sans Mono for buttons, labels and numbers.
- **Shape:** `rounded-pill` (40px), `rounded-card` (32px), `rounded-tile` (24px).

## Recipes

**Change the announcement bar:** edit the `announcement` entry in `src/content/site/site.json`. It hides itself after `endDate`; set `enabled: false` to turn it off.

**Add an event:**

1. Create `src/content/events/<slug>.md`. The required fields are `title`, `date`, `endDate`, `venue`, `city` and `summary`.
2. Set `featured: true` to show it on the home page and drive the #HACK countdown.

**Add a local network:** create `src/content/networks/<city>.md` (`city`, `region`, `description`, `meets`, `contactUrl`, `order`).

**Publish a #HACK challenge:** copy `src/content/challenges/_example.md` to a new file without the leading underscore.

**Update the prayer time:** fill in `day`, `time` (24h, Manila), `weekday` (MO–SU), `platform` and `link` in the `prayer` entry of `site.json`. The "Add it to my calendar" link appears automatically.

**Add a story:** create `src/content/stories/<slug>.md` with `title`, `date`, `author`, `summary` and `category`.

**Add a page:**

1. Create `src/pages/<name>.astro` with a `copy` object, `<BaseLayout title=…>`, and `Section` blocks built from existing components.
2. Add it to `mainNav` or a footer list in `src/config/site.ts`, with its label in `src/i18n/en.ts`.

**Add a component:**

1. Create `src/components/<folder>/Name.astro` with a typed `Props` interface and a doc comment.
2. Create `Name.stories.ts` next to it.
3. Check it on `/storybook`.

**Add an icon:** add an SVG path to `icons` in `src/components/ui/Icon.astro` (Lucide style, 24×24 stroke).

## Forms

- **Endpoints:** forms post to a form service (Formspree, Web3Forms and so on). Set these as GitHub repository variables (see `.env.example`):
  - `PUBLIC_FORM_ENDPOINT` for the contact and network interest forms
  - `PUBLIC_PRAYER_ENDPOINT` for prayer requests, which must go to a **private** prayer-team inbox
  - `PUBLIC_NEWSLETTER_ENDPOINT` for the footer newsletter
- **Fallback:** when an endpoint is unset, the form shows contact links instead.
- **Payments:** never collect payments on this site.

## Deploy

`.github/workflows/deploy.yml` builds on every PR and deploys to GitHub Pages on every push to `main`. It also runs daily at 00:05 Manila time so events expire on schedule.

The same `dist/` can also be served by **Cloudflare Workers** as static assets (no Worker script, no adapter). `wrangler.jsonc` points at `dist/`:

- The Worker is called `indigitous` and is connected to this repo through Cloudflare's Git integration (Workers Builds). Build command `pnpm run build`, deploy command `npx wrangler deploy`. The `name` in `wrangler.jsonc` must match the Worker's name in the dashboard.
- Workers Builds deploys on push but does not rebuild daily, so events and announcements can linger until the next push. `.github/workflows/deploy-cloudflare.yml` covers that: it deploys on every push to `main` and daily, like the Pages workflow. It stays off until you set the repository variable `CLOUDFLARE_ACCOUNT_ID` and the secret `CLOUDFLARE_API_TOKEN` (token template "Edit Cloudflare Workers").
- Set the variable `CLOUDFLARE_SITE_URL` (e.g. your custom domain) so canonical links, the sitemap and `robots.txt` point at the Workers host. The build reads it as `SITE_URL`; unset, it falls back to the GitHub Pages URL. For Workers Builds, set `SITE_URL` as a build variable in the Worker's settings.
- Old URLs get real 301s on Workers: the build writes `dist/_redirects` from `redirects` in `astro.config.mjs`. Cache and security headers live in `public/_headers`. GitHub Pages ignores both files.
- For a custom domain, add a `routes` entry in `wrangler.jsonc` (see the comment there).

## Open questions from the deck (needed to replace placeholders)

- [ ] Final tagline. "Locally rooted. Digitally sent." is in use for now.
- [ ] The year Indigitous PH started, and key milestones (`src/pages/about.astro`).
- [ ] Other local networks besides Iloilo, and how often each meets. Manila is listed on indigitous.org and kept as a placeholder.
- [ ] Prayer time: day, time and platform link (`site.json`).
- [ ] Online workers ministry: rhythm and how people join.
- [ ] Team members, roles, "I serve because…" lines and photos. The current entries are placeholders.
- [ ] Legal or ministry covering, giving channels (GCash, bank, platform), receipt email and a trust line (`/partner`).
- [ ] Contact email and PH social handles (`src/config/site.ts`).
- [ ] #HACK for Christmas: age range, what the ₱200 covers, and FAQ answers (including "Do I need to stay the whole 24 hours?").
- [ ] Domain name.
- [ ] Form endpoints.

## Brand assets checklist (from the deck)

- **Must have to launch:**
  - The Indigitous Philippines logo lockup (SVG and PNG, colour, white and black, horizontal and stacked), and a square mark.
  - 5–10 real event photos with consent.
  - #HACK key art.
  - A 1200×630 OG image (the current `public/og-default.svg` is a stand-in).
- **Helpful:**
  - Consistent icons.
  - A pattern inspired by local textiles (e.g. patadyong).
  - Team headshots.
  - Short videos.
  - Partner logos.
  - A simple Philippines map for the network directory.
