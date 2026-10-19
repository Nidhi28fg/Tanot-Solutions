const steps = [
  {
    title: "Discover",
    body: "Map buyer questions, competitor citations, and entity gaps across Google and AI surfaces.",
  },
  {
    title: "Engineer",
    body: "Rebuild architecture, schema, and source pages so models can parse — and prefer — your expertise.",
  },
  {
    title: "Publish",
    body: "Ship a content system with editorial standards, expert review, and distribution that earns links and mentions.",
  },
  {
    title: "Measure",
    body: "Track citations, rankings, and assisted pipeline. Double down on what moves revenue.",
  },
];

export default function Approach() {
  return (
    <section className="section bg-paper-2" id="approach">
      <div className="container-page grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <header className="section-head">
          <p className="eyebrow">Approach</p>
          <h2>A disciplined system, not a pile of tactics.</h2>
          <p>
            We run an eight-week foundation, then a compounding operating cadence.
            Every artifact is built to be retrieved, ranked, and trusted.
          </p>
        </header>

        <ol className="grid gap-6 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-paper p-6">
              <span className="text-xs font-semibold text-teal">0{index + 1}</span>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
