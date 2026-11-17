import type { Story } from '@/lib/story';
import CommunityCard from './CommunityCard.astro';

export default {
  title: 'CommunityCard',
  component: CommunityCard,
  width: 'sm',
  variants: [
    {
      name: 'Default',
      props: {
        name: 'Manila',
        region: 'Metro Manila',
        href: '#',
        summary: 'Developers, designers and storytellers across the metro.',
      },
    },
    { name: 'Name only', props: { name: 'Iloilo', region: 'Western Visayas', href: '#' } },
  ],
} satisfies Story;
