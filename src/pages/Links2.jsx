import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { site, linkPage } from '../data/site';
import { genRefId, submitContact } from '../lib/forms';
import { fadeUp, stagger } from '../lib/motion';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    url: site.url + '/',
    image: site.url + '/aditya-bayu.webp',
    sameAs: site.socials.map((s) => s.href),
  },
};

export default function Links() {
  const [pathway, setPathway] = useState('resources'); // 'resources' | 'consultation'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  // Resources pathway state
  const [selectedResources, setSelectedResources] = useState({
    fnb: true,
    preflight: true,
  });

  // Consultation pathway state
  const [service, setService] = useState('cmo');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  // Submission state
  const [state, setState] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState('sending');

    try {
      const ref = genRefId();
      
      if (pathway === 'resources') {
        const selectedList = [];
        if (selectedResources.fnb) selectedList.push('Playbook Marketing F&B 2026');
        if (selectedResources.preflight) selectedList.push('Meta Ads Pre-Flight Checklist');

        if (selectedList.length === 0) {
          throw new Error('Please select at least one resource.');
        }

        await submitContact({
          subject: `Lead: Free Resources Request (${ref})`,
          name,
          email,
          resource: selectedList.join(', '),
          ref_id: ref,
        });
      } else {
        const selectedServiceObj = linkPage.services.find(s => s.id === service) || { title: 'Other' };
        await submitContact({
          subject: `Consultation Inquiry: ${selectedServiceObj.title} (${ref})`,
          name,
          email,
          company,
          engagement_type: selectedServiceObj.title,
          message,
          ref_id: ref,
        });
      }

      setState('success');
    } catch (err) {
      console.error(err);
      setState('error');
    }
  };

  return (
    <>
      <Seo
        title={`${site.name} · Links 2 (Review)`}
        description={`Scale your marketing output. Not your headcount. Aditya Indra Bayu combines performance marketing with custom AI workflows.`}
        path="/links2/"
        type="profile"
        noindex={true}
        jsonLd={jsonLd}
      />

      <main className="min-h-screen bg-white text-zinc-900 flex flex-col items-center selection:bg-blue/10">
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-md flex-col px-5 pb-16 pt-12 sm:pt-16 gap-8"
        >
          {/* Identity Header */}
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <div className="h-24 w-24 overflow-hidden rounded-full border border-zinc-200 shadow-sm">
              <img
                src="/aditya-bayu.webp"
                alt={site.name}
                width="96"
                height="96"
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-[#1C3D73]">{site.name}</h1>
            <p className="mt-1 text-xs font-semibold tracking-wider text-[#1C3D73]/85 uppercase">{linkPage.tagline2}</p>
          </motion.div>

          {/* Hook Section */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#1C3D73] leading-tight">
              {linkPage.hook.headline}
            </h2>
            <p className="text-zinc-700 leading-relaxed text-sm">
              {linkPage.hook.subheadline}
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div 
            variants={fadeUp} 
            className="text-zinc-800 text-sm leading-relaxed whitespace-pre-wrap font-normal flex flex-col gap-3"
          >
            {linkPage.story.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          {/* How Aditya Can Help Section */}
          <motion.section variants={fadeUp} className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-bold text-[#1C3D73] border-b border-zinc-200 pb-2">
              How Aditya Can Help You
            </h3>
            <div className="flex flex-col gap-4">
              {linkPage.services.map((s) => (
                <div key={s.id} className="flex flex-col">
                  <h4 className="text-sm font-bold text-[#1C3D73]">{s.title}</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed mt-1">{s.copy}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Offer & Form Card */}
          <motion.section variants={fadeUp} className="bg-zinc-50 border border-zinc-200 rounded-lg p-5 flex flex-col gap-4 shadow-sm">
            <h3 className="font-display text-base font-bold text-[#1C3D73] tracking-tight">
              {linkPage.offerTitle}
            </h3>

            {state === 'success' ? (
              <div className="flex flex-col gap-4 text-center py-4">
                <span className="text-2xl" role="img" aria-label="success">🎉</span>
                <h4 className="font-display text-base font-bold text-[#1C3D73]">Submission Successful!</h4>
                {pathway === 'resources' ? (
                  <div className="flex flex-col gap-3 mt-2">
                    <p className="text-xs text-zinc-600">Terima kasih. Klik tombol di bawah ini untuk mengakses resource gratis Anda:</p>
                    {selectedResources.fnb && (
                      <Link 
                        to="/playbook-fnb/thank-you" 
                        className="bg-[#1C3D73] text-white hover:bg-[#2A5499] transition-colors py-2 px-4 rounded text-xs font-semibold text-center"
                      >
                        Download Playbook F&B 2026
                      </Link>
                    )}
                    {selectedResources.preflight && (
                      <Link 
                        to="/preflight-checklist/thank-you" 
                        className="bg-[#1C3D73] text-white hover:bg-[#2A5499] transition-colors py-2 px-4 rounded text-xs font-semibold text-center"
                      >
                        Download Meta Ads Checklist
                      </Link>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Inquiry Anda telah terkirim. Aditya akan meninjau detail brand Anda dan menghubungi Anda via email dalam 24-48 jam.
                  </p>
                )}
                <button 
                  onClick={() => setState('idle')} 
                  className="text-xs text-[#1C3D73] underline mt-2 hover:text-[#2A5499]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Pathway Selector */}
                <div className="flex rounded-md bg-zinc-200/60 p-0.5 border border-zinc-200">
                  <button
                    type="button"
                    onClick={() => { setPathway('resources'); setState('idle'); }}
                    className={`w-1/2 rounded-md py-2 text-xs font-semibold transition-all text-center focus:outline-none ${
                      pathway === 'resources' 
                        ? 'bg-white text-zinc-900 shadow-sm' 
                        : 'text-zinc-500 hover:text-zinc-800'
                    }`}
                  >
                    Dapatkan Playbook
                  </button>
                  <button
                    type="button"
                    onClick={() => { setPathway('consultation'); setState('idle'); }}
                    className={`w-1/2 rounded-md py-2 text-xs font-semibold transition-all text-center focus:outline-none ${
                      pathway === 'consultation' 
                        ? 'bg-white text-zinc-900 shadow-sm' 
                        : 'text-zinc-500 hover:text-zinc-800'
                    }`}
                  >
                    Request Consultation
                  </button>
                </div>

                {/* Common Inputs */}
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Lengkap"
                    required
                    className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#1C3D73] focus:ring-1 focus:ring-[#1C3D73] focus:outline-none"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Alamat Email"
                    required
                    className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#1C3D73] focus:ring-1 focus:ring-[#1C3D73] focus:outline-none"
                  />
                </div>

                {/* Dynamic Inputs: Resources */}
                {pathway === 'resources' && (
                  <div className="flex flex-col gap-2.5 py-1">
                    <p className="text-xs font-semibold text-zinc-700">Pilih resource yang ingin Anda download:</p>
                    <label className="flex items-start gap-2.5 text-xs text-zinc-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedResources.fnb}
                        onChange={(e) => setSelectedResources({ ...selectedResources, fnb: e.target.checked })}
                        className="mt-0.5 accent-[#1C3D73]"
                      />
                      <div>
                        <span className="font-bold text-[#1C3D73]">Playbook Marketing F&B 2026</span>
                        <p className="text-zinc-500 mt-0.5">Sistem pemasaran F&B untuk datangkan pelanggan berulang.</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-2.5 text-xs text-zinc-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedResources.preflight}
                        onChange={(e) => setSelectedResources({ ...selectedResources, preflight: e.target.checked })}
                        className="mt-0.5 accent-[#1C3D73]"
                      />
                      <div>
                        <span className="font-bold text-[#1C3D73]">Meta Ads Pre-Flight Checklist</span>
                        <p className="text-zinc-500 mt-0.5">5 poin penting sebelum launching iklan Meta Ads.</p>
                      </div>
                    </label>
                  </div>
                )}

                {/* Dynamic Inputs: Consultation */}
                {pathway === 'consultation' && (
                  <div className="flex flex-col gap-3">
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Nama Perusahaan / Brand"
                      required
                      className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#1C3D73] focus:ring-1 focus:ring-[#1C3D73] focus:outline-none"
                    />
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-zinc-700">Layanan yang Anda butuhkan:</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-900 focus:border-[#1C3D73] focus:ring-1 focus:ring-[#1C3D73] focus:outline-none"
                      >
                        {linkPage.services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                        <option value="other">Lainnya / Kolaborasi</option>
                      </select>
                    </div>

                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ceritakan singkat mengenai brand Anda atau detail proyek..."
                      rows="3"
                      required
                      className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#1C3D73] focus:ring-1 focus:ring-[#1C3D73] focus:outline-none resize-none"
                    />
                  </div>
                )}

                {state === 'error' && (
                  <p className="text-xs text-red-600 font-medium">
                    Gagal mengirim. Mohon coba lagi atau hubungi hi@adityabayu.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="w-full bg-[#1C3D73] text-white hover:bg-[#2A5499] transition-colors py-3 rounded font-bold text-center text-sm shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {state === 'sending' ? 'Mengirim...' : pathway === 'resources' ? 'Dapatkan Akses Gratis' : 'Kirim Inkuiri'}
                </button>
              </form>
            )}
          </motion.section>

          {/* Secondary Links Section */}
          <motion.nav variants={stagger(0.06)} className="flex flex-col gap-3" aria-label="Other Links">
            {linkPage.links.map((l) => (
              <motion.a
                key={l.label}
                variants={fadeUp}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-4 rounded-lg border border-zinc-200 bg-white hover:border-[#1C3D73]/40 hover:bg-zinc-50/50 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="truncate font-display text-sm font-bold text-[#1C3D73]">{l.label}</span>
                    {l.tag && (
                      <span className="shrink-0 rounded-full border border-zinc-200 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide bg-zinc-100 text-zinc-600">
                        {l.tag}
                      </span>
                    )}
                  </div>
                  {l.sub && <p className="mt-0.5 text-xs leading-snug text-zinc-500">{l.sub}</p>}
                </div>
                <span className="shrink-0 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-[#1C3D73]" aria-hidden>
                  ↗
                </span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2.5">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-200 rounded px-3.5 py-1.5 text-xs font-semibold text-zinc-600 bg-white hover:text-[#1C3D73] hover:border-[#1C3D73]/30 transition-colors shadow-sm"
              >
                {s.label}
              </a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div variants={fadeUp} className="mt-auto pt-6 text-center border-t border-zinc-200">
            <a href={`mailto:${site.email}`} className="text-xs font-semibold text-zinc-500 hover:text-[#1C3D73] transition-colors">
              {site.email}
            </a>
            <div className="mt-2.5">
              <Link to="/" className="text-xs text-zinc-400 hover:text-[#1C3D73] underline underline-offset-4 transition-colors">
                View Full Portfolio · adityabayu.com
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
