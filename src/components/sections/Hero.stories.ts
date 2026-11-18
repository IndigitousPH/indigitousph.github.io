import type { Story } from '@/lib/story';
import Hero from './Hero.astro';

const props = {
  eyebrow: 'Indigitous Philippines',
  title: 'Your gifts have a place in God’s mission.',
  intro:
    'We’re a movement of Filipino believers (creatives, builders, storytellers and intercessors) sharing Jesus in our world in the digital space.',
};

export default {
  title: 'Hero',
  component: Hero,
  description:
    'Home page hero. Put the two buttons in the `actions` slot. Pass `image` for the real event photo.',
  width: 'full',
  variants: [{ name: 'Without photo (collage fallback)', props }],
} satisfies Story;
