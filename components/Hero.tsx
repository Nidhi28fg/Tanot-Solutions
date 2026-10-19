const offerings = ["Strategy", "Design", "Development", "Growth"];

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-12 pb-16 pt-14 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Independent digital studio · India & worldwide</p>
          <h1 className="max-w-[13ch] text-[3.15rem] leading-[0.99] sm:text-6xl lg:text-[5.15rem]">
            Your next website should <em className="font-serif text-violet">open doors.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted lg:text-lg lg:leading-8">
            We design, redesign and build thoughtful websites for ambitious
            businesses—across industries, across borders, and built around what
            makes you different.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn btn-cta">
              Let&apos;s build something <span aria-hidden="true">↗</span>
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

        <div className="hero-art relative mx-auto w-full max-w-[570px]" aria-label="A glimpse of a modern custom website design">
          <div className="art-note note-top"><span className="note-star">✳</span> Made to move you forward</div>
          <div className="browser-window">
            <div className="browser-bar">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="browser-dot bg-[#FF8274]" />
                <span className="browser-dot bg-[#F8C75E]" />
                <span className="browser-dot bg-[#7BC9A2]" />
              </div>
              <span className="browser-url">yourbrand.co</span>
              <span className="text-xs text-white/50">↗</span>
            </div>
            <div className="mock-site">
              <div className="mock-nav">
                <span className="mock-logo"><span />FORME</span>
                <span className="mock-menu">STUDIO　 JOURNAL　 ABOUT</span>
                <span className="mock-contact">LET&apos;S TALK ↗</span>
              </div>
              <div className="mock-content">
                <span className="mock-overline">DESIGN FOR EVERYDAY RITUALS</span>
                <p>Make room<br />for <i>better.</i></p>
                <span className="mock-link">DISCOVER THE COLLECTION <b>↗</b></span>
                <div className="mock-orb" aria-hidden="true"><span>F</span></div>
                <div className="mock-sun" aria-hidden="true" />
              </div>
              <div className="mock-bottom"><span>OBJECTS WITH INTENTION</span><span>01 — 04</span></div>
            </div>
          </div>
          <div className="art-sticker" aria-hidden="true">
            <span>IDEAS</span><b>↗</b><span>INTO IMPACT</span>
          </div>
          <div className="art-note note-bottom">Thoughtful by design <span>✳</span></div>
        </div>
      </div>
      <div className="hero-footer container-page">
        <span>GOOD WORK TRAVELS.</span>
        <span>Scroll to explore <b aria-hidden="true">↓</b></span>
      </div>
    </section>
  );
}
