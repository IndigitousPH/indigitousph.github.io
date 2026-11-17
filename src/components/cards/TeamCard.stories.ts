import type { Story } from '@/lib/story';
import TeamCard from './TeamCard.astro';

export default {
  title: 'TeamCard',
  component: TeamCard,
  width: 'sm',
  variants: [
    {
      name: 'Default',
      props: { name: 'Juan dela Cruz', role: 'Country lead', community: 'Manila' },
    },
  ],
} satisfies Story;
