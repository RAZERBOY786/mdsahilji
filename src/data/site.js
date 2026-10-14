// Single source of truth for site-wide identity, contact links and the
// JSON-LD structured data injected into <head> at build time by
// scripts/prerender.mjs.
import { PROJECTS } from './projects.js';
import { FAQ } from './faq.js';

/** Canonical production origin, no trailing slash. */
export const SITE_URL = 'https://mdsahilji.vercel.app';

export const NAME = 'MD Sahil Johan Islam';
export const ROLE = 'Full-Stack & React Native Developer';
export const EMAIL = 'islamsahil752@gmail.com';

/** Where the site owner is based. City shown in copy and structured data. */
export const LOCATION = {
  city: 'Meerut',
  region: 'Uttar Pradesh',
  countryName: 'India',
  country: 'IN',
  /** Used in prose, where a friendlier form reads better. */
  label: 'Meerut, Uttar Pradesh, India',
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/RAZERBOY786' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-islam-a2b9941b3' },
];

export const SAME_AS = SOCIALS.map((s) => s.href);

/** Skills surfaced to answer engines as Person.knowsAbout. */
export const KNOWS_ABOUT = [
  'React Native',
  'React',
  'Expo',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'PostgreSQL',
  'Python',
  'TensorFlow',
  'Scikit-learn',
  'Machine Learning',
  'REST API design',
  'AWS',
  'Docker',
  'Cross-platform mobile development',
];

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const personLd = () => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: NAME,
  alternateName: 'Sahil Johan Islam',
  jobTitle: ROLE,
  description:
    'Full-stack and React Native developer based in Meerut, Uttar Pradesh, India, building cross-platform mobile apps, full-stack web apps and AI/ML features.',
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  email: `mailto:${EMAIL}`,
  sameAs: SAME_AS,
  knowsAbout: KNOWS_ABOUT,
  address: {
    '@type': 'PostalAddress',
    addressLocality: LOCATION.city,
    addressRegion: LOCATION.region,
    addressCountry: LOCATION.country,
  },
  nationality: { '@type': 'Country', name: LOCATION.countryName },
});

const websiteLd = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: `${NAME} — Portfolio`,
  description: `${ROLE} based in ${LOCATION.label}. React Native, Node.js and AI/ML projects.`,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
});

const profilePageLd = () => ({
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profilepage`,
  url: `${SITE_URL}/`,
  name: `${NAME} — ${ROLE}`,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': PERSON_ID },
  mainEntity: { '@id': PERSON_ID },
  inLanguage: 'en',
});

const servicesLd = () => ({
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#services`,
  name: `${NAME} — Freelance Development`,
  description:
    'Freelance React Native and full-stack development: cross-platform mobile apps, web applications, REST APIs and AI/ML integration.',
  provider: { '@id': PERSON_ID },
  areaServed: { '@type': 'Country', name: LOCATION.countryName },
  email: `mailto:${EMAIL}`,
  url: `${SITE_URL}/`,
});

const projectsItemListLd = (projects = PROJECTS) => ({
  '@type': 'ItemList',
  '@id': `${SITE_URL}/#projects`,
  name: 'Selected projects by MD Sahil Johan Islam',
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: p.title.split('\u2013')[0].trim(),
      description: p.desc,
      url: p.repo,
      keywords: p.tags.join(', '),
      author: { '@id': PERSON_ID },
    },
  })),
});

const faqPageLd = (faq = FAQ) => ({
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
});

/** Full JSON-LD graph, injected as a single <script> in <head>. */
export function buildStructuredData(projects = PROJECTS, faq = FAQ) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personLd(),
      websiteLd(),
      profilePageLd(),
      servicesLd(),
      projectsItemListLd(projects),
      faqPageLd(faq),
    ],
  };
}

/** Serialize JSON-LD safely for embedding inside a <script> element. */
export function serializeStructuredData(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
