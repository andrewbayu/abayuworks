const dalClients = [
  'BPR Hisobhan', 'Bank Jakarta', 'CIMB Niaga', 'Watermaxx',
  'Goldcoin Aboitiz Group', 'Finvolv', 'Uncle Paul', 'Dibao Indonesia',
  'IMOU', 'Digdaya Group', 'Thermomix Indonesia', 'Panangian School of Property',
  'Top Coach Indonesia', 'Ashiaaap Food', 'Victorindo Group', 'OrienTraco',
  'Roda Bangun Mandiri', 'Rucika',
];

export default function DalClientMarquee() {
  return (
    <section className="mx-[calc(50%-50vw)] overflow-hidden border-y border-[#dfe4eb] bg-white py-6 text-[#4b5563]">
      <p className="dal-utility text-center text-xs font-medium uppercase tracking-[0.16em] text-[#718096]">Selected businesses diagnosed through the Digital Advantage Lab</p>
      <div className="mt-4 overflow-hidden" aria-label="Digital Advantage Lab clients">
        <div className="dal-marquee flex w-max items-center whitespace-nowrap">
          {[...dalClients, ...dalClients].map((client, index) => (
            <span key={`${client}-${index}`} className="flex items-center">
              <span className="dal-client-marquee">{client}</span>
              <span className="dal-client-separator" aria-hidden>/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
