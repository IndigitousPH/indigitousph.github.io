import type { Story } from '@/lib/story';
import StoryCards from './StoryCards.astro';

const story = (title: string, category: string) => ({
  title,
  href: '#',
  date: new Date('2026-11-01'),
  summary: 'A one-line excerpt from the story.',
  category,
});

export default {
  title: 'StoryCards',
  component: StoryCards,
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        title: 'What God is doing',
        linkText: 'Read more stories',
        href: '#',
        stories: [
          story('Why we started Indigitous Philippines', 'Testimonies'),
          story('What happens at a #HACK?', '#HACK'),
          story('Five ways to use your gifts this week', 'Local Networks'),
        ],
      },
    },
  ],
} satisfies Story;
