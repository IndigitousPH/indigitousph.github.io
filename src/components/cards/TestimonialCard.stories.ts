import type { Story } from '@/lib/story';
import TestimonialCard from './TestimonialCard.astro';

export default {
  title: 'TestimonialCard',
  component: TestimonialCard,
  width: 'md',
  variants: [
    {
      name: 'Light',
      props: {
        quote: 'I never thought my coding could be used for ministry.',
        name: 'First-time hacker',
        role: '#HACK2026 Manila',
      },
    },
    {
      name: 'Dark',
      props: {
        tone: 'dark',
        quote: 'Indigitous helped me see my design work as part of God’s mission.',
        name: 'Maria dela Cruz',
        role: 'Designer, Iloilo',
      },
    },
  ],
} satisfies Story;
