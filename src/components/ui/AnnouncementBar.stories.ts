import type { Story } from '@/lib/story';
import AnnouncementBar from './AnnouncementBar.astro';

export default {
  title: 'AnnouncementBar',
  component: AnnouncementBar,
  description:
    'Dismissible strip above the header, edited in src/content/site/site.json. Hides after its end date.',
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        text: '#HACK for Christmas is happening in Iloilo, Nov 20–21.',
        linkText: 'Save your seat',
        href: '#',
        endDate: new Date(Date.now() + 7 * 86_400_000),
      },
    },
  ],
} satisfies Story;
