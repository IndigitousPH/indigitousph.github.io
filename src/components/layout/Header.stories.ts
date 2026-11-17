import type { Story } from '@/lib/story';
import Header from './Header.astro';

export default {
  title: 'Header',
  component: Header,
  description: 'Sticky header. Below 1280px the nav collapses into a menu button.',
  width: 'full',
  variants: [
    { name: 'English', props: { lang: 'en' } },
    { name: 'Filipino', props: { lang: 'fil' } },
  ],
} satisfies Story;
