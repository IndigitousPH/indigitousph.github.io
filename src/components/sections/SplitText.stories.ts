import type { Story } from '@/lib/story';
import SplitText from './SplitText.astro';

export default {
  title: 'SplitText',
  component: SplitText,
  width: 'full',
  variants: [
    {
      name: 'Name (Indigenous + Digital)',
      props: {
        variant: 'name',
        title: 'The name',
        parts: [
          {
            word: 'Indigenous',
            text: 'Locally rooted. The gospel shared by Filipinos, in our languages and our culture.',
          },
          {
            word: 'Digital',
            text: 'Where people gather. The apps, platforms and online spaces where our friends spend their days.',
          },
        ],
        footnote:
          'Put them together and you get Indigitous: local believers reaching their own people in our world in the digital space.',
      },
    },
    {
      name: 'Text only',
      props: {
        title: 'Not just for coders.',
        body: 'A “hack” is a short, focused sprint. You join a team, pick a real challenge from a church or ministry, and build a solution in 24 hours.',
      },
    },
  ],
} satisfies Story;
