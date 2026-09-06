import { Link } from 'react-router-dom';

export default function OperatorBridge() {
  return (
    <section className="mx-auto mt-16 max-w-prose border-t border-[#dfe4eb] pt-12" aria-label="Work with Aditya">
      {/* 1. Author & Operator Credibility Card */}
      <div className="overflow-hidden rounded-card border border-[#dfe4eb] bg-[#f8fafc] p-6 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <img
            src="/aditya-bayu.webp"
            alt="Aditya Indra Bayu"
            width="80"
            height="80"
            className="h-20 w-20 rounded-full border-2 border-white object-cover shadow-sm sm:h-20 sm:w-20"
            loading="lazy"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-lg font-semibold text-ink">Aditya Indra Bayu</h3>
              <span className="text-xs text-[#718096]">·</span>
              <span className="text-xs font-medium uppercase tracking-wider text-[#1C3D73]">Fractional CMO · InfinitiLabs</span>
            </div>
            <p className="mt-1.5 font-serif text-sm leading-relaxed text-[#44474f]">
              Aditya builds and operates commercial growth engines from the inside. He connects positioning, funnels, paid media, and sales telemetry until the business finds durable revenue.
            </p>
          </div>
        </div>

        {/* Verified Receipts Strip */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#e2e8f0] pt-4 text-center sm:gap-4">
          <div className="p-2">
            <div className="font-display text-base font-bold text-[#1C3D73] sm:text-lg">Rp300M+/mo</div>
            <div className="mt-0.5 font-serif text-xs text-[#718096]">Healthcare Clinic Scale</div>
          </div>
          <div className="p-2 border-x border-[#e2e8f0]">
            <div className="font-display text-base font-bold text-[#1C3D73] sm:text-lg">8X ROAS</div>
            <div className="mt-0.5 font-serif text-xs text-[#718096]">Hacktiv8 Data Science</div>
          </div>
          <div className="p-2">
            <div className="font-display text-base font-bold text-[#1C3D73] sm:text-lg">Turnaround</div>
            <div className="mt-0.5 font-serif text-xs text-[#718096]">Wall Street English</div>
          </div>
        </div>

        <div className="mt-3 text-right">
          <Link to="/receipts/" className="font-display text-xs font-semibold text-[#1C3D73] transition-colors hover:underline">
            See all receipts & case studies <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* 2. Dual-Path Conversion Bridge */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {/* Tier 1: High-Intent Diagnostic (The Consulting Gate) */}
        <div className="flex flex-col justify-between rounded-card border-2 border-[#1C3D73] bg-white p-6 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1C3D73]/10 px-2.5 py-1 text-micro font-semibold uppercase tracking-wider text-[#1C3D73]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1C3D73]" />
              Direct Consulting
            </div>
            <h4 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
              The 90-Minute Constraint Audit
            </h4>
            <p className="mt-2 font-serif text-sm leading-relaxed text-[#44474f]">
              Stop guessing why ad spend climbs while pipeline stays flat. We isolate the single bottleneck holding your revenue back before you approve another rupiah of budget.
            </p>
            <ul className="mt-4 space-y-2 text-xs font-serif text-[#44474f]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-[#1C3D73] flex-shrink-0" />
                <span>1-on-1 diagnostic directly with Aditya (no account handlers).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-[#1C3D73] flex-shrink-0" />
                <span>Full Digital Advantage Scorecard across 5 stages.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-[#1C3D73] flex-shrink-0" />
                <span>Prioritized 90-day action plan for your team.</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
            <Link
              to="/dal/"
              style={{ color: '#ffffff' }}
              className="!text-white inline-flex w-full items-center justify-center gap-2 rounded-card bg-[#1C3D73] px-4 py-3 font-display text-sm font-medium shadow-sm transition-all hover:bg-[#2A5499] hover:-translate-y-0.5"
            >
              Apply for a growth diagnostic <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Tier 2: Mid-Intent Self-Service (The Free Operating Tool) */}
        <div className="flex flex-col justify-between rounded-card border border-[#dfe4eb] bg-[#f8fafc] p-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e2e8f0] px-2.5 py-1 text-micro font-semibold uppercase tracking-wider text-[#4a5568]">
              Free Field Guide
            </div>
            <div className="mt-3 overflow-hidden rounded-md border border-[#dfe4eb] bg-white">
              <img
                src="https://storage.googleapis.com/bluestark_explorer/infinitiworks/Preflight-checklist-mockup.png"
                alt="Meta Ads Pre-Flight Checklist Mockup"
                width="600"
                height="340"
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <h4 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
              Meta Ads Pre-Flight Checklist
            </h4>
            <p className="mt-2 font-serif text-sm leading-relaxed text-[#44474f]">
              Before you launch paid campaigns, audit the system. Get the same 5-point gate we use at InfinitiLabs to catch wasted ad spend, offer flaws, and faulty telemetry.
            </p>
            <ul className="mt-4 space-y-2 text-xs font-serif text-[#44474f]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-[#718096] flex-shrink-0" />
                <span>Offer, proof, and capacity verification gate.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-[#718096] flex-shrink-0" />
                <span>Event deduplication and signal quality audit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-[#718096] flex-shrink-0" />
                <span>Instant PDF download. No spam.</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
            <Link
              to="/preflight-checklist/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-card border border-[#1C3D73] bg-white px-4 py-3 font-display text-sm font-medium text-[#1C3D73] transition-all hover:bg-[#f1f5f9]"
            >
              Get the free checklist <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
