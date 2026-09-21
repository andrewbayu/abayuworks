import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { fractionalCmoSolutions } from '../data/fractionalCmoSolutions';
import { fadeUp, inView } from '../lib/motion';

export default function FractionalCmoHub() {
  const [search, setSearch] = useState('');

  const filtered = fractionalCmoSolutions.filter((item) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.industry.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.founderSymptom.toLowerCase().includes(q)
    );
  });

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Fractional CMO & Strategic Growth Advisory · Aditya Bayu',
      description: 'Direktori spesialisasi peran Fractional CMO, audit P&L, dan arsitektur pertumbuhan komersial berbasis ceruk industri di Indonesia.',
      url: `${site.url}/fractional-cmo/`,
      hasPart: fractionalCmoSolutions.map((s) => ({
        '@type': 'WebPage',
        name: s.title,
        url: `${site.url}/fractional-cmo/${s.slug}/`,
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
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Fractional CMO & Strategic Growth Advisory · Aditya Bayu"
        description="Direktori spesialisasi peran Fractional CMO, audit P&L, dan arsitektur pertumbuhan komersial berbasis ceruk industri di Indonesia."
        path="/fractional-cmo/"
        jsonLd={jsonLd}
      />

      <div className="mx-auto max-w-page px-6 py-20 sm:px-8 sm:py-28">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
          <Link to="/" className="hover:text-cream transition-colors">Home</Link>
          <span className="text-line">/</span>
          <span className="text-cream">Fractional CMO Advisory</span>
        </nav>

        {/* Header */}
        <header className="max-w-prose">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <p className="font-mono text-xs uppercase tracking-widest text-cream">
              Executive Advisory // Industry Tracks
            </p>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl leading-[1.1]">
              Fractional CMO &amp; Strategic Growth Advisory
            </h1>
            <p className="mt-6 text-base text-muted sm:text-lg leading-relaxed">
              Bukan agensi media buying, bukan pula konsultan teori. Aditya Bayu bertindak sebagai <span className="text-cream font-medium">Operating Partner &amp; Fractional CMO</span> yang duduk bersama Founder dan Direksi untuk membedah bottleneck P&amp;L, mendikte arsitektur funnel, dan mengarahkan tim eksekusi hingga menghasilkan revenue terukur.
            </p>
          </motion.div>
        </header>

        {/* Search Bar */}
        <div className="mt-12 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari sektor industri (contoh: F&B, edukasi, maritim, agensi)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-card border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-cream/50 font-sans"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-muted hover:text-ink"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        <div className="my-14 h-px w-full bg-line" />

        {/* Grid of Solutions */}
        {filtered.length === 0 ? (
          <div className="rounded-card border border-line bg-surface p-12 text-center">
            <p className="text-muted text-sm">Tidak ada spesialisasi yang cocok dengan pencarian "{search}".</p>
            <button
              type="button"
              onClick={() => setSearch('')}
              className="mt-4 text-xs font-mono text-cream uppercase hover:underline"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.slug}
                variants={fadeUp}
                {...inView}
                className="flex"
              >
                <Link
                  to={`/fractional-cmo/${item.slug}/`}
                  className="group flex flex-col justify-between w-full rounded-card border border-line bg-surface p-6 hover:border-cream/40 transition-all hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-cream/90 bg-elevated px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                      <span className="text-muted group-hover:text-cream group-hover:translate-x-0.5 transition-transform text-xs">
                        →
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-bold text-ink group-hover:text-cream transition-colors leading-snug">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-xs text-muted leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-mono text-muted group-hover:text-ink">
                    <span>Lihat Framework 90 Hari</span>
                    {item.receipts && (
                      <span className="text-[10px] text-cream uppercase">Receipts Attached</span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Custom Advisory Callout */}
        <div className="mt-20 rounded-card border border-line bg-surface/60 p-8 sm:p-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-cream mb-2">
            Specific Challenge?
          </p>
          <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl max-w-prose mx-auto">
            Sektor Bisnis Anda Belum Tercantum di Daftar Ini?
          </h3>
          <p className="mt-3 text-sm text-muted max-w-prose mx-auto leading-relaxed">
            Prinsip unit economics, diagnosa bottleneck, dan arsitektur konversi bersifat universal. Anda bisa mengikuti Digital Advantage Lab (DAL) atau berdiskusi langsung untuk membedah tantangan spesifik perusahaan Anda.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/dal/"
              className="inline-flex items-center justify-center rounded-card bg-blue px-6 py-3 text-sm font-medium text-white hover:bg-blue-soft transition-all shadow-[0_12px_28px_-14px_rgba(28,61,115,0.8)]"
            >
              Pelajari Diagnostic Lab (DAL)
            </Link>
            <a
              href="https://wa.me/6285212924950?text=Halo%20Aditya%20Bayu%2C%20saya%20tertarik%20berdiskusi%20mengenai%20Fractional%20CMO%20untuk%20sektor%20bisnis%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-card border border-line bg-elevated px-5 py-3 text-sm font-medium text-muted hover:text-ink hover:border-cream/40 transition-colors"
            >
              Kontak Langsung via WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
