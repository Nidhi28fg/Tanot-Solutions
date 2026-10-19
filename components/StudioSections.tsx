import Image from "next/image";

const industries = [
  {
    name: "Retail & e-commerce concept",
    image: "/images/portfolio-retail-photo.jpg",
    alt: "Stock photograph of a shopper browsing a clothing rack",
  },
  {
    name: "Healthcare concept",
    image: "/images/portfolio-health-photo.jpg",
    alt: "Stock photograph of a doctor using a mobile phone",
  },
  {
    name: "Hospitality concept",
    image: "/images/portfolio-hospitality-photo.jpg",
    alt: "Stock photograph of a resort with a pool beside the water",
  },
  {
    name: "Professional services concept",
    image: "/images/contact-office-photo.jpg",
    alt: "Stock photograph of a bright, modern professional office",
  },
];

const principles = [
  {
    number: "01",
    title: "Easy to navigate",
    description: "Clear page structure helps visitors find the information they need.",
  },
  {
    number: "02",
    title: "Ready for every screen",
    description: "Layouts are planned for mobile, tablet and desktop from the start.",
  },
  {
    number: "03",
    title: "Reviewed with care",
    description: "Quality checks help review the agreed pages and functionality before launch.",
  },
];

const promises = [
  {
    title: "Discovery & strategy",
    description: "We clarify your goals, audience, requirements and project scope together.",
  },
  {
    title: "Design & development",
    description: "We collaborate on the experience, then build the agreed website.",
  },
  {
    title: "Testing & launch",
    description: "We review the agreed work and coordinate the next steps toward launch.",
  },
];

export function StudioIntroduction() {
  return (
    <section className="section studio-intro-section" id="studio">
      <div className="container-page studio-intro-grid">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> Tanot Solutions</p>
          <h2>Website design and development, shaped around your goals.</h2>
          <p>
            Based in India and working with businesses in India and worldwide,
            we provide website design, redesign and development. Every project
            is scoped around its requirements.
          </p>
          <a className="studio-inline-link" href="#contact">
            Tell us what you&apos;re planning <span aria-hidden="true">↗</span>
          </a>
        </header>
        <div className="studio-intro-visual">
          <Image
            src="/images/footer-studio-photo.jpg"
            alt="Stock photograph of a bright creative workspace"
            width={1200}
            height={800}
            sizes="(max-width: 767px) 100vw, 45vw"
          />
          <span className="studio-photo-caption">Website design · Redesign · Development</span>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="section industries-section" id="industries">
      <div className="container-page">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> Example directions</p>
          <h2>Different audiences call for different website experiences.</h2>
          <p>
            These concept visuals illustrate possible directions across
            sectors. They are not client projects or a list of claimed
            industry engagements.
          </p>
        </header>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <article className="industry-card" key={industry.name}>
              <div className="industry-image-wrap">
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                />
              </div>
              <div className="industry-card-label">
                <span>0{index + 1}</span>
                <h3>{industry.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WebsiteStandards() {
  return (
    <section className="section standards-section" id="standards">
      <div className="container-page standards-grid">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> The details matter</p>
          <h2>Good design should work beautifully, too.</h2>
          <p>
            We focus on clear structure, responsive layouts and thoughtful
            details alongside the visual design.
          </p>
          <div className="standards-image-wrap">
            <Image
              src="/images/service-redesign-photo.jpg"
              alt="Stock photograph of website layouts displayed across devices"
              width={1200}
              height={800}
              sizes="(max-width: 767px) 100vw, 40vw"
            />
          </div>
        </header>
        <div className="standards-list">
          {principles.map((principle) => (
            <article className="standard-item" key={principle.number}>
              <span className="standard-number">{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StudioPartnership() {
  return (
    <section className="section partnership-section" id="partnership">
      <div className="container-page">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> Project workflow</p>
          <h2>Clear next steps and close collaboration.</h2>
          <p>
            We believe trust is built through transparent communication,
            thoughtful design and reliable delivery. You stay involved as
            decisions move from planning to launch.
          </p>
        </header>
        <div className="partnership-layout">
          <div className="partnership-photo">
            <Image
              src="/images/client-workspace-photo.jpg"
              alt="Stock photograph of colleagues collaborating around a laptop"
              width={1200}
              height={800}
              sizes="(max-width: 767px) 100vw, 42vw"
            />
            <span>Good work starts with a conversation.</span>
          </div>
          <div className="partnership-cards">
            {promises.map((promise, index) => (
              <article className="promise-card" key={promise.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{promise.title}</h3>
                  <p>{promise.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyTanot() {
  const principles = [
    {
      title: "Thoughtful design",
      description: "Visual decisions and page structure are shaped around your business and its audience.",
    },
    {
      title: "Clear communication",
      description: "We collaborate closely and keep project conversations focused on requirements and decisions.",
    },
    {
      title: "Modern web development",
      description: "We build responsive websites and review the agreed experience before launch.",
    },
  ];

  return (
    <section className="section why-tanot-section" id="why-tanot">
      <div className="container-page">
        <div className="why-tanot-intro">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Why work with us</p>
            <h2>Trust built through the way we work.</h2>
            <p>
              Thoughtful design, clear communication and reliable delivery are
              the principles we bring to each project.
            </p>
          </header>
          <figure className="why-tanot-visual">
            <Image
              src="/images/client-team-photo.jpg"
              alt="Stock photograph of a team collaborating around a laptop"
              width={1200}
              height={800}
              sizes="(max-width: 767px) 100vw, 50vw"
            />
            <figcaption>Stock photography · A collaborative project setting</figcaption>
          </figure>
        </div>
        <div className="why-tanot-grid">
          {principles.map((principle, index) => (
            <article className="why-tanot-card" key={principle.title}>
              <span>0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LaunchSupport() {
  return (
    <section className="section launch-support-section" id="launch-support">
      <div className="container-page launch-support-grid">
        <div className="launch-support-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Beyond launch day</p>
          <h2>Start strong. Keep getting better.</h2>
          <p>
            Once your website is live, we can help with updates, new pages and
            the next improvements your business needs. Support is shaped
            around your priorities.
          </p>
          <ul>
            <li><span aria-hidden="true">↗</span> Website updates and maintenance</li>
            <li><span aria-hidden="true">↗</span> New pages and features</li>
            <li><span aria-hidden="true">↗</span> A practical partner as you grow</li>
          </ul>
          <a className="studio-inline-link" href="#contact">
            Talk about ongoing support <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="launch-support-image">
          <Image
            src="/images/cta-workspace-photo.jpg"
            alt="Stock photograph of a calm workspace ready for a project"
            width={1200}
            height={800}
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
