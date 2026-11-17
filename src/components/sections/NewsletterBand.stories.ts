import type { Story } from '@/lib/story';
import NewsletterBand from './NewsletterBand.astro';

const base = {
  title: 'Stay in the loop',
  body: 'Get stories, events and #HACK news from across the Philippines.',
  altLabel: 'Or follow us on',
  labels: { firstName: 'First name', email: 'Email', subscribe: 'Subscribe' },
};

export default {
  title: 'NewsletterBand',
  component: NewsletterBand,
  width: 'full',
  variants: [
    { name: 'With form', props: { ...base, endpoint: '#' } },
    { name: 'Links only (no endpoint)', props: { ...base, endpoint: '' } },
  ],
} satisfies Story;
