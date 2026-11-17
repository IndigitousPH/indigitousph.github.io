import type { Story } from '@/lib/story';
import Hero from './Hero.astro';

export default {
  title: 'Hero',
  component: Hero,
  description: 'Home page hero. Put buttons in the `actions` slot.',
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        eyebrow: 'Indigitous Philippines',
        title: 'Helping Filipinos reach their world',
        highlight: 'reach their world',
        intro:
          'A community of Filipino followers of Jesus using tech and creativity for the gospel.',
      },
    },
  ],
} satisfies Story;
