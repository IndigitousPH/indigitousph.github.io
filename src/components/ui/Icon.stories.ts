import type { Story } from '@/lib/story';
import Icon, { icons } from './Icon.astro';

export default {
  title: 'Icon',
  component: Icon,
  description: 'Inline SVG icons. Pass `label` when the icon carries meaning on its own.',
  variants: Object.keys(icons).map((name) => ({ name, props: { name, size: 24 } })),
} satisfies Story;
