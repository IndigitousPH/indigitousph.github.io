import type { Story } from '@/lib/story';
import EventHero from './EventHero.astro';

export default {
  title: 'EventHero',
  component: EventHero,
  width: 'full',
  variants: [
    {
      name: 'With countdown',
      props: {
        eyebrow: 'Indigitous #HACK',
        title: 'Build something that points people to Jesus.',
        intro:
          'A creative sprint where believers team up to turn ideas into apps, videos, campaigns, art and content for missions in a digital age.',
        countdownTo: new Date(Date.now() + 3 * 86_400_000),
        countdownLabel: 'To the next #HACK',
      },
    },
  ],
} satisfies Story;
