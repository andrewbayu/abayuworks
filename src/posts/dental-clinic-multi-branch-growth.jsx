import { H2, H3, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer, Src } from '../components/Prose';

export const meta = {
  slug: 'dental-clinic-multi-branch-growth',
  title: 'Scaling a Jakarta dental clinic from 6 to 10 branches with a full-funnel growth system',
  titleId: 'Scaling Klinik Gigi Jakarta dari 6 ke 10 Cabang dengan Full-Funnel Growth System',
  shortTitle: 'Scaling a Jakarta dental clinic from 6 to 10 branches',
  category: 'Healthcare · Growth System',
  kind: 'Case study',
  date: '2025-11-15',
  dateLabel: 'November 2025',
  summary:
    '120 to 421 leads/month, Rp300M/month digital-influenced revenue, 6 to 7x ROAS. Performance ads, a website funnel, AI-assisted WhatsApp CS, and a custom CRM, run as one system.',
  description:
    'A 360 growth system for a multi-branch Jakarta dental group: performance ads, a website funnel, AI-assisted WhatsApp CS, and a custom CRM. Leads grew from 120 to 421 per month at 6 to 7x ROAS.',
  standfirst:
    'A Jakarta dental group had strong offline credibility, but leaked digital opportunities. Rebuilding their acquisition engine—performance media, a website funnel, AI WhatsApp CS, and custom CRM—tripled monthly leads from 120 to 421 and drove Rp300M/month at 6–7x ROAS as they scaled from 6 to 10 branches.',
  standfirstId:
    'Klinik gigi di Jakarta ini memiliki reputasi offline solid, tetapi sistem digitalnya bocor. Membangun mesin akuisisi terpadu—iklan performa, website funnel, CS WhatsApp AI, dan CRM kustom—melonjakkan leads dari 120 ke 421/bulan dan menghasilkan Rp300 juta/bulan pada 6–7x ROAS seiring ekspansi dari 6 ke 10 cabang.',
  img: 'https://storage.googleapis.com/bluestark_explorer/scalingdentalclinic.jpg',
  tags: ['Healthcare', 'Multi-branch', 'Performance', 'CRM', 'AI CS', 'Funnel'],
};

export function Body() {
  return (
    <>
      <H2>Context</H2>
      <P>The clinic was a respected Jakarta dental group with 6 branches and a steady offline reputation. Patient growth, though, was bottlenecked by the digital layer. Around 120 leads landed per month, mostly from basic Meta ads and organic inquiries. The website browsed like a brochure, WhatsApp CS was manual and inconsistent across branches, and attribution was fragmented, so no one could say which campaign produced revenue versus which campaign just produced clicks.</P>

      <H2>The problem</H2>
      <UL>
        <LI><strong>Lead generation was inconsistent.</strong> ~120 leads per month, no system behind the volume.</LI>
        <LI><strong>The website did not function as a funnel.</strong> Visitors could browse treatments, but the path to a consultation was weak.</LI>
        <LI><strong>CS was slow and manual.</strong> WhatsApp inquiries waited, follow-ups were missed, answers varied by branch.</LI>
        <LI><strong>No centralized tracking.</strong> Leads came from Meta, Google, WhatsApp, web forms, and walk-ins, with no clear attribution back to campaign, creative, or branch.</LI>
        <LI><strong>Branch capacity was uneven.</strong> Some branches were full while others had open chairs, with no digital routing balancing demand.</LI>
      </UL>

      <H2>Objectives</H2>
      <P muted>Four goals framed the 360 digital program:</P>
      <UL>
        <LI><strong>Primary.</strong> Increase monthly patient inquiries and booked consultations.</LI>
        <LI><strong>Revenue.</strong> Reach Rp300 million per month in digital-influenced revenue within 3 months.</LI>
        <LI><strong>Efficiency.</strong> Hold paid-media ROAS at 6 to 7x while scaling.</LI>
        <LI><strong>Operations.</strong> Build an acquisition and follow-up system that could support branch expansion.</LI>
      </UL>

      <H2>The approach</H2>
      <P>The diagnosis came first. The duck was not thirsty for more traffic. It needed a better pond. The system was rebuilt across four engines.</P>

      <H3>1. Performance marketing across Meta and Google</H3>
      <P>Media started at Rp15 million per month and was scaled as the funnel proved profitable. Meta carried demand generation and retargeting. Google Search caught high-intent demand.</P>
      <P>Meta angles: free dental check-up consultation, invisible braces, scaling and whitening promo, kids dental care, veneer smile makeover, implant consultation for missing teeth. Google keyword groups: dokter gigi Jakarta, klinik gigi terdekat, scaling gigi Jakarta, pasang behel Jakarta, veneer gigi Jakarta, whitening gigi Jakarta, dental implant Jakarta. Retargeting hit treatment-page visitors with proof creative, doctor introductions, promo reminders, and a WhatsApp CTA.</P>

      <H3>2. Website rebuilt as a funnel</H3>
      <P>The old company-profile site became a conversion engine. Each high-value service got a dedicated landing page: braces and orthodontics, veneer, whitening, dental implant, scaling, kids dentistry, emergency dental care.</P>
      <P>Every treatment page included the same lead-capture stack: a sticky WhatsApp button, a branch selector, a dentist schedule inquiry, a promo form, a consultation CTA, an FAQ, before-after style treatment education, and trust signals (branch count, dentist team, patient reviews, technology). Cold visitors were educated, warm visitors were pushed to WhatsApp, and high-intent visitors went straight to booking. Traffic temperature drove the path, not a one-size-fits-all CTA.</P>

      <H3>3. AI-assisted WhatsApp CS via Cekat.ai</H3>
      <P>The breakthrough on response speed and consistency. <Src>Cekat.ai</Src> was trained on the clinic's actual question set: price ranges, branch locations, dentist availability, promo details, treatment duration, pain and safety concerns, braces versus aligner comparisons, veneer process, scaling versus whitening, booking steps.</P>
      <P>It was not a one-shot deployment. The model was tuned weekly on real chat data: better objection handling, more natural Indonesian responses, branch-specific routing, promo-specific templates, handoff rules to human CS, lead qualification questions, missed-chat recovery, and follow-up reminders for undecided leads. First-response delay dropped, answers became standardized, and the clinic absorbed higher lead volume without immediately growing CS headcount.</P>

      <H3>4. Custom CRM by Calibreworks</H3>
      <P>To close the attribution and operations gaps, <Src>Calibreworks</Src> built the clinic a custom CRM. Every lead carried source, campaign, ad set, creative, keyword, landing page, branch preference, treatment interest, CS response status, appointment status, show-up status, treatment value, and revenue attribution.</P>
      <P>Management dashboards exposed cost per lead by channel, lead-to-booking rate, booking-to-show-up rate, revenue per branch, ROAS by campaign, best-performing treatments, CS performance, and unclosed leads needing follow-up. The decision question shifted from "which ads got cheap leads" to "which campaigns produced actual patients and actual revenue."</P>

      <H2>The outcome</H2>
      <FigureGrid
        items={[
          { n: '120 → 421', l: 'Monthly leads (~+251%)' },
          { n: 'Rp300M', l: 'Digital-influenced revenue, Month 3' },
          { n: '6 to 7x', l: 'Avg. paid-media ROAS, sustained' },
          { n: '6 → 10', l: 'Branches across Jakarta' },
        ]}
      />
      <P muted>Monthly progression:</P>
      <UL>
        <LI><strong>Month 1.</strong> 168 leads, ~Rp95M digital-influenced revenue, 6.3x ROAS, Rp15M spend.</LI>
        <LI><strong>Month 2.</strong> 201 leads, ~Rp170M digital-influenced revenue, 6.8x ROAS, Rp25M spend.</LI>
        <LI><strong>Month 3.</strong> 421 leads, ~Rp300M digital-influenced revenue, 6.7x ROAS, Rp45M spend.</LI>
      </UL>

      <H2>Why it worked</H2>
      <UL>
        <LI><strong>The website became a funnel, not a brochure.</strong> Visitors were guided toward booking, not just browsing.</LI>
        <LI><strong>AI CS raised speed-to-lead.</strong> More inquiries were answered fast, qualified properly, and followed up consistently.</LI>
        <LI><strong>CRM tracking exposed real performance.</strong> The team saw which campaigns produced revenue, not just cheap leads.</LI>
        <LI><strong>Budget followed treatment profitability.</strong> Spend shifted toward higher-value treatments: braces, veneer, whitening, implants.</LI>
        <LI><strong>Branch routing balanced capacity.</strong> Patients were directed to branches by location, treatment, and schedule availability.</LI>
      </UL>

      <Pull>A clinic does not scale on ads alone. It scales on a system: traffic, funnel, AI response, CRM tracking, and branch-level revenue.</Pull>

      <H2>What carried forward</H2>
      <P>This is the pattern Aditya now runs across other multi-location service businesses. Acquisition is one of four moving parts. Convert, qualify, attribute, and route, and each part has to be operationally owned. Otherwise the ads are subsidizing waste somewhere downstream that nobody can see.</P>

      <Tags items={meta.tags} />
      <Disclaimer>
        Reported case figures reflect contributions to team outcomes during the engagement described, not sole-authored results. Work delivered via Calibreworks. Client kept anonymous under NDA.
      </Disclaimer>
    </>
  );
}

export function BodyId() {
  return (
    <>
      <H2>Konteks Bisnis</H2>
      <P>Klinik ini adalah grup klinik gigi terpercaya di Jakarta dengan 6 cabang dan reputasi offline yang solid. Namun, pertumbuhan pasien terhambat di lapisan digital. Hanya sekitar 120 leads yang masuk per bulan, mayoritas dari iklan Meta mendasar dan pesan organik sporadis. Websitenya berfungsi kaku layaknya brosur cetak, penanganan CS WhatsApp masih manual dan tidak seragam antar cabang, serta atribusi data terpecah-pecah—sehingga manajemen tidak bisa membedakan campaign mana yang menghasilkan pasien riil versus iklan yang hanya buang-buang klik.</P>

      <H2>Akar Masalah</H2>
      <UL>
        <LI><strong>Akuisisi leads tidak konsisten:</strong> ~120 leads/bulan tanpa sistem prediktif di balik volumenya.</LI>
        <LI><strong>Website tidak bekerja sebagai funnel:</strong> Pengunjung bisa melihat daftar treatment, namun jalur menuju konsultasi dan booking sangat lemah.</LI>
        <LI><strong>Respon CS lambat dan manual:</strong> Chat WhatsApp menumpuk, follow-up sering terlewat, dan standar jawaban berbeda di tiap cabang.</LI>
        <LI><strong>Tanpa pelacakan terpusat:</strong> Leads berceceran dari Meta, Google, WhatsApp, formulir web, dan walk-in tanpa atribusi jelas ke materi iklan atau cabang.</LI>
        <LI><strong>Kapasitas cabang timpang:</strong> Cabang tertentu penuh antrean sementara cabang lain memiliki kursi kosong, tanpa pengaturan routing digital.</LI>
      </UL>

      <H2>Sasaran Program 360°</H2>
      <P muted>Empat target utama disepakati bersama manajemen:</P>
      <UL>
        <LI><strong>Primer:</strong> Melipatgandakan jumlah konsultasi dan booking pasien baru setiap bulan.</LI>
        <LI><strong>Revenue:</strong> Menyentuh Rp300 juta per bulan revenue terpengaruh digital dalam waktu 3 bulan.</LI>
        <LI><strong>Efisiensi:</strong> Mempertahankan ROAS paid media di kisaran 6–7x selama scaling.</LI>
        <LI><strong>Operasional:</strong> Membangun infrastruktur akuisisi dan tindak lanjut yang siap menopang ekspansi cabang baru.</LI>
      </UL>

      <H2>Pendekatan Eksekusi: 4 Mesin Pertumbuhan</H2>
      <P>Diagnosa ditegakkan terlebih dahulu: masalahnya bukan kurang traffic, melainkan ekosistem konversinya yang belum siap. Kami merekonstruksi sistem akuisisi di atas 4 mesin utama:</P>

      <H3>1. Performance Marketing di Meta dan Google Search</H3>
      <P>Budget media dimulai dari Rp15 juta/bulan dan di-scale secara terukur seiring pembuktian profitabilitas funnel. Meta fokus memicu demand dan retargeting, sementara Google Search menangkap audiens dengan niat beli tinggi (high-intent).</P>
      <P>Angle iklan Meta: konsultasi gratis periksa gigi, behel transparan (aligner), promo scaling & whitening, perawatan gigi anak, makeover senyum veneer, dan konsultasi implan gigi. Kelompok kata kunci Google Search: <em>dokter gigi Jakarta, klinik gigi terdekat, scaling gigi Jakarta, pasang behel Jakarta, veneer gigi Jakarta, klinik gigi implan Jakarta</em>. Retargeting diarahkan ke pengunjung halaman treatment dengan video profil dokter, bukti ulasan pasien, dan CTA WhatsApp langsung.</P>

      <H3>2. Website Dirombak Total Menjadi Funnel</H3>
      <P>Website profil lama yang pasif ditransformasikan menjadi conversion engine. Setiap layanan bernilai tinggi dibuatkan landing page khusus: behel & ortodonti, veneer, bleaching/whitening, implan gigi, scaling, dan dokter gigi anak.</P>
      <P>Setiap landing page dibekali conversion stack yang seragam: tombol sticky WhatsApp, pemilih cabang terdekat, jadwal dokter, formulir promo terbatas, FAQ, edukasi before-after, dan trust signals (jumlah cabang, tim dokter spesialis, ulasan Google Maps). Pengunjung dingin diedukasi, pengunjung hangat diarahkan ke WhatsApp, dan pengunjung berniat tinggi bisa langsung booking jadwal.</P>

      <H3>3. CS WhatsApp Berbasis AI via Cekat.ai</H3>
      <P>Terobosan terbesar pada kecepatan respon dan standarisasi layanan. Kami melatih <Src>Cekat.ai</Src> menggunakan ratusan percakapan riil: rincian estimasi biaya, lokasi cabang, jadwal dokter, detail promo, durasi tindakan, pertanyaan rasa sakit/keamanan, perbandingan behel vs aligner, hingga prosedur booking.</P>
      <P>Model AI ini di-tuning mingguan berdasarkan data chat aktual: penanganan keberatan yang lebih natural dalam Bahasa Indonesia, routing otomatis ke cabang terdekat, pemulihan chat yang terabaikan, serta eskalasi cerdas ke staf manusia saat pasien siap melakukan pembayaran/tindakan medis. Kecepatan respon pertama (speed-to-lead) melesat drastis dan klinik mampu menampung lonjakan chat tanpa perlu menambah headcount CS seketika.</P>

      <H3>4. CRM Kustom oleh Calibreworks</H3>
      <P>Untuk menutup kebocoran data dan operasi, <Src>Calibreworks</Src> membangun CRM kustom. Setiap data pasien membawa informasi lengkap: sumber kampanye, ad set, materi visual iklan, kata kunci Google, preferensi cabang, status chat, jadwal appointment, status kehadiran (show-up), hingga nilai transaksi tindakan medis.</P>
      <P>Dashboard manajemen menyajikan metrik Cost per Lead per channel, rasio Lead-to-Booking, rasio Booking-to-Show, revenue per cabang, ROAS per materi iklan, hingga performa individual CS. Pertanyaan evaluasi bulanan bergeser dari "iklan mana yang leads-nya murah" menjadi "iklan mana yang benar-benar mendatangkan pasien berbayar dan profit nyata ke klinik."</P>

      <H2>Hasil Nyata (The Outcome)</H2>
      <FigureGrid
        items={[
          { n: '120 → 421', l: 'Leads bulanan (~+251%)' },
          { n: 'Rp300 Juta', l: 'Revenue bulanan digital di Bulan ke-3' },
          { n: '6 – 7x', l: 'Rata-rata ROAS paid media terjaga stabil' },
          { n: '6 → 10', l: 'Ekspansi cabang di area Jabodetabek' },
        ]}
      />
      <P muted>Perkembangan performa bertahap:</P>
      <UL>
        <LI><strong>Bulan 1:</strong> 168 leads, ~Rp95 juta revenue terpengaruh digital, 6,3x ROAS, spend Rp15 juta.</LI>
        <LI><strong>Bulan 2:</strong> 201 leads, ~Rp170 juta revenue terpengaruh digital, 6,8x ROAS, spend Rp25 juta.</LI>
        <LI><strong>Bulan 3:</strong> 421 leads, ~Rp300 juta revenue terpengaruh digital, 6,7x ROAS, spend Rp45 juta.</LI>
      </UL>

      <H2>Mengapa Sistem Ini Berhasil</H2>
      <UL>
        <LI><strong>Website menjadi funnel terarah:</strong> Pengunjung dituntun melakukan reservasi, bukan sekadar membaca artikel umum.</LI>
        <LI><strong>AI CS memangkas waktu respon:</strong> Pertanyaan prospek dijawab dalam detik pertama, disaring dengan tepat, dan di-follow up secara konsisten.</LI>
        <LI><strong>Pelacakan CRM transparan:</strong> Manajemen mengetahui persis iklan mana yang menghasilkan kas nyata, bukan metrik semu.</LI>
        <LI><strong>Alokasi budget berbasis profitabilitas treatment:</strong> Belanja media dialihkan ke tindakan ber-margin tinggi: behel, veneer, whitening, dan implan.</LI>
        <LI><strong>Routing cabang menyeimbangkan kapasitas:</strong> Pasien diarahkan ke cabang berdasarkan domisili dan ketersediaan jadwal kursi dokter.</LI>
      </UL>

      <Pull>Klinik tidak bisa scaling hanya dengan menambah iklan. Klinik tumbuh karena sistem terpadu: traffic, funnel, respon AI, pelacakan CRM, dan eksekusi layanan di cabang.</Pull>

      <H2>Prinsip Operasional Lanjutan</H2>
      <P>Inilah blueprint sistemik yang terus saya terapkan pada bisnis jasa multi-cabang. Akuisisi hanyalah satu dari empat roda penggerak: Konversi, Kualifikasi, Atribusi, dan Routing. Setiap bagian harus dikelola secara operasional, jika tidak, budget iklan Anda hanya menyubsidi kebocoran sistem di bagian hilir yang tidak terlihat.</P>

      <Tags items={meta.tags} />
      <Disclaimer>
        Angka studi kasus mencerminkan kontribusi hasil tim selama periode engagement melalui Calibreworks. Identitas klien dilindungi di bawah perjanjian kerahasiaan (NDA).
      </Disclaimer>
    </>
  );
}
