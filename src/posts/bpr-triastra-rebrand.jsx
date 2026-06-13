import { H2, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer } from '../components/Prose';

export const meta = {
  slug: 'bpr-triastra-rebrand',
  title: '#BeraniBerubah: rebranding a rural bank for digital growth',
  shortTitle: '#BeraniBerubah: rebranding a rural bank',
  category: 'Finance · Rebrand',
  kind: 'Case study',
  date: '2022-09-15',
  dateLabel: 'September 2022',
  summary:
    'BPR Hisobhan reborn as BPR Triastra: a full rebrand, a launch campaign, a lead-gen funnel for younger business owners, and the team enablement to run it.',
  description:
    'A legacy rural bank reborn for digital growth: a full rebrand from BPR Hisobhan to BPR Triastra, a launch campaign, a lead-gen funnel for Millennial and Gen-Z business owners, and team enablement.',
  standfirst:
    'BPR Hisobhan was a legacy rural bank with a new generation of management and bigger ambitions. The work was a full rebrand into BPR Triastra, a launch campaign, a lead-gen funnel aimed at younger business owners, and the internal enablement to make the change stick.',
  tags: ['Finance', 'Rebrand', 'Digital transformation', 'Lead generation'],
};

export function Body() {
  return (
    <>
      <H2>Context</H2>
      <P>BPR Hisobhan is an Indonesian rural bank (Bank Perkreditan Rakyat). Its incoming generation of management wanted to expand the market and transform the bank digitally, in step with how the market was evolving. The mandate covered the brand at its core and the campaign to take it to market.</P>

      <H2>The problem</H2>
      <P>A legacy banking name carries trust with its existing base but does not speak to the audience the bank wanted next: Millennial and Gen-Z business owners. A logo refresh would not be enough. The brand needed new meaning, a new name, and an organization ready to operate it.</P>

      <H2>The approach</H2>
      <UL>
        <LI><strong>Redefine the brand at the core.</strong> Redevelop the brand and its values, not just the look, and relaunch it as <strong>BPR Triastra</strong>.</LI>
        <LI><strong>Launch it with a campaign: #BeraniBerubah.</strong> "Dare to change" carried the rebrand to market, anchored by a brand film and social campaign.</LI>
        <LI><strong>Build a funnel for the new audience.</strong> An eBook lead-generation offer designed to filter for Millennial and Gen-Z business owners, supported by content, ad creative, and a new website.</LI>
        <LI><strong>Prepare the team to run it.</strong> Consultation and training so the organization could carry the digital transformation forward after launch.</LI>
      </UL>

      <H2>What was delivered</H2>
      <FigureGrid
        items={[
          { n: 'New brand', l: 'BPR Hisobhan relaunched as BPR Triastra' },
          { n: '#BeraniBerubah', l: 'Launch campaign + brand film' },
          { n: 'Lead funnel', l: 'eBook offer targeting younger business owners' },
          { n: 'Enablement', l: 'Consultation + training for the internal team' },
        ]}
      />

      <H2>What carried forward</H2>
      <P>A rebrand is not finished when the new logo ships. It lands when the organization can run the new brand and reach the new audience. Pairing the rebrand with a lead funnel and internal enablement is what turns "dare to change" from a tagline into an operating change.</P>

      <Pull>A rebrand that the team cannot run is just a new coat of paint.</Pull>

      <Tags items={meta.tags} />
      <Disclaimer>
        Work delivered via Calibreworks. Outcomes described reflect contributions to a team engagement.
      </Disclaimer>
    </>
  );
}
