const services = [
  {
    index: "01",
    title: "AI Search Optimization",
    body: "Entity coverage, citation engineering, and answer-ready pages designed to be retrieved by ChatGPT, Perplexity, and AI Overviews.",
    items: ["Answer-engine mapping", "Source-worthiness audits", "Prompt-level gap analysis"],
  },
  {
    index: "02",
    title: "Technical & Organic SEO",
    body: "Crawl health, information architecture, and ranking systems that compound — not one-off keyword chasing.",
    items: ["Indexation & Core Web Vitals", "Entity & site architecture", "Competitive SERP strategy"],
  },
  {
    index: "03",
    title: "Content Marketing Systems",
    body: "Editorial engines with briefs, clusters, and distribution built for buyers first — and structured so AI can cite you second.",
    items: ["Topic clusters & briefs", "Expert-led production", "Distribution playbooks"],
  },
  {
    index: "04",
    title: "Measurement & Insight",
    body: "Reporting that connects citations, rankings, and pipeline — so leadership sees commercial impact, not vanity traffic.",
    items: ["AI citation tracking", "Share of answer", "Pipeline attribution"],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container-page">
        <header className="section-head mb-12">
          <p className="eyebrow">Services</p>
          <h2>Four levers that put you in the answer.</h2>
          <p>
            No disconnected retainers. One program spanning AI search, technical
            SEO, and content that both people and models can trust.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.index}
              className="rounded-2xl border border-line bg-paper-2 p-8 shadow-card"
            >
              <span className="text-xs font-semibold tracking-[0.14em] text-teal">
                {service.index}
              </span>
              <h3 className="mt-4 text-2xl leading-snug">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-muted">{service.body}</p>
              <ul className="mt-6 space-y-2 text-sm font-medium text-ink">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
