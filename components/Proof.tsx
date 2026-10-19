const quotes = [
  {
    quote:
      "We were ranking, but ChatGPT never named us. Eight weeks later we are a cited source in our category prompts — and inbound quality jumped with it.",
    initials: "AR",
    name: "Amelia Reyes",
    role: "VP Growth, Northline Analytics",
  },
  {
    quote:
      "Tanot replaced a messy mix of SEO vendors with one system. Content finally has a brief, a standard, and a number the board actually cares about.",
    initials: "JK",
    name: "James Khan",
    role: "Head of Marketing, Helio Cloud",
  },
  {
    quote:
      "The visibility console made AI search tangible. We stopped guessing and started funding the pages that get retrieved.",
    initials: "SP",
    name: "Sofia Patel",
    role: "CMO, Meridian Health Tech",
  },
];

export default function Proof() {
  return (
    <section className="section" id="proof">
      <div className="container-page">
        <header className="section-head mb-12">
          <p className="eyebrow">Proof</p>
          <h2>Operators, not observers.</h2>
          <p>
            Marketing leaders hire Tanot when AI search started answering their
            category — and their brand was missing from the reply.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((item) => (
            <figure
              key={item.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper-2 p-8 shadow-card"
            >
              <blockquote className="font-serif text-xl leading-8 text-ink">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xs font-semibold text-cta">
                  {item.initials}
                </span>
                <span>
                  <strong className="block font-semibold text-ink">{item.name}</strong>
                  <span className="text-muted">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
