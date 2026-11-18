import type { Story } from '@/lib/story';
import ContactForm from './ContactForm.astro';

export default {
  title: 'ContactForm',
  component: ContactForm,
  description:
    'Posts to a form service. The first variant uses a demo endpoint; the second shows the fallback when no endpoint is configured.',
  width: 'md',
  variants: [
    { name: 'With endpoint', props: { endpoint: '#' } },
    { name: 'No endpoint (fallback)', props: { endpoint: '' } },
  ],
} satisfies Story;
