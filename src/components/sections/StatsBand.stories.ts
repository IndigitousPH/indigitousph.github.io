import type { Story } from '@/lib/story';
import StatsBand from './StatsBand.astro';

const stats = [
  { value: '10,154', label: 'people at #HACK since 2016' },
  { value: '174', label: 'cities' },
  { value: '63', label: 'countries' },
  { value: '2', label: 'PH communities' },
];

export default {
  title: 'StatsBand',
  component: StatsBand,
  width: 'full',
  variants: [
    { name: 'Ink', props: { stats, caption: 'Global #HACK figures from hack.indigitous.org.' } },
    { name: 'Yellow', props: { stats, tone: 'yellow' } },
    { name: 'White', props: { stats, tone: 'white' } },
  ],
} satisfies Story;
