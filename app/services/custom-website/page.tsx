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
  title: "Custom Website Design & Development | DigitalWebNet",
  description:
    "A custom website shaped around your business goals, workflows and customers. Strategy, bespoke design and responsive development from DigitalWebNet.",
};

const benefits = [
  {
    number: "01",
    title: "Made for your business",
    description:
      "Site structure and features shaped around your goals, services and workflows—not a template you have to work around.",
  },
  {
    number: "02",
    title: "A brand people remember",
    description:
      "A distinctive visual experience that reflects your brand and helps you stand apart from competitors.",
  },
  {
    number: "03",
    title: "Ready to grow with you",
    description:
      "Start with what you need today, on a flexible foundation that can support new content and features later.",
  },
  {
    number: "04",
    title: "A better SEO foundation",
    description:
      "Purposeful page structure and technical SEO practices help search engines understand your content.",
  },
  {
    number: "05",
    title: "Performance without the bloat",
    description:
      "A considered build avoids unnecessary plugins and code, supporting faster load times across devices.",
  },
  {
    number: "06",
    title: "Designed for conversion potential",
    description:
      "Clear journeys, useful calls to action and relevant content make the next step easier for visitors.",
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
  {
    title: "A dedicated team",
    description: "One focused team for your project, from discovery through launch.",
  },
  {
    title: "SEO-conscious development",
    description: "Structure and technical foundations planned with search visibility in mind.",
  },
  {
    title: "Performance from the start",
    description: "Lean builds and testing that keep the experience feeling responsive.",
  },
  {
    title: "Clear communication",
    description: "Transparent updates so you always know where the project stands.",
  },
  {
    title: "Post-launch support",
    description: "Options for updates, improvements and ongoing website care.",
  },
  {
    title: "Architecture that scales",
    description: "A foundation planned for new pages, features and growth over time.",
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
      "We shape page journeys, wireframes and visual designs around your brand and customers.",
  },
  {
    title: "Custom development",
    description:
      "We build a responsive, performance-minded website to match the agreed design.",
  },
  {
    title: "CMS & integrations",
    description:
      "Where needed, we connect your site with content tools, CRM, e-commerce and analytics.",
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
  { name: "Next.js", badge: "N", detail: "Fast pages and SEO-friendly rendering", color: "#fb923c" },
  { name: "React", badge: "R", detail: "Interactive, responsive experiences", color: "#f97316" },
  { name: "Tailwind CSS", badge: "T", detail: "Consistent design systems", color: "#f59e0b" },
  { name: "TypeScript", badge: "TS", detail: "Reliable, maintainable code", color: "#fdba74" },
];

const concepts = [
  {
    title: "Product discovery",
    category: "E-commerce concept",
    image: "/images/concept-commerce-preview.svg",
    alt: "Illustrated e-commerce website concept preview",
  },
  {
    title: "Healthcare information",
    category: "Healthcare concept",
    image: "/images/concept-healthcare-preview.svg",
    alt: "Illustrated healthcare website concept preview",
  },
];

const fitSignals = [
  "Launching a new business online",
  "Outgrowing a template or current site",
  "Need distinctive brand expression",
  "Specific journeys, workflows or integrations",
  "Plans to expand content and features",
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
              Custom websites that <em className="font-serif">grow with your business.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Move beyond a one-size-fits-all template. Get a website shaped
              around your brand, customer journeys and business goals—with the
              flexibility to evolve as you do.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Custom website benefits">
              {heroHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 text-sm text-muted">
                  <span className="font-semibold text-orange" aria-hidden="true">✓</span>
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
              unoptimized
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
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-orange md:px-7">Custom website</th>
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

      <section className={`section ${styles.benefitsSection}`} aria-labelledby="custom-benefits">
        <div className="container-page">
          <header className={`section-head ${styles.sectionHead}`}>
            <p className="eyebrow"><span className="eyebrow-dot" /> Why go custom?</p>
            <h2 id="custom-benefits">A better fit than a template.</h2>
            <p>
              A custom build gives you the freedom to shape the experience
              around what your business and customers actually need.
            </p>
          </header>
          <div className={styles.benefitGrid}>
            {benefits.map((benefit) => (
              <article key={benefit.number} className={styles.benefitCard}>
                <span className={styles.cardIndex}>{benefit.number}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
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
                <span className="mt-0.5 font-semibold text-orange" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="custom-includes">
        <div className="container-page">
          <header className={`section-head ${styles.sectionHead}`}>
            <p className="eyebrow"><span className="eyebrow-dot" /> What&apos;s included</p>
            <h2 id="custom-includes">From the first conversation to a site that&apos;s ready to grow.</h2>
          </header>
          <div className={styles.inclusionGrid}>
            {inclusions.map((item, index) => (
              <article key={item.title} className={styles.inclusionCard}>
                <span className={styles.cardIndex}>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="custom-capabilities">
        <div className="container-page">
          <header className={`section-head ${styles.sectionHead}`}>
            <p className="eyebrow"><span className="eyebrow-dot" /> Made for the way you work</p>
            <h2 id="custom-capabilities">What can a custom website do?</h2>
            <p>
              Choose the functionality your customers and team need. We&apos;ll
              scope the right features and integrations for your project.
            </p>
          </header>
          <ul className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <li key={capability} className={styles.capabilityCard}>
                <span aria-hidden="true">↗</span>
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

      <section className={`section ${styles.techSection}`} aria-labelledby="custom-tech">
        <div className="container-page">
          <header className={`section-head ${styles.sectionHead}`}>
            <p className="eyebrow"><span className="eyebrow-dot" /> Technology</p>
            <h2 id="custom-tech">Modern tools. Chosen with purpose.</h2>
            <p>
              Our current web stack includes these technologies. The right
              choices for your project depend on its goals, features and
              content needs.
            </p>
          </header>
          <ul className={styles.techGrid}>
            {technologies.map((technology) => (
              <li
                key={technology.name}
                className={styles.stackCard}
                style={{ "--badge-color": technology.color, "--badge-glow": technology.color } as TechnologyCardStyle}
              >
                <span className={styles.stackBadge} aria-hidden="true">{technology.badge}</span>
                <span className={styles.stackCopy}>
                  <span className={styles.stackLabel}>{technology.name}</span>
                  <span className={styles.stackDetail}>{technology.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section bg-paper-2 ${styles.whySection}`} aria-labelledby="why-digitalwebnet">
        <div className="container-page">
          <header className={`section-head ${styles.sectionHead}`}>
            <p className="eyebrow"><span className="eyebrow-dot" /> A thoughtful partner</p>
            <h2 id="why-digitalwebnet">Why choose DigitalWebNet?</h2>
            <p>
              Get a collaborative team focused on a useful, maintainable
              website—not just a launch-day finish line.
            </p>
          </header>
          <ul className={styles.reasonGrid}>
            {reasonsToChooseUs.map((reason, index) => (
              <li key={reason.title} className={styles.reasonCard}>
                <span className={styles.reasonMark} aria-hidden="true">✓</span>
                <span className={styles.cardIndex}>0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.processSection}`} aria-labelledby="custom-process">
        <div className="container-page">
          <header className={`section-head ${styles.sectionHead}`}>
            <p className="eyebrow"><span className="eyebrow-dot" /> A clear, collaborative process</p>
            <h2 id="custom-process">A considered path from idea to launch.</h2>
            <p>
              You&apos;ll know what happens next, what we need from you and
              where your project stands at every step.
            </p>
          </header>
          <ol className={styles.processGrid}>
            {steps.map((step) => (
              <li key={step.number} className={styles.processCard}>
                <div className={styles.processTop}>
                  <span className={styles.processNumber}>{step.number}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.description}</p>
                <div className={styles.processDeliverables}>
                  <h4>Typical deliverables</h4>
                  <ul>
                    {step.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.processTrust}>
            <p><strong>Timeline:</strong> Confirmed after discovery based on scope and content readiness.</p>
            <p><strong>Payment:</strong> 50% to start, 50% before launch.</p>
            <p><strong>Support:</strong> 14 days of post-launch fixes included.</p>
          </div>
        </div>
      </section>

      <section className={`section bg-paper-2 ${styles.conceptsSection}`} aria-labelledby="custom-work">
        <div className="container-page">
          <header className={`section-head ${styles.sectionHead}`}>
            <p className="eyebrow"><span className="eyebrow-dot" /> Design portfolio</p>
            <h2 id="custom-work">Industry concepts that show our design approach.</h2>
            <p>
              These concept previews show how we shape websites for different
              audiences—clear structure, distinctive design, and journeys that
              match the industry.
            </p>
          </header>
          <div className={styles.conceptGrid}>
            {concepts.map((concept) => (
              <article key={concept.title} className={styles.conceptCard}>
                <div className={styles.conceptMedia}>
                  <Image
                    src={concept.image}
                    alt={concept.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className={styles.conceptImage}
                  />
                  <span className={styles.conceptBadge}>Concept preview · design sample</span>
                </div>
                <div className={styles.conceptBody}>
                  <p>{concept.category}</p>
                  <h3>{concept.title}</h3>
                  <Link href="/#contact" className={styles.textLink}>
                    Get a similar concept <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.conceptFooter}>
            <p>
              Prefer to review more directions? Explore the full concept
              gallery, or book a call and we&apos;ll map a website around your brief.
            </p>
            <Link href="/#proof" className={styles.textLink}>
              Explore all design concepts <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={`section bg-paper-2 ${styles.fitSection}`} aria-labelledby="custom-audience">
        <div className="container-page">
          <div className={styles.fitPanel}>
            <header className="section-head">
              <p className="eyebrow"><span className="eyebrow-dot" /> Is custom right for you?</p>
              <h2 id="custom-audience">For businesses ready for a more considered website.</h2>
              <p>
                A custom approach could be right if you&apos;re launching a new
                business, outgrowing your current site or working with a
                distinctive brand that needs more than an off-the-shelf layout.
              </p>
            </header>
            <ul className={styles.fitList}>
              {fitSignals.map((signal) => (
                <li key={signal}>
                  <span aria-hidden="true">→</span>
                  {signal}
                </li>
              ))}
            </ul>
            <p className={styles.fitNote}>
              Not sure what level of build you need? We&apos;ll talk through
              your goals and recommend a scope that makes sense.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`} aria-labelledby="custom-faq">
        <div className="container-page">
          <div className={styles.faqLayout}>
            <header className="section-head">
              <p className="eyebrow"><span className="eyebrow-dot" /> Custom website FAQs</p>
              <h2 id="custom-faq">A few things you may be wondering.</h2>
              <p>
                Every project is different. If you have a question about your
                requirements, tell us what you&apos;re planning.
              </p>
              <Link className={styles.textLink} href="/#contact">
                Discuss your project <span aria-hidden="true">↗</span>
              </Link>
            </header>
            <CustomWebsiteFaq />
          </div>
        </div>
      </section>

      <section className={`section pt-0 ${styles.ctaSection}`}>
        <div className="container-page">
          <div className={styles.ctaPanel}>
            <div className={styles.ctaCopy}>
              <p className="eyebrow-light"><span className="eyebrow-dot" /> Let&apos;s build what&apos;s next</p>
              <h2>Have a unique project in mind?</h2>
              <p>
                Tell us what you&apos;re planning. We&apos;ll learn about your
                requirements and prepare a custom proposal shaped around your project.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className="btn btn-cta">
                Book a free strategy call <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/#contact" className="btn btn-ghost-light">
                Request a custom proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
