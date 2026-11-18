import type { Story } from '@/lib/story';
import Gifts from './Gifts.astro';

export default {
  title: 'Gifts',
  component: Gifts,
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        title: 'You don’t have to be a programmer.',
        body: 'If you can create, organize, encourage or pray, there’s room for you here.',
        tiles: [
          { label: 'Designers', icon: 'palette' },
          { label: 'Writers & storytellers', icon: 'pen' },
          { label: 'Video & photo', icon: 'camera' },
          { label: 'Developers', icon: 'code' },
          { label: 'Organizers', icon: 'clipboard' },
          { label: 'Intercessors', icon: 'hands-praying' },
        ],
        linkText: 'Find where you fit',
        href: '#',
      },
    },
  ],
} satisfies Story;
