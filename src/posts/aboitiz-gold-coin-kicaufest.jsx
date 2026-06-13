import { H2, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer } from '../components/Prose';

export const meta = {
  slug: 'aboitiz-gold-coin-kicaufest',
  title: 'KicauFest: building a community brand for Gold Coin',
  shortTitle: 'KicauFest: building a community brand for Gold Coin',
  category: 'Consumer · Community',
  kind: 'Case study',
  date: '2023-05-22',
  dateLabel: 'May 2023',
  summary:
    'Gold Coin sells a commodity. The work was making it a brand people gather around: a viral hero video, a flagship event, and an engaged songbird community across Indonesia.',
  description:
    'How a bird-feed brand under Aboitiz grew into a community-led campaign: a viral hero video, a flagship event, and an engaged songbird community across Indonesia.',
  standfirst:
    'Gold Coin sells bird feed. Bird feed is a commodity. The work was to make it a brand people gather around. The answer was a community: a viral hero video, a flagship event, and content the songbird hobbyist actually wants.',
  tags: ['Consumer', 'Community', 'Content', 'Events', 'Brand'],
};

export function Body() {
  return (
    <>
      <H2>Context</H2>
      <P>Gold Coin is part of Aboitiz, one of the largest conglomerate groups in the Philippines. The mandate covered its animal-nutrition brands in Indonesia: Gold Coin Bird Feed, Maxime Pet Food, and Kunemax Rabbit Feed. The remit was the whole picture: overall digital campaign, brand development, and content production.</P>

      <H2>The problem</H2>
      <P>Feed competes on price and shelf space. Discounting is a race to the bottom, and ads alone do not build loyalty in a hobby market. But Indonesia's <em>kicau</em> scene (the songbird-keeping community) is one of the most passionate hobbyist cultures in the country. The opportunity was not to shout louder than other feed brands. It was to become the brand the community trusts.</P>

      <H2>The approach</H2>
      <P muted>Four moves, built around community instead of discounts:</P>
      <UL>
        <LI><strong>A hero video, made to travel.</strong> "The Gold Standard for Healthy Birds" was produced to be shared, not just served as an ad. It crossed a million views across YouTube, Instagram, and Facebook.</LI>
        <LI><strong>Content the hobbyist wants.</strong> Educational posts that earn attention in the niche: how to tell a real white turtledove from a fake, how to tame a wild-caught bird. Useful first, branded second.</LI>
        <LI><strong>Lead magnets with a reason to convert.</strong> A downloadable <em>masteran</em> (training audio) gated behind a simple form, turning interest into a contactable audience.</LI>
        <LI><strong>A flagship event: KicauFest.</strong> A recurring competition where the community uploads videos of their birds to win prizes, with its own landing page and registration funnel. It became the brand's anchor moment, now across three seasons.</LI>
      </UL>

      <H2>The outcome</H2>
      <FigureGrid
        items={[
          { n: '1M+', l: 'Views on the hero video (YouTube, IG, Facebook)' },
          { n: '10M+', l: 'Total campaign reach' },
          { n: '30K+', l: 'Community engagement across platforms' },
          { n: '3 seasons', l: 'KicauFest run as the flagship event' },
        ]}
      />
      <P muted>Behind those numbers: roughly IDR 2 billion in marketing budget managed across the brands, with monthly social spend around IDR 50 million directed at content and the event rather than pure discounting.</P>

      <H2>What carried forward</H2>
      <P>Community is a moat that price cannot copy. When the brand owns the gathering place (the event, the content, the conversation), reach and loyalty compound season over season instead of resetting with every promo. That community-first pattern now informs how the rest of the portfolio approaches hobby and consumer markets.</P>

      <Pull>In a commodity category, the brand that hosts the community wins the category.</Pull>

      <Tags items={meta.tags} />
      <Disclaimer>
        Reported case figures reflect contributions to team outcomes during the engagement described, not sole-authored results. Work delivered via Calibreworks.
      </Disclaimer>
    </>
  );
}
