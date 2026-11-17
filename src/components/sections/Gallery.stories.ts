import type { Story } from '@/lib/story';
import Gallery from './Gallery.astro';

export default {
  title: 'Gallery',
  component: Gallery,
  width: 'full',
  variants: [
    {
      name: 'Placeholders',
      props: {
        items: [{ caption: '2019 — Iloilo' }, { caption: '2026 — #HACK for Christmas, Iloilo' }],
      },
    },
  ],
} satisfies Story;
