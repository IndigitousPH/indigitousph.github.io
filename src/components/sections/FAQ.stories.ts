import type { Story } from '@/lib/story';
import FAQ from './FAQ.astro';

export default {
  title: 'FAQ',
  component: FAQ,
  width: 'md',
  variants: [
    {
      name: 'Default',
      props: {
        items: [
          {
            q: 'Do I need to know how to code?',
            a: 'No! Every team needs designers, writers, storytellers and ministry leaders.',
          },
          { q: 'How much does it cost?', a: 'Most Indigitous Philippines events are free.' },
        ],
      },
    },
  ],
} satisfies Story;
