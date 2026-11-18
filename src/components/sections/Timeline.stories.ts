import type { Story } from '@/lib/story';
import Timeline from './Timeline.astro';

export default {
  title: 'Timeline',
  component: Timeline,
  width: 'md',
  variants: [
    {
      name: 'Default',
      props: {
        items: [
          { year: '2013', text: 'Indigitous begins as a global movement.' },
          { year: '2019', text: '#HACK in Iloilo.' },
          { year: '2026', text: '#HACK for Christmas in Iloilo.' },
        ],
      },
    },
  ],
} satisfies Story;
