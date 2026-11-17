import type { Story } from '@/lib/story';
import EventFeature from './EventFeature.astro';

export default {
  title: 'EventFeature',
  component: EventFeature,
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        title: '#HACK for Christmas — Iloilo',
        details: 'Nov 20, 5 PM to Nov 21, 5 PM · Iloilo C&MA Church (ICMAC), Smallville · ₱200',
        body: '24 hours. One mission. Bring your skills in design, video, writing, music or code.',
        href: '#',
        endDate: new Date(Date.now() + 7 * 86_400_000),
      },
    },
  ],
} satisfies Story;
