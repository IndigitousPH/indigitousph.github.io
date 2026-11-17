import type { Story } from '@/lib/story';
import FeatureGrid from './FeatureGrid.astro';

export default {
  title: 'FeatureGrid',
  component: FeatureGrid,
  width: 'full',
  variants: [
    {
      name: 'Three columns',
      props: {
        items: [
          {
            icon: 'code',
            title: 'Developers',
            body: 'Build apps and tools that serve the church.',
            href: '#',
            cta: 'Start building',
          },
          {
            icon: 'palette',
            title: 'Designers',
            body: 'Make the gospel look as good as it is.',
            href: '#',
            cta: 'Start designing',
          },
          { icon: 'video', title: 'Content creators', body: 'Tell stories that point to Jesus.' },
        ],
      },
    },
  ],
} satisfies Story;
