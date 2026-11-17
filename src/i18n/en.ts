/** Short, reusable UI strings. Page copy lives at the top of each view in src/views/. */
export const en = {
  'site.name': 'Indigitous Philippines',
  'site.tagline': 'Locally rooted. Digitally sent.',
  'site.positioning': 'Filipino believers using their gifts for missions in a digital age.',
  'site.description':
    'Indigitous Philippines is a movement of Filipino believers using their gifts for missions in a digital age.',

  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.networks': 'Local Networks',
  'nav.hack': '#HACK',
  'nav.pray': 'Pray',
  'nav.stories': 'Stories',
  'nav.partner': 'Partner & Give',
  'nav.partnerCta': 'Partner with us',
  'nav.contact': 'Contact',
  'nav.events': 'Events',
  'nav.projects': 'Projects',
  'nav.resources': 'Resources',
  'nav.joinNetwork': 'Join a local network',
  'nav.volunteer': 'Volunteer',
  'nav.menu': 'Menu',
  'nav.close': 'Close',
  'nav.skip': 'Skip to content',

  'cta.readMore': 'Read more',
  'cta.viewAll': 'View all',
  'cta.send': 'Send message',
  'cta.dismiss': 'Dismiss',

  'events.upcoming': 'Coming up',
  'events.past': 'Past',
  'events.all': 'All',
  'events.none':
    'No events here right now. Check back soon, or join a local network to hear first.',
  'events.online': 'Online',
  'events.register': 'Register now',
  'events.ended': 'This event has ended.',

  'filter.all': 'All',
  'label.event': 'Event',
  'label.placeholder': 'Sample content',

  'form.name': 'Name',
  'form.firstName': 'First name',
  'form.email': 'Email',
  'form.message': 'Message',
  'form.optional': '(optional)',
  'form.sending': 'Sending…',
  'form.error': 'Something went wrong. Please try again, or message us on Facebook.',

  'footer.global': 'Part of the global Indigitous movement',
  'footer.explore': 'Explore',
  'footer.getInvolved': 'Get involved',
  'footer.connected': 'Stay connected',
  'footer.newsletter': 'Get stories and invites, about once a month.',
  'footer.newsletterCta': 'Count me in',
  'footer.privacy': 'Privacy',

  '404.title': 'Page not found',
  '404.body': 'This page wandered off. Let’s get you back on track.',
  '404.home': 'Go home',
} as const;

export type UIKey = keyof typeof en;
