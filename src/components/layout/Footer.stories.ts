import type { Story } from '@/lib/story';
import Footer from './Footer.astro';

export default {
  title: 'Footer',
  component: Footer,
  description:
    'Four columns on desktop, stacked on mobile. The newsletter posts to PUBLIC_NEWSLETTER_ENDPOINT.',
  width: 'full',
  variants: [{ name: 'Default' }],
} satisfies Story;
