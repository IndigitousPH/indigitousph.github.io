# AGENTS.md — Indigitous Philippines website

Read this file before you change anything. It applies to human contributors and to AI coding agents (Claude Code, Cursor, Codex, Copilot and others).

## What this is

This is the static website for **Indigitous Philippines**, the Philippine community of [Indigitous](https://indigitous.org). Indigitous is a global network (since 2013, partnered with Cru) helping followers of Jesus take the gospel to new people, places and spaces through tech and creativity. Its flagship program is **#HACK**, a faith-driven hackathon held every October.

- Live: https://indigitousph.github.io (GitHub Pages)
- Languages: English (`/`) and Filipino (`/fil/`)
- Component showcase: `/storybook`

## Stack

- **Astro 7**, static output. There's no UI framework, and pages ship almost zero JS.
- **Tailwind CSS 4** via `@tailwindcss/vite`. Design tokens live in `src/styles/global.css` (`@theme`).
- **TypeScript** in strict mode. Path alias `@/*` points to `src/*`.
- **Content collections** (Markdown/MDX + Zod schemas) for events, communities, projects, stories and team.
- **pnpm**, Node 22+.

## Commands

```bash
pnpm install       # install
pnpm dev           # dev server → http://localhost:4321
pnpm check         # astro check (types + content schemas)
pnpm build         # check + production build → dist/
pnpm preview       # serve dist/
pnpm format        # prettier
```

Run `pnpm build` before you call a change done. It must finish with **0 errors**.

## Folder map

```
src/
  components/
    ui/          Button, PillTag, SwitchTabs, Field, Icon, Logo, Placeholder
    cards/       EventCard, StoryCard, CommunityCard, ProjectCard, TeamCard, TestimonialCard
    sections/    Hero, PageHeader, Section, SectionHeading, CardGrid, StatsBand, CtaBand,
                 FeatureGrid, FAQ, NewsletterBand
    layout/      Header, Footer
    */X.stories.ts   ← story for X.astro, rendered on /storybook
  config/site.ts     nav, socials, external links (edit links HERE)
  content/<collection>/<lang>/<slug>.md(x)
  content.config.ts  collection schemas
  i18n/              en.ts, fil.ts (short UI strings), index.ts (helpers)
  layouts/BaseLayout.astro   <head>, SEO, header/footer
  lib/content.ts     getLocalized() + sort helpers
  lib/story.ts       Story type for *.stories.ts
  pages/             thin route files only (EN at root, FIL under pages/fil/)
  pages/storybook/   component showcase
  styles/global.css  Tailwind import + brand tokens
  views/             one file per page; holds the page's layout and copy
public/              favicon, OG image, robots.txt, static images
```

## Core conventions (follow these)

1. **Pages are written once, in `src/views/`.** Route files in `src/pages/` and `src/pages/fil/` only render a view with `lang="en"` or `lang="fil"`. Never put page markup in `src/pages/`.
2. **Every UI string is translated.**
   - Short reusable strings (nav, buttons, labels) go in `src/i18n/en.ts` and `fil.ts`. TypeScript fails the build if a key is missing from `fil.ts`.
   - Page copy goes in a `copy = pick({ en: {...}, fil: {...} }, lang)` object at the top of the view.
3. **Internal links go through `localizePath(path, lang)`.** Never hard-code `/fil/...`.
4. **Use design tokens only.** Use `bg-brand-orange`, `text-ink`, `rounded-pill`, `font-mono` and so on. Don't use raw hex values or arbitrary colors like `bg-[#ef4e25]` in components.
5. **Every component in `src/components/` has a `*.stories.ts` file.** Its variants show on `/storybook`. Cards and sections take plain props, not collection entries, so they can be demoed.
6. **Content lives in collections, not in views.** To add an event, add a Markdown file. Don't edit the page.
7. **Keep JavaScript minimal.** Prefer `<details>`, CSS, and small inline `<script>` blocks. Don't add React or Vue unless a feature truly needs it.
8. **Accessibility.**
   - White text sits on `brand-orange-dark` (#C93A16), never on `brand-orange` (#EF4E25 fails AA for body text).
   - Gradient and yellow surfaces use `ink` text.
   - Every image needs `alt` (use `alt=""` when it's decorative). Icons need a `label` when they carry meaning on their own.
   - Use one `<h1>` per page.

## Brand rules (from indigitous.org and the #HACK Brand Guidelines v.02.2026)

| Token               | Hex               | Use                                                     |
| ------------------- | ----------------- | ------------------------------------------------------- |
| `brand-orange`      | #EF4E25           | Brand color, gradients, decorative accents              |
| `brand-orange-dark` | #C93A16           | Buttons and links that carry white text or sit on white |
| `brand-yellow`      | #EFE974           | Highlights, pill tags, hover fills                      |
| `brand-pink`        | #F43F5E           | Small accents only                                      |
| `ink` / `ink-2`     | #131313 / #262626 | Text, dark sections                                     |
| `stone` / `mist`    | #D9D9D6 / #EFEFEF | Borders / light sections                                |

- **Gradient:** `bg-brand-gradient` = `linear-gradient(90deg, #EF4E25 50%, #EFE974 140%)`.
- **Type:**
  - **Noto Sans** for headings and body.
  - **Noto Sans Mono** for buttons, labels, eyebrows and numbers (the `eyebrow` utility).
- **Shape:**
  - Pill buttons and inputs: `rounded-pill`, 40px.
  - Cards and bands: `rounded-card`, 32px.
  - Small tiles: `rounded-tile`, 24px.
- **Voice:**
  - Warm, invitational, openly faith-based, tech-friendly. Use sentence-case headings.
  - Use "#HACK" (always with the hash).
  - A little Taglish warmth is welcome ("Kumusta!", "kape"), but keep it clear.
  - Key phrases: _"take the gospel to new people, places and spaces"_, _"discover your place in God's mission"_, _"find your tribe"_.

## Recipes

**Add an event:** create `src/content/events/en/<slug>.md` with frontmatter matching `content.config.ts`. You can add an optional Filipino version at `src/content/events/fil/<slug>.md` with the same slug. Without one, the English entry shows on `/fil`.

**Add a page:**

1. Create `src/views/MyPage.astro` with `interface Props { lang: Lang }`, a `copy` object, and `<BaseLayout {lang} title=…>`.
2. Add `src/pages/my-page.astro` and `src/pages/fil/my-page.astro`, each rendering `<MyPage lang="…" />`.
3. Add it to `mainNav` or `footerNav` in `src/config/site.ts` if it needs a nav link, plus an `nav.*` key in both i18n files.

**Add a component:**

1. Create `src/components/<ui|cards|sections|layout>/Name.astro` with a typed `Props` interface and a top-of-file doc comment.
2. Create `Name.stories.ts` next to it: `export default { title, component, variants: [...] } satisfies Story`.
3. Check it at `/storybook`.

**Add an icon:** add the SVG path to the `icons` map in `src/components/ui/Icon.astro`.

**Add a UI string:** add the key to `src/i18n/en.ts`, then add the same key to `src/i18n/fil.ts`.

## Forms

The contact and newsletter forms post to `PUBLIC_FORM_ENDPOINT` and `PUBLIC_NEWSLETTER_ENDPOINT` (see `.env.example`). You can use any static form backend, such as Formspree or Web3Forms. When these are unset, the site shows WhatsApp and social links instead. Never collect payments on this site. Giving links to the official Indigitous/Cru giving pages.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml` (`withastro/action`), which deploys to GitHub Pages. In the repo settings, Pages → Source must be **GitHub Actions**.

## Open TODOs (need input from the Indigitous PH team)

- [ ] Official Indigitous logo files (`src/components/ui/Logo.astro` is a placeholder wordmark).
- [ ] Real PH social accounts, contact email and form endpoint (`src/config/site.ts`, `.env`).
- [ ] Confirm which giving fund PH gifts should go to (`site.global.giveGlobal`).
- [ ] Replace sample content. Every entry with `placeholder: true` is labelled "Sample content" on the site.
- [ ] Real photos in `public/images/`, referenced from content frontmatter (`image:`).
- [ ] A PNG OG image (`public/og-default.svg` doesn't render on most social networks).
- [ ] A native speaker review of the Filipino copy (`src/i18n/fil.ts` and the `fil` blocks in views).
- [ ] A custom domain, if one is planned (add `public/CNAME` and update `site` in `astro.config.mjs`).
