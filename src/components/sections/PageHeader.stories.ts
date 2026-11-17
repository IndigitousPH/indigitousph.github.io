import type { Story } from '@/lib/story';
import PageHeader from './PageHeader.astro';

export default {
  title: 'PageHeader',
  component: PageHeader,
  width: 'full',
  variants: [
    {
      name: 'Mist',
      props: {
        eyebrow: 'About',
        title: 'Indigenous + digital',
        intro: 'We help followers of Jesus take the gospel to new people, places and spaces.',
      },
    },
    {
      name: 'Ink',
      props: {
        tone: 'ink',
        eyebrow: '#HACK Philippines',
        title: 'Build for the Kingdom',
        intro: 'A faith-driven hackathon every October.',
      },
    },
    { name: 'Gradient', props: { tone: 'gradient', eyebrow: 'Give', title: 'Fuel the mission' } },
  ],
} satisfies Story;
