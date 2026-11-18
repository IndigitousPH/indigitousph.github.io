import type { Story } from '@/lib/story';
import NetworkCard from './NetworkCard.astro';

export default {
  title: 'NetworkCard',
  component: NetworkCard,
  width: 'sm',
  variants: [
    {
      name: 'Default',
      props: {
        city: 'Iloilo',
        region: 'Western Visayas',
        description: 'Believers in Iloilo who meet, pray and dream together.',
        meets: 'Monthly, Saturdays',
        href: '#',
      },
    },
    {
      name: 'Rhythm not set, sample',
      props: {
        city: 'Manila',
        region: 'Metro Manila',
        description: 'Believers across Metro Manila.',
        href: '#',
        placeholder: true,
      },
    },
  ],
} satisfies Story;
