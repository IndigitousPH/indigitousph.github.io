import type { Story } from '@/lib/story';
import PillTag from './PillTag.astro';

export default {
  title: 'PillTag',
  component: PillTag,
  description:
    'Rounded label for roles, categories and statuses. Yellow is the default, as on indigitous.org team cards.',
  variants: [
    { name: 'Yellow', props: { tone: 'yellow' }, slot: 'Country lead' },
    { name: 'Orange', props: { tone: 'orange' }, slot: '#HACK' },
    { name: 'Ink', props: { tone: 'ink' }, slot: 'app' },
    { name: 'Mist', props: { tone: 'mist' }, slot: 'Online' },
    { name: 'Outline', props: { tone: 'outline' }, slot: 'Sample content' },
    { name: 'Small', props: { size: 'sm' }, slot: 'Event' },
  ],
} satisfies Story;
