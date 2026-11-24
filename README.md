# Indigitous Philippines

The website of **Indigitous Philippines**, a movement of Filipino believers using their gifts for missions in a digital age. It is part of the global [Indigitous](https://indigitous.org) movement.

_Locally rooted. Digitally sent._

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) and deployed to GitHub Pages. It can also be served from Cloudflare Workers (`pnpm deploy:cf`; see the Deploy section of AGENTS.md).

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

The component library is at http://localhost:4321/storybook.

## Contributing

Read **[AGENTS.md](AGENTS.md)** first. It has the site map, voice guide, brand rules, deck-to-component map, and step-by-step recipes. It is written for both people and AI coding assistants.

Most updates only touch content:

| To change…                                        | Edit                          |
| ------------------------------------------------- | ----------------------------- |
| The announcement bar, prayer time or prayer focus | `src/content/site/site.json`  |
| Events (incl. the next #HACK)                     | `src/content/events/*.md`     |
| Local networks                                    | `src/content/networks/*.md`   |
| Stories                                           | `src/content/stories/*.md`    |
| #HACK challenges                                  | `src/content/challenges/*.md` |
| Team                                              | `src/content/team/*.md`       |
| Links, socials, nav                               | `src/config/site.ts`          |

## Pages

| Route                                | What it is                                                     |
| ------------------------------------ | -------------------------------------------------------------- |
| `/`                                  | Home                                                           |
| `/about`                             | What Indigitous is, our story, beliefs, team                   |
| `/networks`                          | Local networks and the "get connected" form                    |
| `/hack`                              | #HACK: countdown, how it works, event details, challenges, FAQ |
| `/pray`                              | Prayer time, online workers ministry, prayer requests          |
| `/stories`, `/stories/[slug]`        | Stories                                                        |
| `/partner`                           | Partner & Give                                                 |
| `/contact`                           | Contact                                                        |
| `/events`, `/projects`, `/resources` | Extra pages, linked from the footer                            |
| `/storybook`                         | Component showcase (not indexed)                               |
