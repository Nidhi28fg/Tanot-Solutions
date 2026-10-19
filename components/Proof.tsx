const work = [
  { number: "01", title: "A digital storefront with a little more soul.", type: "E-commerce · Brand experience", className: "project-retail", mark: "GOOD\nTHINGS", label: "Curated goods, considered living" },
  { number: "02", title: "A calmer way to find the care you need.", type: "Healthcare · UX & development", className: "project-health", mark: "wellkind", label: "Care that meets you where you are." },
  { number: "03", title: "A stay worth planning your next trip around.", type: "Hospitality · Website redesign", className: "project-stay", mark: "Casa\nSol", label: "A slower kind of escape." },
];

export default function Proof() {
  return (
    <section className="section" id="proof">
      <div className="container-page">
        <header className="section-head mb-12">
          <p className="eyebrow"><span className="eyebrow-dot" /> Who we help</p>
          <h2>Different businesses. One thing in common: big ideas.</h2>
          <p>
            From growing teams in India to established businesses around the
            world, we create digital experiences for people in every kind of
            industry.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {work.map((project) => (
            <article key={project.number} className="project-card">
              <div className={`project-preview ${project.className}`} aria-label={`${project.type} website preview`}>
                <div className="project-browser"><span>● ● ●</span><span>brandstudio.com</span><span>↗</span></div>
                <div className="project-art">
                  <span className="project-mark">{project.mark.split("\n").map((part) => <span key={part}>{part}</span>)}</span>
                  <span className="project-label">{project.label}</span>
                  <span className="project-graphic" aria-hidden="true" />
                </div>
                <span className="project-tag">Concept direction</span>
              </div>
              <div className="flex items-start justify-between gap-3 pt-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.11em] text-violet">{project.type}</p>
                  <h3 className="mt-2 max-w-[22ch] text-xl leading-snug">{project.title}</h3>
                </div>
                <span className="pt-1 text-xs font-semibold text-muted">{project.number}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
