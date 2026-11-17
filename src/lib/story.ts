/**
 * Story format for the /storybook page.
 * Put `<Name>.stories.ts` next to `<Name>.astro`; it is picked up automatically.
 */
export interface StoryVariant {
  name: string;
  props?: Record<string, unknown>;
  /** HTML passed to the component's default slot. */
  slot?: string;
  /** Render on a dark background. */
  dark?: boolean;
}

export interface Story {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  description?: string;
  /** Wrap each variant in a max-width box (useful for cards). */
  width?: 'sm' | 'md' | 'full';
  variants: StoryVariant[];
}
