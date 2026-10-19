const industries = ["Technology", "Retail & e-commerce", "Healthcare", "Hospitality", "Professional services", "And beyond"];

export default function LogoBar() {
  return (
    <section className="industry-strip" aria-label="Industries we work with">
      <div className="container-page flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Different industries. Distinctive digital experiences.</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink/75">
          {industries.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
