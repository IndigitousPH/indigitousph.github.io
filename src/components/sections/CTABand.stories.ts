import type { Story } from '@/lib/story';
import CTABand from './CTABand.astro';

const buttons =
  '<a href="#" class="inline-flex rounded-pill bg-ink px-6 py-3 font-mono text-white">Join a local network</a><a href="#" class="inline-flex rounded-pill border-2 border-ink px-6 py-3 font-mono">Partner with us</a>';

export default {
  title: 'CTABand',
  component: CTABand,
  width: 'full',
  variants: [
    {
      name: 'Centred (home closing)',
      props: {
        align: 'center',
        title: 'Tara, let’s join God in our world in the digital space.',
        body: 'Whether you want to belong, build or give, there’s a next step for you.',
      },
      slot: buttons,
    },
    {
      name: 'Split, ink',
      props: { tone: 'ink', title: 'Want to host a #HACK in your city or church?' },
    },
    {
      name: 'Split, yellow',
      props: {
        tone: 'yellow',
        title: 'Want to meet us?',
        body: 'Join a local network or send us a message.',
      },
    },
  ],
} satisfies Story;
