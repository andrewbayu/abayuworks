import { H2, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer } from '../components/Prose';

export const meta = {
  slug: 'wall-street-english-turnaround',
  title: 'Rebuilding the strategy framework at Wall Street English Indonesia',
  shortTitle: 'Rebuilding strategy at Wall Street English Indonesia',
  category: 'Education',
  kind: 'Case study',
  date: '2023-03-10',
  dateLabel: 'March 2023',
  summary:
    'How a metrics rebuild and a sharper strategy framework helped the business return to profit and reach an all-time-high revenue mark within 1.5 years.',
  description:
    'How a metrics rebuild and a sharper strategy framework helped Wall Street English Indonesia return to profit and reach an all-time-high revenue mark within 1.5 years.',
  standfirst:
    'Brought in as a strategic partner, the work was a rebuild: company metrics first, then the strategy framework on top. The business returned to profit and reached an all-time-high revenue mark within roughly 1.5 years.',
  tags: ['Education', 'Strategy', 'Turnaround', 'Metrics'],
};

export function Body() {
  return (
    <>
      <H2>Context</H2>
      <P>Wall Street English Indonesia is an established English-education brand operating across multiple centers. The mandate was not a campaign. It was a strategic reset: get the numbers honest, then point the organization at the right ones.</P>

      <H2>The problem</H2>
      <P>The business was measuring activity, not the metrics that move revenue. Reporting was fragmented across teams, so the same number meant different things in different rooms. Without a shared scoreboard, strategy debates went in circles.</P>

      <H2>The approach</H2>
      <P muted>Three moves, in order:</P>
      <UL>
        <LI><strong>Rebuild the metrics.</strong> One source of truth for the numbers that actually predict revenue: lead quality, enrollment conversion, retention, and unit economics per center.</LI>
        <LI><strong>Rebuild the strategy framework.</strong> Map each metric to the lever that moves it, and each lever to an owner. Strategy stops being a slide and becomes an operating cadence.</LI>
        <LI><strong>Run the cadence.</strong> Weekly review against the scoreboard, not against opinions. Reallocate budget toward what compounds.</LI>
      </UL>

      <H2>The outcome</H2>
      <FigureGrid
        items={[
          { n: 'Rp156B', l: 'All-time-high revenue mark reached' },
          { n: '~1.5 yrs', l: 'From reset to the milestone' },
          { n: 'Profit', l: 'Business returned to profitability' },
          { n: '1 scoreboard', l: 'Shared metrics across teams' },
        ]}
      />

      <H2>What carried forward</H2>
      <P>The pattern is portable. Most turnarounds do not need a new idea. They need honest metrics and a framework that ties every number to a lever and an owner. That sequence (metrics, then strategy, then cadence) now runs across the rest of the portfolio.</P>

      <Pull>Fix the scoreboard before you argue about the game.</Pull>

      <Tags items={meta.tags} />
      <Disclaimer>
        Reported case figures reflect contributions to team outcomes during the engagement described, not sole-authored results.
      </Disclaimer>
    </>
  );
}
