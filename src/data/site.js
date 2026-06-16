// Single source of truth for site content. Third person, operator-grade.

export const site = {
  name: 'Aditya Indra Bayu',
  shortName: 'Aditya Bayu',
  role: 'Venture Builder · Fractional CMO',
  location: 'South Tangerang, Indonesia',
  email: 'hi.andrewbayu@gmail.com',
  url: 'https://adityabayu.com',
  nav: [
    { label: 'Ventures', href: '/#ventures' },
    { label: 'Receipts', href: '/#receipts' },
    { label: 'Built', href: '/#built' },
    { label: 'Writing', href: '/blog/' },
    { label: 'Contact', href: '/#contact' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-indra-bayu-38a11271/' },
    { label: 'Instagram', href: 'https://instagram.com/adityaindra.bayu' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@adityaindra.bayu' },
  ],
};

export const hero = {
  kicker: ['Venture Builder · Fractional CMO', 'South Tangerang, Indonesia'],
  title: ['Starts, operates, and', 'scales ventures', 'across industries.'],
  lede:
    'Aditya (Andrew) Indra Bayu builds companies. He names the brand, ships the site and funnel, builds the AI tools they run on, then takes an operating seat until the venture finds revenue.',
  domains: ['Education', 'Maritime', 'Agency', 'Film', 'AI products'],
  stats: [
    { value: 'Rp156B', label: 'Revenue milestone, Wall Street English Indonesia' },
    { value: '+200%', label: 'Registration growth, Hacktiv8' },
    { value: 'Top 100', label: 'Calibreworks, Clutch.co digital agencies' },
    { value: '10 / 5', label: 'Ventures across five industries' },
  ],
};

export const now = [
  {
    role: 'Head of Digital Marketing',
    org: 'Gentem Lifelong Learning',
    note: 'AI integration across Wall Street English Indonesia, CURIOOkids, and INDIES.',
  },
  {
    role: 'Chief Marketing Officer',
    org: 'PT Inovasi Maritim Indonesia',
    note: 'Positioning the yard for B2G patrol and fisheries vessels.',
  },
  {
    role: 'CEO & Founder',
    org: 'Calibreworks · We Are Infiniti',
    note: 'The agency layer that ships every other venture.',
  },
  {
    role: 'Available · Fractional CMO',
    org: 'For digital-agency owners scaling past 100 clients.',
    note: 'Open to engagements now.',
    cta: true,
  },
];

export const how = [
  'No pitch decks and no walk-aways. Aditya starts the company. Names the brand. Architects the funnel. Builds the AI tools the venture runs on. Stays on the cap table, or the operating seat, until it ships.',
  "Some ventures he owns outright. Some he co-builds. Some he runs as CMO inside someone else's company. In every case he's inside the machine, not beside it. That is the only meaningful difference between a venture builder and a consultant.",
];

export const ventures = [
  {
    name: 'Calibreworks',
    role: 'Chief Executive Officer · evolved from Enderworks (2016)',
    tag: 'Agency · Owned',
    scope:
      "Full-service digital agency in South Tangerang. App development, creative, digital marketing, lead generation, social, and web. Listed in Clutch.co's Top 100 digital agencies.",
  },
  {
    name: 'We Are Infiniti',
    role: 'Founder & Operator · PT Infiniti Media Galaksi',
    tag: 'Agency · Owned',
    scope:
      'Digital growth, creative, branding, and web-development agency. The internal engine that ships every other venture, while serving 300+ external brands.',
  },
  {
    name: 'Growthlab Academy',
    role: 'Founder · learn.growthlab.co.id',
    tag: 'EdTech · Owned',
    scope:
      "EdTech venture productising Aditya's playbooks. ContentStrategist Toolkit, Growth Curve Method, and a mentoring layer for founders and marketers.",
  },
  {
    name: 'PT Inovasi Maritim Indonesia',
    role: 'Chief Marketing Officer · operating partner',
    tag: 'Maritime · Operator',
    scope:
      'Operating-seat venture in maritime and shipbuilding. Patrol boats, fiberglass speedboats, steel fishing vessels, B2G solutions. Brand and demand engine built around custom design, TKDN, and local after-sales.',
  },
  {
    name: 'Gentem Lifelong Learning',
    role: 'Acting Head of Digital Marketing · WSE, CURIOOkids, INDIES',
    tag: 'Education · Operator',
    scope:
      'Embedded operator role across a multi-brand education group. Owned the funnel from traffic to lead, SQL, appointment, show, and paid enrollment.',
  },
  {
    name: 'Genstarkids',
    role: "Founder · children's education brand (ages 3–12)",
    tag: 'EdTech · Owned',
    scope:
      'Built end-to-end. Brand, site, paid-appointment model, RIASEC-style profiling. Early pilot returned Rp14.5M from Rp5.7M ad spend across 20 paid appointments.',
  },
  {
    name: 'Kinema',
    role: 'Founder & super admin · film marketing platform',
    tag: 'Film · Owned',
    scope:
      'Service-as-software for film and IP clients. The Kinema team uses it internally to deliver audience analysis, box-office prediction, FIB decks, and visibility tracking. Multi-tenant Firebase auth, Gemini-powered analysis, real-time showtime data.',
  },
  {
    name: 'Vantara Boat',
    role: 'Founder · fiberglass boat brand concept',
    tag: 'Maritime · Owned',
    scope:
      'Speedboats, sport-fishing, and passenger boats. Brand positioning, visual direction, and maritime go-to-market. Incubated alongside the IMI operating work.',
  },
  {
    name: 'Street Talk · UrbanLuxe Atelier · Skelup',
    role: 'Founder · brand and product concepts in incubation',
    tag: 'Multi · Incubating',
    scope:
      'A speaking-first English brand, a premium retail concept, and an AI solopreneur hub. Each built from positioning to product concept inside the venture lab.',
  },
];

export const receipts = [
  { value: 'Rp156B', src: 'Wall Street English Indonesia', body: 'Revenue all-time high. Strategy and metrics rebuilt back to profit within 1.5 years.', note: true },
  { value: '+200%', src: 'Hacktiv8', body: 'Course-registration growth.', note: true },
  { value: '10M+', src: 'Aboitiz / KicauFest', body: 'Reach across three seasons of community campaigns, growing the community by 30K+.', note: true },
  { value: '3.1M', src: 'HypeBuzz', body: 'TikTok views from viral content campaigns, with 670K engagement.', note: true },
  { value: 'Top 100', src: 'Calibreworks', body: "Placed in Clutch.co's Top 100 digital agencies." },
  { value: '300+', src: 'We Are Infiniti', body: 'Business owners and brands supported.' },
  { value: '50+', src: 'Growthlab Academy', body: 'Young entrepreneurs mentored.' },
  { value: 'Film & IP', src: 'Kinema', body: 'Ships service-as-software: audience analysis, box-office prediction, and showtime tracking in one operating layer.' },
];

export const tools = [
  { kind: 'AI Copilot', name: 'William 3.0', note: 'Growth and revenue copilot for funnel analysis, campaign review, KPI tracking, and revenue forecasting. Reliable enough to read a P&L.' },
  { kind: 'Agent System', name: 'Andrew Bayu Agent System v1', note: "Personal AI operating system. Encodes Aditya's strategic thinking, tone, marketing logic, and decision heuristics into a single multi-mode agent." },
  { kind: 'Framework', name: 'Level Ads Framework', note: 'Proprietary paid-ads framework. Levels of awareness mapped to funnel stages mapped to creative angles. Budget allocation, creative testing, and signal-based scaling in one playbook.' },
  { kind: 'Creative Kit', name: 'Ad-in-a-Box Kit', note: "AI-powered production kit for hooks, angles, and rapid creative variants. Built for founders who can't afford a creative team yet." },
  { kind: 'Content System', name: 'ContentStrategist Toolkit', note: 'Persona worksheets, strategy cards, content routes, a hook library, and AI prompts. Productised by Growthlab.' },
  { kind: 'Framework', name: 'Growth Curve Method', note: 'Pillar, supporting, and content routes. The content framework that moves brands from random posting to a system.' },
  { kind: 'Framework', name: 'AEO / AIO Strategy', note: 'Answer-Engine and AI Optimization. Content built to be retrieved, summarized, and recommended by AI systems. Written for the post-Google era.' },
  { kind: 'Framework', name: 'Revenue Engine Model', note: 'Enterprise B2B growth engine. Inbound, outbound, ABM, SDR motion, partnership, upsell, and RevOps in one operating layout.' },
  { kind: 'Web App', name: 'PeakMind', note: 'Gamified, Duolingo-style IQ and potential assessment. Archetype results, randomized question logic.' },
  { kind: 'Generative', name: 'CharaGen2', note: 'AI character generator with 400B+ combinations. Built for storytelling, games, and creative ideation.' },
  { kind: 'Content Generator', name: 'Xniper', note: 'AI content generator for marketing teams. Briefs in, on-brand articles, hooks, and angles out. Vite + React + Tailwind, Gemini, Firebase. Live at xniperapp.vercel.app.' },
  { kind: 'Maritime AI', name: 'Arxea', note: 'AI-assisted ship visualization in React and Gemini. Semi-trimaran hulls, cross-section logic, concept design for IMI.' },
  { kind: 'Platform', name: 'Skelup', note: 'AI solopreneur hub. A workspace for independent founders to build, automate, and scale with AI.' },
];

export const contact = {
  title: 'Have a venture to build?',
  lede:
    'Hire Aditya as a fractional CMO. Co-build a new company. Take an operator seat. Plug the AI stack into an existing brand. If it is a venture worth building, he wants to hear about it.',
  engagementTypes: [
    { value: 'fractional-cmo', label: 'Fractional CMO' },
    { value: 'co-build-venture', label: 'Co-build a venture' },
    { value: 'ai-stack-license', label: 'Plug your AI stack into our brand' },
    { value: 'agency-services', label: 'Calibreworks / We Are Infiniti agency services' },
    { value: 'speaking-mentoring', label: 'Speaking / mentoring' },
    { value: 'other', label: 'Something else' },
  ],
};

// Link-in-bio page (/links) — shared across social media bios.
export const linkPage = {
  tagline: 'Venture Builder · Fractional CMO',
  intro:
    'Aditya (Andrew) Indra Bayu builds and scales companies across education, maritime, agency, film, and AI. He names the brand, ships the funnel, builds the AI tools, then takes an operating seat until the venture finds revenue.',
  // Featured link buttons. Edit freely; add { label, sub, href, tag, external }.
  links: [
    {
      label: 'Xniper',
      sub: 'AI content generator for marketing teams',
      href: 'https://xniper.cloud',
      tag: 'AI tool',
      external: true,
    },
    {
      label: 'Case studies and notes',
      sub: 'Receipts from building ventures across industries',
      href: '/blog/',
      tag: 'Writing',
      external: false,
    },
  ],
  cta: { label: 'Work with Aditya', href: '/#contact' },
};
