import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { genRefId, submitContact } from '../lib/forms';
import { fadeUp, stagger, inView } from '../lib/motion';

const RESOURCE = 'Playbook Marketing F&B 2026';
const THANK_YOU = '/playbook-fnb/thank-you';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Playbook Marketing F&B 2026 — Meja Penuh, Kas Kosong',
  description:
    'Playbook gratis untuk pemilik kafe & restoran Indonesia: kenapa bisnis kuliner yang viral justru tutup, dan cetak biru sistem pemasaran yang membangun pelanggan yang kembali. Termasuk audit 60 detik dan rencana 7 hari.',
  url: site.url + '/playbook-fnb/',
  inLanguage: 'id-ID',
  author: { '@type': 'Person', name: site.name, jobTitle: site.role },
};

// The eight parts of the playbook, framed as curiosity opens (Brunson).
const chapters = [
  {
    no: '00',
    kicker: 'Diagnostik',
    title: 'Audit 60 detik: temukan persis di mana sistem Anda bocor',
    body: 'Lima pernyataan, satu skor. Dimensi dengan angka terendah adalah bab yang Anda kerjakan lebih dulu — sisanya bisa menunggu.',
  },
  {
    no: '01',
    kicker: 'Fondasi',
    title: 'Kenapa reach jutaan tetap bikin gerai sepi',
    body: 'Jangkauan hanyalah bahan mentah. Ia jadi kunjungan hanya lewat awareness — dan awareness dibentuk frekuensi, bukan sekali meledak. Metrik mana yang harus dipantau, dan mana yang cuma vanity.',
  },
  {
    no: '02',
    kicker: 'Kemitraan',
    title: 'Kenapa 30 nano-KOL mengalahkan 1 makro — dengan hitungannya',
    body: '≈Rp909 vs ≈Rp1.846 per-engagement, dan 30 aset UGC vs 1. Plus: kapan makro tetap sah dipakai, dan klausul whitelisting yang wajib ada di kontrak.',
  },
  {
    no: '03',
    kicker: 'Distribusi',
    title: 'Satu tugas untuk tiap platform — bukan konten yang sama ditempel ulang',
    body: 'Peta TikTok (penemuan) → Instagram (kepercayaan) → Facebook (konversi usia 30–55) → WhatsApp (retensi, open ~98%), plus roda gila O2O yang membuat pelanggan memproduksi konten Anda.',
  },
  {
    no: '04',
    kicker: 'Berbayar',
    title: 'Meta Ads era Andromeda: berhenti melawan mesin, mulai memberinya makan',
    body: 'Kenapa lookalike tak lagi relevan, kenapa materi kreatif kini jadi penargetan, dan setup F&B: geofence 3–5 km, 10–15 materi beda konsep, Pixel + CAPI + offline conversion.',
  },
  {
    no: '05',
    kicker: 'Eksekusi',
    title: 'Rencana 7 hari: dari membaca jadi bergerak',
    body: 'Tujuh langkah, dimulai dari dimensi yang paling bocor. Selesai satu minggu, sistemnya jalan — bukan dokumen yang cuma disimpan.',
  },
];

const forWho = [
  'Konten Anda pernah tembus ratusan ribu view — tapi gerai tetap sepi.',
  'Biaya iklan Meta Anda naik sejak akhir 2025, dan penargetan yang dulu jitu tak lagi bekerja.',
  'Anda pemilik kafe atau resto yang ingin pelanggan kembali berkali-kali — bukan ramai sekali lalu hilang.',
];

const inputCls =
  'w-full rounded-card border border-line bg-elevated px-4 py-3 text-base text-ink placeholder:text-faint focus:border-cream focus:outline-none focus:ring-2 focus:ring-cream/30';

function OptInForm({ id, cta = 'Kirim playbook-nya' }) {
  const navigate = useNavigate();
  const [state, setState] = useState('idle'); // idle | sending | error
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      const ref = genRefId();
      await submitContact({
        subject: `Lead magnet request: ${RESOURCE} (${ref})`,
        from_name: email,
        email,
        resource: RESOURCE,
        ref_id: ref,
      });
      // Lead captured — hand off to the thank-you page where the download lives.
      navigate(THANK_YOU);
    } catch {
      setState('error');
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2.5 sm:flex-row"
        aria-label="Ambil playbook F&B"
      >
        <label htmlFor={id} className="sr-only">
          Alamat email
        </label>
        <input
          id={id}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@anda.com"
          className={inputCls}
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-card bg-blue px-5 py-3 font-medium text-white transition-colors hover:bg-blue-soft disabled:opacity-60 sm:px-6"
        >
          {state === 'sending' ? 'Mengirim…' : `${cta} →`}
        </button>
      </form>
      {state === 'error' && (
        <p className="mt-2 text-sm text-red-400">Belum terkirim — coba lagi sebentar lagi.</p>
      )}
      <p className="mt-2.5 text-xs text-faint">
        Gratis. Tanpa spam. Link download muncul di halaman berikutnya.
      </p>
    </div>
  );
}

export default function PlaybookFnb() {
  return (
    <>
      <Seo
        title="Playbook Marketing F&B 2026 — Meja Penuh, Kas Kosong · Aditya Bayu"
        description="Yang viral tutup. Yang diingat jadi unicorn. Playbook gratis untuk pemilik kafe & restoran: sistem pemasaran F&B 2026 yang membangun pelanggan yang kembali — audit 60 detik + rencana 7 hari."
        path="/playbook-fnb/"
        jsonLd={jsonLd}
      />

      <main className="relative min-h-screen overflow-hidden bg-bg">
        {/* Ambient backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(28,61,115,0.35), transparent 70%)' }}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto w-full max-w-prose px-5 pb-20 pt-16 sm:pt-24"
        >
          {/* Pre-headline */}
          <motion.p variants={fadeUp} className="eyebrow">
            Playbook gratis · Strategi Marketing F&B Indonesia 2026
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl"
          >
            Yang viral tutup. Yang diingat jadi unicorn.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-pretty text-lg leading-relaxed text-muted">
            Warunk Upnormal punya 85 gerai dan pendapatan besar — tetap tutup. Kopi Kenangan meluncur dengan
            anggaran iklan <span className="text-cream">Rp0</span>, lalu jadi unicorn F&B pertama Asia Tenggara.
            Bedanya bukan siapa yang lebih viral — tapi siapa yang tidak memutus rantainya. Playbook ini menutup
            kebocoran itu, satu per satu: lengkap dengan <em>audit 60 detik</em> dan <em>rencana 7 hari</em>.
          </motion.p>

          {/* Above-the-fold opt-in */}
          <motion.div variants={fadeUp} className="mt-8">
            <OptInForm id="optin-top" />
          </motion.div>

          {/* Authority strip */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center gap-3 border-t border-line pt-6"
          >
            <img
              src="/aditya-bayu.webp"
              alt={site.name}
              width="44"
              height="44"
              loading="eager"
              className="h-11 w-11 shrink-0 rounded-full border border-white/15 object-cover"
            />
            <p className="text-sm leading-snug text-muted">
              <span className="text-ink">{site.name}</span> — Digital Marketer &amp; Fractional CMO, 10 tahun &amp;
              100+ klien. Disusun dari riset industri kafe &amp; restoran Indonesia 2026 dan pembaruan sistem iklan
              Meta (Andromeda). Setiap angka bersumber dari data, bukan opini.
            </p>
          </motion.div>

          {/* What's inside */}
          <motion.section {...inView} variants={stagger(0.07)} className="mt-16">
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              Isi playbook
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-muted">
              Delapan bagian, satu tujuan: pengunjung yang membayar — dan kembali.
            </motion.p>

            <div className="mt-8 flex flex-col gap-4">
              {chapters.map((p) => (
                <motion.div
                  key={p.no}
                  variants={fadeUp}
                  className="card flex gap-4 p-5 sm:gap-6 sm:p-6"
                >
                  <span
                    className="font-display text-3xl font-semibold leading-none text-cream/70 sm:text-4xl"
                    aria-hidden
                  >
                    {p.no}
                  </span>
                  <div className="min-w-0">
                    <p className="text-micro uppercase tracking-wide text-cream">{p.kicker}</p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pull-quote */}
          <motion.blockquote
            {...inView}
            variants={fadeUp}
            className="mt-16 border-l-2 border-cream/50 pl-5 sm:pl-6"
          >
            <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              Viralitas adalah akuisisi. Laba adalah retensi. Anda tidak bangkrut karena kurang viral — Anda
              bangkrut karena orang tidak kembali.
            </p>
          </motion.blockquote>

          {/* Who it's for */}
          <motion.section {...inView} variants={stagger(0.07)} className="mt-16">
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              Baca ini jika…
            </motion.h2>
            <ul className="mt-6 flex flex-col gap-3">
              {forWho.map((line) => (
                <motion.li key={line} variants={fadeUp} className="flex gap-3 text-pretty text-muted">
                  <span className="mt-1 shrink-0 text-cream" aria-hidden>
                    ✓
                  </span>
                  <span>{line}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            {...inView}
            variants={fadeUp}
            className="mt-16 rounded-card border border-line bg-surface p-6 sm:p-8"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Ambil playbook-nya
            </h2>
            <p className="mt-2 text-pretty text-muted">
              Delapan bagian, satu sistem: audit 60 detik, empat bab strategi, dan rencana eksekusi 7 hari.
              Masukkan email Anda — link-nya muncul dalam 30 detik ke depan.
            </p>
            <div className="mt-6">
              <OptInForm id="optin-bottom" cta="Kirim ke saya" />
            </div>

            {/* P.S. — Brunson signature */}
            <p className="mt-6 text-sm leading-relaxed text-muted">
              <span className="text-ink">P.S.</span> — Ini bukan teori. Kerangka yang sama Aditya pakai untuk
              membenahi pemasaran klien-klien F&B-nya. Kalau Anda ingin seluruh sistem ini dipasang di bisnis Anda
              — dari audit, alokasi anggaran, hingga eksekusi —{' '}
              <Link to="/#contact" className="text-cream underline-offset-4 hover:underline">
                hubungi Aditya
              </Link>
              . Ia membuka beberapa slot advisory tiap bulan, dan mengutamakan pemilik yang sudah bergerak.
            </p>
          </motion.section>

          {/* Footer */}
          <motion.div variants={fadeUp} className="mt-14 border-t border-line pt-6 text-center">
            <Link to="/" className="text-xs text-faint transition-colors hover:text-cream">
              Lihat portofolio lengkap · adityabayu.com
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
