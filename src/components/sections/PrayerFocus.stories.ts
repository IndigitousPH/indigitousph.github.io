import type { Story } from '@/lib/story';
import PrayerFocus from './PrayerFocus.astro';

export default {
  title: 'PrayerFocus',
  component: PrayerFocus,
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        title: 'Praying this month',
        points: ['Point one', 'Point two', 'Point three'],
        guideHref: '#',
      },
      dark: false,
    },
  ],
} satisfies Story;
