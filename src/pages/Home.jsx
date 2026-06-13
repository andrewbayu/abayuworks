import Seo from '../components/Seo';
import Hero from '../sections/Hero';
import Now from '../sections/Now';
import How from '../sections/How';
import Ventures from '../sections/Ventures';
import Receipts from '../sections/Receipts';
import Built from '../sections/Built';
import Contact from '../sections/Contact';
import { site } from '../data/site';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: ['Andrew Bayu', 'Aditya Bayu'],
  url: site.url + '/',
  image: site.url + '/og-image.png',
  jobTitle: 'Venture Builder, Fractional CMO',
  email: 'mailto:' + site.email,
  address: { '@type': 'PostalAddress', addressLocality: 'South Tangerang', addressCountry: 'ID' },
  sameAs: site.socials.map((s) => s.href),
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
