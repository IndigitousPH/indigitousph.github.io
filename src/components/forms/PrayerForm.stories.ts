import type { Story } from '@/lib/story';
import PrayerForm from './PrayerForm.astro';

export default {
  title: 'PrayerForm',
  component: PrayerForm,
  description:
    'Posts to a form service. The first variant uses a demo endpoint; the second shows the fallback when no endpoint is configured.',
  width: 'md',
  variants: [
    { name: 'With endpoint', props: { endpoint: '#' } },
    { name: 'No endpoint (fallback)', props: { endpoint: '' } },
  ],
} satisfies Story;
