import type { Story } from '@/lib/story';
import Field from './Field.astro';

export default {
  title: 'Field',
  component: Field,
  description: 'Labelled input, select or textarea with pill styling.',
  width: 'md',
  variants: [
    {
      name: 'Text',
      props: { label: 'Name', name: 'sb-name', placeholder: 'Juan dela Cruz', required: true },
    },
    {
      name: 'Email with hint',
      props: {
        label: 'Email',
        name: 'sb-email',
        type: 'email',
        placeholder: 'you@example.com',
        hint: 'We never share your email.',
      },
    },
    {
      name: 'Select',
      props: {
        label: 'I am a',
        name: 'sb-role',
        as: 'select',
        options: ['Developer', 'Designer', 'Content creator', 'Ministry leader'],
      },
    },
    {
      name: 'Textarea',
      props: { label: 'Message', name: 'sb-msg', as: 'textarea', placeholder: 'Kumusta!' },
    },
    {
      name: 'Dark',
      props: {
        label: 'Email',
        name: 'sb-email-dark',
        tone: 'dark',
        placeholder: 'you@example.com',
      },
      dark: true,
    },
  ],
} satisfies Story;
