import type { Story } from '@/lib/story';
import GlobalBand from './GlobalBand.astro';

export default {
  title: 'GlobalBand',
  component: GlobalBand,
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        text: 'We’re one local expression of Indigitous, a global movement of believers in many countries.',
        linkText: 'Visit Indigitous global',
        href: 'https://indigitous.org',
      },
    },
  ],
} satisfies Story;
