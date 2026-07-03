import Seo from '../components/Seo';
import Hero from '../sections/Hero';
import Now from '../sections/Now';
import How from '../sections/How';
import Ventures from '../sections/Ventures';
import Receipts from '../sections/Receipts';
import Built from '../sections/Built';
import Contact from '../sections/Contact';
import { site } from '../data/site';

// Entity graph for the homepage: the Person (Aditya), the ProfessionalService he
// offers (fractional CMO / growth advisory), and the WebSite — linked by @id so
// search engines and LLMs read them as one coherent, credentialed entity.
const personId = site.url + '/#aditya';
const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: site.name,
      alternateName: ['Andrew Bayu', 'Aditya Bayu'],
      url: site.url + '/',
      image: site.url + '/og-image.png',
      jobTitle: 'Fractional CMO & Venture Builder',
      description:
        'Fractional CMO and venture builder in Indonesia. Has driven 300K+ qualified leads and $10M+ in client revenue for D2C and service brands, managing IDR 4B+ in ad budgets across Meta, Google, and TikTok.',
      email: 'mailto:' + site.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'South Tangerang',
        addressRegion: 'Banten',
        addressCountry: 'ID',
      },
      knowsAbout: [
        'Performance Marketing',
        'Growth Strategy',
        'Meta Ads',
        'Google Ads',
        'Fractional CMO',
        'Direct-to-Consumer Marketing',
        'Lead Generation',
        'Venture Building',
        'Marketing Gamification',
      ],
      worksFor: [
        { '@type': 'Organization', name: 'We Are Infiniti', url: 'https://weareinfiniti.id' },
        { '@type': 'Organization', name: 'Calibreworks', url: 'https://calibreworks.com' },
      ],
      award: [
        'Clutch.co Top-100 Digital Agencies (Web, Marketing, Branding)',
        'Meta Marketing Partner',
      ],
      sameAs: site.socials.map((s) => s.href),
    },
    {
      '@type': 'ProfessionalService',
      '@id': site.url + '/#service',
      name: 'Aditya Indra Bayu — Fractional CMO & Growth Advisory',
      url: site.url + '/',
      image: site.url + '/og-image.png',
      description:
        'Fractional CMO and performance-marketing leadership for D2C and service brands — full-funnel growth, Meta & Google Ads, and revenue systems, backed by a Clutch Top-100, Meta Marketing Partner team.',
      provider: { '@id': personId },
      serviceType: 'Fractional CMO',
      areaServed: [
        { '@type': 'Country', name: 'Indonesia' },
        { '@type': 'AdministrativeArea', name: 'Southeast Asia' },
        'Remote',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': site.url + '/#website',
      url: site.url + '/',
      name: site.name,
      publisher: { '@id': personId },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Seo
        title="Aditya Indra Bayu · Venture Builder & Fractional CMO · Indonesia"
        description="Aditya (Andrew) Indra Bayu. Venture builder and Fractional CMO in Indonesia. CEO of Calibreworks, Head of Digital Marketing at Gentem, CMO at PT Inovasi Maritim. 10 ventures across 5 industries."
        path="/"
        type="profile"
        jsonLd={personJsonLd}
      />
      <Hero />
      <Now />
      <How />
      <Ventures />
      <Receipts />
      <Built />
      <Contact />
    </>
  );
}
