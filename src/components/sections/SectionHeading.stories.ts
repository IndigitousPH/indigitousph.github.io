import type { Story } from '@/lib/story';
import SectionHeading from './SectionHeading.astro';

export default {
  title: 'SectionHeading',
  component: SectionHeading,
  width: 'full',
  variants: [
    {
      name: 'Left',
      props: {
        eyebrow: 'Our events',
        title: 'What’s coming up',
        intro: 'Meetups, talks and #HACK across the Philippines.',
      },
    },
    {
      name: 'Center',
      props: { align: 'center', eyebrow: 'Local Networks', title: 'Find your people.' },
    },
    {
      name: 'Light',
      props: { tone: 'light', eyebrow: 'Stories', title: 'Latest from the network' },
      dark: true,
    },
  ],
} satisfies Story;
