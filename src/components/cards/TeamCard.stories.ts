import type { Story } from '@/lib/story';
import TeamCard from './TeamCard.astro';

export default {
  title: 'TeamCard',
  component: TeamCard,
  width: 'sm',
  variants: [
    {
      name: 'Default',
      props: {
        name: 'Juan dela Cruz',
        role: 'Network Engagements Lead',
        serveBecause: 'I serve because…',
      },
    },
    {
      name: 'Sample content',
      props: { name: 'Maria dela Cruz', role: '#HACK Lead', placeholder: true },
    },
  ],
} satisfies Story;
