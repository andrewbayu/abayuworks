import { H2, H3, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer } from '../components/Prose';

const FIGURES = {
  map: '/images/blog/b2b-buyer-map-end-user-champion/b2b-buyer-map-doodle.png',
  committee: '/images/blog/b2b-buyer-map-end-user-champion/buyer-committee-doodle.png',
  evaluation: '/images/blog/b2b-buyer-map-end-user-champion/evaluation-path-doodle.png',
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
  slug: 'b2b-buyer-map-end-user-champion',
  title: 'The Director Illusion: why B2B deals are won with users, not titles',
  shortTitle: 'The Director Illusion in B2B sales',
  category: 'B2B · Growth Strategy',
  kind: 'Field Note',
  date: '2026-09-08',
  dateLabel: 'September 2026',
  summary: 'A practical buyer map for B2B teams: identify the end user, champion, influencer, decision maker, and gatekeeper before the first sales meeting.',
  description: 'Why the person with the highest title is rarely the only buyer in a B2B deal—and how to map the people who can make, shape, or stop the decision.',
  standfirst: 'I used to think getting in front of a director meant a B2B deal was nearly closed. It was a costly illusion. The signature may come from the top, but urgency is usually created by the people who live with the problem every day.',
  img: 'https://storage.googleapis.com/bluestark_explorer/b2bdeals.jpg',
  tags: ['B2B Sales', 'Buyer Map', 'Champion', 'End User', 'Go-to-Market'],
};

export function Body() {
  return (
    <>
      <UL>
        <LI><strong>01 · User.</strong> The person who feels the operational pain creates urgency.</LI>
        <LI><strong>02 · Champion.</strong> The internal believer carries your case when you are absent.</LI>
        <LI><strong>03 · Committee.</strong> Budget authority is only one role in the actual decision.</LI>
        <LI><strong>04 · Proof.</strong> A clear evaluation path turns interest into an internal yes.</LI>
      </UL>

      <H2>The expensive assumption</H2>
      <P>Early in my B2B career, I believed the fastest route to a deal was obvious: get in the room with the director. They had the title, the budget, and the authority to sign the PO. So they had to be the buyer.</P>
      <P>That logic sounded bulletproof. It was also wrong enough to cost me deals I should have won.</P>
      <P>A director can approve a purchase without ever feeling the problem. Meanwhile, an operations lead can spend hours every week repairing a broken workflow. A marketing manager can be the person whose team is drowning in manual reporting. A sales rep can lose deals because the CRM is slow or incomplete. Those people create the urgency. Ignore them and your proposal becomes a nice idea with no internal momentum.</P>

      <Pull>The signature is an event. The pain is the decision engine.</Pull>

      <H2>The buyer is a system, not a title</H2>
      <P>In a real B2B purchase, different people perform different jobs in the decision. Treating the director as the whole buying process is like treating a landing page as the whole funnel. Satu orang bisa memegang beberapa role, but jangan assume that without evidence.</P>
      <FigureGrid
        items={[
          { n: 'User', l: 'Feels the problem and validates day-to-day fit' },
          { n: 'Champion', l: 'Builds internal momentum for your solution' },
          { n: 'Influencer', l: 'Shapes criteria, risk, and shortlists' },
          { n: 'DM', l: 'Owns budget and the final commercial yes' },
        ]}
      />
      <Figure
        src={FIGURES.map}
        alt="Hand-drawn B2B buyer map connecting end user, champion, and decision with a proof and feedback loop"
        caption="The buying path is not a straight line from lead to sale. It moves from lived problem, to internal momentum, to commercial decision — and proof has to travel back through the system."
      />
      <UL>
        <LI><strong>End user.</strong> They will operate the product, process, or system. Their job is to tell you whether it solves a real problem without creating a new one.</LI>
        <LI><strong>Champion.</strong> They see a personal or team win in your solution and are willing to explain it internally. A champion does not merely like the demo; they do work for the deal after you leave.</LI>
        <LI><strong>Influencer.</strong> They may be IT, finance, procurement, security, or a senior specialist. They often shape the evaluation even when they cannot sign.</LI>
        <LI><strong>Decision maker.</strong> They control budget, priority, and the final commercial yes. They need confidence in ROI, risk, timing, and ownership—not another feature tour.</LI>
        <LI><strong>Gatekeeper.</strong> They control access to the room, calendar, or process. Sometimes this is an executive assistant; often it is procurement, a manager, or the director themselves.</LI>
      </UL>

      <H2>Why selling only to the director stalls</H2>
      <P>Senior stakeholders tend to assess outcomes: cost, revenue, risk, speed, and strategic fit. Users assess friction: how many clicks, handoffs, workarounds, mistakes, and late nights disappear. Both are valid. Neither can fully answer for the other.</P>
      <P>When the pitch begins and ends with a senior title, three predictable things happen. The problem sounds abstract, the evaluation criteria stay vague, and nobody has enough reason to defend the proposal internally. You get the polite meeting, then the familiar message: “We will get back to you.”</P>
      <P>The missing piece was not another follow-up deck. It was a user-backed case the buyer could trust.</P>

      <H2>Map the deal before you book the meeting</H2>
      <P>Before an important call, make a one-page map. It does not need software or a complicated account plan. Tulis lima role tersebut, satu nama untuk masing-masing jika possible, problem yang mereka own, what they stand to gain, and what could make them say no.</P>
      <UL>
        <LI><strong>Start with the workflow.</strong> Ask: who touches this problem every day? Interview or observe them before deciding what the pitch should emphasize.</LI>
        <LI><strong>Find the champion signal.</strong> Look for the person asking detailed questions, volunteering internal context, or helping you navigate the buying process. Then give them material they can reuse.</LI>
        <LI><strong>Expose vetoes early.</strong> Ask who needs to be comfortable with security, integration, budget, procurement, or change management. A late veto is rarely a surprise; it was usually an unasked question.</LI>
        <LI><strong>Translate the same value twice.</strong> Explain operational relief to users and commercial impact to the decision maker. One product, two valid languages.</LI>
        <LI><strong>Confirm the path to yes.</strong> Ask what happens after the meeting: who evaluates, what evidence is needed, and when a decision can realistically happen.</LI>
      </UL>

      <H3>A simple example</H3>
      <P>Say you sell an AI reporting workflow to a multi-branch business. The marketing analyst is the end user; they currently compile reports by hand. The marketing manager is a likely champion because their team loses time and misses campaign insights. Finance influences the cost case. IT assesses data access. The CMO or director approves the budget.</P>
      <P>A generic director demo says, “Our AI makes reporting faster.” A mapped deal says, “The analyst stops spending two days consolidating weekly reports; the manager sees branch performance sooner; finance gets a measurable time-saving case; IT sees the access boundaries; the CMO gets faster decisions without adding headcount.” The offer did not change. The buying case did. Inilah bedanya selling a feature dengan building an internal case.</P>

      <H2>Map people, then build the evaluation infrastructure</H2>
      <P>Buyer mapping is only half the job. A champion still needs a credible way to compare options, answer objections, and move the discussion forward. That is where evaluation infrastructure matters: the proof, checkpoints, use cases, implementation plan, risk answers, and ROI logic that make an internal recommendation easy to defend.</P>
      <P>Without it, the champion has enthusiasm but no ammunition. With it, the buying committee can evaluate the deal on the right criteria instead of defaulting to price, familiarity, or inertia.</P>
      <Figure
        src={FIGURES.committee}
        alt="Hand-drawn B2B buying committee with end user, champion, influencer, and decision maker feeding one buying case"
        caption="The buying case is assembled by several roles. Each person contributes a different kind of confidence before the decision can move."
      />
      <Figure
        src={FIGURES.evaluation}
        alt="Hand-drawn B2B evaluation path from problem to proof, plan, and internal yes"
        caption="A champion needs more than enthusiasm: the evaluation path must connect the problem to credible proof, an executable plan, and a defensible internal yes."
      />
      <P>For the complementary framework, read <a className="text-cream underline underline-offset-4" href="https://www.adityabayu.com/blog/google-messy-middle-funnel-checkpoints/">Google’s messy middle funnel checkpoints</a>.</P>

      <H2>The operator rule</H2>
      <P>Stop treating seniority as a shortcut to understanding. Get access to the director, absolutely—but do not confuse access with a deal. The fastest B2B wins I have seen were not the ones with the most impressive first meeting. They were the ones where the team knew who felt the pain, who would carry the case, whose objection could stop it, and what each person needed to believe.</P>
      <Pull>Do not sell to the biggest business card. Sell to the people who make the decision real.</Pull>

      <Tags items={meta.tags} />
      <Disclaimer>
        This is a field framework drawn from B2B sales and growth work. Role titles vary by company; map the buying jobs, not just the org chart.
      </Disclaimer>
    </>
  );
}
