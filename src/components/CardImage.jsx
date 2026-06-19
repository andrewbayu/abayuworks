// Featured image for carousel cards. Renders the real image when `src` is set,
// otherwise a branded gradient placeholder (no broken-image state) so cards look
// intentional until real images are provided.

const DOT = {
  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
};

const SYMBOLS = {
  'Case study': '◆',
  Framework: '⬡',
  Paper: '≡',
  Toolkit: '✦',
  Kit: '◈',
  Guide: '❯',
};

export default function CardImage({ src, alt = '', kind, heightClass = 'h-32' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full ${heightClass} shrink-0 object-cover`}
      />
    );
  }
  const symbol = SYMBOLS[kind] || '◇';
  return (
    <div
      aria-hidden
      className={`relative w-full ${heightClass} shrink-0 overflow-hidden`}
      style={{
        background:
          'linear-gradient(135deg, rgba(28,61,115,0.92) 0%, rgba(28,61,115,0.45) 55%, rgba(26,27,37,0.55) 100%)',
      }}
    >
      <div className="absolute inset-0" style={DOT} />
      <span className="absolute -right-2 -top-5 select-none font-display text-7xl font-bold text-white/[0.06]">
        {symbol}
      </span>
    </div>
  );
}
