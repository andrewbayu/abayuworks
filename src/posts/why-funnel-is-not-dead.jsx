import { H2, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer } from '../components/Prose';

const FIGURES = {
  touchpoints: '/images/blog/why-funnel-is-not-dead/fragmented-touchpoints-doodle.png',
  loop: '/images/blog/why-funnel-is-not-dead/modern-funnel-loop-doodle.png',
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
  slug: 'why-funnel-is-not-dead',
  title: 'The Funnel Is Not Dead — It Just Evolved',
  shortTitle: 'The Funnel Is Not Dead',
  category: 'Growth · Venture Building',
  kind: 'Point of View',
  date: '2026-09-05',
  dateLabel: 'September 2026',
  summary:
    "A contrarian take on the 'funnel is dead' claim — from 10 ventures, IDR 4B+ in ad budget, and 300K+ qualified leads. What actually died, and what replaced it.",
  description:
    "Aditya Bayu on why the funnel isn't dead: 10 ventures, IDR 4B+ in ad budgets, 300K+ leads. The one-page cold-traffic funnel is dying, but the system that sequences a stranger into a buyer is more important than ever.",
  standfirst:
    "Every few months a guru announces the funnel is dead. I've run 10 ventures across 5 industries, managed IDR 4B+ in ad budgets, and generated 300K+ qualified leads. Here's why they're wrong — and what the funnel actually looks like now.",
  img: '/images/blog/why-funnel-is-not-dead/funnel-evolved-featured.png',
  tags: ['Funnel', 'Growth OS', 'Venture Building', 'Digital Marketing', 'AEO'],
};

export function Body() {
  return (
    <>
      <P>
        <strong>Hook:</strong> everyone says funnels are dead. I've run 10 ventures across 5 industries, managed IDR
        4B+ in ad budgets, and generated 300K+ qualified leads. Here's why they're wrong — and why the people telling
        you funnels are dead are usually the ones selling you a workaround.
      </P>

      <H2>The claim that never dies</H2>
      <P>
        Every few months a guru announces the funnel is dead. The customer journey has changed, they say. Buyers are
        smarter now. Attention spans are gone. So, stop building funnels and start… <em>something else</em>.
      </P>
      <P>
        I get why it sells. "The funnel is dead" is a hook that stops the scroll, and the pitch that follows is almost
        always a tool or a formula that promises to replace structure with magic.
      </P>
      <P>
        The problem is it's wrong. Not because funnels haven't changed — they absolutely have. It's wrong because{' '}
        <strong>the thing a funnel does has never been optional.</strong>
      </P>

      <H2>What a funnel actually is</H2>
      <P>
        Strip away the marketing jargon and a funnel is one idea: <strong>you move a stranger to a buyer through a
        series of deliberate steps, and you measure where they drop.</strong>
      </P>
      <P>
        That is not a strategy you can choose to abandon. It's the physics of any transaction. Someone who doesn't know
        you (stranger) has to become someone who trusts you (exactly enough) before they hand over money. That
        transition has a shape. Engineers would call it a state machine; marketers call it a funnel.
      </P>
      <P>
        So when someone says "funnels are dead," what they're really saying is one of two things:
      </P>
      <UL>
        <LI>
          <strong>The specific funnel I was shown</strong> (buy traffic → land on a page → pitch → close) doesn't
          perform like it used to. True. It doesn't.
        </LI>
        <LI>
          <strong>I never had a real funnel</strong> — I had a landing page with ads in front of it, and now that's not
          enough. Also true — but that was never a funnel.
        </LI>
      </UL>
      <P>Both statements are about weak execution wearing a costume of bold insight.</P>
      <Figure
        src={FIGURES.touchpoints}
        alt="Hand-drawn diagram of social, search, creator, email, and AI answer touchpoints flowing into trust and conversation"
        caption="The modern funnel starts with fragmented touchpoints. The job is to sequence them into trust and conversation, not pretend the first click should close the deal."
      />

      <H2>How the funnel actually evolved</H2>
      <P>
        I've watched the shape bend across the ventures I run and the clients I've backed — Wall Street English at
        Rp156B revenue all-time high, Hacktiv8 at +200% registration growth, and across 300+ business owners we've
        supported. The funnel isn't gone. It's gotten <em>more</em> complex at the top and <em>faster</em> at the
        bottom.
      </P>
      <P>
        <strong>The top got wider and messier.</strong> Attention used to be a line you bought with ad spend. Today
        your first touchpoint might be a viral thread on X, a comment thread, an AI answer box, a founder's personal
        brand, or a mention in someone's newsletter. Strangers meet you in fragments, not through one clean landing
        page. So awareness is no longer a single gate — it's a cloud of micro-touches.
      </P>
      <P>
        <strong>The middle got trust-hungrier.</strong> With AI and cheap content everywhere, authority is commoditized.
        The people who trust you do so because of <em>proof and personal experience</em>, not because your site looked
        credible. This is exactly why everything I publish is rooted in a real decision from an actual venture — not
        generic theory. Trust now has to be earned in the open, and that's a multi-touch job.
      </P>
      <P>
        <strong>The bottom got sharper.</strong> When someone is actually ready to buy, they make the decision faster
        than ever — IF you've done the trust-building above. The closing step didn't die; it got shorter and more
        surgical.
      </P>
      <FigureGrid
        items={[
          { n: '300K+', l: 'Qualified leads generated' },
          { n: 'Rp156B', l: 'Wall Street English revenue all-time high' },
          { n: '+200%', l: 'Hacktiv8 registration growth' },
          { n: 'IDR 4B+', l: 'Marketing budget managed' },
        ]}
      />
      <Figure
        src={FIGURES.loop}
        alt="Hand-drawn circular funnel loop connecting attract, engage, convert, and learn"
        caption="A modern funnel is an operating loop: attract attention, build trust, convert intent, then use measurement to improve the next cycle."
      />
      <P>
        Here's the uncomfortable part most funnel-doomers skip: <strong>the more the world fragments, the more you need
        a system to sequence it.</strong> Chaos is not a strategy. Ten ventures taught me that the operator who wins
        isn't the one with the flashiest content — it's the one with a repeatable pipeline that turns touchpoints into
        revenue and tracks every stage.
      </P>

      <H2>The real "funnel is dead" translation</H2>
      <P>Repackage it honestly and the claim becomes useful:</P>
      <Pull>
        Funnels aren't dead. But the single-page funnel with cold ad traffic is dying, and "post more content" with no
        pipeline is a hobby, not a business.
      </Pull>
      <P>
        Both halves are true. The conclusion isn't "stop building funnels." It's "build a modern one — a system of
        touchpoints, trust, and tracking that sequences a stranger into a buyer." That's the version I run.
      </P>

      <H2>What a modern funnel looks like (the operating side)</H2>
      <UL>
        <LI>
          <strong>Attract (the wide end).</strong> Personal brand, threads, carousels, short-form — content that stops
          the scroll in your actual voice. Rooted in experience, not recycled tips.
        </LI>
        <LI>
          <strong>Engage (the trust layer).</strong> Case studies, breakdowns, behind-the-build stories. Proof, not
          promises.
        </LI>
        <LI>
          <strong>Convert (the sharp end).</strong> A specific, high-value lead magnet that <em>filters</em> for real
          buyers — not "download our free PDF of generic tips" — then a clear offer, then a conversation.
        </LI>
      </UL>
      <P>
        Every stage measurable. Every handoff tracked. That's the operating system — not a page, not a tool, a system
        that runs while I'm running the other nine ventures.
      </P>

      <H2>The part I actually care about</H2>
      <P>
        I don't say this to sell you a funnel course. I say it because I've seen founders burn millions of rupiah on
        the <em>opposite</em> advice: chase whatever's shiny, drop the structure, and hope virality replaces revenue.
      </P>
      <P>Virality never replaced revenue. It just changed which ads you buy.</P>
      <P>
        <strong>So here's the question you should be asking:</strong> not "is the funnel dead?" but "is my pipeline a
        system, or am I just posting and praying?"
      </P>

      <H2>Your move</H2>
      <P>
        Stop debating the metaphor and audit your actual pipeline. I turned this into a <strong>Funnel OS
        diagnostic</strong> — the same pipeline audit that sits behind 300K+ leads and a $12M track record. It checks
        whether your funnel is a real system or a landing page with ads in front of it.
      </P>
      <P>
        Start with the free diagnostic at <a href="/dal/">your diagnostic route</a> — it maps intent, acquisition
        framework, channels, and actionables. That's the filter I use to figure out who's actually ready to build — and
        who's just collecting advice.
      </P>

      <Tags items={meta.tags} />
      <Disclaimer>
        Reported figures reflect contributions to team and client outcomes across Aditya's engagements, not sole-authored
        results. This is an opinion piece grounded in those engagements.
      </Disclaimer>
    </>
  );
}

export function BodyId() {
  return (
    <>
      <P>
        <strong>Semua orang bilang funnel sudah mati.</strong> Saya menjalankan 10 venture di 5 industri, mengelola
        lebih dari IDR 4 miliar budget iklan, dan menghasilkan lebih dari 300 ribu qualified leads. Jadi, mari kita
        bedah apa yang benar-benar berubah—dan apa yang sebenarnya masih wajib ada.
      </P>

      <H2>Klaim yang tidak pernah mati</H2>
      <P>
        Setiap beberapa bulan ada guru marketing yang mengumumkan bahwa funnel sudah tidak relevan. Customer journey
        berubah, buyer semakin pintar, attention span semakin pendek. Lalu kita diminta berhenti membangun funnel dan
        mulai melakukan sesuatu yang baru.
      </P>
      <P>
        Hook itu menjual karena terdengar berani. Tetapi funnel bukan sekadar template landing page. Funnel adalah cara
        kita memindahkan orang asing menjadi buyer melalui langkah yang disengaja, sambil mengukur di mana mereka drop.
      </P>
      <Pull>Yang mati adalah one-page funnel dengan cold traffic. Bukan logika funnelnya.</Pull>

      <H2>Apa sebenarnya arti funnel?</H2>
      <P>
        Strip away the jargon: seseorang yang belum mengenal Anda perlu menemukan konteks, memahami masalahnya,
        mempercayai solusi, lalu merasa cukup aman untuk mengambil keputusan. Transisi itu punya bentuk. Marketer
        menyebutnya funnel; engineer mungkin menyebutnya state machine.
      </P>
      <UL>
        <LI><strong>Funnel lama.</strong> Beli traffic → landing page → pitch → close.</LI>
        <LI><strong>Funnel modern.</strong> Banyak touchpoint → trust → conversation → decision → feedback.</LI>
      </UL>
      <P>
        Jadi saat seseorang berkata “funnel sudah mati,” biasanya mereka sedang mengkritik funnel tertentu yang memang
        tidak lagi bekerja—bukan kebutuhan untuk merancang perjalanan menuju purchase.
      </P>

      <H2>Bagaimana funnel berevolusi</H2>
      <P>
        Di bagian atas, funnel menjadi lebih lebar dan lebih berantakan. Orang bisa pertama kali menemukan brand lewat
        social post, search result, creator, AI answer, komentar, atau newsletter. Mereka bertemu brand dalam potongan
        kecil, bukan satu landing page yang rapi.
      </P>
      <P>
        Di bagian tengah, trust menjadi lebih mahal. Saat AI dan konten murah membuat semua brand terdengar mirip,
        authority tidak cukup dibangun lewat desain yang terlihat profesional. Orang perlu proof, pengalaman, dan alasan
        untuk percaya.
      </P>
      <P>
        Di bagian bawah, keputusan justru bisa lebih cepat—jika trust sudah dibangun. Closing step tidak mati; ia menjadi
        lebih pendek dan lebih surgical.
      </P>
      <FigureGrid
        items={[
          { n: '300K+', l: 'Qualified leads yang dihasilkan' },
          { n: 'Rp156B', l: 'All-time-high revenue Wall Street English' },
          { n: '+200%', l: 'Pertumbuhan registrasi Hacktiv8' },
          { n: 'IDR 4B+', l: 'Marketing budget yang dikelola' },
        ]}
      />
      <Figure
        src={FIGURES.touchpoints}
        alt="Diagram touchpoint social, search, creator, email, dan AI answer menuju trust dan conversation"
        caption="Awareness sekarang tersebar di banyak touchpoint. Tugas funnel adalah menghubungkan fragmen tersebut menjadi trust dan percakapan yang bermakna."
      />

      <H2>Terjemahan yang lebih jujur</H2>
      <P>
        Funnel tidak mati. Tetapi “post more content” tanpa pipeline juga bukan strategi. Modern funnel adalah sistem
        touchpoint, trust, dan tracking yang mengurutkan perjalanan stranger sampai menjadi buyer.
      </P>
      <H2>Bentuk modern funnel dari sisi operator</H2>
      <UL>
        <LI><strong>Attract.</strong> Personal brand, short-form, search, creator, dan content yang menghentikan scroll dengan suara yang nyata.</LI>
        <LI><strong>Engage.</strong> Case study, breakdown, behind-the-build story, dan proof—bukan janji kosong.</LI>
        <LI><strong>Convert.</strong> Lead magnet spesifik yang menyaring buyer serius, lalu offer yang jelas dan conversation.</LI>
        <LI><strong>Learn.</strong> Data dari sales, CRM, content, dan revenue dipakai untuk memperbaiki siklus berikutnya.</LI>
      </UL>
      <Figure
        src={FIGURES.loop}
        alt="Loop funnel modern yang menghubungkan attract, engage, convert, dan learn"
        caption="Funnel modern bekerja sebagai operating loop: attract, engage, convert, lalu learn untuk memperbaiki sistem berikutnya."
      />

      <H2>Yang perlu Anda lakukan sekarang</H2>
      <P>
        Berhenti memperdebatkan metafornya. Audit pipeline Anda: touchpoint pertama datang dari mana, proof apa yang
        membangun trust, siapa yang follow up, dan di mana revenue benar-benar tercipta.
      </P>
      <P>
        Pertanyaan utamanya bukan “apakah funnel sudah mati?” tetapi: <strong>apakah pipeline saya sebuah sistem, atau
        saya hanya posting lalu berharap?</strong>
      </P>
      <P>
        Mulai dari <a href="/dal/">Digital Advantage Lab</a> untuk memetakan intent, acquisition framework, channel,
        dan actionables sebelum Anda membakar budget berikutnya.
      </P>

      <Tags items={meta.tags} />
      <Disclaimer>
        Angka yang disebutkan mencerminkan kontribusi terhadap hasil tim dan client dalam berbagai engagement, bukan hasil sole-authored.
      </Disclaimer>
    </>
  );
}
