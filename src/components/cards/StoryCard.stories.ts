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
        summary: 'The mission hasn’t changed. Where people gather has.',
        category: 'Testimonies',
      },
    },
    {
      name: 'Sample content',
      props: {
        title: 'What happens at a #HACK?',
        href: '#',
        date: new Date('2026-10-25'),
        summary: 'Twenty-four hours, a real challenge and a team you might have just met.',
        category: '#HACK',
        placeholder: true,
      },
    },
  ],
} satisfies Story;
