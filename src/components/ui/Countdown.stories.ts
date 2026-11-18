import type { Story } from '@/lib/story';
import Countdown from './Countdown.astro';

const inTwoDays = new Date(Date.now() + 2 * 86_400_000 + 5 * 3_600_000);

export default {
  title: 'Countdown',
  component: Countdown,
  description:
    'Days : hours : minutes to a date. Ticks in the browser; shows the ended label once past.',
  variants: [
    { name: 'On dark', props: { to: inTwoDays, label: 'Until #HACK for Christmas' }, dark: true },
    { name: 'On light', props: { to: inTwoDays, tone: 'light', label: 'Until #HACK' } },
    {
      name: 'Ended',
      props: { to: new Date('2020-01-01'), tone: 'light', endedLabel: 'Happening now' },
    },
  ],
} satisfies Story;
