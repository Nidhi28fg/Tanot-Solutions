import Image from "next/image";

export default function CtaBand() {
  return (
    <section className="section pt-0" id="pricing">
      <div className="container-page">
        <div className="cta-panel flex flex-col items-start justify-between gap-8 rounded-2xl px-8 py-10 text-white md:flex-row md:items-center md:px-12 md:py-14">
          <div className="max-w-xl">
            <p className="eyebrow-light"><span className="eyebrow-dot" /> Clear, custom pricing</p>
            <h2 className="text-[1.75rem] leading-tight text-white md:text-[2.5rem]">
              Ready to build a website that supports your business goals?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Let&apos;s discuss what your website needs to achieve and plan
              the next step together. Project costs vary with scope, features
              and timeline; every proposal is customized.
            </p>
          </div>
          <Image
            className="cta-image"
            src="/images/cta-workspace-photo.jpg"
            alt="Stock photograph of a calm workspace"
            width={1200}
            height={800}
            sizes="(max-width: 767px) 100vw, 34vw"
          />
          <a href="#contact" className="btn btn-cta shrink-0">
            Request a free consultation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
