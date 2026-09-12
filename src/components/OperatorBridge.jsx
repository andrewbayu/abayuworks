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
            <div className="font-display text-base font-bold text-[#1C3D73] sm:text-lg">$8.9M</div>
            <div className="mt-0.5 font-serif text-xs leading-tight text-[#718096]">Accumulated Revenue</div>
          </div>
          <div className="p-2 border-x border-[#e2e8f0]">
            <div className="font-display text-base font-bold text-[#1C3D73] sm:text-lg">300K+</div>
            <div className="mt-0.5 font-serif text-xs leading-tight text-[#718096]">Leads via Proven Systems</div>
          </div>
          <div className="p-2">
            <div className="font-display text-base font-bold text-[#1C3D73] sm:text-lg">+230%</div>
            <div className="mt-0.5 font-serif text-xs leading-tight text-[#718096]">Productivity via AI Systems</div>
          </div>
        </div>

        <div className="mt-3 text-right">
          <Link to="/receipts/" className="font-display text-xs font-semibold text-[#1C3D73] transition-colors hover:underline">
            See all receipts & case studies <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

    </section>
  );
}
