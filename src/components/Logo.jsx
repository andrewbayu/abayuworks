// The ⫽B monogram. White PNG on transparent — sits on dark surfaces.
export default function Logo({ className = '', withWordmark = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.png"
        alt="Aditya Indra Bayu"
        width={316}
        height={126}
        className="h-6 w-auto select-none sm:h-7"
        draggable={false}
      />
      {withWordmark && <span className="sr-only">Aditya Indra Bayu</span>}
    </span>
  );
}
