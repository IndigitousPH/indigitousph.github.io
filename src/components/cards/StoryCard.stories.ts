import type { Story } from '@/lib/story';
import StoryCard from './StoryCard.astro';

export default {
  title: 'StoryCard',
  component: StoryCard,
  width: 'sm',
  variants: [
    {
      name: 'Default',
      props: {
        title: 'Why we started Indigitous Philippines',
        href: '#',
        date: new Date('2026-11-01'),
        summary:
          'More than 85 million Filipinos are online. Here is why tech and creative people matter.',
        category: 'news',
      },
    },
    {
      name: 'Sample content',
      props: {
        title: 'What happened at #HACK2026 Manila',
        href: '#',
        date: new Date('2026-10-25'),
        summary: 'Two days, twelve teams and a lot of coffee.',
        category: 'hack',
        placeholder: true,
      },
    },
  ],
} satisfies Story;
