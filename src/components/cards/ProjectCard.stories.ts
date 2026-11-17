import type { Story } from '@/lib/story';
import ProjectCard from './ProjectCard.astro';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
  width: 'sm',
  variants: [
    {
      name: 'Default',
      props: {
        title: 'Verse cards in your dialect',
        href: '#',
        type: 'app',
        status: 'building',
        year: 2026,
        summary: 'Shareable Bible verse cards in Tagalog, Cebuano, Hiligaynon and Ilocano.',
      },
    },
    {
      name: 'Live, sample content',
      props: {
        title: 'Church website starter kit',
        href: '#',
        type: 'web',
        status: 'live',
        year: 2025,
        summary: 'Helps small churches get online in an afternoon.',
        placeholder: true,
      },
    },
  ],
} satisfies Story;
