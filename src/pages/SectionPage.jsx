import Seo from '../components/Seo';
import Ventures from '../sections/Ventures';
import Receipts from '../sections/Receipts';
import Built from '../sections/Built';
import { site } from '../data/site';

const pages = {
  ventures: { title: 'Ventures', description: 'The ventures Aditya Indra Bayu builds and operates.', path: '/ventures/' },
  receipts: { title: 'Receipts', description: 'Selected outcomes from Aditya Indra Bayu’s operating work.', path: '/receipts/' },
  built: { title: 'Built', description: 'Tools and frameworks built to make growth systems compound.', path: '/built/' },
};

export default function SectionPage({ kind }) {
  const page = pages[kind];
  const Content = { ventures: Ventures, receipts: Receipts, built: Built }[kind];
  return <div className="home-light"><Seo title={`${page.title} · ${site.name}`} description={page.description} path={page.path} /><Content /></div>;
}
