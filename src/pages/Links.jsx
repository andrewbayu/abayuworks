import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { site, linkPage, resources } from '../data/site';
import { postBySlug } from '../posts';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: site.name,
    jobTitle: linkPage.tagline,
    url: `${site.url}/`,
    image: `${site.url}/aditya-bayu.webp`,
    sameAs: site.socials.map((social) => social.href),
  },
};

const achievements = [
  { value: '$12M', label: 'Pendapatan kumulatif portofolio klien', icon: 'chart' },
  { value: '+200%', label: 'Pertumbuhan pendaftaran di Hacktiv8', icon: 'growth' },
  { value: '10M+', label: 'Jangkauan kampanye Aboitiz / KicauFest', icon: 'reach' },
];

const dentalArticle = postBySlug['dental-clinic-multi-branch-growth'];
const featuredArticles = [
  {
    title: 'Panduan klinik multi-cabang tanpa membakar anggaran iklan',
    summary:
      'Panduan operasional untuk klinik medis dan estetika: dari kualifikasi prospek WhatsApp berbasis AI sampai pengukuran konversi offline.',
    category: 'Klinik & kecantikan',
    image: dentalArticle.img,
    href: 'https://www.adityabayu.com/blog/healthcare-aesthetic-clinic-playbook/',
    external: true,
  },
  {
    title: 'Ilusi jabatan direktur dalam transaksi B2B',
    summary:
      'Kenali pengguna, penggerak internal, pemberi pengaruh, pengambil keputusan, dan penjaga akses sebelum pertemuan penjualan pertama.',
    category: 'Strategi B2B',
    image: postBySlug['b2b-buyer-map-end-user-champion'].img,
    href: '/blog/b2b-buyer-map-end-user-champion/',
  },
  {
    title: 'Kenapa corong pemasaran justru makin linear di era Google Messy Middle',
    summary:
      'Perjalanan calon pembeli memang berliku, tetapi tahapan bisnis perlu tetap jelas dan ditopang sinyal konversi yang bersih.',
    category: 'Sistem pertumbuhan',
    image: postBySlug['google-messy-middle-funnel-checkpoints'].img,
    href: '/blog/google-messy-middle-funnel-checkpoints/',
  },
];

function Icon({ name, className = 'h-5 w-5' }) {
  const paths = {
    chart: <path d="M4 19h16M6 16V9m6 7V5m6 11v-5" />,
    growth: <path d="m4 17 5-5 4 3 7-9M14 6h6v6" />,
    reach: <><path d="M4 10v4h4l9 4V6l-9 4H4Z" /><path d="M8 14l2 5h3l-2-4M20 9v6" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5v-12Z" /><path d="M4 16.5A2.5 2.5 0 0 1 6.5 14H20M8 7h7m-7 3h7" /></>,
    checklist: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="m8 9 1.5 1.5L12 8m2 2h2m-8 5 1.5 1.5L12 14m2 2h2" /></>,
    system: <><rect x="3" y="4" width="7" height="6" rx="1" /><rect x="14" y="14" width="7" height="6" rx="1" /><path d="M10 7h4a2 2 0 0 1 2 2v5M14 17h-4a2 2 0 0 1-2-2v-5" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function CardLink({ href, external, className, children, ...props }) {
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>{children}</a>;
  }
  return <Link to={href} className={className} {...props}>{children}</Link>;
}

function ProductCard({ product }) {
  const external = product.href.startsWith('http');

  return (
    <CardLink
      href={product.href}
      external={external}
      className="links-product-card group"
      aria-label={`${product.cta}: ${product.title}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="links-product-icon"><Icon name={product.icon} /></span>
        <span className="links-product-tag">{product.tag}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold leading-snug">{product.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{product.blurb}</p>
      <p className="mt-3 text-xs leading-5 text-faint">{product.audience}</p>
      <span className="links-card-action mt-auto pt-6">
        {product.cta}<span aria-hidden="true">→</span>
      </span>
    </CardLink>
  );
}

function ArticleCard({ article }) {
  return (
    <CardLink
      href={article.href}
      external={article.external}
      className="links-article-card group"
      aria-label={`Baca artikel: ${article.title}`}
    >
      <div className="links-article-image">
        <img src={article.image} alt={article.title} loading="lazy" decoding="async" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-[#1c3d73]">{article.category}</p>
        <h3 className="mt-3 font-display text-lg font-bold leading-snug sm:text-xl">{article.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.summary}</p>
        <span className="links-card-action mt-5">
          Baca artikel<span aria-hidden="true">→</span>
        </span>
      </div>
    </CardLink>
  );
}

export default function Links() {
  return (
    <div className="links-page home-light">
      <Seo
        title={`${site.name} · Tautan`}
        description={`${linkPage.intro} Jelajahi produk pilihan dan artikel terbaru Aditya.`}
        path="/links/"
        type="profile"
        jsonLd={jsonLd}
      />

      <main>
        <section className="links-hero" aria-labelledby="links-title">
          <div className="wrap relative z-10 max-w-5xl pb-14 pt-12 sm:pb-16 sm:pt-16">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-8 md:text-left">
              <img
                src="/aditya-bayu.webp"
                alt={`Foto ${site.name}`}
                width="120"
                height="120"
                loading="eager"
                className="links-avatar"
              />
              <div>
                <p className="links-role">{linkPage.tagline}</p>
                <h1 id="links-title" className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {site.name}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                  {linkPage.intro}
                </p>
              </div>
            </div>

            <div className="links-achievements mt-9 grid grid-cols-3 md:mt-10" aria-label="Pencapaian">
              {achievements.map((achievement) => (
                <div className="links-achievement" key={achievement.value}>
                  <Icon name={achievement.icon} className="h-5 w-5 text-[#cddcff] sm:h-6 sm:w-6" />
                  <p className="mt-2 font-display text-xl font-bold tabular-nums sm:text-2xl">{achievement.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/70 sm:text-sm">{achievement.label}</p>
                </div>
              ))}
            </div>

            <Link to={linkPage.cta.href} className="links-hero-cta mt-8">
              {linkPage.cta.label}<span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="wrap max-w-6xl py-14 sm:py-20" aria-labelledby="products-heading">
          <header className="mb-7 max-w-2xl sm:mb-9">
            <p className="eyebrow mb-3">Produk pilihan</p>
            <h2 id="products-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Panduan dan alat untuk menjalankan bisnis.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Pilih sumber gratis atau produk berbayar yang paling sesuai dengan kebutuhanmu.
            </p>
          </header>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {resources.map((product) => <ProductCard key={product.title} product={product} />)}
          </div>
        </section>

        <section className="wrap max-w-6xl border-t border-[#e6e8ec] py-14 sm:py-20" aria-labelledby="articles-heading">
          <header className="mb-7 max-w-2xl sm:mb-9">
            <p className="eyebrow mb-3">Tulisan pilihan</p>
            <h2 id="articles-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Tiga artikel terbaru.
            </h2>
          </header>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredArticles.map((article) => <ArticleCard key={article.title} article={article} />)}
          </div>
        </section>

        <footer className="links-footer">
          <div className="wrap flex max-w-6xl flex-col items-center justify-between gap-5 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <a href={`mailto:${site.email}`} className="font-display text-sm font-semibold">{site.email}</a>
              <p className="mt-1 text-xs text-muted">Tangerang Selatan, Indonesia</p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Media sosial">
              {site.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-[#1c3d73]">
                  {social.label}
                </a>
              ))}
              <Link to="/" className="text-sm font-semibold text-[#1c3d73]">Situs utama →</Link>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
}
