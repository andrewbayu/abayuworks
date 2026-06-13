const KIND_STYLES = {
  'Case study': {
    gradient: 'linear-gradient(135deg, rgba(28,61,115,0.90) 0%, rgba(28,61,115,0.50) 55%, rgba(26,27,37,0.30) 100%)',
    symbol: '◆',
  },
  'Framework': {
    gradient: 'linear-gradient(135deg, rgba(255,232,212,0.15) 0%, rgba(28,61,115,0.28) 55%, rgba(26,27,37,0.20) 100%)',
    symbol: '⬡',
  },
  'Paper': {
    gradient: 'linear-gradient(135deg, rgba(61,107,176,0.60) 0%, rgba(28,61,115,0.38) 55%, rgba(26,27,37,0.20) 100%)',
    symbol: '≡',
  },
};

const DOT_PATTERN = {
  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
};

export default function PostCover({ kind, category, tall = false }) {
  const s = KIND_STYLES[kind] || KIND_STYLES['Case study'];
  return (
    <div
      className={`relative overflow-hidden ${tall ? 'h-52 sm:h-64' : 'h-36'}`}
      style={{ background: s.gradient }}
    >
      <div aria-hidden className="absolute inset-0" style={DOT_PATTERN} />
      <div
        aria-hidden
        className="absolute -right-2 -top-6 select-none font-display text-9xl font-bold text-white/[0.035]"
      >
        {s.symbol}
      </div>
      <div className="absolute bottom-4 left-5">
        <span className="text-xs font-medium uppercase tracking-widest text-white/50">{category}</span>
      </div>
      <div className="absolute right-4 top-4">
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-medium text-white/45">
          {kind}
        </span>
      </div>
    </div>
  );
}
