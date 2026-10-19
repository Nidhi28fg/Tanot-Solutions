import Image from "next/image";

const industries = [
  {
    name: "Retail & e-commerce",
    image: "/images/portfolio-retail-photo.jpg",
    alt: "A shopper browsing a clothing rack in a boutique",
  },
  {
    name: "Healthcare",
    image: "/images/portfolio-health-photo.jpg",
    alt: "A doctor using a mobile phone in a clinical setting",
  },
  {
    name: "Hospitality",
    image: "/images/portfolio-hospitality-photo.jpg",
    alt: "A resort with a pool and guest lounge beside the water",
  },
  {
    name: "Professional services",
    image: "/images/contact-office-photo.jpg",
    alt: "A bright, modern professional office",
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
    title: "Made to move quickly",
    description: "Thoughtful, lightweight choices help create a smoother browsing experience.",
  },
];

const promises = [
  {
    title: "A team that listens",
    description: "We start with your goals, audience and practical business needs.",
  },
  {
    title: "A plan you can follow",
    description: "You know what comes next, what we need from you and where things stand.",
  },
  {
    title: "Room to keep growing",
    description: "Launch is a beginning. We can help you plan the next useful improvements.",
  },
];

export function StudioIntroduction() {
  return (
    <section className="section studio-intro-section" id="studio">
      <div className="container-page studio-intro-grid">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> A little about us</p>
          <h2>A digital studio for businesses ready to move forward.</h2>
          <p>
            Tanot Solutions brings strategy, design and development together
            to make websites that feel right for your business—and useful to
            the people you want to reach.
          </p>
          <a className="studio-inline-link" href="#contact">
            Tell us what you&apos;re planning <span aria-hidden="true">↗</span>
          </a>
        </header>
        <div className="studio-intro-visual">
          <Image
            src="/images/footer-studio-photo.jpg"
            alt="A bright creative studio with a shared workspace"
            width={1200}
            height={800}
            sizes="(max-width: 767px) 100vw, 45vw"
          />
          <span className="studio-photo-caption">Independent studio · India & worldwide</span>
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
          <p className="eyebrow"><span className="eyebrow-dot" /> Different fields, one thoughtful approach</p>
          <h2>Websites shaped around the business behind them.</h2>
          <p>
            Every industry has its own audience, questions and decisions. We
            learn what matters to yours before shaping the experience.
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
            A polished website is more than a striking first screen. We pay
            attention to how it reads, moves and works across devices.
          </p>
          <div className="standards-image-wrap">
            <Image
              src="/images/service-redesign-photo.jpg"
              alt="A designer reviewing website pages across digital devices"
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
          <p className="eyebrow"><span className="eyebrow-dot" /> A better way to work together</p>
          <h2>Clear collaboration. No one-size-fits-all process.</h2>
          <p>
            You bring the knowledge of your business. We bring the creative
            and technical craft to turn it into a considered website.
          </p>
        </header>
        <div className="partnership-layout">
          <div className="partnership-photo">
            <Image
              src="/images/client-workspace-photo.jpg"
              alt="A collaborative team sharing ideas around a laptop"
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
            alt="A calm workspace ready for the next stage of a website project"
            width={1200}
            height={800}
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
