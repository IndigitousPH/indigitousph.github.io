import type { Story } from '@/lib/story';
import SwitchTabs from './SwitchTabs.astro';

export default {
  title: 'SwitchTabs',
  component: SwitchTabs,
  description:
    'Segmented pill control. Use `href` items for navigation, or `filterGroup` for client-side filtering.',
  variants: [
    {
      name: 'Filter',
      props: {
        filterGroup: 'demo',
        items: [
          { label: 'All', value: 'all' },
          { label: 'Upcoming', value: 'upcoming' },
          { label: 'Past', value: 'past' },
        ],
      },
    },
    {
      name: 'Links',
      props: {
        active: 'research',
        items: [
          { label: 'All', value: 'all', href: '#' },
          { label: 'Research', value: 'research', href: '#' },
          { label: 'Product', value: 'product', href: '#' },
          { label: 'Design', value: 'design', href: '#' },
        ],
      },
    },
  ],
} satisfies Story;
