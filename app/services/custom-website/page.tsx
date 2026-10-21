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
  title: "Custom Website Design & Development | Guffo Solution",
  description:
    "A custom website shaped around your business goals, workflows and customers. Strategy, bespoke design and responsive development from Guffo Solution.",
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
  {
    number: "04",
    title: "A better SEO foundation",
    description:
      "Purposeful page structure and technical SEO best practices help search engines understand your content. Rankings still depend on many factors beyond a website build.",
  },
  {
    number: "05",
    title: "Performance without the bloat",
    description:
      "A considered build avoids unnecessary plugins and code, supporting faster load times and a smoother experience across devices.",
  },
  {
    number: "06",
    title: "Designed for conversion potential",
    description:
      "Clear journeys, useful calls to action and relevant content can make it easier for visitors to take the next step.",
  },
];

const heroHighlights = [
  "Bespoke design",
  "SEO-ready architecture",
  "Performance-minded build",
  "Scalable foundations",
  "CRM & API integrations",
  "Customer-focused journeys",
];

const comparisonRows = [
  ["Design", "Generic layouts", "Distinctive design shaped around your brand"],
  ["Features", "Limited by the theme", "Flexible functionality for your requirements"],
  ["Integrations", "Often relies on plugins", "Purpose-built development and connections"],
  ["Scalability", "Can be difficult to extend", "Architecture planned for future growth"],
  ["Performance", "Varies by theme and plugins", "Performance considered throughout the build"],
];

const capabilities = [
  "Custom dashboards",
  "Booking systems",
  "Lead management",
  "CRM integrations",
  "Multi-step forms",
  "Payment gateways",
  "Membership portals",
  "E-commerce solutions",
  "API integrations",
];

const seoFoundations = [
  "Clean, structured code",
  "Technical SEO best practices",
  "Mobile-first responsive design",
  "Performance and Core Web Vitals considerations",
  "Schema-ready content structure",
  "Page-specific metadata",
];

const industries = [
  "Startups",
  "Healthcare",
  "Real estate",
  "Education",
  "SaaS",
  "Manufacturing",
  "E-commerce",
  "Professional services",
];

const reasonsToChooseUs = [
  "A dedicated team for your project",
  "SEO-conscious development",
  "Performance considered from the start",
  "Clear, transparent communication",
  "Post-launch support options",
  "An architecture designed to scale",
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
    deliverables: ["Competitor review", "Sitemap", "User journey mapping"],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Explore the visual direction, then review and refine custom layouts and prototypes.",
    deliverables: ["Wireframes", "UI mockups", "Design direction"],
  },
  {
    number: "03",
    title: "Develop & test",
    description:
      "Build the approved experience and check it across key screen sizes and user journeys.",
    deliverables: ["Responsive website", "Agreed CMS setup", "Analytics configuration"],
  },
  {
    number: "04",
    title: "Launch & hand over",
    description:
      "Prepare for launch, help your site go live and walk you through the handover.",
    deliverables: ["Launch checklist", "Site handover", "Next-step guidance"],
  },
];

const technologies = [
  { name: "Next.js", badge: "N", detail: "Supports fast pages and SEO-friendly rendering", color: "#c5b7ff" },
  { name: "React", badge: "⚛", detail: "Builds interactive, responsive experiences", color: "#79ddff" },
  { name: "Tailwind CSS", badge: "≈", detail: "Enables consistent, responsive design systems", color: "#75e0d2" },
  { name: "TypeScript", badge: "TS", detail: "Helps keep code reliable and maintainable", color: "#81aaff" },
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
              Custom websites that <em className="font-serif text-violet">grow with your business.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Move beyond a one-size-fits-all template. Get a website shaped
              around your brand, customer journeys and business goals—with the
              flexibility to evolve as you do.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Custom website benefits">
              {heroHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 text-sm text-muted">
                  <span className="font-semibold text-violet" aria-hidden="true">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-cta">
                Get a free website strategy call <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/#contact" className="btn btn-ghost">
                Request a custom proposal
              </Link>
            </div>
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

      <section className="section bg-paper-2" aria-labelledby="template-comparison">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> Template or custom?</p>
            <h2 id="template-comparison">A website should fit your business—not the other way around.</h2>
            <p>
              Templates can be a practical starting point. A custom website
              gives you more control when your brand, workflows or growth plans
              need a more tailored fit.
            </p>
          </header>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.04]">
                  <th scope="col" className="w-[28%] px-5 py-4 text-sm font-semibold text-muted md:px-7">Consideration</th>
                  <th scope="col" className="w-[34%] px-5 py-4 text-sm font-semibold text-muted md:px-7">Template website</th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-violet md:px-7">Custom website</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([consideration, template, custom]) => (
                  <tr key={consideration} className="border-t border-line">
                    <th scope="row" className="px-5 py-4 text-sm font-medium md:px-7">{consideration}</th>
                    <td className="px-5 py-4 text-sm leading-6 text-muted md:px-7">{template}</td>
                    <td className="px-5 py-4 text-sm leading-6 text-muted md:px-7">{custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

      <section className="section bg-paper-2" aria-labelledby="custom-seo">
        <div className="container-page grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Search-ready foundations</p>
            <h2 id="custom-seo">Built with SEO in mind from day one.</h2>
            <p>
              A website can support your search visibility with a solid
              technical foundation. Rankings are never guaranteed, but we can
              make your content easier to crawl, understand and use.
            </p>
          </header>
          <ul className="grid gap-3 sm:grid-cols-2">
            {seoFoundations.map((item) => (
              <li key={item} className="glass-card flex items-start gap-3 rounded-xl border border-line p-5 text-sm leading-6 text-muted shadow-card">
                <span className="mt-0.5 font-semibold text-violet" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
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

      <section className="section" aria-labelledby="custom-capabilities">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> Made for the way you work</p>
            <h2 id="custom-capabilities">What can a custom website do?</h2>
            <p>
              Choose the functionality your customers and team need. We&apos;ll
              scope the right features and integrations for your project.
            </p>
          </header>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <li key={capability} className={`glass-card rounded-2xl border border-line p-6 text-base font-medium shadow-card ${styles.interactiveCard}`}>
                <span className="mr-3 text-violet" aria-hidden="true">↗</span>
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="custom-industries">
        <div className="container-page grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Industry-aware, always custom</p>
            <h2 id="custom-industries">Custom websites for ambitious businesses.</h2>
            <p>
              We tailor structure, content and functionality to your audience
              and goals across a range of industries.
            </p>
          </header>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {industries.map((industry) => (
              <li key={industry} className="glass-card rounded-xl border border-line p-4 text-center text-sm font-medium shadow-card">
                {industry}
              </li>
            ))}
          </ul>
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

      <section className="section bg-paper-2" aria-labelledby="why-guffo">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> A thoughtful partner</p>
            <h2 id="why-guffo">Why choose Guffo Solution?</h2>
            <p>
              Get a collaborative team focused on a useful, maintainable
              website—not just a launch-day finish line.
            </p>
          </header>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasonsToChooseUs.map((reason) => (
              <li key={reason} className={`glass-card flex items-start gap-3 rounded-2xl border border-line p-6 text-sm leading-6 shadow-card ${styles.interactiveCard}`}>
                <span className="font-semibold text-violet" aria-hidden="true">✓</span>
                {reason}
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
                  <div className="mt-5 border-t border-line pt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-violet">Typical deliverables</h4>
                    <ul className="mt-3 grid gap-2">
                      {step.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2 text-sm leading-5 text-muted">
                          <span className="text-violet" aria-hidden="true">·</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-cta">
                Get a free website strategy call <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/#contact" className="btn btn-ghost">
                Request a custom proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
