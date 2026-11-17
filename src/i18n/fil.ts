import type { UIKey } from './en';

/**
 * Filipino UI strings. Every key in en.ts must exist here (TypeScript enforces it).
 * TODO(content): have a native speaker review tone and wording.
 */
export const fil = {
  'site.name': 'Indigitous Philippines',
  'site.tagline': 'Tinutulungan ang mga Pilipino na abutin ang kanilang mundo',
  'site.description':
    'Ang Indigitous Philippines ay komunidad ng mga Pilipinong tagasunod ni Hesus na gumagamit ng teknolohiya at pagkamalikhain para dalhin ang ebanghelyo sa mga bagong tao, lugar at espasyo.',

  'nav.about': 'Tungkol sa amin',
  'nav.team': 'Koponan',
  'nav.hack': '#HACK',
  'nav.events': 'Mga event',
  'nav.communities': 'Mga komunidad',
  'nav.projects': 'Mga proyekto',
  'nav.stories': 'Mga kuwento',
  'nav.resources': 'Mga resource',
  'nav.getInvolved': 'Makibahagi',
  'nav.give': 'Magbigay',
  'nav.contact': 'Makipag-ugnayan',
  'nav.startHere': 'Magsimula dito',
  'nav.menu': 'Menu',
  'nav.close': 'Isara',
  'nav.skip': 'Lumaktaw sa nilalaman',
  'nav.language': 'Wika',

  'cta.learnMore': 'Alamin pa',
  'cta.readMore': 'Basahin pa',
  'cta.viewAll': 'Tingnan lahat',
  'cta.join': 'Sumali',
  'cta.subscribe': 'Mag-subscribe',
  'cta.send': 'Ipadala',
  'cta.back': 'Bumalik',

  'events.upcoming': 'Paparating',
  'events.past': 'Nakaraan',
  'events.all': 'Lahat',
  'events.none': 'Wala pang event dito. Bumalik ka ulit!',
  'events.online': 'Online',
  'events.register': 'Magparehistro',

  'filter.all': 'Lahat',
  'label.event': 'Event',
  'label.story': 'Kuwento',
  'label.project': 'Proyekto',
  'label.community': 'Komunidad',
  'label.by': 'Ni',
  'label.placeholder': 'Halimbawang nilalaman',

  'form.name': 'Pangalan',
  'form.firstName': 'Pangalan',
  'form.email': 'Email',
  'form.city': 'Lungsod',
  'form.message': 'Mensahe',
  'form.interest': 'Interesado ako sa',

  'newsletter.title': 'Manatiling updated',
  'newsletter.body':
    'Tumanggap ng mga kuwento, event at balita tungkol sa #HACK mula sa buong Pilipinas. Sulit buksan ang mga email namin. Pangako.',
  'newsletter.alt': 'O i-follow kami sa',

  'footer.about':
    'Isang lokal na komunidad ng pandaigdigang Indigitous network — mga tagasunod ni Hesus na tumutuklas ng kanilang lugar sa misyon ng Diyos sa pamamagitan ng teknolohiya at pagkamalikhain.',
  'footer.explore': 'Tuklasin',
  'footer.connect': 'Kumonekta',
  'footer.global': 'Indigitous global',
  'footer.rights': 'Nakalaan ang lahat ng karapatan.',
  'footer.faith': 'Pahayag ng pananampalataya',
  'footer.privacy': 'Privacy',

  '404.title': 'Hindi makita ang pahina',
  '404.body': 'Naligaw ang pahinang ito. Ibalik ka namin sa tamang daan.',
  '404.home': 'Bumalik sa home',
} satisfies Record<UIKey, string>;
