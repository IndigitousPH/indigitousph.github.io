import type { Story } from '@/lib/story';
import EventCard from './EventCard.astro';

export default {
  title: 'EventCard',
  component: EventCard,
  description: 'Event teaser used on /events.',
  width: 'sm',
  variants: [
    {
      name: 'Default',
      props: {
        title: '#HACK for Christmas — Iloilo',
        href: '#',
        date: new Date('2026-11-20T09:00:00Z'),
        location: 'ICMAC, Smallville, Iloilo',
        summary:
          '24 hours. One mission. Build something that tells the Christmas story to someone who needs it.',
      },
    },
    {
      name: 'Online, sample content',
      props: {
        title: 'Online workers huddle',
        href: '#',
        date: new Date('2026-12-10T12:00:00Z'),
        location: 'Online',
        online: true,
        placeholder: true,
      },
    },
  ],
} satisfies Story;
