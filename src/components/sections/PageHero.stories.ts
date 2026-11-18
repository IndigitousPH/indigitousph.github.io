import type { Story } from '@/lib/story';
import PageHero from './PageHero.astro';

export default {
  title: 'PageHero',
  component: PageHero,
  description: 'Banner at the top of every inner page.',
  width: 'full',
  variants: [
    {
      name: 'Mist',
      props: {
        eyebrow: 'About',
        title: 'Locally rooted. Digitally sent.',
        intro:
          'Indigitous Philippines is part of a global movement helping believers use their gifts for missions in a digital age.',
      },
    },
    {
      name: 'Calm (Pray)',
      props: {
        tone: 'calm',
        eyebrow: 'Pray',
        title: 'Every conversation online starts in prayer.',
      },
    },
    { name: 'Ink', props: { tone: 'ink', eyebrow: 'Stories', title: 'What God is doing' } },
    {
      name: 'Gradient',
      props: {
        tone: 'gradient',
        eyebrow: 'Partner & Give',
        title: 'Partner with what God is doing online.',
      },
    },
  ],
} satisfies Story;
