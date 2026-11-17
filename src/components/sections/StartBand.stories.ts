import type { Story } from '@/lib/story';
import StartBand from './StartBand.astro';

export default {
  title: 'StartBand',
  component: StartBand,
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        title: 'No network near you yet?',
        body: 'Maybe God is inviting you to start one. We’ll walk with you, from your first prayer meeting to your first #HACK.',
      },
      slot: '<a href="#" class="inline-flex rounded-pill bg-brand-orange-dark px-6 py-3 font-mono text-white">Start a local network</a>',
    },
  ],
} satisfies Story;
