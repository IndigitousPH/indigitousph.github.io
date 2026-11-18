import type { UIKey } from '@/i18n/en';

/**
 * Site-wide links and settings. Edit links here, not inside components.
 * Items marked TODO need real values from the Indigitous Philippines team.
 */
export const site = {
  url: 'https://indigitousph.github.io',
  // TODO(content): the PH team's inbox.
  contactEmail: '' as string,
  basedIn: 'Based in Iloilo, serving the Philippines',
  // TODO(content): replace the global accounts with PH accounts.
  socials: [
    { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/Indigitous/' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/indigitous/' },
    { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com/indigitous/' },
  ],
  global: {
    home: 'https://indigitous.org',
    hack: 'https://hack.indigitous.org',
    reports: 'https://indigitous.org/reports/',
    frontierPeopleGroups: 'https://indigitous.org/projects/frontier-people-groups/',
    learn: 'https://indigitous.org/learn/',
    statementOfFaith: 'https://indigitous.org/about/statement-of-faith/',
    privacy: 'https://indigitous.org/privacy/',
  },
} as const;

/** Form endpoints (set as GitHub repo variables / .env). Empty = show contact links instead. */
export const forms = {
  general: (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) ?? '',
  prayer: (import.meta.env.PUBLIC_PRAYER_ENDPOINT as string | undefined) ?? '',
  newsletter: (import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT as string | undefined) ?? '',
};

export type NavItem = { key: UIKey; href: string };

/** Header navigation (deck: Home · About · Local Networks · #HACK · Pray · Stories). */
export const mainNav: NavItem[] = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.networks', href: '/networks' },
  { key: 'nav.hack', href: '/hack' },
  { key: 'nav.pray', href: '/pray' },
  { key: 'nav.stories', href: '/stories' },
];

/** Footer "Explore" column. Events, Projects and Resources live only here. */
export const exploreNav: NavItem[] = [
  { key: 'nav.about', href: '/about' },
  { key: 'nav.networks', href: '/networks' },
  { key: 'nav.hack', href: '/hack' },
  { key: 'nav.pray', href: '/pray' },
  { key: 'nav.stories', href: '/stories' },
  { key: 'nav.events', href: '/events' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.resources', href: '/resources' },
];

/** Footer "Get involved" column. */
export const involvedNav: NavItem[] = [
  { key: 'nav.joinNetwork', href: '/networks#connect' },
  { key: 'nav.volunteer', href: '/networks#connect' },
  { key: 'nav.partner', href: '/partner' },
  { key: 'nav.contact', href: '/contact' },
];
