import { H2, H3, P, UL, LI, FigureGrid, Pull, Tags, Disclaimer, Src } from '../components/Prose';

export const meta = {
  slug: 'dental-clinic-multi-branch-growth',
  title: 'Scaling a Jakarta dental clinic from 6 to 10 branches with a full-funnel growth system',
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
    'A multi-branch Jakarta dental group had strong offline credibility, but the digital system was leaking opportunities. The work was not "more ads." It was a connected acquisition engine: performance media, a website rebuilt as a funnel, AI-assisted WhatsApp CS, and a custom CRM. In three months, monthly leads went from 120 to 421, digital-influenced revenue reached Rp300 million per month, and ROAS held at 6 to 7x while the brand expanded from 6 to 10 branches.',
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
