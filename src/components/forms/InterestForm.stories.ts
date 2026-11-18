import type { Story } from '@/lib/story';
import InterestForm from './InterestForm.astro';

export default {
  title: 'InterestForm',
  component: InterestForm,
  description:
    'Posts to a form service. The first variant uses a demo endpoint; the second shows the fallback when no endpoint is configured.',
  width: 'md',
  variants: [
    { name: 'With endpoint', props: { endpoint: '#' } },
    { name: 'No endpoint (fallback)', props: { endpoint: '' } },
  ],
} satisfies Story;
