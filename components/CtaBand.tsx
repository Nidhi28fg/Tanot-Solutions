export default function CtaBand() {
  return (
    <section className="section pt-0">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-ink px-8 py-10 text-white md:flex-row md:items-center md:px-12 md:py-14">
          <div className="max-w-xl">
            <p className="eyebrow-light">Next step</p>
            <h2 className="text-[1.75rem] leading-tight text-white md:text-[2.5rem]">
              See where you stand in AI search.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              A 30-minute working session: your category prompts, citation gaps,
              and a 90-day plan. No slide theater.
            </p>
          </div>
          <a href="#contact" className="btn btn-cta shrink-0">
            Book a strategy session
          </a>
        </div>
      </div>
    </section>
  );
}
