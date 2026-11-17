import type { Story } from '@/lib/story';
import Logo from './Logo.astro';

export default {
  title: 'Logo',
  component: Logo,
  description: 'Placeholder wordmark. Replace with the official Indigitous logo files.',
  variants: [
    { name: 'Dark', props: { size: 'md' } },
    { name: 'Light', props: { tone: 'light', size: 'md' }, dark: true },
    { name: 'Large', props: { size: 'lg' } },
  ],
} satisfies Story;
