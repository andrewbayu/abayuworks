import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { genRefId, submitContact } from '../lib/forms';
import { fadeUp, stagger, inView } from '../lib/motion';

// URL checkout Lynk.id
export const LYNK_CHECKOUT_URL = 'https://lynk.id/growthlab/k3ryx868xg2r';

const RESOURCE = 'Meta Ads Pre-Flight Checklist (Vol. 01)';
const THANK_YOU = '/preflight-checklist/thank-you';

const inputCls =
  'w-full rounded-card border border-line bg-elevated px-4 py-3 text-base text-ink placeholder:text-faint focus:border-cream focus:outline-none focus:ring-2 focus:ring-cream/30';

export function OptInForm({ id, cta = 'Send me the checklist' }) {
  const navigate = useNavigate();
  const [state, setState] = useState('idle'); // idle | sending | error
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

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
        consent: true,
      });
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
        aria-label="Get the checklist"
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={inputCls}
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="btn-gradient-glow inline-flex shrink-0 items-center justify-center gap-2 rounded-card px-5 py-3 font-medium text-white transition-all disabled:opacity-60 sm:px-6"
        >
          {state === 'sending' ? 'Sending…' : `${cta} →`}
        </button>
      </form>
      <label className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-faint">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-cream"
        />
        <span>Send the checklist and practical follow-up notes. Unsubscribe anytime.</span>
      </label>
      {state === 'error' && (
        <p className="mt-2 text-sm text-red-400">Couldn’t send just now — try again in a moment.</p>
      )}
    </div>
  );
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'The Meta Ads Pre-Flight Checklist (Andromeda Era)',
  image: 'https://storage.googleapis.com/bluestark_explorer/infinitiworks/Preflight-checklist-mockup.png',
  description:
    'SOP dan field guide pre-flight Meta Ads 2026 oleh Aditya Bayu. 5 fase audit sebelum meluncurkan iklan di era AI Andromeda.',
  offers: {
    '@type': 'Offer',
    price: '49000',
    priceCurrency: 'IDR',
    availability: 'https://schema.org/InStock',
    url: site.url + '/preflight-checklist/',
  },
  author: { '@type': 'Person', name: site.name, jobTitle: site.role },
};

const phases = [
  {
    no: '01',
    kicker: 'Infrastruktur & Telemetri',
    title: 'The Single Tracking Number You Must Clear Before Spending',
    body: 'Kenapa memasang Pixel biasa membuat Meta setengah buta di era privasi modern. Ada satu standar Event Match Quality (EMQ) yang wajib Anda lewati—jika angka ini gagal, Meta akan mengoptimasi ke orang yang tidak akan pernah beli.',
    badge: 'Kualitas Sinyal',
  },
  {
    no: '02',
    kicker: 'Arsitektur Akun',
    title: 'The 2018 Account Setup Quietly Trapping You in "Learning Limited"',
    body: 'Pola lama memecah budget ke belasan ad set adalah pembunuh profit nomor satu. Pelajari aturan likuiditas konversi mingguan agar mesin AI Meta memiliki volume data yang cukup untuk menstabilkan acquisition cost.',
    badge: 'Anti-Learning Limited',
  },
  {
    no: '03',
    kicker: 'The Hook Engine',
    title: 'The 3-Second "Silent Mirror Test" Every Video Hook Must Pass',
    body: 'Lebih dari 80% pengguna scroll feed dalam mode bisu (sound off). Jika hook Anda hanya ada di audio atau diawali logo 5 detik, audiens kabur dan algoritma Andromeda akan menebak siapa target pasar Anda menggunakan kartu kredit Anda.',
    badge: 'Vector Targeting',
  },
  {
    no: '04',
    kicker: 'Portofolio Creative',
    title: 'Why 20 Minor Variations Force Meta’s AI to Cancel Your Ads Out',
    body: 'Mengganti warna tombol atau backsound bukan tes kreatif di mata neural network Meta. Gunakan Matriks 6 Sudut Pandang agar portofolio creative Anda memberikan hipotesis riil tanpa saling kanibal di lelang internal.',
    badge: '6-Angle Matrix',
  },
  {
    no: '05',
    kicker: 'Disiplin Eksekusi & Metrik Riil',
    title: 'The Day 3 Panic Mistake That Resets Machine Learning to Zero',
    body: 'Aturan freeze 7–14 hari yang melindungi fase belajar mesin. Dua rasio diagnostik penting yang wajib Anda periksa sebelum menyalahkan CPA, membedakan kelelahan materi iklan vs funnel bocor, serta menyambungkannya ke kas nyata.',
    badge: 'Data-Driven Decision',
  },
];



const fixes = [
  {
    icon: '🛑',
    title: 'No more burning budget in "Learning Limited"',
    desc: 'Hentikan pemborosan ad spend pada campaign terfragmentasi yang tidak pernah stabil. Terapkan aturan likuiditas yang memberi AI Meta ruang menemukan pembeli riil.',
  },
  {
    icon: '🎯',
    title: 'No more leaky tracking & junk leads',
    desc: 'Hentikan kebocoran data yang melatih Meta mendatangkan leads abal-abal. Kunci standar Event Match Quality (EMQ) server-side sebelum budget keluar.',
  },
  {
    icon: '⚡',
    title: 'No more scroll drop-off in the first 3 seconds',
    desc: 'Saring hook video Anda lewat Silent Mirror Test sebelum live. Pastikan pesan inti tertangkap 85% audiens yang scroll feed dalam mode bisu (mute).',
  },
  {
    icon: '📊',
    title: 'No more Day 3 panic & algorithm resets',
    desc: 'Hentikan kebiasaan mereset fase belajar mesin karena panik. Baca 2 metrik diagnostik kunci untuk tahu persis kapan harus tahan, matikan, atau scale-up.',
  },
  {
    icon: '📝',
    title: 'Instant clarity: an ironclad pass/fail gate',
    desc: 'Tim Anda tidak lagi meluncurkan iklan secara buta. Dilengkapi Master SOP Sheet 2 halaman serta Google Docs Master File yang fully editable untuk tim/agensi Anda.',
  },
];

const faqs = [
  {
    q: 'Apakah checklist ini cocok untuk pemula?',
    a: 'Sangat cocok. Checklist ini justru menghindarkan pemula dari kebiasaan buruk media buying jadul yang menghabiskan budget secara sia-sia. Setiap poin dilengkapi penjelasan logis dan kriteria verifikasi yang jelas.',
  },
  {
    q: 'Apakah bisa digunakan untuk bisnis non-ecommerce (B2B, Klinik, Jasa)?',
    a: 'Ya. Prinsip Andromeda berlaku sama: bisnis lead-gen/jasa justru paling sering gagal di Phase 01 (kualitas sinyal & qualified lead loop) dan Phase 03 (hook persona). Semua tipe bisnis dicakup.',
  },
  {
    q: 'Format apa saja yang saya dapatkan setelah pembelian?',
    a: 'Anda langsung mendapatkan file PDF resolusi tinggi format A5 siap baca/cetak, link akses ke Google Docs Master File yang bisa Anda edit/duplikat, serta Master Checklist Field Sheet 2 halaman.',
  },
  {
    q: 'Bagaimana cara transaksinya di Lynk.id?',
    a: 'Klik tombol beli di halaman ini, Anda akan diarahkan ke Lynk.id. Pembayaran mendukung QRIS (GoPay, OVO, ShopeePay, Dana), Virtual Account bank, dan Kartu Kredit. Akses unduh dikirim instan detik itu juga.',
  },
];

export default function PreflightChecklist() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Seo
        title="The Meta Ads Pre-Flight Checklist · Aditya Bayu"
        description="SOP pre-flight Meta Ads 2026 di era AI Andromeda. Dapatkan A5 Field Guide PDF + Google Docs Master File. Diskon 62%: Rp49.000 (Normal Rp129.000)."
        path="/preflight-checklist/"
        jsonLd={jsonLd}
      />

      <main className="relative min-h-screen overflow-hidden bg-bg">
        {/* Ambient backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(28,61,115,0.45), transparent 70%)' }}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto w-full max-w-prose px-5 pb-24 pt-12 sm:pt-20"
        >
          {/* Top Promo Announcement Pill */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-surface/80 px-3.5 py-1.5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-micro font-bold uppercase tracking-wider text-cream">
                PROMO LAUNCH DISKON 62% · HANYA RP49.000
              </span>
            </div>
          </motion.div>

          {/* Pre-headline Eyebrow */}
          <motion.p variants={fadeUp} className="eyebrow mt-5 text-center sm:text-left">
            OPERATOR’S FIELD GUIDE · VOL. 01 — META ADS (ANDROMEDA ERA)
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-3 text-balance font-display text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl"
          >
            Sebelum Anda bakar satu rupiah pun di Meta Ads: <span className="text-cream">Jalankan 5 gerbang pre-flight ini.</span>
          </motion.h1>

          {/* Subheadline / Dek */}
          <motion.p variants={fadeUp} className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Meta tidak lagi membiarkan Anda memilih audiens secara manual. Dengan arsitektur <strong className="text-ink">Andromeda AI</strong>, creative dan sinyal data Anda yang menjadi mesin penargetannya. 
            Kebanyakan budget iklan boncos <em>bukan</em> karena produk jelek, tapi karena akun Anda gagal di 5 gerbang teknis sebelum iklan tayang. Ini checklist yang memastikan Anda siap terbang.
          </motion.p>

          {/* Product Visual Mockup */}
          <motion.div variants={fadeUp} className="mt-8 text-center">
            <div className="relative inline-block">
              <img
                src="https://storage.googleapis.com/bluestark_explorer/infinitiworks/Preflight-checklist-mockup.png"
                alt="The Meta Ads Pre-Flight Checklist Mockup"
                width="900"
                height="510"
                loading="eager"
                className="mx-auto w-full max-w-[340px] sm:max-w-[420px] h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
              />
              <span className="absolute -bottom-2 right-4 rounded bg-blue px-2.5 py-1 font-display text-xs font-bold text-white shadow-lg border border-white/10">
                A5 Field Guide + Google Docs Master
              </span>
            </div>
          </motion.div>

          {/* Above-the-fold Offer / Purchase Box */}
          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-card border border-cream/30 bg-surface/90 p-5 shadow-glow sm:p-6 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Spesial Launch Offer
                </p>
                <div className="mt-1 flex items-baseline gap-2.5">
                  <span className="font-display text-3xl font-bold text-ink sm:text-4xl">
                    Rp49.000
                  </span>
                  <span className="text-base text-faint line-through">
                    Rp129.000
                  </span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400">
                    Hemat 62%
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">
                  Akses instan · Termasuk PDF A5, Google Docs, dan Checklist SOP
                </p>
              </div>

              <a
                href={LYNK_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient-glow inline-flex shrink-0 items-center justify-center gap-2 rounded-card px-6 py-4 font-display text-base font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Beli Sekarang di Lynk.id →
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-line/60 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Instant Download via Email &amp; Lynk.id
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Mendukung QRIS, GoPay, OVO, VA Bank
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Lifetime Updates
              </span>
            </div>
          </motion.div>

          {/* Authority strip */}
          <motion.div
            variants={fadeUp}
            className="hidden mt-7 flex items-center gap-3 border-t border-line pt-5"
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
              <span className="text-ink font-semibold">{site.name}</span> — Fractional CMO &amp; venture builder.
              SOP pre-flight yang sama persis yang dijalankan untuk akun-akun klien sebelum satu rupiah pun dibelanjakan.
            </p>
          </motion.div>

          {/* Problem Agitation Section */}
          <motion.section {...inView} variants={stagger(0.07)} className="hidden mt-16 border-t border-line pt-12">
            <motion.p variants={fadeUp} className="eyebrow">
              REALITAS LAPANGAN
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Kenapa Iklan Meta Anda Sering Macet &amp; Boncos?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted leading-relaxed">
              Selama satu dekade, media buyer diajarkan mengotak-atik tuas di Ads Manager: menumpuk lookalike, 
              menyempitkan interest keywords, dan memecah budget ke belasan ad set kecil. 
              Tapi di tahun 2026, era itu sudah <strong className="text-ink">berakhir</strong>.
            </motion.p>

            <div className="mt-6 grid gap-3 sm:gap-4">
              <motion.div variants={fadeUp} className="card p-4 sm:p-5 border-l-4 border-l-red-400/80">
                <h3 className="font-display font-bold text-ink text-base">
                  1. Jebakan "Learning Limited" Karena Akun Terfragmentasi
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  Meta butuh ~50 konversi per ad set per minggu untuk menstabilkan optimasi. Membagi budget Rp20 juta ke 10 ad set kecil menjamin mesin tidak pernah selesai belajar. CPM melonjak 30-50%.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="card p-4 sm:p-5 border-l-4 border-l-amber-400/80">
                <h3 className="font-display font-bold text-ink text-base">
                  2. Sinyal Telemetri Cacat (Pixel Bocor Tanpa CAPI)
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  Mengandalkan browser pixel biasa membuat Anda kehilangan 20–35% konversi karena ad-blocker dan proteksi privasi iOS. Mesin akhirnya mencari orang yang salah karena data konversi yang masuk terputus.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="card p-4 sm:p-5 border-l-4 border-l-blue-400/80">
                <h3 className="font-display font-bold text-ink text-base">
                  3. Creative Vague &amp; Hook Tanpa Teks Layar
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  85% pengguna scroll video dalam mode senyap (mute). Jika hook Anda cuma ada di audio atau pembukaannya logo animasi 5 detik, audiens kabur, dan AI Andromeda tidak bisa membaca siapa target audiens Anda.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Pull-quote */}
          <motion.blockquote
            {...inView}
            variants={fadeUp}
            className="hidden mt-14 border-l-2 border-cream/70 pl-5 sm:pl-6 bg-surface/40 py-3 rounded-r-card"
          >
            <p className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
              "Jika mesin tidak bisa membaca siapa target iklan Anda dalam 3 detik pertama, mesin akan menebak. Dan ia akan menebak menggunakan budget Anda."
            </p>
            <footer className="mt-2 text-xs font-medium uppercase tracking-wider text-cream">
              — Aditya Bayu
            </footer>
          </motion.blockquote>

          {/* What's inside: The 5 Phases */}
          <motion.section {...inView} variants={stagger(0.07)} className="hidden mt-16">
            <motion.p variants={fadeUp} className="eyebrow">
              ISI CHECKLIST LENGKAP
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              5 Fase Pre-Flight Yang Akan Anda Kuasai
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-muted">
              Jalankan secara berurutan, dari atas ke bawah, setiap kali Anda membangun campaign.
            </motion.p>

            <div className="mt-8 flex flex-col gap-4">
              {phases.map((p) => (
                <motion.div
                  key={p.no}
                  variants={fadeUp}
                  className="card p-5 sm:p-6 transition-all hover:border-cream/40"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-2xl font-bold text-cream sm:text-3xl">
                      {p.no}
                    </span>
                    <span className="rounded bg-elevated px-2.5 py-0.5 text-micro font-bold uppercase tracking-wider text-muted border border-line">
                      {p.badge}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-micro font-semibold uppercase tracking-wider text-cream/90">{p.kicker}</p>
                    <h3 className="mt-1 font-display text-lg font-bold leading-snug text-ink sm:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>


          {/* What This Fixes Immediately */}
          <motion.section {...inView} variants={stagger(0.07)} className="hidden mt-16 border-t border-line pt-12">
            <motion.p variants={fadeUp} className="eyebrow">
              MANFAAT NYATA &amp; PAIN POINTS TERATASI
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              What This Fixes Immediately
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-muted">
              Bukan sekadar tumpukan teori—ini adalah proteksi langsung agar modal iklan Anda tidak menguap sia-sia:
            </motion.p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fixes.map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="card p-5 bg-elevated/50">
                  <div className="text-2xl" aria-hidden>{item.icon}</div>
                  <h3 className="mt-2.5 font-display text-base font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What this book is */}
          <motion.section {...inView} variants={fadeUp} className="mt-16 border-t border-line pt-12">
            <motion.p variants={fadeUp} className="eyebrow">INI BUKU APA?</motion.p>
            <motion.h2 variants={fadeUp} className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Panduan checklist sebelum Anda mulai beriklan di Meta Ads.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted leading-relaxed">
              Preflight Checklist adalah ebook yang membantu Anda mendapatkan clarity sebelum beriklan. Isinya panduan
              checklist untuk memastikan campaign sudah siap, sehingga Anda tidak membuang budget dan bisa mengoptimalkan
              iklan berdasarkan best practice terbaru dari Meta Andromeda Ads Engine.
            </motion.p>
          </motion.section>

          {/* What is inside */}
          <motion.section {...inView} variants={stagger(0.07)} className="mt-16">
            <motion.p variants={fadeUp} className="eyebrow">ISINYA TENTANG APA?</motion.p>
            <motion.h2 variants={fadeUp} className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Lima gerbang yang menentukan apakah campaign siap jalan.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-muted leading-relaxed">
              Kisi-kisinya sederhana. Detail verifikasinya yang membuatnya berguna.
            </motion.p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ['01', 'Sinyal', 'Apakah Meta menerima data conversion yang bisa dipercaya?'],
                ['02', 'Struktur', 'Apakah budget dan account architecture memberi ruang untuk belajar?'],
                ['03', 'Hook', 'Apakah pesan utama terbaca sebelum orang scroll pergi?'],
                ['04', 'Creative', 'Apakah Anda menguji ide yang berbeda, bukan kosmetik yang berbeda?'],
                ['05', 'Metrik', 'Kapan harus tahan, memperbaiki, atau scale—berdasarkan evidence?'],
              ].map(([no, title, text]) => (
                <motion.div key={no} variants={fadeUp} className="card p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <span className="font-display text-xl font-bold text-cream">{no}</span>
                    <div>
                      <h3 className="font-display font-bold text-ink">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What the reader gets */}
          <motion.section {...inView} variants={stagger(0.07)} className="mt-16 border-t border-line pt-12">
            <motion.p variants={fadeUp} className="eyebrow">SETELAH BACA, DAPAT APA?</motion.p>
            <motion.h2 variants={fadeUp} className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Anda tidak lagi launch berdasarkan feeling.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted leading-relaxed">
              Anda punya keputusan yang lebih jelas sebelum uang masuk ke auction: mana yang sudah ready, mana yang harus
              diperbaiki, dan kenapa perbaikannya matters.
            </motion.p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ['A go / no-go gate', 'Tahu apakah campaign layak diluncurkan atau masih menyimpan risiko yang mahal.'],
                ['A repeatable SOP', 'Tim atau agency punya urutan pemeriksaan yang sama setiap kali membuat campaign.'],
                ['Better learning', 'Meta mendapat signal yang lebih bersih, sementara Anda membaca hasil dengan lebih tenang.'],
              ].map(([title, text]) => (
                <motion.div key={title} variants={fadeUp} className="card bg-elevated/50 p-5">
                  <h3 className="font-display font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pricing Comparison */}
          <motion.section {...inView} variants={fadeUp} className="mt-16 card p-6 sm:p-8 bg-surface/90 border-cream/20">
            <div className="text-center">
              <span className="eyebrow">PERBANDINGAN INVESTASI</span>
              <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                Kenapa Rp49.000 Adalah Keputusan Termudah Anda Hari Ini?
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-red-500/20 bg-red-950/20 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-red-400">TANPA CHECKLIST INI</p>
                <p className="mt-2 font-display text-xl font-bold text-ink">Bakar Budget Coba-coba</p>
                <ul className="mt-3 space-y-2 text-xs text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✕</span> Habis Rp500.000 – Rp2.000.000/hari di ad set stuck di learning limited
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✕</span> Data CAPI bocor, Meta mencari audiens yang tidak pernah beli
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✕</span> Rombak creative tiap 2 hari karena panik, mereset algoritma
                  </li>
                </ul>
              </div>

              <div className="rounded-card border border-emerald-500/30 bg-emerald-950/20 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">DENGAN PRE-FLIGHT CHECKLIST</p>
                <p className="mt-2 font-display text-xl font-bold text-ink">Investasi Rp49.000 (Sekali)</p>
                <ul className="mt-3 space-y-2 text-xs text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> SOP teruji standar Fractional CMO sebelum campaign live
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Sinyal data presisi (EMQ &gt; 7.0), konversi terukur ke kas nyata
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Tim punya checklist jelas: lolos baru jalan, gagal perbaiki dulu
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section {...inView} variants={stagger(0.07)} className="mt-16">
            <motion.p variants={fadeUp} className="eyebrow">
              PERTANYAAN UMUM
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="mt-6 flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="card overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-ink">
                      {faq.q}
                    </span>
                    <span className="text-cream text-lg font-bold">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-muted leading-relaxed border-t border-line/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final CTA Card */}
          <motion.section
            {...inView}
            variants={fadeUp}
            className="mt-16 rounded-card border-2 border-cream/40 bg-gradient-to-b from-surface to-elevated p-6 text-center sm:p-8 shadow-glow"
          >
            <span className="eyebrow">AMANKAN AKSES ANDA</span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-4xl">
              Siap Menjalankan Pre-Flight Sebelum Iklan Berikutnya Tayang?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty text-sm sm:text-base text-muted">
              Dapatkan Field Guide A5, Google Docs Master File, dan Master SOP Sheet sekarang juga dengan harga promo launch.
            </p>

            <div className="mt-6 inline-flex flex-col items-center">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-ink sm:text-5xl">Rp49.000</span>
                <span className="text-base text-faint line-through">Rp129.000</span>
              </div>
              <p className="mt-1 text-xs text-cream font-medium">Diskon 62% · Sekali Bayar untuk Akses Selamanya</p>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href={LYNK_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient-glow inline-flex w-full max-w-md items-center justify-center gap-2 rounded-card px-8 py-4 font-display text-base font-bold text-white shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Beli Sekarang via Lynk.id (Rp49.000) →
              </a>
            </div>

            <p className="mt-4 text-xs text-faint">
              Pembayaran aman via QRIS, GoPay, OVO, ShopeePay, Virtual Account &amp; Kartu Kredit. File langsung dikirim ke email Anda.
            </p>

            <div className="mt-6 pt-6 border-t border-line text-left text-xs leading-relaxed text-muted">
              <p>
                <strong className="text-ink">P.S.</strong> — Ini bukan checklist teori. Ini adalah SOP gerbang yang dijalankan Aditya Bayu di akun-akun klien beranggaran puluhan hingga ratusan juta rupiah. Jika Anda lebih memilih agar sistem acquisition dan funnels Anda diaudit langsung oleh Aditya, silakan{' '}
                <Link to="/#contact" className="text-cream underline underline-offset-4">
                  hubungi untuk konsultasi Fractional CMO
                </Link>.
              </p>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.div variants={fadeUp} className="mt-14 border-t border-line pt-6 text-center">
            <Link to="/" className="text-xs text-faint transition-colors hover:text-cream">
              View full portfolio · adityabayu.com
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
