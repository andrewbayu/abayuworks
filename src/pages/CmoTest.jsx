import { useState } from 'react';
import Seo from '../components/Seo';

const tracks = [
  {
    id: 'specialist',
    number: '01',
    name: 'Specialist',
    cases: '7 kasus',
    detail: 'Ads, conversion, creative, dan psikologi marketing.',
  },
  {
    id: 'manager',
    number: '02',
    name: 'Manager',
    cases: '5 kasus',
    detail: 'Trade-off, tim, dan sistem kerja yang harus tetap jalan.',
  },
  {
    id: 'head-vp',
    number: '03',
    name: 'Head & VP',
    cases: '6 kasus',
    detail: 'Judgement bisnis, alokasi resource, dan operating altitude.',
  },
];

const principles = [
  ['Read the case', 'Pisahkan situasi dari asumsi.'],
  ['Choose the evidence', 'Cari sinyal yang paling bisa dipertanggungjawabkan.'],
  ['Make the call', 'Ambil keputusan dengan informasi yang tersedia.'],
];

export default function CmoTest() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const activeTrack = tracks.find((track) => track.id === selectedTrack);

  return (
    <div className="cmo-test-page">
      <Seo
        title="The CMO Test · Aditya Bayu"
        description="Case-based marketing leadership assessment by Aditya Bayu. Baca situasinya. Pilih buktinya. Ambil keputusan."
        origin="https://cmotest.adityabayu.com"
        path="/"
        image="/images/cmo-test/assessment-flow-doodle.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'The CMO Test',
          description: 'Case-based marketing leadership assessment by Aditya Bayu.',
          applicationCategory: 'EducationalApplication',
          author: { '@type': 'Person', name: 'Aditya Indra Bayu' },
          url: 'https://cmotest.adityabayu.com/',
        }}
      />

      <header className="cmo-topbar">
        <div className="cmo-wrap cmo-topbar-inner">
          <a href="#top" className="cmo-wordmark" aria-label="The CMO Test home">
            <span>THE CMO TEST</span>
          </a>
          <span className="cmo-byline">by Aditya Bayu</span>
        </div>
      </header>

      <main id="top">
        <section className="cmo-wrap cmo-hero">
          <div className="cmo-hero-copy">
            <p className="cmo-kicker">Marketing leadership assessment</p>
            <h1>
              The CMO <em>Test</em>
            </h1>
            <p className="cmo-standfirst">
              Bukan ujian hafalan. Ini simulasi kecil untuk melihat cara kamu membaca situasi,
              memilih bukti, lalu mengambil keputusan saat informasinya tidak lengkap.
            </p>
            <a className="cmo-text-link" href="#tracks">
              Choose your level <span aria-hidden="true">↓</span>
            </a>
          </div>

          <figure className="cmo-hero-figure">
            <img
              src="/images/cmo-test/assessment-flow-doodle.png"
              alt="Editorial diagram showing an assessment flow from reading a case to choosing evidence and making a decision"
            />
            <figcaption>Three moves. One judgement call.</figcaption>
          </figure>
        </section>

        <section className="cmo-wrap cmo-intro" aria-labelledby="intro-title">
          <div className="cmo-intro-meta">
            <span className="cmo-meta-index">01</span>
            <span>Why this exists</span>
          </div>
          <div className="cmo-intro-body">
            <div className="cmo-stat-callout">
              <strong>97%</strong>
              <span>gagal menjawab sampai selesai.</span>
            </div>
            <h2 id="intro-title">
              Judgement yang baik terlihat dari keputusan pertama, bukan dari istilah yang paling pintar.
            </h2>
            <p>
              Test ini dibuat dari real cases yang sudah Aditya selesaikan selama 12 tahun dan
              dipakai untuk mencari qualified candidate. Untuk level Head dan VP, standar minimumnya
              sederhana: cukup tajam untuk menjadi discussion partner.
            </p>
          </div>
        </section>

        <section className="cmo-wrap cmo-process" aria-labelledby="process-title">
          <div className="cmo-section-heading">
            <p className="cmo-kicker">The assessment</p>
            <h2 id="process-title">Baca situasinya. Pilih buktinya. Ambil keputusan.</h2>
          </div>
          <div className="cmo-process-grid">
            {principles.map(([title, detail], index) => (
              <article key={title} className="cmo-process-item">
                <span className="cmo-process-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tracks" className="cmo-wrap cmo-tracks" aria-labelledby="tracks-title">
          <div className="cmo-section-heading cmo-tracks-heading">
            <div>
              <p className="cmo-kicker">Choose honestly</p>
              <h2 id="tracks-title">Pilih level assessment.</h2>
            </div>
            <p>Selevel dengan jangkauan kerja kamu sekarang.</p>
          </div>

          <div className="cmo-track-list" role="list" aria-label="Pilih jalur ujian">
            {tracks.map((track) => {
              const isSelected = track.id === selectedTrack;
              return (
                <button
                  key={track.id}
                  type="button"
                  className={`cmo-track ${isSelected ? 'is-selected' : ''}`}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedTrack(track.id)}
                >
                  <span className="cmo-track-index">{track.number}</span>
                  <span className="cmo-track-content">
                    <strong>{track.name}</strong>
                    <span>{track.detail}</span>
                  </span>
                  <span className="cmo-track-cases">{track.cases}</span>
                  <span className="cmo-track-arrow" aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          <div className="cmo-track-note" aria-live="polite">
            {activeTrack ? (
              <>
                <strong>{activeTrack.name} dipilih.</strong> Assessment ini menguji keputusan yang
                biasa dibuat pada level tersebut.
              </>
            ) : (
              'Pilih track yang paling dekat dengan jangkauan kerja kamu. Jangan memilih title yang belum kamu jalankan.'
            )}
          </div>
        </section>
      </main>

      <footer className="cmo-footer">
        <div className="cmo-wrap cmo-footer-inner">
          <span>The CMO Test</span>
          <a href="https://adityabayu.com/" target="_blank" rel="noreferrer">
            adityabayu.com ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
