import { H2, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer, Src } from '../components/Prose';

export const meta = {
  slug: 'hypebuzz-brand-from-zero',
  title: 'HypeBuzz: building a trend-media brand from zero',
  shortTitle: 'HypeBuzz: building a trend-media brand from zero',
  category: 'Media · Social',
  kind: 'Case study',
  date: '2022-02-20',
  dateLabel: 'February 2022',
  summary:
    'From nothing to millions of views: a repeatable trend-content engine across Instagram and TikTok, then an activation that turned reach into participation.',
  description:
    'HypeBuzz, a trend and entertainment media brand built from zero into a multi-million-view content engine across Instagram and TikTok.',
  standfirst:
    'HypeBuzz started with nothing: no audience, no archive, no name recognition. The premise was simple, "buzz up your daily life with what\'s currently on trend," and the work was to turn that into a content engine that reaches millions across Instagram and TikTok.',
  tags: ['Media', 'Social', 'Content', 'TikTok', 'Brand from zero'],
};

export function Body() {
  return (
    <>
      <H2>Context</H2>
      <P>HypeBuzz (Hypebuzz Network, <Src>@hypebuzzid</Src>) is a trend and entertainment media brand built from zero. It covers what people are already talking about, from K-pop to whatever is trending that week, and packages it for short-form feeds. No legacy following to lean on, just a format and a posting rhythm.</P>

      <H2>The problem</H2>
      <P>Building a media brand from zero is a cold-start problem. Paid reach can rent an audience, but a media brand has to earn one: content people choose to watch, share, and come back for. The job was a repeatable engine, not a one-off viral hit.</P>

      <H2>The approach</H2>
      <UL>
        <LI><strong>Ride trends fast.</strong> Pick what is already rising and publish while it is still hot, so the algorithm and the audience meet the content at the peak of interest.</LI>
        <LI><strong>Volume with a format.</strong> A consistent, recognizable content format produced at high cadence (hundreds of posts), so every trend becomes another at-bat instead of a gamble.</LI>
        <LI><strong>Built for each platform.</strong> Native to Instagram and TikTok separately, tuned to how each surface rewards watch-through, shares, and saves.</LI>
        <LI><strong>Turn reach into participation.</strong> Convert the audience from passive viewers into participants through an activation, proof the buzz was a real community, not just impressions.</LI>
      </UL>

      <H2>The outcome</H2>
      <FigureGrid
        items={[
          { n: '3.1M', l: 'TikTok video views' },
          { n: '5.2M', l: 'Instagram reach' },
          { n: '7.2M', l: 'Content interactions' },
          { n: '670K', l: 'Engagement' },
        ]}
      />
      <P muted>Supporting numbers from the same run: 838K Instagram impressions, 2.6M unique TikTok visitors, 343.9K likes, 7.7K shares, and a combined following grown from zero (12K on Instagram, plus the TikTok audience). An activation off the back of it drew 29 participants, 43,106 TikTok views, and 64,515 Instagram reach, turning views into real participation.</P>

      <H2>What carried forward</H2>
      <P>A trend-media brand is an engine, not a campaign. The win is not one viral post but a repeatable system: spot the trend early, publish in a recognizable format at volume, tune per platform. Built from zero, that system is what compounds an audience, and the same content discipline now feeds the other brands in the portfolio.</P>

      <Pull>Virality is not luck you wait for. It is a format you run on repeat.</Pull>

      <Tags items={meta.tags} />
      <Disclaimer>
        HypeBuzz was built from zero via We Are Infiniti. Reported figures reflect contributions to team outcomes during the work described, not sole-authored results.
      </Disclaimer>
    </>
  );
}
