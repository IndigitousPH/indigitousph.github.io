import type { Story } from '@/lib/story';
import EventCard from './EventCard.astro';

export default {
  title: 'EventCard',
  component: EventCard,
  width: 'sm',
  variants: [
    {
      name: 'Default',
      props: {
        title: 'Coffee Talk Manila: Faith, AI and the Filipino church',
        href: '#',
        date: new Date('2026-12-06T07:00:00Z'),
        location: 'Makati City, Metro Manila',
        summary: 'An afternoon of kape and honest conversation about AI and ministry.',
      },
    },
    {
      name: 'Online, sample content',
      props: {
        title: '#HACK2027 Philippines: Champion info session',
        href: '#',
        date: new Date('2027-02-20T11:00:00Z'),
        location: 'Online (Zoom)',
        online: true,
        placeholder: true,
      },
    },
  ],
} satisfies Story;
