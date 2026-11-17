import type { Story } from '@/lib/story';
import Section from './Section.astro';

export default {
  title: 'Section',
  component: Section,
  description: 'Page section wrapper with consistent padding and container width.',
  width: 'full',
  variants: [
    { name: 'White', slot: '<p class="text-lg">Section content</p>' },
    { name: 'Mist', props: { tone: 'mist' }, slot: '<p class="text-lg">Section content</p>' },
    { name: 'Ink', props: { tone: 'ink' }, slot: '<p class="text-lg">Section content</p>' },
  ],
} satisfies Story;
