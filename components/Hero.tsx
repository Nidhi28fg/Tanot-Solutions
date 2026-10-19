import Image from "next/image";

const offerings = ["Website design", "Redesign", "Development", "India & worldwide"];

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-violet" aria-hidden="true" />
      <div className="hero-orb hero-orb-coral" aria-hidden="true" />
      <div className="hero-orb hero-orb-blue" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-12 pb-16 pt-14 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Independent digital studio · India & worldwide</p>
          <h1 className="max-w-[13ch] text-[3.15rem] leading-[0.99] sm:text-6xl lg:text-[5.15rem]">
            A clearer website. <em className="font-serif text-violet">A stronger next step.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted lg:text-lg lg:leading-8">
            Tanot Solutions designs, redesigns and develops websites for
            businesses in India and worldwide. Thoughtful design, clear
            communication and modern web development—shaped around your goals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn btn-cta">
              Request a custom estimate <span aria-hidden="true">↗</span>
            </a>
            <a href="#services" className="btn btn-text">
              Explore what we do <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.13em] text-muted">
            {offerings.map((offering) => (
              <li key={offering} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-orange" />
                {offering}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-art relative mx-auto w-full max-w-[700px]" aria-label="A web design workspace with a laptop displaying code">
          <div className="hero-art-glow" aria-hidden="true" />
          <Image
            className="hero-collage"
            src="/images/hero-workspace.jpg"
            alt="A laptop displaying code on a bright web design workspace"
            width={1200}
            height={800}
            priority
            sizes="(max-width: 1023px) 100vw, 54vw"
          />
          <div className="hero-float-label hero-float-top"><span>✳</span> BIG IDEAS, BUILT TOGETHER</div>
          <div className="hero-float-label hero-float-bottom"><span>01 / 03</span> Strategy → Design → Launch</div>
        </div>
      </div>
      <div className="hero-footer container-page">
        <span>GOOD WORK TRAVELS.</span>
        <span>Scroll to explore <b aria-hidden="true">↓</b></span>
      </div>
    </section>
  );
}
