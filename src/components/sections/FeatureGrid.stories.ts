import type { Story } from '@/lib/story';
import FeatureGrid from './FeatureGrid.astro';

export default {
  title: 'FeatureGrid',
  component: FeatureGrid,
  description: 'Used as the deck’s Pillars (cards) and IconList (plain).',
  width: 'full',
  variants: [
    {
      name: 'Pillars (cards)',
      props: {
        items: [
          {
            icon: 'users',
            title: 'Gather',
            body: 'Local networks of believers who meet, pray and dream together about missions in a digital age.',
            href: '#',
            cta: 'Find a network',
          },
          {
            icon: 'lightbulb',
            title: 'Create',
            body: '#HACK sprints where teams turn ideas into apps, campaigns, art and content that point people to Jesus.',
            href: '#',
            cta: 'See #HACK',
          },
          {
            icon: 'hands-praying',
            title: 'Pray & serve',
            body: 'A praying community that stands behind believers who share the gospel online every day.',
            href: '#',
            cta: 'Join the prayer time',
          },
        ],
      },
    },
    {
      name: 'IconList (plain, 4 columns)',
      props: {
        variant: 'plain',
        cols: 4,
        items: [
          {
            icon: 'users',
            title: 'Meet',
            body: 'Regular gatherings, online and in person, to share what God is doing.',
          },
          {
            icon: 'hands-praying',
            title: 'Pray',
            body: 'For each other and for the people we reach online.',
          },
          {
            icon: 'book',
            title: 'Learn',
            body: 'Workshops on storytelling, design, content and sharing your faith online.',
          },
          { icon: 'hammer', title: 'Build', body: 'Team up on projects and #HACK sprints.' },
        ],
      },
    },
  ],
} satisfies Story;
