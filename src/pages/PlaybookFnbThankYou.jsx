import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { fadeUp, stagger } from '../lib/motion';

// The lead magnet lives in Google Drive. The /view link opens the in-Drive
// preview; the uc?export=download link triggers an actual file download on click.
// PLAYBOOKMarketingFnB2026.pdf — shared anyone-with-link.
const DRIVE_FILE_ID = '1MZ-kkNyoLVQmFjiP_rwSNVH3SKUoHFFT';
const DRIVE_DOWNLOAD = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;
const DRIVE_VIEW = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/view`;

export default function PlaybookFnbThankYou() {
  return (
    <>
      <Seo
        title="Playbook Anda sudah siap · Aditya Bayu"
        description="Unduh Playbook Marketing F&B 2026."
        path="/playbook-fnb/thank-you/"
        noindex
      />

      <main className="relative flex min-h-screen items-center overflow-hidden bg-bg">
        {/* Ambient backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(28,61,115,0.35), transparent 70%)' }}
        />

        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto w-full max-w-prose px-5 py-20 text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Anda terdaftar
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl"
          >
            Playbook F&B 2026 Anda sudah siap.
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted">
            Salinannya juga meluncur ke inbox Anda. Klik di bawah untuk membukanya sekarang — lalu mulai dari
            Diagnostik: ia akan menunjukkan dimensi mana yang paling bocor.
          </motion.p>

          {/* Primary download */}
          <motion.div variants={fadeUp} className="mx-auto mt-9 max-w-sm">
            <a
              href={DRIVE_DOWNLOAD}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-card bg-blue px-6 py-4 text-base font-medium text-white transition-colors hover:bg-blue-soft"
            >
              Unduh playbook (PDF) ↓
            </a>
            <p className="mt-3 text-xs text-faint">
              Gagal mengunduh?{' '}
              <a
                href={DRIVE_VIEW}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline-offset-4 hover:underline"
              >
                Buka di Google Drive
              </a>
              .
            </p>
          </motion.div>

          {/* Next step — soft offer */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-14 max-w-md rounded-card border border-line bg-surface p-6 text-left"
          >
            <p className="text-micro uppercase tracking-wide text-cream">Selagi Anda di sini</p>
            <p className="mt-2 text-pretty leading-relaxed text-muted">
              Kerangka ini yang Aditya pakai untuk membenahi pemasaran klien-klien F&B-nya — dari audit hingga
              eksekusi. Ingin dipasang di bisnis Anda?{' '}
              <Link to="/#contact" className="text-cream underline-offset-4 hover:underline">
                Hubungi Aditya
              </Link>{' '}
              — ia membuka beberapa slot advisory tiap bulan.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12">
            <Link to="/" className="text-xs text-faint transition-colors hover:text-cream">
              Lihat portofolio lengkap · {site.url.replace('https://', '')}
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
