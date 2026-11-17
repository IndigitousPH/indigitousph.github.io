import type { Story } from '@/lib/story';
import CardGrid from './CardGrid.astro';

const tiles = Array.from(
  { length: 3 },
  (_, i) => `<div class="rounded-card bg-mist p-8 font-mono">Card ${i + 1}</div>`,
).join('');

export default {
  title: 'CardGrid',
  component: CardGrid,
  width: 'full',
  variants: [
    { name: '3 columns', props: { cols: 3 }, slot: tiles },
    { name: '2 columns', props: { cols: 2 }, slot: tiles },
  ],
} satisfies Story;
