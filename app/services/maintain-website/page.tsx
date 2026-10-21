import type { Metadata } from "next";
import Link from "next/link";
import styles from "./maintain-website.module.css";

export const metadata: Metadata = {
  title: "Website Maintenance Services | Security, Updates & Support",
  description:
    "Professional website maintenance services including security updates, backups, performance optimization, bug fixes, and ongoing support to keep your website running smoothly.",
};

const highlights = [
  "Security updates",
  "Reliable website backups",
  "Bug fixes and support",
  "Performance optimization",
];

const services = [
  {
    number: "01",
    title: "Security monitoring",
    description:
      "Help protect your website from malware, vulnerabilities, and other common threats with proactive checks and security updates.",
  },
  {
    number: "02",
    title: "Regular updates",
    description:
      "Keep your CMS, plugins, themes, and integrations up to date and working together as expected.",
  },
  {
    number: "03",
    title: "Website backups",
    description:
      "Maintain regular backups and a clear recovery option so you can restore your website if something goes wrong.",
  },
  {
    number: "04",
    title: "Bug fixes",
    description:
      "Identify and resolve technical issues before they disrupt the experience for your visitors.",
  },
  {
    number: "05",
    title: "Performance optimization",
    description:
      "Review loading speed and site performance, then make practical improvements where they matter most.",
  },
  {
    number: "06",
    title: "Content updates",
    description:
      "Keep pages current with updates to text, images, banners, blog posts, and other website content.",
  },
];

const benefits = [
  {
    title: "Improved security",
    description: "Reduce risk with timely updates, monitoring, and safer recovery options.",
  },
  {
    title: "Better performance",
    description: "Keep your website responsive and easier to use across devices.",
  },
  {
    title: "Healthier SEO foundations",
    description: "Maintain the technical performance and usability that support search visibility.",
  },
  {
    title: "Reduced downtime",
    description: "Spot issues early and address them before they become bigger disruptions.",
  },
  {
    title: "A better user experience",
    description: "Give visitors a smoother, more reliable experience every time they visit.",
  },
  {
    title: "Long-term cost savings",
    description: "Address small issues early to help avoid more costly repairs later.",
  },
];

const plans = [
  {
    name: "Basic",
    description: "Suitable for small business websites",
    features: ["Monthly updates", "Security monitoring", "Weekly backups", "Email support"],
  },
  {
    name: "Standard",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Basic",
      "Performance optimization",
      "Content updates",
      "Priority support",
      "Monthly reports",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "Best for high-traffic websites",
    features: [
      "Everything in Standard",
      "Advanced security monitoring",
      "Daily backups",
      "Emergency support",
      "Dedicated account manager",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Website audit",
    description: "Review your website’s current health, setup, and maintenance needs.",
  },
  {
    number: "02",
    title: "Maintenance planning",
    description: "Build a maintenance plan around your website and business priorities.",
  },
  {
    number: "03",
    title: "Regular monitoring",
    description: "Keep an eye on performance, security, and site availability.",
  },
  {
    number: "04",
    title: "Updates and optimization",
    description: "Apply updates, fix issues, and make proactive improvements.",
  },
  {
    number: "05",
    title: "Reporting",
    description: "Share clear monthly reports and recommendations for what comes next.",
  },
];

const platforms = [
  "WordPress",
  "Shopify",
  "WooCommerce",
  "Next.js",
  "React",
  "HTML/CSS",
  "Laravel",
  "PHP",
  "E-commerce stores",
];

const faqs = [
  {
    question: "How often should a website be maintained?",
    answer:
      "Monthly maintenance is a good baseline for many websites. The right schedule depends on how often your site changes, its platform, and your security and performance needs.",
  },
  {
    question: "Do you provide emergency website support?",
    answer:
      "Yes. Emergency support is available with our Premium Maintenance Plan. We can discuss the right support level for your website and response needs.",
  },
  {
    question: "Can you maintain a website built by another agency?",
    answer:
      "Absolutely. We can review and maintain websites regardless of who originally designed or developed them.",
  },
  {
    question: "Will maintenance improve SEO?",
    answer:
      "Maintenance helps keep your website secure, usable, and performing well—factors that support a healthy SEO foundation. It cannot guarantee rankings, which depend on many factors.",
  },
  {
    question: "Do you provide backups?",
    answer:
      "Yes. Website backups are included in every plan, with weekly backups in Basic and daily backups in Premium. We can confirm the schedule that fits your chosen plan.",
  },
];

export default function MaintainWebsitePage() {
  return (
    <main id="main" className={styles.page}>
      <section className="hero-section relative overflow-hidden">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-violet" aria-hidden="true" />
        <div className="hero-orb hero-orb-coral" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-10 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Website maintenance services
            </p>
            <h1 className="mt-6 max-w-[15ch] text-[3rem] leading-[1.02] sm:text-6xl lg:text-[5rem]">
              Keep your website{" "}
              <em className="font-serif text-violet">secure, fast &amp; up to date.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Your website needs regular care to stay secure, perform well, and
              deliver a great experience. We handle updates, backups, bug fixes,
              and optimization—so you can focus on growing your business.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Website maintenance highlights">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 text-sm text-muted">
                  <span className="font-semibold text-violet" aria-hidden="true">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-cta">
                Get a maintenance plan <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/#contact" className="btn btn-ghost">
                Schedule a free consultation
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">
              Practical website care · Support tailored to your needs
            </p>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.panelTop}>
              <span className={styles.statusDot} />
              <span>Website care, handled</span>
              <span className={styles.panelMenu} aria-hidden="true">•••</span>
            </div>
            <div className={styles.panelContent}>
              <span className={styles.panelEyebrow}>Your website health</span>
              <p className={styles.panelTitle}>Ready for what&apos;s next.</p>
              <div className={styles.healthTrack} aria-label="Illustrative website health indicator">
                <span />
              </div>
              <div className={styles.panelChecks}>
                {["Security checks", "Updates & backups", "Performance review"].map((item) => (
                  <div className={styles.panelCheck} key={item}>
                    <span aria-hidden="true">✓</span>
                    {item}
                    <span className={styles.panelComplete}>In the plan</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.panelFooter}>
              <span>Consistent care. Fewer surprises.</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="maintenance-overview">
        <div className="container-page grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Ongoing website care</p>
            <h2 id="maintenance-overview">A website is never a one-time investment.</h2>
          </header>
          <div className={styles.overviewCopy}>
            <p>
              Regular maintenance helps your website stay secure, functional,
              and aligned with your business goals. It also makes it easier to
              catch small issues before they turn into interruptions.
            </p>
            <p>
              Our maintenance experts monitor and improve your site with a
              practical plan tailored to its platform, content, and needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="maintenance-includes">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> What we include</p>
            <h2 id="maintenance-includes">Comprehensive website maintenance.</h2>
            <p>Get the regular care and practical support your website needs to keep working well.</p>
          </header>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article className={`glass-card rounded-2xl border border-line p-6 shadow-card md:p-7 ${styles.serviceCard}`} key={service.number}>
                <span className="text-xs font-semibold tracking-[0.14em] text-violet">{service.number}</span>
                <h3 className="mt-5 text-xl leading-snug">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="maintenance-benefits">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> Why maintenance matters</p>
            <h2 id="maintenance-benefits">Benefits of regular maintenance.</h2>
            <p>Stay ahead of common website issues while creating a dependable experience for your customers.</p>
          </header>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article className={styles.benefit} key={benefit.title}>
                <span className={styles.benefitIcon} aria-hidden="true">✓</span>
                <div>
                  <h3 className="text-lg">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="maintenance-plans" aria-labelledby="maintenance-plans-title">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> Maintenance plans</p>
            <h2 id="maintenance-plans-title">Choose the right maintenance plan.</h2>
            <p>From essential updates to dedicated support, find the level of care that fits your website.</p>
          </header>
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article className={`${styles.planCard} ${plan.popular ? styles.popularPlan : ""}`} key={plan.name}>
                {plan.popular && <span className={styles.popularBadge}>Popular</span>}
                <p className={styles.planLabel}>{plan.name} plan</p>
                <h3 className="mt-3 text-2xl">{plan.description}</h3>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className={`btn ${plan.popular ? "btn-cta" : "btn-ghost"} mt-8 w-full`}>
                  Discuss this plan <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          <p className={styles.planNote}>
            We&apos;ll confirm the right scope and pricing after learning about your website.
          </p>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="maintenance-process">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> Our maintenance process</p>
            <h2 id="maintenance-process">A clear process for ongoing care.</h2>
          </header>
          <ol className={styles.processList}>
            {process.map((step) => (
              <li className={styles.processStep} key={step.number}>
                <span className={styles.processNumber}>{step.number}</span>
                <div>
                  <h3 className="text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="maintenance-platforms">
        <div className="container-page grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Platforms we support</p>
            <h2 id="maintenance-platforms">Technologies we maintain.</h2>
            <p>We support a range of platforms and website technologies.</p>
          </header>
          <ul className={styles.platformList} aria-label="Supported website platforms">
            {platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="maintenance-faq">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <header className="section-head">
            <p className="eyebrow"><span className="eyebrow-dot" /> Frequently asked questions</p>
            <h2 id="maintenance-faq">Website maintenance, explained.</h2>
            <p>Have a question about keeping your website in good shape? Start here.</p>
          </header>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details className={styles.faqItem} key={faq.question} open={index === 0}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="maintenance-cta">
        <div className="container-page">
          <div className={styles.ctaCard}>
            <p className="eyebrow"><span className="eyebrow-dot" /> Keep things running smoothly</p>
            <h2 id="maintenance-cta">Let&apos;s keep your website ready for business.</h2>
            <p>
              Don&apos;t let technical issues slow you down. We&apos;ll help maintain,
              secure, and optimize your website while you focus on growth.
            </p>
            <Link href="/#contact" className="btn btn-cta mt-7">
              Get started today <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
