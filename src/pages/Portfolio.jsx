import { useState } from 'react';
import Seo from '../components/Seo';
import { site } from '../data/site';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: ['Aditya Bayu', 'Andrew Bayu'],
  url: site.url + '/portfolio/',
  image: site.url + '/aditya-bayu.webp',
  jobTitle: 'Fractional CMO, Venture Builder, AI Growth Architect',
  description:
    'Executive portfolio & CV of Aditya Indra Bayu. $12M+ client revenue driven across education, maritime, healthcare, luxury, and B2B SaaS. Top 100 Clutch Agency Founder, 10 ventures operated.',
  email: 'mailto:' + site.email,
  sameAs: site.socials.map((s) => s.href),
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');

  // Filter helper
  const matchesSearch = (text) => {
    if (!search.trim()) return true;
    return text.toLowerCase().includes(search.trim().toLowerCase());
  };

  const isVisible = (category, searchPayload) => {
    const tabMatch = activeTab === 'all' || activeTab === category;
    const searchMatch = matchesSearch(searchPayload);
    return tabMatch && searchMatch;
  };

  return (
    <div className="home-light min-h-screen">
      <Seo
        title={`Portfolio & Executive CV · ${site.name}`}
        description="Executive dossier, verified receipts ($12M+ revenue), operating seats, 10 ventures, and 12 proprietary AI systems operated by Aditya Indra Bayu."
        path="/portfolio/"
        jsonLd={personJsonLd}
      />

      {/* Print-only stylesheet */}
      <style>{`
        @media print {
          body {
            background: #fff !important;
            color: #111 !important;
            font-size: 10.5pt !important;
          }
          nav, footer, .no-print, header {
            display: none !important;
          }
          .wrap {
            max-width: 100% !important;
            padding: 0 !important;
          }
          .home-card, .card {
            border: 1px solid #cbd5e1 !important;
            break-inside: avoid;
            box-shadow: none !important;
            margin-bottom: 12px !important;
          }
          a {
            text-decoration: none !important;
            color: #111 !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="home-hero bg-grid border-b border-[#e6e8ec]">
        <div className="wrap py-12 sm:py-16 lg:py-20">
          
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            
            {/* Left: Bio & Positioning */}
            <div className="flex-1 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f2f5fa] border border-[#d6e0f0] px-3 py-1 text-xs font-bold text-[#1c3d73] uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-[#1c3d73] animate-pulse"></span>
                Executive Dossier · Selected Commercial Portfolio
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#111]">
                Aditya Indra Bayu
              </h1>

              <p className="font-display text-lg sm:text-xl font-medium text-[#1c3d73]">
                Fractional CMO · Venture Builder · AI Growth Architect
              </p>

              <div className="font-serif text-base sm:text-lg leading-relaxed text-[#4b5563] space-y-3">
                <p>
                  Mechanical Engineer (<strong className="font-semibold text-[#111]">Universitas Indonesia</strong>, Aerodynamics & Automation) turned Venture Builder and Growth Operator with <strong className="font-semibold text-[#111]">10+ years of leadership</strong> across education, maritime, healthcare, luxury eCommerce, and B2B SaaS.
                </p>
                <p>
                  Driven over <strong className="text-[#1c3d73] font-semibold">$12M+ (IDR 180B+) in verified client revenue</strong> and generated <strong className="text-[#1c3d73] font-semibold">300,000+ qualified leads</strong> across 16 countries. Rather than advising from the sidelines, Aditya steps into companies as an embedded operator with direct P&L accountability.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 no-print">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="home-button cursor-pointer text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span>Save PDF / Print CV</span>
                </button>

                <a href="/dal/" className="home-button-secondary text-sm">
                  <span>Book 90-Min Diagnostic</span>
                  <span aria-hidden>→</span>
                </a>

                <a
                  href="mailto:hi@adityabayu.com"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded text-xs font-bold text-[#4b5563] hover:text-[#1c3d73] border border-[#dfe4eb] bg-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#1c3d73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hi@adityabayu.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/aditya-indra-bayu-38a11271/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded text-xs font-bold text-[#4b5563] hover:text-[#1c3d73] border border-[#dfe4eb] bg-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right: Executive Portrait & Quick Facts */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="home-card shadow-sm border border-[#dfe4eb] p-5 bg-white">
                <div className="flex items-center gap-4 pb-4 border-b border-[#e6e8ec]">
                  <img
                    src="/aditya-bayu.webp"
                    alt="Aditya Indra Bayu"
                    className="w-16 h-16 rounded object-cover border border-[#dfe4eb]"
                  />
                  <div>
                    <div className="font-display font-bold text-[#111] text-base leading-tight">
                      Aditya Indra Bayu
                    </div>
                    <div className="text-xs font-mono text-[#1c3d73] mt-0.5">
                      B.Eng · Univ. Indonesia
                    </div>
                    <div className="text-xs text-[#718096] mt-0.5">
                      Lippo Karawaci, Tangerang
                    </div>
                  </div>
                </div>

                <div className="py-3 text-xs space-y-2.5 border-b border-[#e6e8ec]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#64748b]">Track Record</span>
                    <span className="font-semibold text-[#111] font-mono">10+ Years (Since 2014)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#64748b]">Operating Seats</span>
                    <span className="font-semibold text-[#111] text-right">Gentem (DM) · IMI (CMO)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#64748b]">Firm Leadership</span>
                    <span className="font-semibold text-[#111]">CEO, Calibreworks & WAI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#64748b]">Global Accolade</span>
                    <span className="font-semibold text-[#1c3d73]">Clutch Top 100 Agency</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#64748b]">Regional Scale</span>
                    <span className="font-semibold text-[#111]">16 Countries (APAC)</span>
                  </div>
                </div>

                <div className="pt-3">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#718096] mb-1.5">
                    Core Specializations
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {[
                      'Fractional CMO',
                      'Theory of Constraints',
                      'Meta Ads Manager',
                      'AI Agent Systems',
                      'Full-Funnel CRO',
                      'Shipyard B2G',
                      'Healthcare Acquisition',
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="px-2 py-0.5 rounded bg-[#f7f8fa] text-[11px] text-[#4b5563] border border-[#e6e8ec]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONSOLIDATED METRICS BENTO STRIP */}
      <section className="home-band py-10">
        <div className="wrap">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="eyebrow">Consolidated Career High-Water Marks</h2>
            <span className="text-xs font-mono text-[#718096]">2014 – 2026 Audit</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { val: '$12M+', label: 'Client Revenue Driven', sub: 'Across education, maritime, luxury, healthcare & SaaS' },
              { val: '300K+', label: 'Qualified Leads', sub: 'High-intent conversions generated across APAC' },
              { val: 'IDR 2B', label: 'Peak Monthly Budget', sub: 'Scaled across Google, Meta, TikTok & ASA' },
              { val: 'Top 100', label: 'Clutch.co Global', sub: 'Digital Agency, Web Dev & Branding awards' },
              { val: '10 / 5', label: 'Ventures & Sectors', sub: 'Companies built or operated across 5 industries' },
              { val: '30+', label: 'Founders Mentored', sub: 'Early-stage startup founders coached to PMF' },
            ].map((m) => (
              <div key={m.label} className="bg-white border border-[#dfe4eb] rounded p-4 shadow-sm">
                <div className="home-stat font-bold text-2xl sm:text-3xl text-[#1c3d73]">{m.val}</div>
                <div className="text-xs font-bold text-[#111] mt-1 uppercase font-display tracking-tight">{m.label}</div>
                <div className="text-[11px] text-[#64748b] mt-1 leading-snug font-serif">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONTROLS (TABS & LIVE SEARCH) */}
      <section className="wrap pt-10 pb-4 no-print border-b border-[#e6e8ec]">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 text-xs font-bold no-scrollbar">
            {[
              { id: 'all', label: 'All View' },
              { id: 'receipts', label: 'The Receipts ($12M+)' },
              { id: 'experience', label: 'Operating Seats' },
              { id: 'ventures', label: 'Ventures (10)' },
              { id: 'systems', label: 'AI & Systems (12)' },
              { id: 'clients', label: 'Client Work' },
              { id: 'credentials', label: 'Education & Speaking' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearch('');
                }}
                className={`px-3 py-1.5 rounded transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1c3d73] text-white shadow-sm'
                    : 'bg-white border border-[#dfe4eb] text-[#4b5563] hover:text-[#111] hover:border-[#1c3d73]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <svg
              className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#718096]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search skills, clients, tools..."
              className="w-full pl-9 pr-8 py-1.5 text-xs bg-white border border-[#dfe4eb] rounded text-[#111] placeholder-[#718096] focus:outline-none focus:border-[#1c3d73] transition-colors"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-[#718096] hover:text-[#111]"
              >
                ✕
              </button>
            )}
          </div>

        </div>
      </section>

      {/* SECTION 1: THE RECEIPTS */}
      {(activeTab === 'all' || activeTab === 'receipts') && (
        <section className="wrap py-12">
          <div className="mb-8 border-b border-[#e6e8ec] pb-4">
            <p className="eyebrow mb-1">01 · Delivered & Contributed Outcomes</p>
            <h2 className="font-display text-3xl font-semibold text-[#111]">
              The Receipts: Quantifiable Business Impact
            </h2>
            <p className="font-serif text-sm text-[#4b5563] mt-1 max-w-3xl">
              Specific commercial outcomes delivered from the operating seat across education, healthcare, maritime, and consumer enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                brand: 'Wall Street English Indonesia (Gentem Group)',
                tag: 'Education · Acting CMO',
                badge: 'Rp156B Milestone',
                metric: '+30~40%',
                metricLabel: 'Revenue growth in 5 months',
                scope: 'Managed IDR 500M/month ad budget directly responsible for P&L. Hit the highest monthly sales record in company history (Rp9B+/month). Generated 300,000+ qualified leads, doubled marketing output via custom AI tooling, and expanded 2 new branches in BSD & Bekasi.',
              },
              {
                brand: 'Hacktiv8 Indonesia',
                tag: 'Tech Ed · PR & Performance',
                badge: '8X ROAS',
                metric: '+200%',
                metricLabel: 'Course registration growth',
                scope: 'Architected and executed integrated PR and performance campaign promoting the Data Science Scholarship and Bootcamp with IDR 200M monthly budget. Delivered 8X ROAS, 237 webinar attendees, and feature coverage across 12 national tier-1 media outlets.',
              },
              {
                brand: 'Aboitiz Group / KicauFest (Philippines / ID)',
                tag: 'Conglomerate & FMCG · Regional',
                badge: '10M+ Reach',
                metric: '30,000+',
                metricLabel: 'Active community members',
                scope: 'Stewarded IDR 2 Billion total marketing budget (IDR 50M/mo social spend) for animal nutrition lines (Gold Coin Bird Feed, Maxime Pet Food, Kunemax). Built and executed 3 consecutive seasons of "KicauFest", generating 1M+ viral video views.',
              },
              {
                brand: 'Akasia 365mc Indonesia (Korean Clinic)',
                tag: 'Aesthetic Healthcare · Lead Gen',
                badge: 'High-Ticket Aesthetic',
                metric: '5,622',
                metricLabel: 'Patient messaging chats in Q2 2026',
                scope: 'Engineered doctor-led acquisition and conversion architecture for LAMS body contouring. Built body-goal qualification flows to prevent cold-traffic dropoffs, integrated WhatsApp handoff protocols, and fed offline CRM conversion signals to Meta Ads.',
              },
              {
                brand: 'Jakarta Dental & Aesthetic Clinic Chain',
                tag: 'Healthcare · Multi-Branch Scale',
                badge: '6–7X ROAS',
                metric: '6 → 10',
                metricLabel: 'Branches scaled without margin bleed',
                scope: 'Rebuilt patient acquisition engine combining Meta & Google ads, automated AI triage (Cekat.ai), and CRM tracking. Grew monthly patient leads from 120 to 421 and maintained Rp300M+/month revenue across branches.',
              },
              {
                brand: 'HypeBuzz Digital Media Network',
                tag: 'Media & IP · Zero-to-One',
                badge: 'Organic Virality',
                metric: '5.2M',
                metricLabel: 'Audience reach scaled from zero',
                scope: 'Engineered and scaled a new trend-media IP from scratch across TikTok and Instagram: 3.1M TikTok video views, 670,000+ engagements, and 2.6M unique visitors with $0 initial ad spend.',
              },
              {
                brand: 'With Love Luxury (Melbourne, Australia)',
                tag: 'Luxury eCommerce · Cross-Border',
                badge: '6-Figure AUD',
                metric: 'Year 1',
                metricLabel: 'Scaled from launch to 6-figure run rate',
                scope: 'Engineered digital acquisition and international trust framework for an Australian pre-loved luxury resale platform. Integrated high-ticket authentication proofs into landing page funnels with zero venture funding.',
              },
              {
                brand: 'Alcaster.com (No-Code Funnel SaaS)',
                tag: 'B2B SaaS · Bootstrapped Founder',
                badge: 'Profitable SaaS',
                metric: 'Rp428M',
                metricLabel: 'First-year ARR with zero VC funding',
                scope: 'Designed, built, and marketed a specialized no-code landing page and funnel SaaS for Indonesian digital marketers. Self-funded with 100% founder equity; scaled to 84 active paying corporate accounts before market pivot.',
              },
            ]
              .filter((r) => isVisible('receipts', `${r.brand} ${r.tag} ${r.metric} ${r.scope}`))
              .map((r) => (
                <article key={r.brand} className="home-card relative overflow-hidden group">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c3d73]">{r.tag}</div>
                      <h3 className="font-display text-lg font-bold text-[#111] mt-1 group-hover:text-[#1c3d73] transition-colors">
                        {r.brand}
                      </h3>
                    </div>
                    <span className="shrink-0 text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#f2f5fa] text-[#1c3d73] border border-[#d6e0f0]">
                      {r.badge}
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold text-[#1c3d73] tracking-tight">{r.metric}</span>
                    <span className="text-xs font-mono text-[#64748b]">{r.metricLabel}</span>
                  </div>

                  <p className="mt-3 font-serif text-sm leading-relaxed text-[#4b5563]">
                    {r.scope}
                  </p>
                </article>
              ))}
          </div>
        </section>
      )}

      {/* SECTION 2: OPERATING SEATS */}
      {(activeTab === 'all' || activeTab === 'experience') && (
        <section className="wrap py-12 border-t border-[#e6e8ec]">
          <div className="mb-8 border-b border-[#e6e8ec] pb-4">
            <p className="eyebrow mb-1">02 · Operating Leadership</p>
            <h2 className="font-display text-3xl font-semibold text-[#111]">
              Operating Leadership Seats & P&L Ownership
            </h2>
            <p className="font-serif text-sm text-[#4b5563] mt-1 max-w-3xl">
              Embedded executive roles taking full commercial accountability inside operating businesses.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                role: 'Head of Digital Marketing / Strategic Marketing Partner',
                company: 'Gentem Lifelong Learning Group (Wall Street English · CURIOOkids · INDIES)',
                period: 'Feb 2025 – Present',
                location: 'Jakarta / Tangerang, ID',
                tag: 'Multi-Brand Education Portfolio',
                desc: 'Direct revenue growth and P&L leadership across a multi-brand education portfolio. Primary focus (75%) leading Wall Street English Indonesia while governing acquisition systems for CURIOOkids and INDIES.',
                points: [
                  'Drove 30–40% revenue growth in 5 months to break group historical sales records (Rp9B+/month).',
                  'Owned the complete commercial chain: Traffic → MQL → SQL → Campus Appointment → Show Rate → Paid Enrollment.',
                  'Doubled marketing team throughput by deploying custom AI copywriting, creative scoring, and CRM automations.',
                  'Guided customer acquisition engines supporting physical campus expansions in BSD and Bekasi.',
                ],
              },
              {
                role: 'Chief Marketing Officer & Operating Partner',
                company: 'PT Inovasi Maritim Indonesia (IMI) & Vantara Boat',
                period: '2023 – Present',
                location: 'Banten / Jakarta, ID',
                tag: 'Maritime Shipyard & B2G Defense',
                desc: 'Executive operating partner directing brand positioning, B2G defense/government tenders, and commercial sales for a commercial shipyard and vessel engineering facility.',
                points: [
                  'Repositioned shipyard capability for government procurement (KKP, Bakamla, TNI AL) highlighting TKDN compliance and naval engineering.',
                  'Built Arxea, an AI-assisted naval conceptualization engine for rapid hull configuration and preliminary stability visualization.',
                  'Incubated Vantara Boat as an owned luxury recreational fiberglass vessel line.',
                ],
              },
              {
                role: 'Chief Executive Officer & Founder',
                company: 'Calibreworks & We Are Infiniti (PT Infiniti Media Galaksi / PT Asia Sinergi Digital)',
                period: 'Nov 2018 – Present',
                location: 'Tangerang, ID · Global Footprint',
                tag: 'Agency Group & Growth Studio',
                desc: 'Built an independent digital agency and growth studio into an internationally recognized consultancy serving 70+ corporate and mid-market accounts across 3 continents.',
                points: [
                  'Recognized in Clutch.co Global Top 100 Digital Agencies, Top 100 Web Dev, and Top 100 Branding Agencies.',
                  'Official Facebook / Meta Certified Marketing Partner.',
                  'Created InfinitiLabs and Digital Advantage Lab (DAL), the 90-minute private constraint diagnostic practice.',
                  'Guided 300+ external business owners and brands through full-funnel redesigns and performance marketing.',
                ],
              },
              {
                role: 'Founder & Lead Mentor',
                company: 'Growthlab Academy (learn.growthlab.co.id)',
                period: '2020 – Present',
                location: 'Tangerang, ID',
                tag: 'EdTech & Founder Mentorship',
                desc: 'Productized proprietary growth architectures into practical toolkits (ContentStrategist Toolkit, Growth Curve Method, Sales Funnel Secrets). Directly mentored 30+ startup founders and 50+ young entrepreneurs, facilitating the incorporation of 15+ startups.',
                points: [],
              },
            ]
              .filter((e) => isVisible('experience', `${e.role} ${e.company} ${e.tag} ${e.desc} ${e.points.join(' ')}`))
              .map((e) => (
                <div key={e.role} className="home-card p-6 bg-white border border-[#dfe4eb]">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[#e6e8ec] pb-4">
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c3d73]">{e.tag}</div>
                      <h3 className="font-display text-xl font-bold text-[#111] mt-0.5">{e.role}</h3>
                      <div className="font-display font-medium text-sm text-[#4b5563] mt-0.5">{e.company}</div>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <span className="inline-block px-2.5 py-1 rounded bg-[#f2f5fa] text-[#1c3d73] font-mono text-xs font-bold border border-[#d6e0f0]">
                        {e.period}
                      </span>
                      <div className="text-xs font-mono text-[#718096] mt-1">{e.location}</div>
                    </div>
                  </div>

                  <p className="mt-4 font-serif text-sm leading-relaxed text-[#4b5563]">
                    {e.desc}
                  </p>

                  {e.points.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-xs text-[#4b5563] font-serif list-disc list-inside">
                      {e.points.map((pt) => (
                        <li key={pt} className="leading-relaxed">
                          <span className="text-[#111] font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </section>
      )}

      {/* SECTION 3: THE VENTURE PORTFOLIO */}
      {(activeTab === 'all' || activeTab === 'ventures') && (
        <section className="wrap py-12 border-t border-[#e6e8ec]">
          <div className="mb-8 border-b border-[#e6e8ec] pb-4">
            <p className="eyebrow mb-1">03 · The Venture Portfolio</p>
            <h2 className="font-display text-3xl font-semibold text-[#111]">
              10 Ventures Built, Operated & Incubated
            </h2>
            <p className="font-serif text-sm text-[#4b5563] mt-1 max-w-3xl">
              Companies built from zero, operated in senior equity/governance seats, or incubated inside the studio sandbox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: 'Calibreworks',
                tag: 'Agency · Owned',
                role: 'CEO · Evolved from Enderworks (2016)',
                desc: 'Full-service digital agency in South Tangerang. App development, creative, digital marketing, lead generation, and social. Listed in Clutch.co Top 100 digital agencies worldwide.',
              },
              {
                name: 'We Are Infiniti',
                tag: 'Agency · Owned',
                role: 'Founder & Operator · PT Infiniti Media Galaksi',
                desc: 'Digital growth, branding, and conversion studio. The internal engineering engine that ships every other venture while serving 300+ external corporate brands.',
              },
              {
                name: 'PT Inovasi Maritim Indonesia',
                tag: 'Maritime · Operator',
                role: 'Chief Marketing Officer · Operating Partner',
                desc: 'Commercial shipyard engineering patrol boats, speedboats, and commercial fishing vessels. Directing B2G government positioning, TKDN certification, and tender acquisition.',
              },
              {
                name: 'Gentem Lifelong Learning',
                tag: 'Education · Operator',
                role: 'Acting Head of DM · WSE, CURIOOkids, INDIES',
                desc: 'Embedded operator role across multi-brand education portfolio. Owned full acquisition funnels, delivering 30–40% growth in 5 months to group all-time revenue records.',
              },
              {
                name: 'Growthlab Academy',
                tag: 'EdTech · Owned',
                role: 'Founder · learn.growthlab.co.id',
                desc: "EdTech venture productising Aditya's playbooks: ContentStrategist Toolkit, Growth Curve Method, and founder mentorship for 30+ early-stage startups.",
              },
              {
                name: 'Kinema',
                tag: 'Film & IP · Owned',
                role: 'Founder & Super Admin',
                desc: 'Service-as-software for film and IP distributors: AI audience sentiment analysis, box-office prediction models, and real-time cinema showtime tracking.',
              },
              {
                name: 'Genstarkids',
                tag: 'EdTech · Owned',
                role: "Founder · Children's Education (Ages 3–12)",
                desc: 'Early childhood talent identification using RIASEC profiling. Built end-to-end; initial pilot returned Rp14.5M from Rp5.7M ad spend across 20 paid bookings.',
              },
              {
                name: 'Vantara Boat',
                tag: 'Maritime · Owned',
                role: 'Founder',
                desc: 'Recreational passenger speedboats and sport-fishing vessels. Brand positioning, 3D hull visual direction, and go-to-market architecture incubated alongside IMI.',
              },
              {
                name: 'InfinitiLabs / Digital Advantage Lab',
                tag: 'Growth Practice · Owned',
                role: 'Principal Operator · adityabayu.com/dal/',
                desc: 'Private 90-minute constraint diagnostic and 5-day research sprint delivering the Digital Advantage Scorecard, bottleneck diagnosis, and 90-day execution roadmap.',
              },
              {
                name: 'Street Talk · UrbanLuxe · Skelup',
                tag: 'Incubation Sandbox · Multi-Brand',
                role: 'Founder & Builder',
                desc: 'Active incubation sandbox: speaking-first conversational English brand, luxury boutique retail concept, and Skelup (an AI-powered solopreneur operational hub).',
              },
            ]
              .filter((v) => isVisible('ventures', `${v.name} ${v.tag} ${v.role} ${v.desc}`))
              .map((v) => (
                <div key={v.name} className="home-card p-5 bg-white border border-[#dfe4eb]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#1c3d73] uppercase tracking-wider">{v.tag}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#f7f8fa] text-[#4b5563] border border-[#e6e8ec]">
                      {v.role.split('·')[0]}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#111] mt-1.5">{v.name}</h3>
                  <div className="text-xs font-mono text-[#718096] mt-0.5">{v.role}</div>
                  <p className="mt-3 font-serif text-xs leading-relaxed text-[#4b5563]">{v.desc}</p>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* SECTION 4: PROPRIETARY AI SYSTEMS & FRAMEWORKS */}
      {(activeTab === 'all' || activeTab === 'systems') && (
        <section className="wrap py-12 border-t border-[#e6e8ec]">
          <div className="mb-8 border-b border-[#e6e8ec] pb-4">
            <p className="eyebrow mb-1">04 · Proprietary Software & Frameworks</p>
            <h2 className="font-display text-3xl font-semibold text-[#111]">
              12 Engineered AI Systems & Strategic Methodologies
            </h2>
            <p className="font-serif text-sm text-[#4b5563] mt-1 max-w-3xl">
              Custom software tools, autonomous agent architectures, and proprietary marketing methodologies powering the venture portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                kind: 'AI Revenue Copilot',
                name: 'William 3.0',
                note: 'Autonomous growth copilot for funnel telemetry analysis, campaign efficiency reviews, KPI variance tracking, and revenue forecasting reliable enough to evaluate an enterprise P&L.',
                tag: 'P&L Telemetry Engine',
              },
              {
                kind: 'Personal AI Operating System',
                name: 'Andrew Bayu Agent System v1',
                note: "Personal multi-mode agent system encoding Aditya's strategic heuristics, copywriting cadence, marketing telemetry logic, and decision frameworks into an autonomous operational copilot.",
                tag: 'Decision Heuristics',
              },
              {
                kind: 'Creative Scoring AI',
                name: 'CRUCIBLE AI',
                note: 'Algorithmic ad scoring system evaluating creative hook strength, cognitive friction, visual contrast, and audience resonance before capital is deployed to Meta or TikTok.',
                tag: 'Pre-Flight Ad Scoring',
              },
              {
                kind: 'Ad Simulator AI',
                name: 'Axiom AI',
                note: 'AI-based content and ads simulator. Stress-tests ad messaging against synthetic audience personas to predict click-through propensity and conversion bottleneck points.',
                tag: 'Synthetic Personas',
              },
              {
                kind: 'Paid Media Architecture',
                name: 'Level Ads Framework',
                note: 'Proprietary awareness-tier ad framework mapping Eugene Schwartz awareness states to funnel checkpoints, algorithmic bidding signals, creative angles, and incrementality tests.',
                tag: 'Full-Funnel Media',
              },
              {
                kind: 'Organic Flywheel',
                name: 'Growth Curve Method',
                note: 'Content Pillar, Supporting Content, and Route distribution system proven to scale organic impressions 3X, increase touchpoints 5–7X, and reduce blended CPL by up to 28%.',
                tag: 'Content Flywheel',
              },
              {
                kind: 'Search & LLM Retrieval',
                name: 'AEO / AIO Strategy',
                note: 'Answer-Engine Optimization methodology designed for the post-Google era. Structures corporate knowledge to be cited and recommended by ChatGPT, Perplexity, Claude, and Gemini.',
                tag: 'LLM Citation Engine',
              },
              {
                kind: 'Synthetic Persona Modeling',
                name: 'Xniper (HBSM Engine)',
                note: 'Hybrid Behavioral Synthetic Modeling platform utilizing 100 digital human personas and 200 Monte Carlo trials (20,000 data points) to simulate consumer conversion paths. Live at xniper.cloud.',
                tag: 'Vite · React · Gemini',
              },
              {
                kind: 'Naval Conceptualization AI',
                name: 'Arxea Maritime AI',
                note: 'AI-assisted ship visualization and preliminary line-plan explorer in React and Gemini. Generates semi-trimaran hull concepts, cross-sections, and aesthetic deck configurations for IMI.',
                tag: 'Shipyard 3D Engine',
              },
              {
                kind: 'B2B Revenue Architecture',
                name: 'Revenue Engine Model',
                note: 'Enterprise B2B growth architecture connecting inbound, outbound, ABM, SDR motion, and RevOps into a single state machine.',
                tag: 'Enterprise Pipeline',
              },
              {
                kind: 'Web App',
                name: 'PeakMind',
                note: 'Gamified cognitive potential assessment web app with randomized question logic and archetype diagnostics.',
                tag: 'Interactive Web App',
              },
              {
                kind: 'Generative AI',
                name: 'CharaGen2',
                note: 'AI character generator with 400B+ combinations. Built for storytelling, gaming, and creative ideation.',
                tag: 'Creative Generative AI',
              },
            ]
              .filter((t) => isVisible('systems', `${t.kind} ${t.name} ${t.note} ${t.tag}`))
              .map((t) => (
                <div key={t.name} className="home-card p-5 bg-white border border-[#dfe4eb] flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#1c3d73] uppercase mb-1">{t.kind}</div>
                    <h3 className="font-display text-base font-bold text-[#111]">{t.name}</h3>
                    <p className="mt-2 font-serif text-xs leading-relaxed text-[#4b5563]">{t.note}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#e6e8ec] text-[11px] font-mono text-[#718096]">
                    {t.tag}
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* SECTION 5: CLIENT ROSTER */}
      {(activeTab === 'all' || activeTab === 'clients') && (
        <section className="wrap py-12 border-t border-[#e6e8ec]">
          <div className="mb-8 border-b border-[#e6e8ec] pb-4">
            <p className="eyebrow mb-1">05 · Client Portfolio</p>
            <h2 className="font-display text-3xl font-semibold text-[#111]">
              Selected Client Roster & Cross-Sector Exposure
            </h2>
            <p className="font-serif text-sm text-[#4b5563] mt-1 max-w-3xl">
              Over 70+ client accounts managed across education, healthcare, heavy industry, banking, and retail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                sector: 'Education & EdTech',
                items: [
                  ['Wall Street English Indonesia', 'Acting CMO, ad budget, 300K leads, Rp156B rev'],
                  ['Hacktiv8 Indonesia', 'Data Science Bootcamp & Scholarship PR, 8X ROAS'],
                  ['CURIOOkids Indonesia', 'GTM strategy, center launch, and lead funnels'],
                  ['Universitas Prasetiya Mulya', 'Guest lecturer & incubator program mentor'],
                ],
              },
              {
                sector: 'Healthcare & Aesthetics',
                items: [
                  ['Akasia 365mc Indonesia', 'LAMS contouring patient acquisition (5,622 chats)'],
                  ['Jakarta Dental Clinic Chain', 'Scaled 6→10 branches, Rp300M/mo, 6-7X ROAS'],
                  ['Alodokter', 'High-intent patient acquisition funnels'],
                  ['GSK & GermKiller', 'eCommerce marketing & consumer sanitization launch'],
                ],
              },
              {
                sector: 'Maritime & Heavy Industry',
                items: [
                  ['PT Inovasi Maritim Indonesia', 'CMO seat, B2G government patrol vessels & yard GTM'],
                  ['PT Kansai Paint Indonesia', 'Industrial company profile video & B2B collateral'],
                  ['Pertamina Int. Shipping', 'Corporate executive English training proposal'],
                  ['Sarana Steel', 'Digital marketing & industrial steel pipeline'],
                ],
              },
              {
                sector: 'Banking, FMCG & Retail',
                items: [
                  ['Aboitiz Group (Philippines)', 'IDR 2B budget, 10M reach, 3 seasons of KicauFest'],
                  ['BPR Triastra (Hisobhan)', 'Complete brand repositioning & #BeraniBerubah'],
                  ['CIMB Niaga & Bank Jateng', 'Branchless banking portals & digital asset creation'],
                  ['Flash Coffee & Angke Restaurant', 'F&B performance marketing & high-volume dining bookings'],
                ],
              },
            ]
              .filter((c) =>
                isVisible('clients', `${c.sector} ${c.items.map((i) => i.join(' ')).join(' ')}`)
              )
              .map((c) => (
                <div key={c.sector} className="home-card p-5 bg-white border border-[#dfe4eb]">
                  <div className="text-xs font-mono font-bold text-[#1c3d73] uppercase mb-2">{c.sector}</div>
                  <ul className="text-xs text-[#4b5563] space-y-2.5 mt-3">
                    {c.items.map(([name, desc]) => (
                      <li key={name} className="pb-2 border-b border-[#e6e8ec] last:border-0 last:pb-0">
                        <strong className="text-[#111] block font-display">{name}</strong>
                        <span className="font-serif text-[11px] text-[#64748b] leading-tight block mt-0.5">
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* SECTION 6: CREDENTIALS, EDUCATION & SPEAKING */}
      {(activeTab === 'all' || activeTab === 'credentials') && (
        <section className="wrap py-12 border-t border-[#e6e8ec]">
          <div className="mb-8 border-b border-[#e6e8ec] pb-4">
            <p className="eyebrow mb-1">06 · Credentials & Background</p>
            <h2 className="font-display text-3xl font-semibold text-[#111]">
              Education, Keynote Speaking & Thought Leadership
            </h2>
            <p className="font-serif text-sm text-[#4b5563] mt-1 max-w-3xl">
              Academic engineering pedigree, public industry speaking, and published executive operator essays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Education */}
            <div className="home-card p-5 bg-white border border-[#dfe4eb]">
              <div className="text-xs font-mono font-bold text-[#1c3d73] uppercase mb-1">Academic Degree</div>
              <h3 className="font-display text-base font-bold text-[#111]">Universitas Indonesia</h3>
              <p className="text-xs font-mono text-[#718096] mt-0.5">2008 – 2012</p>
              <div className="mt-3 font-serif text-xs text-[#4b5563] space-y-2">
                <p>
                  <strong className="text-[#111] font-sans">Bachelor of Mechanical Engineering (B.Eng)</strong>
                </p>
                <p>Specialized in Aerodynamics & Automation Engineering.</p>
                <p className="italic border-l-2 border-[#1c3d73]/40 pl-2 text-[#64748b]">
                  Thesis: "Design of vertical axis wind turbine Savonius optimized for low wind velocity environments."
                </p>
              </div>
            </div>

            {/* Speaking */}
            <div className="home-card p-5 bg-white border border-[#dfe4eb]">
              <div className="text-xs font-mono font-bold text-[#1c3d73] uppercase mb-1">Speaking & Mentorship</div>
              <h3 className="font-display text-base font-bold text-[#111]">Keynotes & Mentoring</h3>
              <p className="text-xs font-mono text-[#718096] mt-0.5">Industry Events</p>
              <ul className="mt-3 font-serif text-xs text-[#4b5563] space-y-2.5">
                <li>
                  <strong className="text-[#111] font-sans block">IDEAFEST 2023</strong>
                  <span>Keynote Speaker & MC: "AI for Creative Industry & Autonomous Agencies."</span>
                </li>
                <li>
                  <strong className="text-[#111] font-sans block">Universitas Prasetiya Mulya</strong>
                  <span>Guest Lecturer & Mentor for undergraduate business incubators.</span>
                </li>
                <li>
                  <strong className="text-[#111] font-sans block">Growthlab Academy</strong>
                  <span>Trained 30+ startup founders on the Growth Curve Method.</span>
                </li>
              </ul>
            </div>

            {/* Publications */}
            <div className="home-card p-5 bg-white border border-[#dfe4eb]">
              <div className="text-xs font-mono font-bold text-[#1c3d73] uppercase mb-1">Selected Publications</div>
              <h3 className="font-display text-base font-bold text-[#111]">The CMO Notes</h3>
              <p className="text-xs font-mono text-[#718096] mt-0.5">adityabayu.com/blog/</p>
              <ul className="mt-3 text-xs space-y-2 font-display">
                {[
                  ['The Fractional CMO in Indonesia (2026)', '/blog/fractional-cmo-indonesia-growth-guide/'],
                  ['Healthcare Clinic Growth Playbook', '/blog/healthcare-aesthetic-clinic-playbook/'],
                  ['The Director Illusion: B2B Buyer Maps', '/blog/b2b-buyer-map-end-user-champion/'],
                  ['Why Funnels are Linear in Messy Middle', '/blog/google-messy-middle-funnel-checkpoints/'],
                ].map(([title, link]) => (
                  <li key={title}>
                    <a
                      href={link}
                      className="text-[#1c3d73] hover:underline flex items-center justify-between font-medium"
                    >
                      <span>{title}</span>
                      <span aria-hidden>→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER CALL-TO-ACTION BAND */}
      <section className="home-dark-section py-16">
        <div className="wrap text-center max-w-3xl mx-auto space-y-5">
          <p className="eyebrow text-[#ffe8d4]">Ready to isolate your growth bottleneck?</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Book a 90-Minute Private Growth Diagnostic.
          </h2>
          <p className="font-serif text-base text-[#b4afa8] leading-relaxed">
            Walk away knowing the single constraint holding back revenue before you approve another rupiah of ad spend. Limited to 5 companies per month.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 no-print">
            <a href="/dal/" className="home-button">
              <span>Apply for Digital Advantage Lab</span>
              <span aria-hidden>→</span>
            </a>
            <a href="mailto:hi@adityabayu.com" className="home-button-secondary !border-white !text-white hover:!bg-white/10">
              <span>Direct Inquiries: hi@adityabayu.com</span>
            </a>
          </div>
          <p className="pt-4 text-xs font-mono text-[#718096]">
            * Disclaimer: Reported figures reflect contributions to team outcomes during the engagements described, not sole-authored results.
          </p>
        </div>
      </section>

    </div>
  );
}
