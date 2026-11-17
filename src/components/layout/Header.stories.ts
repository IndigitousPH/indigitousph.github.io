import type { Story } from '@/lib/story';
import Header from './Header.astro';

export default {
  title: 'Header',
  component: Header,
  description:
    'Sticky header. Below 1024px the nav becomes a menu button that opens a full-screen drawer.',
  width: 'full',
  variants: [{ name: 'Default' }],
} satisfies Story;
