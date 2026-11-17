import type { Story } from '@/lib/story';
import Placeholder from './Placeholder.astro';

export default {
  title: 'Placeholder',
  component: Placeholder,
  description: 'Stand-in for missing photos. Cards use it automatically when no image is set.',
  width: 'sm',
  variants: [
    { name: 'Gradient + label', props: { label: 'Manila', class: 'aspect-video rounded-card' } },
    {
      name: 'Ink + label',
      props: { label: 'Story', tone: 'ink', class: 'aspect-video rounded-card' },
    },
    {
      name: 'Yellow + icon',
      props: { icon: 'users', tone: 'yellow', class: 'aspect-video rounded-card' },
    },
  ],
} satisfies Story;
