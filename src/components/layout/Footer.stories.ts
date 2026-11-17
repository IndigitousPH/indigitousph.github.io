import type { Story } from '@/lib/story';
import Footer from './Footer.astro';

export default {
  title: 'Footer',
  component: Footer,
  width: 'full',
  variants: [{ name: 'English', props: { lang: 'en' } }],
} satisfies Story;
