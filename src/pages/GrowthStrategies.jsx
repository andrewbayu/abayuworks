import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Seo from '../components/Seo';
import { growthStrategies, strategyChapters } from '../data/growthStrategies';
import { site } from '../data/site';
import '../styles/growth-strategies.css';

const PATH = '/108-strategi-bisnis/';
const STORAGE_KEY = 'abayu-growth-priorities-v1';
const PAGE_SIZE = 6;
const goals = ['Semua', 'Fondasi', 'Akuisisi', 'Konversi', 'Retensi', 'Sistem'];
const normalize = (value) => value.toLocaleLowerCase('id').trim();
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: '108 Strategi untuk Mengembangkan Bisnis',
  url: site.url + PATH, inLanguage: 'id',
  author: { '@type': 'Person', name: site.name, url: site.url },
  mainEntity: {
    '@type': 'ItemList', numberOfItems: growthStrategies.length,
    itemListElement: growthStrategies.map((strategy) => ({
      '@type': 'ListItem', position: strategy.id, name: strategy.title,
      url: `${site.url}${PATH}#strategi-${strategy.id}`,
    })),
  },
};

export default function GrowthStrategies() {
  const [query, setQuery] = useState('');
  const [goal, setGoal] = useState('Semua');
  const [chapter, setChapter] = useState('all');
  const [effort, setEffort] = useState('all');
  const [savedOnly, setSavedOnly] = useState(false);
  const [saved, setSaved] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [hasSelection, setHasSelection] = useState(false);
  const [page, setPage] = useState(1);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const restoreHash = () => {
      const hash = window.location.hash.slice(1);
      const group = strategyChapters.find((item) => `area-${item.id}` === hash);
      const strategy = growthStrategies.find((item) => `strategi-${item.id}` === hash);
      if (!group && !strategy) return;
      setChapter(group?.id || strategy.chapter);
      setGoal('Semua'); setEffort('all'); setQuery(''); setSavedOnly(false);
      setPage(strategy ? Math.floor(strategyChapters.find((item) => item.id === strategy.chapter).strategies.indexOf(strategy) / PAGE_SIZE) + 1 : 1);
      setHasSelection(true);
    };
    restoreHash();
    window.addEventListener('hashchange', restoreHash);
    return () => window.removeEventListener('hashchange', restoreHash);
  }, []);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (Array.isArray(stored)) {
        setSaved([...new Set(stored.filter((id) => Number.isInteger(id) && id >= 1 && id <= growthStrategies.length))]);
      }
    } catch { setStorageAvailable(false); }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(saved)); setStorageAvailable(true); }
    catch { setStorageAvailable(false); }
  }, [saved, loaded]);

  useEffect(() => {
    let openedForPrint = [];
    const beforePrint = () => {
      openedForPrint = Array.from(document.querySelectorAll('.growth-strategy details:not([open])'));
      openedForPrint.forEach((detail) => { detail.open = true; });
    };
    const afterPrint = () => {
      openedForPrint.forEach((detail) => { detail.open = false; });
      openedForPrint = [];
    };
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);
    return () => {
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
    };
  }, []);

  const toggleSaved = (id) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const select = (setter, value) => { setter(value); setHasSelection(true); setPage(1); };
  const chooseChapter = (id) => {
    setChapter(id); setGoal('Semua'); setEffort('all'); setQuery(''); setSavedOnly(false); setHasSelection(true); setPage(1);
    requestAnimationFrame(() => document.getElementById('growth-results')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }));
  };
  const reset = () => {
    setQuery(''); setGoal('Semua'); setChapter('all'); setEffort('all'); setSavedOnly(false); setHasSelection(false); setPage(1);
    if (/^#(area|strategi)-/.test(window.location.hash)) window.history.replaceState(null, '', window.location.pathname + window.location.search + '#jelajahi');
  };
  const visibleChapters = strategyChapters.map((group) => ({
    ...group,
    strategies: group.strategies.filter((strategy) =>
      (goal === 'Semua' || strategy.goal === goal) &&
      (chapter === 'all' || strategy.chapter === chapter) &&
      (effort === 'all' || strategy.effort === effort) &&
      (!savedOnly || saved.includes(strategy.id)) &&
      normalize([strategy.title, strategy.action, strategy.example, strategy.metric, group.title].join(' ')).includes(normalize(query))
    ),
  })).filter((group) => group.strategies.length);
  const visibleCount = visibleChapters.reduce((count, group) => count + group.strategies.length, 0);
  const results = visibleChapters.flatMap((group) => group.strategies.map((strategy) => ({ ...strategy, chapterTitle: group.title })));
  const pageCount = Math.max(1, Math.ceil(visibleCount / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const cards = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const resultKey = [query, goal, chapter, effort, savedOnly, currentPage].join(':');
  const changePage = (next) => {
    setPage(next);
    document.getElementById('growth-results')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="growth-page" lang="id" data-print-saved={saved.length > 0}>
      <Seo title="108 Strategi Mengembangkan Bisnis di Indonesia · Aditya Bayu"
        description="108 strategi praktis untuk pemilik bisnis Indonesia. Temukan ide social media, iklan, WhatsApp, penjualan, retensi, dan operasional. Simpan prioritas Anda."
        path={PATH} lang="id" jsonLd={jsonLd} />

      <header className="growth-hero wrap">
        <div className="growth-hero-copy">
          <p className="growth-byline">Bisnis stuck?</p>
          <h1>Coba <span>108 Strategi</span> yang bisa kamu terapkan dalam 30 hari kedepan.</h1>
          <p className="growth-lede">Gak usah pusing dan buang-buang waktu brainstorm sendirian, pakai tools ini dan pilih sesuai challenge saat ini!</p>
          <div className="growth-actions">
            <a className="growth-button" href="#jelajahi">Cari strategi bisnis saya <span aria-hidden="true">↗</span></a>
            <a className="growth-text-link" href="#cara-pakai">Mulai dari mana? <span aria-hidden="true">↓</span></a>
          </div>
          <p className="growth-small">Seluruh strategi terbuka. Tanpa formulir atau pendaftaran.</p>
        </div>
        <div className="growth-cover" aria-hidden="true">
          <div className="growth-cover-top">THE BUSINESS GROWTH PLAYBOOK</div>
          <div className="growth-cover-number">108<span>↗</span></div>
          <div className="growth-cover-line" />
          <p>Perjelas penawaran.<br />Temukan pelanggan.<br />Bangun sistemnya.</p>
          <div className="growth-cover-bottom"><span>ADITYA BAYU</span><span>12 AREA PERTUMBUHAN</span></div>
        </div>
      </header>

      <section className="growth-start" id="cara-pakai" aria-labelledby="start-title">
        <div className="wrap growth-start-grid">
          <div><h2 id="start-title">Tidak perlu melakukan semuanya.</h2><p>Mulai dari hambatan terbesar. Pilih maksimal tiga prioritas sebagai fokus, lalu uji satu per satu.</p></div>
          <ol className="growth-steps">
            <li><strong>Temukan hambatannya</strong><span>Kurang pelanggan, banyak chat tanpa closing, atau pembelian ulang yang lemah?</span></li>
            <li><strong>Simpan yang relevan</strong><span>Baca aksi dan contohnya. Pilih yang sesuai kapasitas serta kondisi bisnis.</span></li>
            <li><strong>Jalankan & evaluasi</strong><span>Catat angka awal, tentukan penanggung jawab, lalu jadwalkan peninjauan.</span></li>
          </ol>
        </div>
      </section>

      <section className="wrap growth-library" id="jelajahi" aria-labelledby="library-title">
        <div className="growth-library-heading"><div><h2 id="library-title">Apa yang ingin Anda benahi?</h2><p>Pilih area pertumbuhan atau cari kebutuhan bisnis. Strategi yang relevan akan muncul di bawah.</p></div><a href="#rencana" className="growth-text-link">Lihat rencana saya ({saved.length}) <span aria-hidden="true">↗</span></a></div>
        <div className="growth-filters">
          <label className="growth-search">Cari strategi atau jenis bisnis
            <input type="search" value={query} onChange={(event) => select(setQuery, event.target.value)} placeholder="Coba: katering, WhatsApp, margin…" />
          </label>
          <label>Area pertumbuhan<select value={chapter} onChange={(event) => select(setChapter, event.target.value)}><option value="all">Semua area</option>{strategyChapters.map((group) => <option key={group.id} value={group.id}>{group.title}</option>)}</select></label>
          <label>Upaya eksekusi<select value={effort} onChange={(event) => select(setEffort, event.target.value)}><option value="all">Semua tingkat</option>{['Ringan', 'Menengah', 'Intensif'].map((value) => <option key={value}>{value}</option>)}</select></label>
        </div>
        <div className="growth-goals" role="group" aria-label="Filter tujuan bisnis">
          {goals.map((value) => <button type="button" key={value} aria-pressed={hasSelection && goal === value} onClick={() => select(setGoal, value)}>{value}</button>)}
        </div>
        <div className="growth-results-bar">
          <p role="status" aria-live="polite">{hasSelection ? <><strong>{visibleCount}</strong> strategi cocok · {visibleCount ? `${(currentPage - 1) * PAGE_SIZE + 1}–${Math.min(currentPage * PAGE_SIZE, visibleCount)} ditampilkan` : '0 ditampilkan'}</> : '108 strategi tersedia. Mulai dengan memilih area di bawah.'}</p>
          <label className="growth-saved-filter"><input type="checkbox" checked={savedOnly} onChange={(event) => select(setSavedOnly, event.target.checked)} /> Hanya tersimpan ({saved.length})</label>
          <button type="button" onClick={reset}>Reset filter</button>
        </div>
        <p className="growth-effort-note">Ringan: bisa dikerjakan sendiri. Menengah: perlu persiapan. Intensif: perlu bantuan tim.</p>

        <div className="growth-interactive" id="growth-results">
          {!hasSelection ? <div className="growth-chooser" role="group" aria-label="Pilih area pertumbuhan">
            {strategyChapters.map((group) => <button type="button" key={group.id} onClick={() => chooseChapter(group.id)}><span className="growth-choice-meta">{group.goal} · 9 strategi</span><strong>{group.title}</strong><span className="growth-choice-arrow" aria-hidden="true">↗</span></button>)}
          </div> : <>
            <div className="growth-selected-heading"><div><h3>{chapter === 'all' ? (goal === 'Semua' ? 'Pilihan strategi Anda' : `Strategi ${goal.toLocaleLowerCase('id')}`) : strategyChapters.find((group) => group.id === chapter)?.title}</h3><p>{visibleCount ? 'Buka detail yang relevan, lalu simpan sebagai prioritas.' : 'Coba kata atau kombinasi filter lain.'}</p></div><button type="button" className="growth-text-link" onClick={reset}>Ganti area ↗</button></div>
            {!visibleCount ? <div className="growth-empty"><h3>Belum ada strategi yang cocok.</h3><p>Coba kata yang lebih umum atau pilih area lain.</p><button className="growth-button" type="button" onClick={reset}>Pilih area lain</button></div> : <>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div className="growth-card-grid" key={resultKey}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -4 }}
                  transition={{ duration: reduceMotion ? 0 : 0.18 }}>
                  {cards.map((strategy, index) => <motion.article className="growth-strategy" key={strategy.id} id={`strategi-${strategy.id}`} data-saved={saved.includes(strategy.id)}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : index * 0.035 }}>
                    <div className="growth-card-meta"><span className="growth-strategy-number" aria-label={`Strategi ${strategy.id}`}>{String(strategy.id).padStart(3, '0')}</span><span>{strategy.chapterTitle}</span></div>
                    <h3><a href={`#strategi-${strategy.id}`}>{strategy.title}</a></h3>
                    <p className="growth-action">{strategy.action}</p>
                    <details><summary>Contoh & ukuran keberhasilan <span aria-hidden="true">+</span></summary><div className="growth-detail"><p><strong>Contoh penerapan</strong>{strategy.example}</p><p><strong>Yang diukur</strong>{strategy.metric}</p></div></details>
                    <div className="growth-card-footer"><span className="growth-effort">Upaya {strategy.effort.toLocaleLowerCase('id')}</span><button type="button" className="growth-save" aria-pressed={saved.includes(strategy.id)} aria-label={`${saved.includes(strategy.id) ? 'Hapus dari rencana' : 'Simpan strategi'}: ${strategy.title}`} onClick={() => toggleSaved(strategy.id)}>{saved.includes(strategy.id) ? '✓ Tersimpan' : '+ Simpan'}</button></div>
                  </motion.article>)}
                </motion.div>
              </AnimatePresence>
              <nav className="growth-pagination" aria-label="Halaman strategi"><button type="button" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>← Sebelumnya</button><span>Halaman {currentPage} dari {pageCount}</span><button type="button" disabled={currentPage === pageCount} onClick={() => changePage(currentPage + 1)}>Berikutnya →</button></nav>
            </>}
          </>}
        </div>
        <noscript><p className="growth-empty">Aktifkan JavaScript untuk memilih area, mencari strategi, dan menyimpan prioritas.</p></noscript>
      </section>

      <section className="growth-plan" id="rencana" aria-labelledby="plan-title">
        <div className="wrap"><div className="growth-plan-heading"><div><h2 id="plan-title">Dari daftar ide ke rencana kerja.</h2><p>{saved.length ? `${saved.length} strategi dalam rencana Anda. Mulai dari satu eksperimen yang paling relevan.` : 'Simpan strategi dari daftar di atas untuk menyusun prioritas Anda.'}</p></div>{(saved.length > 0 || (hasSelection && visibleCount > 0)) && <button type="button" className="growth-button" onClick={() => window.print()}>{saved.length ? 'Cetak rencana / simpan PDF' : 'Cetak kartu ini / simpan PDF'}</button>}</div>
          <p className="growth-small" role="status">{storageAvailable ? 'Pilihan disimpan di browser ini, tanpa dikirim ke server. Gunakan cetak atau simpan PDF untuk membawa rencana Anda.' : 'Penyimpanan browser tidak tersedia. Pilihan berlaku selama halaman ini terbuka; cetak atau simpan PDF agar tidak hilang.'}</p>
          {saved.length > 3 && <p className="growth-plan-advice">Daftar Anda sudah cukup panjang. Pilih tiga prioritas untuk siklus pertama, lalu simpan sisanya untuk nanti.</p>}
          {saved.length > 0 && <ol className="growth-plan-list">{growthStrategies.filter((strategy) => saved.includes(strategy.id)).map((strategy) => <li key={strategy.id}><div><strong>{String(strategy.id).padStart(3, '0')} · {strategy.title}</strong><p>{strategy.action}</p><p className="growth-small">Ukur: {strategy.metric}</p></div><button type="button" onClick={() => toggleSaved(strategy.id)} aria-label={`Hapus ${strategy.title} dari rencana`}>Hapus</button></li>)}</ol>}
          <div className="growth-experiment"><h3>Brief eksperimen pertama</h3><p>Untuk tiap prioritas, tulis: angka awal → perubahan yang diuji → penanggung jawab → batas biaya → tanggal evaluasi. Mulai ringan dalam tujuh hari, lalu beri waktu pengukuran sesuai siklus pembelian bisnis.</p><p>Contoh: perjelas ongkir di halaman produk, lalu bandingkan rasio checkout selesai pada trafik yang sepadan. Hentikan atau perbaiki bila laba dan kualitas layanan memburuk.</p></div>
        </div>
      </section>

      <section className="wrap growth-next" aria-labelledby="next-title"><div><h2 id="next-title">Strateginya banyak.<br />Prioritas bisnis Anda harus jelas.</h2><p>Butuh bantuan membaca hambatan dan menentukan urutan eksekusi? Pelajari pendekatan diagnosis pertumbuhan Aditya Bayu sebelum mengajukan kebutuhan bisnis Anda.</p></div><a className="growth-button" href="/dal/">Pelajari diagnosis pertumbuhan <span aria-hidden="true">↗</span></a></section>
      <section className="wrap growth-sources" aria-labelledby="sources-title"><h2 id="sources-title">Catatan penggunaan & rujukan</h2><p>Jadikan panduan ini sebagai pilihan eksperimen, bukan daftar kewajiban. Sesuaikan dengan margin, kapasitas, izin pelanggan, dan aturan bidang usaha. Fitur serta kebijakan platform dapat berubah.</p><p>Rujukan platform: <a href="https://support.google.com/business/answer/7091?hl=id">Google: informasi bisnis dan pencarian lokal</a>; <a href="https://faq.whatsapp.com/652901706468344">WhatsApp: pesan marketing dan persetujuan pelanggan</a>. Ditinjau 24 Oktober 2026.</p></section>
    </div>
  );
}
