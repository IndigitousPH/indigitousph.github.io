import type { Story } from '@/lib/story';
import Accordion from './Accordion.astro';

export default {
  title: 'Accordion',
  component: Accordion,
  width: 'md',
  variants: [
    {
      name: 'Default',
      props: {
        items: [
          {
            q: 'Do I need to know how to code?',
            a: 'No. Most teams need designers, writers, video makers and organizers as much as developers.',
          },
          {
            q: 'Can I come without a team?',
            a: 'Yes. We’ll help you find one on the first night.',
          },
        ],
      },
    },
  ],
} satisfies Story;
