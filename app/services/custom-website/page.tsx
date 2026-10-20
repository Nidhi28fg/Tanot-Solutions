import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import CustomWebsiteFaq from "@/components/CustomWebsiteFaq";
import styles from "./custom-website.module.css";

type TechnologyCardStyle = CSSProperties & {
  "--badge-color": string;
  "--badge-glow": string;
};

export const metadata: Metadata = {
  title: "Custom Website Design & Development | Tanot Solutions",
  description:
    "A custom website shaped around your business goals, workflows and customers. Strategy, bespoke design and responsive development from Tanot Solutions.",
};

const benefits = [
  {
    number: "01",
    title: "Made for your business",
    description:
      "Get a site structure and features shaped around your goals, services and workflows—not a template you have to work around.",
  },
  {
    number: "02",
    title: "A brand people remember",
    description:
      "Build a distinctive visual experience that reflects your brand and helps you stand apart from competitors.",
  },
  {
    number: "03",
    title: "Ready to grow with you",
    description:
      "Start with what you need today, with a flexible foundation that can support new content, features and opportunities over time.",
  },
];

const inclusions = [
  {
    title: "Discovery & strategy",
    description:
      "We get clear on your audience, objectives, content and project scope before design begins.",
  },
  {
    title: "Bespoke UX/UI design",
    description:
      "We shape page journeys, wireframes and visual designs around your brand and the people using your site.",
  },
  {
    title: "Custom development",
    description:
      "We build a responsive, performance-minded website to match the agreed design and functional requirements.",
  },
  {
    title: "CMS & integrations",
    description:
      "Where needed, we connect your site with content tools, CRM, e-commerce and analytics platforms.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Discuss your goals, audience, requirements and priorities. Together, we define a clear scope.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Explore the visual direction, then review and refine custom layouts and prototypes.",
  },
  {
    number: "03",
    title: "Develop & test",
    description:
      "Build the approved experience and check it across key screen sizes and user journeys.",
  },
  {
    number: "04",
    title: "Launch & hand over",
    description:
      "Prepare for launch, help your site go live and walk you through the handover.",
  },
];

const technologies = [
  { name: "Next.js", badge: "N", detail: "Web framework", color: "#c5b7ff" },
  { name: "React", badge: "⚛", detail: "UI library", color: "#79ddff" },
  { name: "Tailwind CSS", badge: "≈", detail: "Utility-first styling", color: "#75e0d2" },
  { name: "TypeScript", badge: "TS", detail: "Typed JavaScript", color: "#81aaff" },
];

const concepts = [
  {
    title: "Product discovery",
    category: "E-commerce concept",
    image: "/images/portfolio-retail-photo.jpg",
    alt: "Clothing displayed on a rack in a retail store",
  },
  {
    title: "Healthcare information",
    category: "Healthcare concept",
    image: "/images/portfolio-health-photo.jpg",
    alt: "Doctor using a mobile phone",
  },
];

export default function CustomWebsitePage() {
  return (
    <main id="main" className={styles.page}>
      <section className="hero-section relative overflow-hidden">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-violet" aria-hidden="true" />
        <div className="hero-orb hero-orb-coral" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-10 py-20 md:py-28 lg:grid-cols-[1fr_0.92fr] lg:gap-12">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Custom website design &amp; development
            </p>
            <h1 className="mt-6 max-w-[15ch] text-[3rem] leading-[1.02] sm:text-6xl lg:text-[5rem]">
              A website built around <em className="font-serif text-violet">your next move.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Your business isn&apos;t one-size-fits-all. We bring strategy,
              custom design and thoughtful development together to create a
              website that fits your goals—and gives your business room to grow.
            </p>
            <Link href="/#contact" className="btn btn-cta mt-8">
              Request a custom estimate <span aria-hidden="true">↗</span>
            </Link>
            <p className="mt-4 text-sm text-muted">
              Based in India · Working with ambitious businesses worldwide
            </p>
          </div>
          <figure className={styles.heroImagePanel}>
            <Image
              src="/images/hero-studio.svg"
              alt="Concept illustration of custom website designs in desktop and mobile mockups"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 46vw"
              className={styles.heroImage}
            />
            <figcaption className={styles.heroImageCaption}>
              Strategy · Design · Development
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="custom-benefits">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> Why go custom?</p>
            <h2 id="custom-benefits">A better fit than a template.</h2>
            <p>
              A custom build gives you the freedom to shape the experience
              around what your business and customers actually need.
            </p>
          </header>
          <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className={`glass-card rounded-2xl border border-line p-7 shadow-card md:p-8 ${styles.interactiveCard}`}
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-violet">
                    {benefit.number}
                  </span>
                  <h3 className="mt-5 text-2xl leading-snug">{benefit.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
            <figure className={styles.imageFrame}>
              <Image
                src="/images/service-design-photo.jpg"
                alt="A website design displayed on a laptop during a creative work session"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className={styles.sectionImage}
              />
              <div className={styles.imageWash} aria-hidden="true" />
              <figcaption className={styles.imageCaption}>
                Designed around your business—not a template
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="custom-includes">
        <div className="container-page">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> What&apos;s included</p>
            <h2 id="custom-includes">From the first conversation to a site that&apos;s ready to grow.</h2>
          </header>
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="grid gap-5 sm:grid-cols-2">
              {inclusions.map((item, index) => (
                <article
                  key={item.title}
                  className={`glass-card rounded-2xl border border-line p-7 shadow-card md:p-8 ${styles.interactiveCard}`}
                >
                  <span className="service-number text-xs font-semibold tracking-[0.14em] text-violet">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl leading-snug">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <div
              className={styles.mockup}
              role="img"
              aria-label="Decorative custom website preview with a browser frame and abstract violet artwork"
            >
              <div className={styles.mockupBar} aria-hidden="true">
                <span className={styles.mockupDot} />
                <span className={styles.mockupDot} />
                <span className={styles.mockupDot} />
                <span className={styles.mockupAddress}>yourbrand.com</span>
              </div>
              <div className={styles.mockupBody} aria-hidden="true">
                <span className={styles.mockupEyebrow}>A DIGITAL EXPERIENCE, MADE FOR YOU</span>
                <p className={styles.mockupTitle}>Built around <em>what&apos;s next.</em></p>
                <div className={styles.mockupLines}>
                  <span />
                  <span />
                </div>
                <span className={styles.mockupAction}>Explore the experience ↗</span>
              </div>
              <div className={styles.mockupFeature} aria-hidden="true"><span>T</span></div>
              <span className={styles.mockupCaption} aria-hidden="true">Custom concept preview</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="custom-tech">
        <div className="container-page grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Technology</p>
            <h2 id="custom-tech">Modern tools. Chosen with purpose.</h2>
            <p>
              Our current web stack includes these technologies. The right
              choices for your project depend on its goals, features and
              content needs.
            </p>
          </header>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {technologies.map((technology) => (
              <li
                key={technology.name}
                className={`glass-card ${styles.stackCard} ${styles.interactiveCard} flex items-center rounded-2xl border border-line p-4 shadow-card`}
                style={{ "--badge-color": technology.color, "--badge-glow": technology.color } as TechnologyCardStyle}
              >
                <span className={styles.stackBadge} aria-hidden="true">{technology.badge}</span>
                <span>
                  <span className={styles.stackLabel}>{technology.name}</span>
                  <span className={styles.stackDetail}>{technology.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="custom-process">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> A clear, collaborative process</p>
            <h2 id="custom-process">A considered path from idea to launch.</h2>
            <p>
              You&apos;ll know what happens next, what we need from you and
              where your project stands at every step.
            </p>
          </header>
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <ol className="grid gap-5 sm:grid-cols-2">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className={`glass-card ${styles.processCard} rounded-2xl border border-line p-6 shadow-card md:p-7`}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet text-sm font-semibold text-white">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <figure className={styles.imageFrame}>
              <Image
                src="/images/process-team-photo.jpg"
                alt="A team collaborating around a laptop while planning a website project"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className={styles.sectionImage}
              />
              <div className={styles.imageWash} aria-hidden="true" />
              <figcaption className={styles.imageCaption}>
                A collaborative process, from discovery to launch
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="custom-work">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> A look at our design thinking</p>
            <h2 id="custom-work">Explore a couple of website concepts.</h2>
            <p>
              These visual explorations show how a website might be shaped for
              different audiences. They are concepts—not client projects or
              testimonials—and are labelled as such.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {concepts.map((concept) => (
              <article
                key={concept.title}
                className={`glass-card overflow-hidden rounded-2xl border border-line shadow-card ${styles.interactiveCard}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={concept.image}
                    alt={concept.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-ink/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    Concept visual · not client work
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.11em] text-violet">
                    {concept.category}
                  </p>
                  <h3 className="mt-2 text-xl">{concept.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            We don&apos;t publish client testimonials or performance claims
            here. We&apos;d rather show concept work clearly than imply
            outcomes we can&apos;t substantiate.
          </p>
          <Link
            href="/#proof"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet hover:underline"
          >
            Explore all design concepts <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="custom-audience">
        <div className="container-page grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Is custom right for you?</p>
            <h2 id="custom-audience">For businesses ready for a more considered website.</h2>
          </header>
          <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
            <div className="glass-card rounded-2xl border border-line p-7 shadow-card md:p-9">
              <p className="text-[15px] leading-7 text-muted">
                A custom approach could be right if you&apos;re launching a new
                business, outgrowing your current site or working with a
                distinctive brand that needs more than an off-the-shelf layout.
                It also suits projects with specific customer journeys, business
                workflows, integrations or plans to expand over time.
              </p>
              <p className="mt-5 text-[15px] leading-7 text-muted">
                Not sure what level of build you need? We&apos;ll talk through
                your goals and recommend a scope that makes sense.
              </p>
            </div>
            <figure className={styles.supportImageFrame}>
              <Image
                src="/images/client-workspace-photo.jpg"
                alt="A team working together around a laptop in a collaborative workspace"
                fill
                sizes="(max-width: 1023px) 100vw, 30vw"
                className={styles.sectionImage}
              />
              <div className={styles.imageWash} aria-hidden="true" />
              <figcaption className={styles.imageCaption}>
                Built around how your business works
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="custom-faq">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Custom website FAQs</p>
            <h2 id="custom-faq">A few things you may be wondering.</h2>
            <p>
              Every project is different. If you have a question about your
              requirements, tell us what you&apos;re planning.
            </p>
            <Link className="faq-contact-link" href="/#contact">
              Discuss your project <span aria-hidden="true">↗</span>
            </Link>
            <figure className={styles.faqImageFrame}>
              <Image
                src="/images/faq-team-photo.jpg"
                alt="Colleagues sharing ideas around a laptop"
                fill
                sizes="(max-width: 1023px) 100vw, 32vw"
                className={styles.sectionImage}
              />
              <div className={styles.imageWash} aria-hidden="true" />
              <figcaption className={styles.imageCaption}>
                Clear answers, collaborative work
              </figcaption>
            </figure>
          </header>
          <CustomWebsiteFaq />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="cta-panel flex flex-col items-start justify-between gap-8 rounded-2xl px-8 py-10 text-white md:flex-row md:items-center md:px-12 md:py-14">
            <div className="max-w-2xl">
              <p className="eyebrow-light"><span className="eyebrow-dot" /> Let&apos;s build what&apos;s next</p>
              <h2 className="text-[1.75rem] leading-tight text-white md:text-[2.5rem]">
                Have a unique project in mind?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Tell us what you&apos;re planning. We&apos;ll learn about your
                requirements and prepare a custom proposal shaped around your project.
              </p>
            </div>
            <Link href="/#contact" className="btn btn-cta shrink-0">
              Request a custom estimate <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
