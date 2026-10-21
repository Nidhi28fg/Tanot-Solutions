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
    title: "More qualified enquiries",
    description: "Clear service information and calls to action can help the right visitors take the next step.",
  },
  {
    number: "02",
    title: "A stronger first impression",
    description: "A considered, consistent brand experience helps your business make a more professional introduction.",
  },
  {
    number: "03",
    title: "A smoother user experience",
    description: "Thoughtful navigation and responsive layouts make key information easier to find across devices.",
  },
  {
    number: "04",
    title: "More useful engagement",
    description: "Relevant content and clear journeys give visitors useful reasons to explore your offer.",
  },
  {
    number: "05",
    title: "A sound SEO foundation",
    description: "Structured pages and technical SEO best practices help search engines understand your content.",
  },
  {
    number: "06",
    title: "Room to grow",
    description: "A flexible build can make it easier to add content and functionality as your needs change.",
  },
];

const comparisonRows = [
  {
    topic: "Design & branding",
    builder: "Start from a shared theme and adapt what it allows",
    custom: "Shape the design around your brand and customer journey",
  },
  {
    topic: "Features",
    builder: "Work within the builder's available blocks and add-ons",
    custom: "Plan functionality and integrations around your requirements",
  },
  {
    topic: "Search foundations",
    builder: "SEO controls vary by platform, plan and setup",
    custom: "Plan page structure and technical SEO for your content",
  },
  {
    topic: "Performance",
    builder: "Performance depends on the platform, theme and add-ons",
    custom: "Tune the build for the agreed pages and functionality",
  },
  {
    topic: "Growth",
    builder: "Future changes depend on platform capabilities",
    custom: "Choose an approach that can support your planned next steps",
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

export function CustomVsBuilder() {
  return (
    <section className="section comparison-section" aria-labelledby="custom-vs-builder">
      <div className="container-page">
        <header className="section-head mb-10">
          <p className="eyebrow"><span className="eyebrow-dot" /> Choose the right foundation</p>
          <h2 id="custom-vs-builder">Custom website or page builder?</h2>
          <p>
            Page builders can work well for a simple site and a tight budget.
            Custom development gives more room to shape the experience when
            your brand, features or growth plans need it.
          </p>
        </header>
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[660px] border-collapse text-left">
            <thead>
              <tr className="bg-white/[0.04]">
                <th scope="col" className="w-[22%] px-5 py-4 text-sm font-semibold text-muted md:px-7">Consideration</th>
                <th scope="col" className="w-[39%] px-5 py-4 text-sm font-semibold text-muted md:px-7">Page builder</th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold text-violet md:px-7">Custom website</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.topic} className="border-t border-line">
                  <th scope="row" className="px-5 py-4 text-sm font-medium md:px-7">{row.topic}</th>
                  <td className="px-5 py-4 text-sm leading-6 text-muted md:px-7">{row.builder}</td>
                  <td className="px-5 py-4 text-sm leading-6 text-muted md:px-7">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-muted">
          The best option depends on your needs, timeline and budget. We can
          help you compare the trade-offs before you decide.
        </p>
      </div>
    </section>
  );
}

export function StudioIntroduction() {
  return (
    <section className="section studio-intro-section" id="studio">
      <div className="container-page studio-intro-grid">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> Guffo Solution</p>
          <h2>Your website is often the first impression of your business.</h2>
          <p>
            Visitors often decide within seconds whether they trust a business.
            Your website should help make that decision easier. Guffo Solution
            builds custom websites designed to support that first impression.
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

export function FounderIntroduction() {
  return (
    <section className="section" aria-labelledby="founder-introduction">
      <div className="container-page">
        <article className="glass-card grid gap-6 rounded-2xl border border-line p-7 shadow-card md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-10">
          <div
            aria-hidden="true"
            className="grid h-16 w-16 place-items-center rounded-2xl border border-violet/30 bg-violet/10 font-serif text-3xl text-violet"
          >
            N
          </div>
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> A personal approach</p>
            <h2 id="founder-introduction" className="text-2xl md:text-3xl">Hi, I&apos;m Nidhi.</h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-muted">
              I help businesses create websites that are clear, fast and
              focused on generating enquiries. I believe the best projects
              start with understanding your goals and communicating openly
              throughout the work.
            </p>
          </div>
        </article>
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
          <p className="eyebrow"><span className="eyebrow-dot" /> The value of a better website</p>
          <h2>What a better website can help you achieve.</h2>
          <p>
            A website cannot guarantee business results, but a clear,
            accessible and well-structured experience can give visitors better
            reasons and easier ways to take action.
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
      title: "Conversion-focused journeys",
      description: "Clear page structure and calls to action guide visitors toward a useful next step.",
    },
    {
      title: "SEO-ready foundations",
      description: "We consider page structure, metadata and technical SEO best practices from the start.",
    },
    {
      title: "Performance-minded builds",
      description: "We keep performance in mind while building and reviewing the agreed website experience.",
    },
    {
      title: "Mobile-first experience",
      description: "We plan responsive layouts so key content and actions work across screen sizes.",
    },
    {
      title: "No template lock-in",
      description: "Design and functionality are shaped around your brief, not constrained to a one-size-fits-all theme.",
    },
    {
      title: "Direct project communication",
      description: "Discuss requirements and decisions directly with the people working on your website.",
    },
  ];

  return (
    <section className="section why-tanot-section" id="why-tanot">
      <div className="container-page">
        <div className="why-tanot-intro">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Why choose Guffo Solution?</p>
            <h2>A website partner focused on your next step.</h2>
            <p>
              From the first page to post-launch support, we focus on a useful
              website foundation shaped around your goals and customers.
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
