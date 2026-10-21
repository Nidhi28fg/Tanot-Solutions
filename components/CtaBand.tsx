export default function CtaBand() {
  return (
    <section className="section pt-0" id="final-cta">
      <div className="container-page">
        <div className="cta-panel flex flex-col items-start justify-between gap-8 rounded-2xl px-8 py-10 text-white md:flex-row md:items-center md:px-12 md:py-14">
          <div className="max-w-xl">
            <p className="eyebrow-light"><span className="eyebrow-dot" /> Your next step starts here</p>
            <h2 className="text-[1.75rem] leading-tight text-white md:text-[2.5rem]">
              Ready to grow your business online?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Let&apos;s build a website that attracts more customers and helps
              your business move forward.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-cta shrink-0">
              Book free consultation <span aria-hidden="true">↗</span>
            </a>
            <a href="#proof" className="btn btn-ghost shrink-0">View portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
