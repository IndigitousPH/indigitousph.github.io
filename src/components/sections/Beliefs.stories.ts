import type { Story } from '@/lib/story';
import Beliefs from './Beliefs.astro';

export default {
  title: 'Beliefs',
  component: Beliefs,
  width: 'full',
  variants: [
    {
      name: 'Default',
      props: {
        title: 'What we believe',
        items: [
          { title: 'Jesus is worth knowing.', body: 'Everything we do points people to Him.' },
          {
            title: 'Every believer is sent.',
            body: 'Your gifts and your online world are part of your calling.',
          },
          {
            title: 'We go further together.',
            body: 'We partner with churches and ministries; we don’t compete with them.',
          },
        ],
        linkText: 'Read our full statement of faith',
        href: '#',
      },
    },
  ],
} satisfies Story;
