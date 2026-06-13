import { H2, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer } from '../components/Prose';

export const meta = {
  slug: 'hacktiv8-scholarship-pr-campaign',
  title: 'Hacktiv8: an 8X ROAS push for a data-science scholarship',
  shortTitle: 'Hacktiv8: an 8X ROAS push for a scholarship',
  category: 'Education · PR',
  kind: 'Case study',
  date: '2021-09-24',
  dateLabel: 'September 2021',
  summary:
    "PR plus performance marketing for Hacktiv8's data-science scholarship: a webinar funnel, paid ads, and national media coverage, returning 8X on ad spend.",
  description:
    "A PR-led campaign promoting Hacktiv8's data-science scholarship: a webinar funnel, paid ads, and national media coverage, returning 8X on ad spend.",
  standfirst:
    'Hacktiv8 had a scholarship to fill and a story worth telling: Indonesia urgently needs data scientists. The work paired PR with performance marketing, turning a webinar funnel into registrants, national coverage, and an 8X return on ad spend.',
  tags: ['Education', 'PR', 'Performance', 'Lead generation', 'Webinars'],
};

export function Body() {
  return (
    <>
      <H2>Context</H2>
      <P>Hacktiv8 is an Indonesian coding bootcamp. It launched a data-science scholarship under a sharp premise: the country urgently needs data scientists. The remit was to propose and run the PR campaign promoting the scholarship while optimizing the digital marketing behind it, against a scholarship campaign worth IDR 500 million.</P>

      <H2>The problem</H2>
      <P>A scholarship only works if the right people hear about it and trust it. Paid ads buy clicks, but a career-changing decision needs credibility, not just reach. The challenge was to generate qualified demand and legitimacy at the same time.</P>

      <H2>The approach</H2>
      <P muted>PR and performance, run as one funnel:</P>
      <UL>
        <LI><strong>A PR narrative with a real hook.</strong> Frame the scholarship around a genuine talent gap ("Indonesia urgently needs data scientists"), then earn coverage for it, including a virtual press conference.</LI>
        <LI><strong>Webinars as the conversion moment.</strong> Use webinars to educate first, build trust, then convert attendees into scholarship registrants.</LI>
        <LI><strong>Performance marketing into the funnel.</strong> Facebook and Google ads driving lead generation into the webinars, optimized toward return on ad spend rather than vanity clicks.</LI>
      </UL>

      <H2>The outcome</H2>
      <FigureGrid
        items={[
          { n: '8X', l: 'Return on ad spend' },
          { n: '12', l: 'National media placements' },
          { n: '237', l: 'Webinar attendees' },
          { n: '56', l: 'Scholarship registrants' },
        ]}
      />
      <P muted>Average monthly spend ran around IDR 200 million, directed at the webinar funnel and optimized to that 8X return.</P>

      <H2>What carried forward</H2>
      <P>PR and performance are stronger together than apart. PR earns the credibility a high-consideration decision requires; performance marketing turns that credibility into measurable registrations. Running them as one funnel, with webinars as the trust-building middle, is the pattern that produced the return here.</P>

      <Pull>Ads buy attention. PR earns belief. You need both to fill a scholarship.</Pull>

      <Tags items={meta.tags} />
      <Disclaimer>
        Reported case figures reflect contributions to team outcomes during the engagement described, not sole-authored results. Work delivered via Calibreworks.
      </Disclaimer>
    </>
  );
}
