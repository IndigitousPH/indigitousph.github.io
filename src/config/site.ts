import type { UIKey } from '@/i18n/en';

/**
 * Site-wide settings. Edit links here, not inside components.
 * Items marked TODO need real values from the Indigitous Philippines team.
 */
export const site = {
  url: 'https://indigitousph.github.io',
  // TODO(content): replace with the PH team's inbox once it exists.
  contactEmail: '' as string,
  // TODO(content): replace global accounts with PH accounts when available.
  socials: [
    { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/Indigitous/' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/indigitous/' },
    { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com/indigitous/' },
    { label: 'X', icon: 'x', href: 'https://twitter.com/indigitous/' },
  ],
  whatsappChannel: 'https://whatsapp.com/channel/0029VbAeXZEBA1f3iJCupi1e',
  global: {
    home: 'https://indigitous.org',
    about: 'https://indigitous.org/about/',
    learn: 'https://indigitous.org/learn/',
    hack: 'https://hack.indigitous.org',
    hackChampion: 'https://hack.indigitous.org/',
    reports: 'https://indigitous.org/reports/',
    frontierPeopleGroups: 'https://indigitous.org/projects/frontier-people-groups/',
    statementOfFaith: 'https://indigitous.org/about/statement-of-faith/',
    give: 'https://indigitous.org/give/',
    // TODO(content): confirm the right fund for PH gifts (Global vs South Asia vs a PH fund).
    giveGlobal: 'https://give.cru.org/0898328',
    privacy: 'https://indigitous.org/privacy/',
  },
} as const;

export type NavItem = { key: UIKey; href: string };

/** Primary header navigation (language-neutral paths). */
export const mainNav: NavItem[] = [
  { key: 'nav.about', href: '/about' },
  { key: 'nav.hack', href: '/hack' },
  { key: 'nav.events', href: '/events' },
  { key: 'nav.communities', href: '/communities' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.stories', href: '/stories' },
  { key: 'nav.getInvolved', href: '/get-involved' },
];

export const footerNav: NavItem[] = [
  { key: 'nav.about', href: '/about' },
  { key: 'nav.team', href: '/about/team' },
  { key: 'nav.hack', href: '/hack' },
  { key: 'nav.events', href: '/events' },
  { key: 'nav.communities', href: '/communities' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.stories', href: '/stories' },
  { key: 'nav.resources', href: '/resources' },
  { key: 'nav.getInvolved', href: '/get-involved' },
  { key: 'nav.give', href: '/give' },
  { key: 'nav.contact', href: '/contact' },
];
