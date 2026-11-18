import type { Story } from '@/lib/story';
import ChallengeCards from './ChallengeCards.astro';

export default {
  title: 'ChallengeCards',
  component: ChallengeCards,
  width: 'full',
  variants: [
    {
      name: 'With challenges',
      props: {
        challenges: [
          {
            tag: 'christmas-story',
            problem: 'Help teens hear the Christmas story in a format they actually watch.',
            partner: '[partner ministry]',
          },
          {
            tag: 'prayer-app',
            problem: 'Make it easy for a church to share daily prayer points.',
            partner: '[partner church]',
          },
        ],
      },
    },
    { name: 'Coming soon', props: { challenges: [] } },
  ],
} satisfies Story;
