# Indigitous Philippines

The website of **Indigitous Philippines**, a community of Filipino followers of Jesus using tech and creativity to take the gospel to new people, places and spaces. It is part of the global [Indigitous](https://indigitous.org) network.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), in English and Filipino, and deployed to GitHub Pages.

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

- Component library: http://localhost:4321/storybook
- Filipino site: http://localhost:4321/fil/

## Contributing

Read **[AGENTS.md](AGENTS.md)** first. It covers the conventions, brand rules and step-by-step recipes for adding pages, components and content. It is written for both people and AI coding assistants.

The most common task, adding an event or story, only needs a Markdown file in `src/content/`.

## Pages

| Route                                 | What it is                                                            |
| ------------------------------------- | --------------------------------------------------------------------- |
| `/`                                   | Home                                                                  |
| `/about`, `/about/team`               | Who we are                                                            |
| `/start-here`                         | Find your path (developer, designer, creator, gamer, ministry leader) |
| `/hack`                               | #HACK Philippines                                                     |
| `/events`, `/events/[slug]`           | Events                                                                |
| `/communities`, `/communities/[slug]` | Local communities (Manila, Iloilo)                                    |
| `/projects`, `/projects/[slug]`       | Projects built by the community                                       |
| `/stories`, `/stories/[slug]`         | News and stories                                                      |
| `/resources`                          | Curated tools and research                                            |
| `/get-involved`                       | Ways to help                                                          |
| `/give`                               | Giving (links to the official Indigitous giving page)                 |
| `/contact`                            | Contact                                                               |
| `/storybook`                          | Component showcase (not indexed)                                      |

Every page also exists under `/fil/`.
