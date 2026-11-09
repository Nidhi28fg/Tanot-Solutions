import Link from "next/link";
import styles from "@/app/services/service-page.module.css";

export type ServiceBlock = {
  number?: string;
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePageProps = {
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  lead: string;
  highlights: string[];
  primaryCta: string;
  secondaryCta?: string;
  featuresTitle: string;
  featuresLead: string;
  features: ServiceBlock[];
  benefitsTitle: string;
  benefitsLead: string;
  benefits: ServiceBlock[];
  processTitle: string;
  processLead: string;
  process: ServiceBlock[];
  faqsTitle: string;
  faqs: ServiceFaq[];
  ctaTitle: string;
  ctaLead: string;
};

export default function ServicePage({
  eyebrow,
  titleBefore,
  titleAccent,
  lead,
  highlights,
  primaryCta,
  secondaryCta = "Request a free consultation",
  featuresTitle,
  featuresLead,
  features,
  benefitsTitle,
  benefitsLead,
  benefits,
  processTitle,
  processLead,
  process,
  faqsTitle,
  faqs,
  ctaTitle,
  ctaLead,
}: ServicePageProps) {
  return (
    <main id="main" className={styles.page}>
      <section className="hero-section relative overflow-hidden">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-violet" aria-hidden="true" />
        <div className="hero-orb hero-orb-coral" aria-hidden="true" />
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> {eyebrow}
            </p>
            <h1 className="mt-6 text-[2.7rem] leading-[1.05] sm:text-5xl lg:text-[4.4rem]">
              {titleBefore}{" "}
              <em className="font-serif text-orange">{titleAccent}</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              {lead}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Service highlights">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted">
                  <span className="font-semibold text-orange" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn btn-cta">
                {primaryCta} <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/#contact" className="btn btn-ghost">
                {secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <header className={styles.sectionHead}>
            <p className="eyebrow">
              <span className="eyebrow-dot" /> What&apos;s included
            </p>
            <h2>{featuresTitle}</h2>
            <p>{featuresLead}</p>
          </header>
          <div className={styles.featureGrid}>
            {features.map((item, index) => (
              <article key={item.title} className={styles.card}>
                <span className={styles.cardIndex}>{item.number ?? `0${index + 1}`}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper-2">
        <div className="container-page">
          <header className={styles.sectionHead}>
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Why it matters
            </p>
            <h2>{benefitsTitle}</h2>
            <p>{benefitsLead}</p>
          </header>
          <div className={styles.benefitGrid}>
            {benefits.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <header className={styles.sectionHead}>
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Our process
            </p>
            <h2>{processTitle}</h2>
            <p>{processLead}</p>
          </header>
          <ol className={styles.processGrid}>
            {process.map((item, index) => (
              <li key={item.title} className={styles.processStep}>
                <strong>Step 0{index + 1}</strong>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-paper-2">
        <div className="container-page">
          <header className={styles.sectionHead}>
            <p className="eyebrow">
              <span className="eyebrow-dot" /> FAQs
            </p>
            <h2>{faqsTitle}</h2>
          </header>
          <div className={styles.faqList}>
            {faqs.map((item, index) => (
              <details key={item.question} className={styles.faqItem} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className={styles.ctaPanel}>
            <div className={styles.ctaCopy}>
              <p className="eyebrow-light">
                <span className="eyebrow-dot" /> Ready when you are
              </p>
              <h2>{ctaTitle}</h2>
              <p>{ctaLead}</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className="btn btn-cta">
                {primaryCta} <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/#services" className="btn btn-ghost-light">
                View all services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
