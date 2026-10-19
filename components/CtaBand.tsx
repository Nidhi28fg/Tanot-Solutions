import Image from "next/image";

export default function CtaBand() {
  return (
    <section className="section pt-0">
      <div className="container-page">
        <div className="cta-panel flex flex-col items-start justify-between gap-8 rounded-2xl px-8 py-10 text-white md:flex-row md:items-center md:px-12 md:py-14">
          <div className="max-w-xl">
            <p className="eyebrow-light"><span className="eyebrow-dot" /> Your next step</p>
            <h2 className="text-[1.75rem] leading-tight text-white md:text-[2.5rem]">
              Ready to make your next move?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Tell us what you&apos;re building. We&apos;ll bring fresh thinking,
              honest advice and a plan to get you there.
            </p>
          </div>
          <Image
            className="cta-image"
            src="/images/cta-launch.svg"
            alt="A colorful rocket illustration launching a new website idea"
            width={560}
            height={360}
            sizes="(max-width: 767px) 100vw, 34vw"
          />
          <a href="#contact" className="btn btn-cta shrink-0">
            Tell us about your project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
