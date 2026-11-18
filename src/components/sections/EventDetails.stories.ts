import type { Story } from '@/lib/story';
import EventDetails from './EventDetails.astro';

export default {
  title: 'EventDetails',
  component: EventDetails,
  width: 'full',
  variants: [
    {
      name: '#HACK',
      props: {
        rows: [
          { label: 'Event', value: '#HACK for Christmas — Iloilo', icon: 'sparkles' },
          { label: 'When', value: 'Nov 20, 5 PM to Nov 21, 5 PM', icon: 'calendar' },
          { label: 'Where', value: 'Iloilo C&MA Church (ICMAC), Smallville', icon: 'map-pin' },
          { label: 'Fee', value: '₱200', icon: 'ticket' },
          { label: 'Bring', value: 'Laptop or phone, charger, a willing heart', icon: 'backpack' },
        ],
      },
    },
    {
      name: 'Prayer time',
      props: {
        title: 'Pray with us',
        rows: [
          { label: 'When', value: 'Details coming soon', icon: 'clock' },
          { label: 'Who', value: 'Anyone who wants to pray', icon: 'users' },
        ],
      },
    },
  ],
} satisfies Story;
