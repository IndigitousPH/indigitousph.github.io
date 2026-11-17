import type { Story } from '@/lib/story';
import Button from './Button.astro';

export default {
  title: 'Button',
  component: Button,
  description: 'Pill-shaped action in Noto Sans Mono. Renders a link when `href` is set.',
  variants: [
    { name: 'Primary', props: { variant: 'primary' }, slot: 'Start here' },
    {
      name: 'Primary with icon',
      props: { variant: 'primary', icon: 'arrow-right' },
      slot: 'Learn more',
    },
    { name: 'Dark', props: { variant: 'dark' }, slot: 'Join #HACK' },
    { name: 'Outline', props: { variant: 'outline' }, slot: 'View all' },
    { name: 'Ghost', props: { variant: 'ghost', icon: 'arrow-right' }, slot: 'Read more' },
    { name: 'Light (on dark)', props: { variant: 'light' }, slot: 'Subscribe', dark: true },
    { name: 'Small', props: { size: 'sm' }, slot: 'Small' },
    { name: 'Large', props: { size: 'lg', icon: 'heart', iconPosition: 'start' }, slot: 'Give' },
    {
      name: 'External link',
      props: {
        href: 'https://hack.indigitous.org',
        external: true,
        icon: 'arrow-up-right',
        variant: 'outline',
      },
      slot: 'hack.indigitous.org',
    },
  ],
} satisfies Story;
