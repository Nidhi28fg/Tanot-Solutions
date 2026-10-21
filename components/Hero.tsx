const offerings = [
  "Conversion-focused journeys",
  "SEO-aware foundations",
  "Custom development",
  "Responsive by design",
];

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
          <h1 className="hero-title max-w-[13ch] text-[3.15rem] leading-[0.99] sm:text-6xl lg:text-[5.15rem]">
            Websites that <em className="font-serif text-violet">turn visitors into customers.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted lg:text-lg lg:leading-8">
            Guffo Solution builds custom websites for businesses, designed to
            build trust, attract the right customers and bring more enquiries.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn btn-cta">
              Book a free consultation <span aria-hidden="true">↗</span>
            </a>
            <a href="#proof" className="btn btn-text">
              View recent work <span aria-hidden="true">↘</span>
            </a>
          </div>
          <p className="hero-cta-note">
            Start your project discussion today—no obligation.
          </p>
          <ul aria-label="How our websites are built" className="mt-8 grid gap-3 text-sm font-medium text-muted sm:grid-cols-2">
            {offerings.map((offering) => (
              <li key={offering} className="flex items-center gap-2">
                <span className="font-semibold text-violet" aria-hidden="true">✓</span>
                {offering}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-art relative mx-auto w-full max-w-[760px]" role="img" aria-label="Illustrative website concept designed by Guffo Solution, displayed in a floating browser window">
          <div className="hero-art-glow" aria-hidden="true" />
          <div className="browser-window hero-browser" aria-hidden="true">
            <div className="browser-bar">
              <span className="flex items-center gap-1.5">
                <i className="browser-dot bg-[#ff6f91]" />
                <i className="browser-dot bg-[#ffc565]" />
                <i className="browser-dot bg-[#64dfda]" />
              </span>
              <span className="browser-url">guffosolution.com / concept</span>
              <span className="browser-status">CONCEPT PREVIEW</span>
            </div>
            <div className="mock-site hero-mock-site">
              <div className="mock-nav">
                <span className="mock-logo"><span /> GUFFO STUDIO</span>
                <span className="mock-menu">STUDIO&nbsp;&nbsp;&nbsp; SERVICES&nbsp;&nbsp;&nbsp; CONTACT</span>
                <span className="mock-contact">LET&apos;S TALK ↗</span>
              </div>
              <div className="mock-content">
                <span className="mock-overline">A DIGITAL STUDIO FOR WHAT&apos;S NEXT</span>
                <p>Make your<br /><i>next move.</i></p>
                <span className="mock-link">Explore the concept <b>↗</b></span>
                <div className="mock-sun" />
                <div className="mock-orb"><span>T</span></div>
              </div>
              <div className="mock-bottom">
                <span>DESIGN WITH INTENT</span>
                <span>BUILT AROUND YOUR GOALS&nbsp;&nbsp; ↗</span>
              </div>
            </div>
          </div>
          <div className="hero-float-label hero-float-top"><span>✳</span> A DISTINCTIVE DIGITAL PRESENCE</div>
          <div className="hero-float-label hero-float-bottom"><span>01 / 03</span> Strategy → Design → Development</div>
          <div className="hero-float-card" aria-hidden="true">
            <span>DESIGN · DEVELOPMENT</span>
            <strong>One thoughtful experience.</strong>
          </div>
        </div>
      </div>
      <div className="hero-footer container-page">
        <span>GOOD WORK TRAVELS.</span>
        <span>Scroll to explore <b aria-hidden="true">↓</b></span>
      </div>
    </section>
  );
}
