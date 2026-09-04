import { H2, H3, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer } from '../components/Prose';

const FIGURES = {
  pipeline: '/images/blog/andromeda/pipeline-doodle.png',
  portfolio: '/images/blog/andromeda/creative-portfolio-doodle.png',
  loop: '/images/blog/andromeda/measurement-loop-doodle.png',
  model: '/images/blog/andromeda/operating-model-doodle.png',
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
  slug: 'andromeda-ads-engine-what-matters',
  title: 'What really matters in the era of the Andromeda Ads Engine',
  shortTitle: 'What matters in the Andromeda era',
  category: 'Meta Ads · AI Systems',
  kind: 'Framework',
  date: '2026-09-03',
  dateLabel: 'September 2026',
  summary:
    'A practical guide to Meta Andromeda: what changed in ad delivery, what did not, and how operators should rebuild creative, data, campaign structure, and measurement.',
  description:
    'A practical guide to Meta Andromeda: retrieval, creative diversity, signal quality, campaign structure, and measurement that operators can use now.',
  standfirst:
    'Andromeda does not make strategy irrelevant. It changes where strategy has to live. The strongest advantage now comes from better business inputs, more meaningfully different creative, cleaner conversion signals, and enough room for Meta to learn.',
  img: 'https://storage.googleapis.com/bluestark_explorer/andromeda-what-matters.jpg',
  tags: ['Andromeda', 'Meta Ads', 'Creative Strategy', 'Advantage+', 'Measurement'],
};

export function Body() {
  return (
    <>
      <P>Every few years, paid media gets a new name for an old anxiety. A platform changes its delivery system. Advertisers panic. Campaign structures get rebuilt overnight. Then somebody sells a checklist.</P>
      <P>Andromeda deserves a more careful read.</P>
      <P>Meta describes Andromeda as a personalized ads retrieval engine. Retrieval is the first stage of the recommendation system. It reduces tens of millions of possible ad candidates to a few thousand relevant candidates before later ranking models decide what gets shown. That distinction matters. Andromeda is not a magic creative score, and it is not the whole auction.</P>

      <Figure src={FIGURES.pipeline} alt="Diagram of ad candidates moving through Andromeda retrieval, ranking, a person, and conversion signals" caption="Andromeda sits inside a wider recommendation system. It retrieves candidates. Ranking, auction dynamics, user experience, and business outcomes still complete the loop." />

      <H2>The short version</H2>
      <FigureGrid
        items={[
          { n: '01', l: 'Give the system a clear offer and real conversion signal.' },
          { n: '02', l: 'Build a portfolio of different ideas, not ten cosmetic edits.' },
          { n: '03', l: 'Consolidate enough data for learning to happen.' },
          { n: '04', l: 'Judge success by qualified business outcomes.' },
        ]}
      />
      <P>That is the operator version. It is less exciting than “the algorithm now does everything,” but it is much more useful.</P>

      <H2>What Andromeda actually changes</H2>
      <P>Meta's engineering team says Andromeda was built to handle a much larger volume of eligible creative with more personalized retrieval. Its system uses hierarchical indexing, a custom neural network, and model elasticity to spend more computation where it can create more value.</P>
      <P>Meta reported a 6% improvement in retrieval recall and an 8% improvement in ad quality on selected segments after deployment. It also reported more than 3x higher end-to-end queries per second and a 10,000x increase in model capacity. Those are system-level results, not promises that every advertiser will see the same lift.</P>
      <P>The practical implication is simple: the platform can consider more possible matches between a person, a message, a format, and a moment. A narrow account with repetitive ads gives the system fewer useful hypotheses. A thoughtful portfolio gives it more ways to find a fit.</P>

      <H2>What did not change</H2>
      <UL>
        <LI><strong>The offer still has to be desirable.</strong> More retrieval capacity cannot fix a weak product, bad pricing, or a promise nobody believes.</LI>
        <LI><strong>The auction still cares about value and experience.</strong> A click is not the same as a profitable customer. Bad landing pages and poor lead handling still show up in the economics.</LI>
        <LI><strong>Measurement still needs discipline.</strong> If the account sends noisy, delayed, or inflated events, the system learns from a distorted picture.</LI>
        <LI><strong>Creative still has to earn attention.</strong> More variants do not make low-effort work persuasive.</LI>
      </UL>
      <Pull>Automation removes manual control. It does not remove the need for judgment.</Pull>

      <H2>1. The offer is still the first targeting layer</H2>
      <P>The internet likes the phrase “creative is the new targeting.” It is directionally useful and strategically incomplete.</P>
      <P>Creative contains clues about who an ad is for. A founder story, a price-led offer, a before-and-after demonstration, and a customer objection can attract different people. But the message only works when it is attached to a real reason to buy.</P>
      <P>Before opening Ads Manager, an operator should write down four constraints:</P>
      <UL>
        <LI><strong>Value:</strong> what changes for the customer?</LI>
        <LI><strong>Proof:</strong> why should the customer believe it?</LI>
        <LI><strong>Economics:</strong> what acquisition cost can the business actually afford?</LI>
        <LI><strong>Capacity:</strong> can the team fulfil the demand without breaking the experience?</LI>
      </UL>
      <P>These constraints determine the creative angles. A clinic may need education and trust. A restaurant may need location, occasion, and menu proof. A SaaS product may need workflow demonstration and a reason to switch. The system can find people who respond to a clear promise. It cannot invent a credible business model.</P>

      <H2>2. Creative diversity means different ideas</H2>
      <P>Creative diversification is not changing a background colour, swapping a headline, and calling it a test. Those are iterations. They have a place, but they do not create a broad learning surface.</P>
      <Figure src={FIGURES.portfolio} alt="Matrix of six different ad concepts: demo, story, founder, problem, compare, and proof" caption="A useful portfolio changes the reason to care. Format changes help, but the message, persona, objection, or proof should change too." />
      <P>A strong starting portfolio changes at least three dimensions:</P>
      <UL>
        <LI><strong>Angle:</strong> outcome, pain, identity, speed, price, risk reduction, or proof.</LI>
        <LI><strong>Persona:</strong> beginner, experienced buyer, founder, parent, manager, or price-sensitive shopper.</LI>
        <LI><strong>Format:</strong> demonstration, testimonial, founder explanation, comparison, FAQ, or direct offer.</LI>
      </UL>
      <P>Meta's own Blueprint session on creative diversification describes format, messaging, persona, and hook type as signals that help its AI delivery system identify audience segments. The lesson is not “make more ads.” The lesson is “make more distinct reasons for the right people to care.”</P>
      <H3>A practical creative matrix</H3>
      <P>For each campaign, an operator can create six cells: one problem-led ad, one desired-outcome ad, one proof-led ad, one demonstration, one objection answer, and one identity or founder angle. Each cell should be recognisable in the first two seconds or first line.</P>
      <P>AI can help turn one approved idea into multiple scripts, crops, voiceovers, and visual treatments. It should not be asked to manufacture the strategy from nothing. More production without more meaning creates a larger pile of sameness.</P>

      <H2>3. Broad structure needs concentrated learning</H2>
      <P>Andromeda makes a fragmented account more expensive to understand. Too many campaigns, tiny ad sets, overlapping audiences, and one-ad tests split the evidence into small pieces. The system has to learn from less data in each place while the operator has to compare more noisy reports.</P>
      <P>A sensible default for many accounts is a small number of campaigns organised around business intent, with broad prospecting where the business can serve it, separate consideration or retargeting when it has enough volume, and a creative portfolio inside each relevant ad set.</P>
      <P>That is a starting point, not a religion. Geography, legal restrictions, sales cycles, catalogue complexity, and budget can justify more structure. The test is whether each additional split creates a real business distinction or just satisfies an old habit.</P>
      <Figure src={FIGURES.model} alt="Three-layer operating model showing business truth, creative portfolio, automated delivery, and signal quality" caption="The account works as a system. Business truth sets the constraints, creative creates hypotheses, and automated delivery searches for matches." />

      <H2>4. Signal quality beats dashboard theatre</H2>
      <P>The system can only optimise toward the events it receives. A purchase event is stronger than a page view. A qualified lead is stronger than an unverified form fill. A profit-aware value signal is stronger than revenue that ignores refunds, margin, or fulfilment cost.</P>
      <P>For a lead business, the minimum loop should connect the ad click to the CRM outcome: lead received, lead contacted, appointment set, qualified, won, and revenue. For ecommerce, the loop should include the real purchase value and a clear view of refunds or cancellations.</P>
      <P>That does not mean every small business needs a complex data warehouse. It means the business should stop celebrating an event that the sales team does not recognise as valuable.</P>
      <Figure src={FIGURES.loop} alt="Circular measurement loop from creative signal to delivery to business outcome to learning" caption="Close the loop on the outcome that pays the bills. Clicks are diagnostic. Qualified revenue is the decision signal." />

      <H2>5. Measure incrementality, not only attribution</H2>
      <P>Platform attribution answers a useful question: which ads received credit under a chosen window and model? It does not fully answer: how many of these customers would have arrived without the ads?</P>
      <P>As automation gets better at finding people who already look likely to convert, this distinction becomes more important. A campaign can report efficient attributed conversions while adding little incremental demand.</P>
      <P>Operators should use the lightest credible test available: geo holdouts, audience splits, conversion lift studies, matched-market tests, or a clean pre/post design with a stated limitation. Small budgets may not support a perfect experiment. They still support honest language.</P>

      <H2>6. The new operating cadence</H2>
      <P>Andromeda rewards a different rhythm of work. The operator's job moves away from hourly bid nudges and toward better inputs, controlled learning, and commercial feedback.</P>
      <UL>
        <LI><strong>Weekly creative review:</strong> identify which messages attracted attention, which generated qualified actions, and which only produced cheap noise.</LI>
        <LI><strong>Biweekly production:</strong> ship new concepts based on objections, sales calls, search terms, comments, and customer language.</LI>
        <LI><strong>Monthly business review:</strong> compare spend with margin, capacity, lead quality, close rate, and incremental demand.</LI>
        <LI><strong>Quarterly account simplification:</strong> remove campaigns, audiences, and rules that do not create a meaningful decision.</LI>
      </UL>
      <P>This is the same principle Aditya uses across marketing systems: build in public, sell the system. The visible ad is only the output. The valuable asset is the learning loop behind it.</P>

      <H2>A 30-day implementation guide</H2>
      <H3>Days 1–5: write the business truth</H3>
      <UL>
        <LI>Define the offer, margin, capacity, geography, sales process, and acceptable acquisition cost.</LI>
        <LI>Audit the event setup, deduplication, value, attribution window, and CRM handoff.</LI>
        <LI>Choose one primary business outcome. Keep secondary metrics diagnostic.</LI>
      </UL>
      <H3>Days 6–12: build the creative portfolio</H3>
      <UL>
        <LI>Write six distinct concepts across angle, persona, and format.</LI>
        <LI>Make the first frame, first sentence, and offer clear without sound.</LI>
        <LI>Use AI for variation and production speed. Keep the strategic brief human-approved.</LI>
      </UL>
      <H3>Days 13–20: consolidate the account</H3>
      <UL>
        <LI>Remove duplicate campaigns and overlapping ad sets where no business distinction exists.</LI>
        <LI>Use broad delivery when the offer, location, policy, and conversion volume support it.</LI>
        <LI>Keep real constraints in place. Automation is not permission to ignore capacity or compliance.</LI>
      </UL>
      <H3>Days 21–30: read the learning</H3>
      <UL>
        <LI>Compare creative by qualified outcome, not only CPM, CTR, or platform ROAS.</LI>
        <LI>Feed sales objections and customer language into the next creative brief.</LI>
        <LI>Document what changed, what was learned, and what remains uncertain.</LI>
      </UL>

      <H2>The myths worth retiring</H2>
      <UL>
        <LI><strong>“Targeting is dead.”</strong> No. Manual audience controls matter less in some automated setups, but offer, location, exclusions, customer lists, and business constraints still matter.</LI>
        <LI><strong>“One winning ad is enough.”</strong> No. A winner can carry a campaign while the market, fatigue, and delivery mix change. A portfolio protects the learning surface.</LI>
        <LI><strong>“More ads always win.”</strong> No. More distinct hypotheses can help. More duplicates add clutter.</LI>
        <LI><strong>“The algorithm knows the business.”</strong> No. It knows the signals it can observe. The business has to define quality.</LI>
      </UL>

      <H2>What really matters</H2>
      <P>Andromeda is a reminder that paid media is becoming more like a recommendation system and less like a set of manual switches. The system has more capacity to search. The operator has to give it better things to search through.</P>
      <P>That means four priorities:</P>
      <UL>
        <LI>A clear offer with viable economics.</LI>
        <LI>A genuinely varied creative portfolio.</LI>
        <LI>Concentrated data and trustworthy conversion signals.</LI>
        <LI>A measurement habit that connects ads to qualified business outcomes.</LI>
      </UL>
      <P>Meta's Andromeda engineering work is real. So is the temptation to turn it into a slogan. The useful response is neither panic nor blind automation. It is better input design, better creative thinking, and a tighter loop between media, sales, and the business.</P>

      <H2>Research notes</H2>
      <P>This guide draws primarily from Meta's <a href="https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/" target="_blank" rel="noreferrer">Andromeda engineering overview</a>, Meta's <a href="https://engineering.fb.com/2024/11/19/data-infrastructure/sequence-learning-personalized-ads-recommendations/" target="_blank" rel="noreferrer">sequence-learning research</a>, Meta's <a href="https://www.facebookblueprint.com/student/page/708857-ask-the-experts-session" target="_blank" rel="noreferrer">Creative Diversification and Andromeda Blueprint session</a>, and Meta's <a href="https://about.fb.com/news/2026/01/2026-ai-drives-performance/" target="_blank" rel="noreferrer">2026 ads update</a>. The recommendations above are an operator interpretation of those sources, not a claim that every account receives the same result.</P>

      <Tags items={meta.tags} />
      <Disclaimer>
        Meta's reported performance figures describe selected segments, tests, or platform-level improvements. They are not guarantees of advertiser results. This guide does not represent sole-authored results from any client engagement.
      </Disclaimer>
    </>
  );
}
