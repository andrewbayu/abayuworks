import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { getCmoSolutionBySlug } from '../data/fractionalCmoSolutions';
import { fadeUp, inView, stagger } from '../lib/motion';

const WHATSAPP = '6285212924950';
const waHref = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function FractionalCmoPage() {
  const { slug } = useParams();
  const solution = getCmoSolutionBySlug(slug);

  if (!solution) {
    return (
      <div className="mx-auto max-w-page px-6 py-28 text-center sm:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-cream">404 — Not Found</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">Advisory Track Not Found</h1>
        <p className="mt-4 text-muted">The advisory track you are looking for has been moved or updated.</p>
        <div className="mt-8">
          <Link
            to="/fractional-cmo/"
            className="inline-flex items-center gap-2 rounded-card bg-surface px-5 py-2.5 text-sm font-medium text-cream border border-line hover:border-cream/40 transition-colors"
          >
            ← View All Fractional CMO Tracks
          </Link>
        </div>
      </div>
    );
  }

  const waMessage = `Halo Aditya Bayu, saya founder/pemimpin di sektor ${solution.industry}. Saya tertarik berdiskusi mengenai peran Fractional CMO & Strategic Advisory untuk scale bisnis saya.`;
  const waUrl = waHref(waMessage);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: solution.title,
      description: solution.summary,
      provider: {
        '@type': 'Person',
        name: site.name,
        jobTitle: site.role,
        url: site.url,
      },
      areaServed: 'ID',
      serviceType: 'Executive Marketing Advisory & Fractional CMO',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: solution.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: site.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Fractional CMO Advisory',
          item: `${site.url}/fractional-cmo/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: solution.industry,
          item: `${site.url}/fractional-cmo/${solution.slug}/`,
        },
      ],
    },
  ];

  return (
    <>
      <Seo
        title={`${solution.metaTitle}`}
        description={solution.metaDescription}
        path={`/fractional-cmo/${solution.slug}/`}
        jsonLd={jsonLd}
      />

      <article className="mx-auto max-w-page px-6 py-20 sm:px-8 sm:py-28">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
          <Link to="/" className="hover:text-cream transition-colors">Home</Link>
          <span className="text-line">/</span>
          <Link to="/fractional-cmo/" className="hover:text-cream transition-colors">Advisory</Link>
          <span className="text-line">/</span>
          <span className="text-cream truncate">{solution.industry}</span>
        </nav>

        {/* Hero Section */}
        <header className="max-w-prose">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 text-xs font-mono uppercase tracking-widest text-cream mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-cream animate-pulse" />
              {solution.badge}
            </div>

            <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl leading-[1.1]">
              {solution.title}
            </h1>

            <p className="mt-4 font-serif text-lg italic text-cream sm:text-xl leading-relaxed">
              "{solution.subtitle}"
            </p>

            <p className="mt-6 text-base text-muted sm:text-lg leading-relaxed">
              {solution.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-card bg-blue px-6 py-3.5 text-sm font-medium text-white shadow-[0_12px_28px_-14px_rgba(28,61,115,0.8)] hover:-translate-y-0.5 hover:bg-blue-soft transition-all"
              >
                Diskusikan Skenario Bisnis Anda
                <span aria-hidden="true">→</span>
              </a>
              <Link
                to="/dal/"
                className="inline-flex items-center justify-center rounded-card border border-line bg-surface px-5 py-3.5 text-sm font-medium text-muted hover:text-ink hover:border-cream/40 transition-colors"
              >
                Ikuti Diagnostic Lab (DAL)
              </Link>
            </div>
          </motion.div>
        </header>

        <div className="my-16 h-px w-full bg-line" />

        {/* Founder Symptom vs Structural Diagnosis */}
        <section className="mb-20">
          <motion.div variants={fadeUp} {...inView}>
            <p className="font-mono text-xs uppercase tracking-widest text-cream">01 // Problem Space</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              Gejala Permukaan vs Akar Masalah di Sektor {solution.industry}
            </h2>

            <div className="mt-8 rounded-card border border-red-500/20 bg-surface/50 p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-red-300 mb-2">// The Founder's Daily Headache</p>
              <p className="text-sm sm:text-base text-muted leading-relaxed italic">
                "{solution.founderSymptom}"
              </p>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {solution.operatingDiagnosis.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                {...inView}
                className="rounded-card border border-line bg-surface p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-cream uppercase tracking-widest block mb-3">
                    DIAGNOSIS 0{idx + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 90-Day Execution Roadmap */}
        <section className="mb-20">
          <motion.div variants={fadeUp} {...inView}>
            <p className="font-mono text-xs uppercase tracking-widest text-cream">02 // The 90-Day Intervention</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              Roadmap Operasional 90 Hari Pertama
            </h2>
            <p className="mt-2 text-sm text-muted max-w-prose">
              Bukan sekadar konsultasi wacana. Setiap bulan memiliki deliverables terukur yang membenahi P&L, alur sistem, dan tim internal Anda.
            </p>
          </motion.div>

          <div className="mt-10 space-y-6">
            {solution.roadmap.map((phase, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                {...inView}
                className="rounded-card border border-line bg-surface p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:items-start"
              >
                <div className="shrink-0 w-28">
                  <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-cream bg-elevated px-3 py-1 rounded">
                    {phase.month}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-display text-xl font-bold text-ink mb-4">{phase.title}</h3>
                  <ul className="space-y-2.5">
                    {phase.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <span className="text-cream font-mono">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Proven Receipts & Case Proof */}
        {solution.receipts && (
          <section className="mb-20">
            <motion.div variants={fadeUp} {...inView}>
              <p className="font-mono text-xs uppercase tracking-widest text-cream">03 // Proven Receipts</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                Rekam Jejak Eksekusi
              </h2>
            </motion.div>

            <div className="mt-8 rounded-card border border-cream/30 bg-elevated/70 p-8 sm:p-10 relative overflow-hidden">
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">Portfolio Reference</p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">{solution.receipts.client}</h3>
              <p className="mt-2 font-mono text-lg sm:text-xl font-bold text-cream">{solution.receipts.metric}</p>
              <p className="mt-4 text-sm sm:text-base text-muted max-w-prose leading-relaxed">
                {solution.receipts.detail}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/receipts/"
                  className="text-xs font-mono uppercase tracking-wider text-cream hover:underline flex items-center gap-1.5"
                >
                  Lihat Seluruh Bukti Portfolio & Receipts →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Engagement FAQs */}
        <section className="mb-20">
          <motion.div variants={fadeUp} {...inView}>
            <p className="font-mono text-xs uppercase tracking-widest text-cream">04 // Engagement Architecture</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              Skema Keterlibatan & FAQ
            </h2>
          </motion.div>

          <div className="mt-8 space-y-4">
            {solution.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                {...inView}
                className="rounded-card border border-line bg-surface p-6 sm:p-8"
              >
                <h3 className="font-display text-lg font-bold text-ink mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="rounded-card border border-line bg-surface p-8 sm:p-14 text-center">
          <motion.div variants={fadeUp} {...inView}>
            <p className="font-mono text-xs uppercase tracking-widest text-cream mb-3">
              Operator-Grade Advisory
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink max-w-prose mx-auto leading-snug">
              Siap Membenahi Arsitektur Pertumbuhan di Sektor {solution.industry}?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted max-w-prose mx-auto">
              Sesi diagnosa awal bersifat rahasia dan empat mata langsung dengan Aditya Bayu untuk menelaah apakah bisnis Anda siap untuk keterlibatan Fractional CMO.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-card bg-blue px-7 py-3.5 text-sm font-medium text-white hover:bg-blue-soft transition-all shadow-[0_12px_28px_-14px_rgba(28,61,115,0.8)]"
              >
                Jadwalkan Diskusi via WhatsApp
                <span aria-hidden="true">→</span>
              </a>
              <Link
                to="/fractional-cmo/"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-card border border-line bg-elevated px-6 py-3.5 text-sm font-medium text-muted hover:text-ink hover:border-cream/40 transition-colors"
              >
                Jelajahi Sektor Advisory Lain
              </Link>
            </div>
          </motion.div>
        </section>
      </article>
    </>
  );
}
