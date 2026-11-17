import type { Story } from '@/lib/story';
import Intro from './Intro.astro';

export default {
  title: 'Intro',
  component: Intro,
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        title: 'The mission hasn’t changed. Where people gather has.',
        body: 'Filipinos spend hours every day online: scrolling, chatting, creating, searching for answers.',
        quote: 'Go and make disciples of all nations.',
        cite: 'Matthew 28:19',
      },
    },
  ],
} satisfies Story;
