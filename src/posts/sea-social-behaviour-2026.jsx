import { H2, H3, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer } from '../components/Prose';

const FIGURES = {
  trust: '/images/blog/sea-social-behaviour-2026/trust-hierarchy-doodle.png',
  content: '/images/blog/sea-social-behaviour-2026/content-that-converts-doodle.png',
  commerce: '/images/blog/sea-social-behaviour-2026/closed-loop-commerce-doodle.png',
  local: '/images/blog/sea-social-behaviour-2026/indonesia-local-fit-doodle.png',
};

function Figure({ src, alt, caption }) {
  return (
    <figure className="mt-8 overflow-hidden rounded-card border border-line bg-surface">
      <img src={src} alt={alt} loading="lazy" className="w-full" />
      <figcaption className="px-4 py-3 font-serif text-sm leading-relaxed text-muted">{caption}</figcaption>
    </figure>
  );
}

export const meta = {
  slug: 'sea-social-behaviour-2026',
  title: 'How Southeast Asia actually buys in 2026',
  titleId: 'Bagaimana Konsumen Asia Tenggara Berbelanja di Tahun 2026',
  shortTitle: 'How Southeast Asia actually buys in 2026',
  category: 'Research · Southeast Asia',
  kind: 'Paper',
  date: '2026-08-31',
  dateLabel: 'August 2026',
  summary:
    "Aditya's 2026 mapping of Southeast Asian social behaviour: trust hierarchy, the content formats that convert, which storytelling wins, and how buying decisions shifted to closed-loop social commerce.",
  description:
    "Aditya Indra Bayu's 2026 research mapping Southeast Asian social behaviour: trust over polish, creator-led storytelling, and the shift to closed-loop social commerce with Indonesia as the centre of gravity.",
  standfirst:
    "Social in Southeast Asia is no longer a media channel. It is now the search bar, the shopping mall, and the trust layer of commerce. This paper maps what matters to SEA consumers, what content actually converts, which storytelling is effective, and how buying decisions changed through 2026.",
  standfirstId:
    "Media sosial di Asia Tenggara bukan lagi sekadar kanal periklanan. Media sosial kini telah menjadi search bar utama, pusat perbelanjaan digital, sekaligus lapisan kepercayaan (trust layer) dalam transaksi komersial. Riset ini membedah apa yang benar-benar penting bagi konsumen Asia Tenggara, format konten mana yang menghasilkan konversi riil, gaya storytelling apa yang efektif, dan bagaimana peta keputusan belanja bergeser drastis sepanjang 2026.",
  img: 'https://storage.googleapis.com/bluestark_explorer/infinitiworks/seasocialreport2026.jpg',
  tags: ['Southeast Asia', 'Social Commerce', 'Creator Economy', 'Marketing 2026', 'Indonesia', 'Consumer Behaviour'],
};

export function Body() {
  return (
    <>
      <UL>
        <LI><strong>01 · Trust.</strong> Family, friends, and creators sit above brand and machine in the influence hierarchy.</LI>
        <LI><strong>02 · Content.</strong> Short video, live commerce, UGC, and micro-dramas convert. Polished studio ads do not.</LI>
        <LI><strong>03 · Story.</strong> Creator-led, lived-experience storytelling beats broadcast storytelling.</LI>
        <LI><strong>04 · Commerce.</strong> Buying is now a closed loop: discover, prove, and purchase in one screen.</LI>
      </UL>

      <H2>The claim</H2>
      <P>The 2026 Southeast Asian buying journey is no longer a linear funnel. Discovery, trust, and purchase have collapsed into the social feed. Social commerce went from under 5% of regional e-commerce GMV to roughly 20 to 25% in under four years. It is a $47.6 billion market in 2025 heading toward roughly $186.5 billion by 2030, compounding at near 31% a year. That is about two and a half times faster than traditional e-commerce growth.</P>
      <P>The practical implication for any brand or CMO: showing up where discovery happens now matters more than buying where conversion used to live. Most brands still optimize one surface. The market has moved to three.</P>

      <H2>Why people buy</H2>
      <P>Asked who they believe when it is time to pay, SEA shoppers name family and friends first (rated 2.42 out of 4.0), online reviews second (2.36), and creators third (1.98). AI assistants rank last. Two thirds of consumers, around 67%, have bought a product specifically because a creator recommended it.</P>
      <P>The conversion gap is the story. A micro-influencer recommendation converts around 82% of the time, against the 1 to 2% typical of traditional e-commerce. That is roughly a 40 times uplift. Communities in the region form around creators before they form around brands.</P>
      <FigureGrid
        items={[
          { n: '82%', l: 'Conversion after a micro-influencer recommendation' },
          { n: '~40X', l: 'Conversion advantage over traditional e-commerce' },
          { n: '67%', l: 'Have bought because a creator recommended it' },
          { n: '1-2%', l: 'Typical traditional e-commerce conversion' },
        ]}
      />
      <Figure
        src={FIGURES.trust}
        alt="Hand-drawn trust hierarchy showing family and friends, online reviews, creators, brands, and AI assistants"
        caption="In Southeast Asia, trust is social before it is institutional: people move through relationships, reviews, creators, brands, and machines."
      />

      <H2>Micro beats mega</H2>
      <P>Micro-influencers with 2,000 to 10,000 followers generate roughly four times the engagement of million-follower accounts, and the pattern repeats across every major SEA market. Their communities feel like friends, not audiences. Product recommendations carry social credibility instead of tasting like advertising.</P>
      <P>Platforms now rank relevance over follower count. A brand-new account can go viral on day one if the content triggers the right interest signal, while an established account can lose reach overnight when its content stops resonating.</P>

      <H2>The content that converts</H2>
      <UL>
        <LI><strong>Short-form video.</strong> Above 60% of all social consumption, and short-form views grew 36% year over year. It is the baseline craft for reaching SEA.</LI>
        <LI><strong>Live commerce.</strong> Converts up to roughly 10 times traditional e-commerce. An average TikTok live holds attention for 23 minutes, and 35% of viewers repurchase within 30 days.</LI>
        <LI><strong>UGC and creator talking-heads.</strong> Drives near 10 times the conversion of brand content. Imperfect but relatable execution wins.</LI>
        <LI><strong>Carousels.</strong> Around 109% more engagement than Reels on Instagram, and strong for education and comparison.</LI>
        <LI><strong>Micro-dramas.</strong> One to three minute emotional stories reach roughly eight times publisher benchmarks. They are large in Malaysia and Indonesia.</LI>
        <LI><strong>Long-form YouTube reviews.</strong> Influence purchases weeks or months later; trust compounds across repetition.</LI>
        <LI><strong>Chat commerce.</strong> Around 40% of Thai and 36% of Vietnamese shoppers buy through messaging apps. It is mainstream, not niche.</LI>
      </UL>
      <P>None of these reward polish. The biggest media waste in 2026 is still commissioning expensive, on-brand-sounding studio ads that the audience did not ask for.</P>
      <Figure
        src={FIGURES.content}
        alt="Hand-drawn map of content formats that convert, from short video and live commerce to UGC, education, and long-form reviews"
        caption="The practical content stack moves from attention and participation to education and considered proof. Different formats, same job: help people decide and act."
      />

      <H2>The storytelling that works</H2>
      <P>Storytelling is confirmed as the strongest narrative form in the region. Around 79% of SEA social users engage more with creator content that feels like a story rather than an ad, and creator-led campaigns deliver roughly 3.5 times the engagement of traditional paid media (WARC Influencer Marketing Benchmark 2025).</P>
      <P>The winning mode is not broadcast storytelling and it is not product placement. It is emotional placement: the brand enters a real lived moment and stays subtle in the story while remaining present in the outcome.</P>
      <UL>
        <LI><strong>Routine storytelling.</strong> A delivery service shown through a creator's midnight cravings and early-morning cooking. Natural, useful, believable.</LI>
        <LI><strong>Behind-the-scenes.</strong> A creator experiencing the truth of the product, such as a durability lab visit, instead of hearing scripted claims.</LI>
        <LI><strong>Short emotional micro-dramas.</strong> Serialized one to three minute stories rooted in local festival culture. NIVEA Malaysia lifted brand health and near-double-digit sales; Air Selangor drew 23.5 million views and an 18 point sentiment jump.</LI>
        <LI><strong>Episodic quest narratives.</strong> A long-running serialized platform, not one-off ads. Shell Malaysia reversed two years of market share decline with its Quest storytelling system.</LI>
      </UL>
      <Pull>Storytelling works when the brand is subtle in the story and present in the outcome.</Pull>

      <H2>How the buying decision shifted in 2026</H2>
      <P>The funnel is not dead, but the journey changed permanently. Over 60% of product discovery now happens on TikTok, Instagram, and YouTube. One in three consumers starts product searches on a social platform instead of Google. Yet around 88% of purchases finish inside the marketplace they already trust.</P>
      <P>Discovery and purchase have split. People use AI to decide faster (86% of Gen Z in Vietnam, Indonesia, the Philippines, and Thailand say AI search reduces decision fatigue), but they leave the assistant to buy from a human where it feels safe. The winning platform removes the gap entirely.</P>
      <P>Around 85% of consumers switch apps during a fragmented journey. TikTok Shop compresses discovery, information, reviews, checkout, and payment into one screen with no context switching, no competitor price comparison, and no abandonment. By early 2026, that single-stream conversion path became the expected standard.</P>
      <Figure
        src={FIGURES.commerce}
        alt="Hand-drawn closed-loop commerce journey from discover to trust, prove, and purchase"
        caption="The shortest path is not simply more reach; it is fewer context switches between discovery, proof, and purchase."
      />
      <H3>The market scale</H3>
      <P>SEA e-commerce is roughly $219 billion in 2026 and projected to near $410 billion by 2031. Indonesia and Thailand account for about 58% of regional sales. Influencer and affiliate marketing link to an estimated 32% of SEA e-commerce, equivalent to around $70 billion in 2026. The number of TikTok creators generating over $1 million in annual GMV tripled in a single year.</P>

      <H2>Indonesia is the centre of gravity</H2>
      <P>Indonesia has roughly 180 million social media users, up 26% in a single year, out of about 230 million internet users. It is TikTok's largest advertising audience on earth, with near-total adoption among women 18 and up. Indonesians average 38 hours and 26 minutes on TikTok per month, the highest of any platform, and about 3 hours and 17 minutes a day across social media.</P>
      <P>Around 82% of Indonesian users research products on social platforms, and WhatsApp is a daily utility. The caution: Indonesia is not one market. Jakarta, Surabaya, and smaller cities behave differently in values, platform use, and price sensitivity. One national playbook rarely fits.</P>
      <FigureGrid
        items={[
          { n: '180M', l: 'Social users in Indonesia, up 26% YoY' },
          { n: '#1', l: 'Indonesia is TikTok\u2019s largest ad audience globally' },
          { n: '38h26m', l: 'Average monthly TikTok time per user' },
          { n: '82%', l: 'Research products on social platforms' },
        ]}
      />
      <Figure
        src={FIGURES.local}
        alt="Hand-drawn map showing different cultural, platform, and price contexts across Jakarta, Surabaya, and smaller Indonesian cities"
        caption="Indonesia is a centre of gravity, but a national audience still contains different cultural, platform, and price contexts. Localize culture, not just language."
      />

      <H2>What this means for brands</H2>
      <UL>
        <LI><strong>Flip the funnel.</strong> Start where discovery happens. Put creative where the feed lives, not only where conversion used to sit.</LI>
        <LI><strong>Go micro-first.</strong> Brief light, not tight. Clear message, defined boundaries, creative freedom. Let creators own the narrative.</LI>
        <LI><strong>Build a closed loop.</strong> Single-stream purchase paths, shoppable video, and chat commerce remove the clicks that kill conversion.</LI>
        <LI><strong>Use storytelling as emotional placement.</strong> Integrate the brand into real lived moments, and run it episodically so trust compounds.</LI>
        <LI><strong>Localize culturally, not just linguistically.</strong> Native humor, pacing, and festival moments (Raya, Chinese New Year, Idul Fitri, Deepavali) beat translated global creative.</LI>
        <LI><strong>Use AI for scale, humans for trust.</strong> AI reduces decision fatigue and speeds creative testing. People still want a human name attached before they pay.</LI>
        <LI><strong>Measure like a creator.</strong> Read comment quality, saves, shares, watch time, and repurchase. Read the comments themselves.</LI>
      </UL>

      <H2>Research notes</H2>
      <P>This paper aggregates public 2026 sources: DataReportal and We Are Social (Digital 2026), Meltwater, Hootsuite and Epilog Creative social trends, Indonesia Investments and Digital in Asia market notes, the Momentum Works and Bain, Google, Temasek e-Conomy SEA work, UGC and influencer benchmark reports, and regional campaign case studies (NIVEA, Air Selangor, Shell Malaysia, Julie's Biscuits). Figures are directional market data, not sole-authored results.</P>

      <Pull>Relationships replace search. Recommendations replace algorithm exposure.</Pull>

      <Tags items={meta.tags} />
      <Disclaimer>
        Reported figures are market and campaign contributions drawn from public 2026 sources and case studies, used for direction and planning rather than as sole-authored audit results.
      </Disclaimer>
    </>
  );
}

export function BodyId() {
  return (
    <>
      <UL>
        <LI><strong>01 · Kepercayaan (Trust).</strong> Keluarga, teman, dan kreator berada jauh di atas reputasi brand ataupun rekomendasi mesin dalam hierarki pengaruh.</LI>
        <LI><strong>02 · Konten (Content).</strong> Video pendek, live commerce, UGC otentik, dan micro-drama menghasilkan konversi nyata. Iklan studio yang kelewat kinclong justru diabaikan.</LI>
        <LI><strong>03 · Cerita (Story).</strong> Storytelling berbasis pengalaman nyata kreator mengalahkan iklan siaran satu arah (broadcast).</LI>
        <LI><strong>04 · Komersial (Commerce).</strong> Proses belanja kini adalah loop tertutup (closed-loop): temukan, verifikasi bukti, dan bayar di satu layar yang sama.</LI>
      </UL>

      <H2>Pergeseran Mendasar</H2>
      <P>Perjalanan belanja konsumen Asia Tenggara di tahun 2026 bukan lagi funnel linear konvensional. Penemuan produk (discovery), pembangunan kepercayaan (trust), dan transaksi (purchase) telah melebur langsung di dalam feed media sosial. Porsi social commerce melesat dari di bawah 5% total GMV e-commerce regional menjadi sekitar 20% hingga 25% hanya dalam kurun waktu kurang dari empat tahun. Ini adalah pasar bernilai $47,6 miliar di tahun 2025 yang diproyeksikan menyentuh $186,5 miliar pada 2030, tumbuh sekitar 31% per tahun—kira-kira 2,5 kali lebih cepat dibanding e-commerce tradisional.</P>
      <P>Implikasi praktis bagi setiap pemilik brand dan CMO: hadir di tempat audiens menemukan inspirasi (discovery) kini jauh lebih krusial dibanding hanya beriklan di tempat transaksi dulu berada. Mayoritas brand masih sibuk mengoptimalkan satu titik konversi, padahal pasar sudah berpindah ke ekosistem terpadu.</P>

      <H2>Mengapa Audiens Membeli</H2>
      <P>Saat ditanya siapa yang paling mereka percayai saat hendak membayar, pembeli Asia Tenggara menempatkan keluarga dan sahabat di urutan pertama (skor 2,42 dari 4,0), ulasan online independen di urutan kedua (2,36), dan konten kreator di urutan ketiga (1,98). Asisten AI berada di posisi paling buncit. Sekitar 67% konsumen mengaku pernah membeli suatu produk secara spesifik karena rekomendasi dari seorang kreator.</P>
      <P>Gap tingkat konversinya sangat mencolok: rekomendasi micro-influencer menghasilkan tingkat konversi rata-rata sekitar 82%, dibandingkan 1% hingga 2% pada toko online tradisional. Itu adalah peningkatan efektivitas hingga 40 kali lipat. Di kawasan ini, komunitas terbentuk mengelilingi figur kreator jauh sebelum mereka melirik logo sebuah brand.</P>

      <FigureGrid
        items={[
          { n: '82%', l: 'Tingkat konversi rekomendasi micro-influencer' },
          { n: '~40X', l: 'Keunggulan konversi dibanding e-commerce web biasa' },
          { n: '67%', l: 'Pernah checkout karena rekomendasi kreator' },
          { n: '1-2%', l: 'Rata-rata konversi checkout e-commerce klasik' },
        ]}
      />

      <Figure
        src={FIGURES.trust}
        alt="Diagram hierarki kepercayaan audiens Asia Tenggara: keluarga, ulasan, kreator, brand, dan asisten AI"
        caption="Hierarki kepercayaan konsumen Asia Tenggara: kedekatan personal dan pembuktian nyata kreator jauh mengalahkan otoritas klaim korporasi."
      />

      <H2>Format Konten yang Menghasilkan Transaksi</H2>
      <P>Audiens Asia Tenggara tidak membenci konten promosi. Mereka hanya membenci iklan yang terasa asing dan dibuat-buat. Format yang paling tinggi menghasilkan konversi adalah:</P>
      <UL>
        <LI><strong>Video Pendek Shoppable:</strong> Konten vertikal 30–60 detik yang langsung terhubung ke keranjang kuning/checkout tanpa perlu pindah aplikasi.</LI>
        <LI><strong>Live Commerce:</strong> Sesi interaktif tanya-jawab real-time yang membedah detail fisik produk secara transparan.</LI>
        <LI><strong>UGC Berbasis Masalah Nyata:</strong> Pengguna biasa yang memperlihatkan bagaimana produk menyelesaikan masalah sehari-hari mereka.</LI>
      </UL>

      <Figure
        src={FIGURES.content}
        alt="Diagram format konten yang mengonversi vs format yang ditinggalkan"
        caption="Format yang mengonversi: konten otentik kreator, live interaktif, dan micro-drama menggeser produksi iklan studio mewah yang kaku."
      />

      <H2>Kekuatan Storytelling Emosional</H2>
      <P>Storytelling terbukti menjadi bentuk narasi paling kuat di kawasan ini. Sekitar 79% pengguna media sosial di Asia Tenggara lebih engaged dengan konten kreator yang membawakan cerita dibanding iklan terang-terangan, dan campaign berbasis kreator menghasilkan engagement rata-rata 3,5 kali lebih tinggi dibanding paid ads biasa (WARC Benchmark 2025).</P>
      <P>Pola yang menang bukanlah product placement kaku, melainkan <em>emotional placement</em>: brand masuk secara natural ke dalam momen kehidupan nyata, tetap bersahaja di alur cerita, namun hadir nyata di hasil akhirnya.</P>

      <Pull>Storytelling berhasil ketika brand bersahaja di dalam cerita dan hadir nyata di hasil akhir.</Pull>

      <H2>Pergeseran Keputusan Belanja di 2026: Closed-Loop Commerce</H2>
      <P>Funnel belum mati, tetapi jalurnya telah termampatkan. Lebih dari 60% penemuan produk baru kini berawal di TikTok, Instagram, dan YouTube. Namun, sekitar 85% konsumen rawan drop-off jika harus berpindah-pindah aplikasi antara melihat ulasan dan melakukan pembayaran. TikTok Shop dan fitur in-app checkout mengompres penemuan, ulasan, dan pembayaran dalam satu aliran layar tunggal tanpa jeda.</P>

      <Figure
        src={FIGURES.commerce}
        alt="Diagram perjalanan closed-loop commerce dari discover, trust, prove, hingga purchase"
        caption="Jalur tercepat bukanlah menambah jangkauan tayangan, melainkan memangkas friksi perpindahan aplikasi antara penemuan, pembuktian, dan pembayaran."
      />

      <H2>Indonesia Sebagai Pusat Gravitasi Regional</H2>
      <P>Indonesia memiliki sekitar 180 juta pengguna aktif media sosial (naik 26% dalam setahun) dari total 230 juta pengguna internet. Indonesia adalah pasar audiens iklan TikTok terbesar di dunia. Rata-rata orang Indonesia menghabiskan 38 jam 26 menit per bulan di TikTok, tertinggi dibanding platform mana pun.</P>
      <P>Sekitar 82% pengguna Indonesia meriset produk langsung di media sosial, dan WhatsApp adalah alat komunikasi wajib sehari-hari. Catatan penting bagi praktisi: Indonesia bukanlah satu pasar monolitik. Karakter audiens di Jakarta, Surabaya, dan kota tier 2/3 memiliki sensitivitas harga dan nilai budaya yang sangat berbeda.</P>

      <FigureGrid
        items={[
          { n: '180 Juta', l: 'Pengguna media sosial aktif di Indonesia' },
          { n: '#1', l: 'Indonesia adalah pasar audiens iklan TikTok terbesar di dunia' },
          { n: '38j 26m', l: 'Rata-rata waktu bulanan per pengguna di TikTok' },
          { n: '82%', l: 'Meriset produk langsung di kanal media sosial' },
        ]}
      />

      <Figure
        src={FIGURES.local}
        alt="Peta Indonesia menunjukkan perbedaan konteks budaya, platform, dan daya beli antar kota"
        caption="Indonesia adalah episentrum regional, tetapi pasarnya sangat majemuk. Lokalisasikan pendekatan budayanya, bukan sekadar menerjemahkan bahasanya."
      />

      <H2>Langkah Strategis untuk Brand & Pemilik Bisnis</H2>
      <UL>
        <LI><strong>Balikkan Arah Funnel:</strong> Mulai dari tempat penemuan terjadi. Pasang materi kreatif di feed tempat audiens berkumpul, bukan hanya menunggu di halaman checkout lama.</LI>
        <LI><strong>Utamakan Micro-Influencer:</strong> Berikan creative brief yang ringkas dan fleksibel. Tentukan batasan produk, namun biarkan kreator menyuarakan narasi dengan gaya otentik mereka.</LI>
        <LI><strong>Bangun Closed-Loop Commerce:</strong> Hilangkan klik dan langkah yang memicu kebocoran konversi dengan memanfaatkan shoppable video dan chat commerce WhatsApp terpadu.</LI>
        <LI><strong>Gunakan Storytelling Berkelanjutan:</strong> Libatkan brand ke dalam momen nyata secara berseri (episodik) agar rasa percaya audiens terakumulasi.</LI>
        <LI><strong>Lokalisasi Budaya:</strong> Humor lokal, ritme bahasa sehari-hari, dan momentum musiman (Lebaran, Imlek, Harbolnas) jauh lebih efektif dibanding adaptasi iklan global yang kaku.</LI>
        <LI><strong>Manfaatkan AI untuk Skala, Manusia untuk Trust:</strong> Gunakan AI untuk riset dan kecepatan produksi, tetapi pastikan sentuhan manusia tetap mengawal interaksi dan closing penjualan.</LI>
      </UL>

      <Tags items={meta.tags} />
      <Disclaimer>
        Angka dan data pasar dikompilasi dari laporan publik regional 2026 dan studi kasus industri sebagai acuan perencanaan strategis.
      </Disclaimer>
    </>
  );
}
