import type { Story } from '@/lib/story';
import FormShell from './FormShell.astro';

const fields =
  '<label class="eyebrow" for="sb-shell">Your field</label><input id="sb-shell" name="demo" class="w-full rounded-pill bg-mist px-6 py-3.5" />';

export default {
  title: 'FormShell',
  component: FormShell,
  description:
    'Wrapper used by every form: submit button, privacy note, in-place success message, and a contact-links fallback when no endpoint is set.',
  width: 'md',
  variants: [
    {
      name: 'With endpoint and note',
      props: {
        endpoint: '#',
        formName: 'demo',
        submitLabel: 'Send',
        success: 'Salamat!',
        note: 'Kept private.',
      },
      slot: fields,
    },
    {
      name: 'No endpoint (fallback)',
      props: { endpoint: '', formName: 'demo', submitLabel: 'Send', success: 'Salamat!' },
    },
  ],
} satisfies Story;
