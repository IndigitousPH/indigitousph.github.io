import type { Story } from '@/lib/story';
import Choices from './Choices.astro';

export default {
  title: 'Choices',
  component: Choices,
  width: 'md',
  variants: [
    {
      name: 'Checkboxes',
      props: {
        legend: 'How would you like to serve?',
        name: 'sb-serve',
        options: [
          'Design',
          'Writing',
          'Video & photo',
          'Development',
          'Organizing',
          'Prayer',
          'Not sure yet',
        ],
        checked: ['Prayer'],
      },
    },
    {
      name: 'Radios',
      props: {
        legend: 'May we contact you?',
        name: 'sb-contact',
        type: 'radio',
        options: ['Yes', 'No'],
        checked: 'No',
      },
    },
  ],
} satisfies Story;
