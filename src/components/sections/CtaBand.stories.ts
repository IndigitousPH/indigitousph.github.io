import type { Story } from '@/lib/story';
import CtaBand from './CtaBand.astro';

export default {
  title: 'CtaBand',
  component: CtaBand,
  width: 'full',
  variants: [
    {
      name: 'Gradient',
      props: {
        eyebrow: 'Why it matters',
        title: 'Today, 3 billion people don’t know Jesus',
        body: 'Most of them are online.',
      },
      slot: '<a href="#" class="inline-flex rounded-pill bg-ink px-6 py-3 font-mono text-white">About us</a>',
    },
    {
      name: 'Ink',
      props: {
        tone: 'ink',
        title: 'Are you a creative or developer?',
        body: 'Find your tribe here.',
      },
    },
    { name: 'Yellow', props: { tone: 'yellow', title: 'Host #HACK in your city' } },
  ],
} satisfies Story;
