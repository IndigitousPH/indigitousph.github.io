/** Short, reusable UI strings. Page copy lives next to each view in src/views/. */
export const en = {
  'site.name': 'Indigitous Philippines',
  'site.tagline': 'Helping Filipinos reach their world',
  'site.description':
    'Indigitous Philippines is a community of Filipino followers of Jesus using tech and creativity to take the gospel to new people, places and spaces.',

  'nav.about': 'About',
  'nav.team': 'Team',
  'nav.hack': '#HACK',
  'nav.events': 'Events',
  'nav.communities': 'Communities',
  'nav.projects': 'Projects',
  'nav.stories': 'Stories',
  'nav.resources': 'Resources',
  'nav.getInvolved': 'Get involved',
  'nav.give': 'Give',
  'nav.contact': 'Contact',
  'nav.startHere': 'Start here',
  'nav.menu': 'Menu',
  'nav.close': 'Close',
  'nav.skip': 'Skip to content',
  'nav.language': 'Language',

  'cta.learnMore': 'Learn more',
  'cta.readMore': 'Read more',
  'cta.viewAll': 'View all',
  'cta.join': 'Join',
  'cta.subscribe': 'Subscribe',
  'cta.send': 'Send message',
  'cta.back': 'Back',

  'events.upcoming': 'Upcoming',
  'events.past': 'Past',
  'events.all': 'All',
  'events.none': 'No events here yet. Check back soon!',
  'events.online': 'Online',
  'events.register': 'Register',

  'filter.all': 'All',
  'label.event': 'Event',
  'label.story': 'Story',
  'label.project': 'Project',
  'label.community': 'Community',
  'label.by': 'By',
  'label.placeholder': 'Sample content',

  'form.name': 'Name',
  'form.firstName': 'First name',
  'form.email': 'Email',
  'form.city': 'City',
  'form.message': 'Message',
  'form.interest': 'I am interested in',

  'newsletter.title': 'Stay in the loop',
  'newsletter.body':
    "Get stories, events and #HACK news from across the Philippines. We'll send you emails worth opening. Promise.",
  'newsletter.alt': 'Or follow us on',

  'footer.about':
    'A local community of the global Indigitous network — followers of Jesus discovering their place in God’s mission through tech and creativity.',
  'footer.explore': 'Explore',
  'footer.connect': 'Connect',
  'footer.global': 'Indigitous global',
  'footer.rights': 'All rights reserved.',
  'footer.faith': 'Statement of faith',
  'footer.privacy': 'Privacy',

  '404.title': 'Page not found',
  '404.body': 'This page wandered off. Let’s get you back on track.',
  '404.home': 'Go home',
} as const;

export type UIKey = keyof typeof en;
