import type { Story } from '@/lib/story';
import Steps from './Steps.astro';

export default {
  title: 'Steps',
  component: Steps,
  width: 'full',
  variants: [
    {
      name: 'How #HACK works',
      props: {
        items: [
          { title: 'Register', body: 'Sign up solo or with friends.' },
          { title: 'Pick a challenge', body: 'Real needs from churches and ministries.' },
          { title: 'Build', body: '24 hours with your team and mentors.' },
          { title: 'Share', body: 'Present your project and keep it going after.' },
        ],
      },
    },
  ],
} satisfies Story;
