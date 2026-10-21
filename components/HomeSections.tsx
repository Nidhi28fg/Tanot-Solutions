import Link from "next/link";
import styles from "./home-sections.module.css";

const reasons = [
  {
    icon: "✳",
    title: "Custom designs",
    description: "Distinctive websites shaped around your brand, business, and customers.",
  },
  {
    icon: "↗",
    title: "SEO-friendly foundations",
    description: "Thoughtful page structure and technical foundations to support search visibility.",
  },
  {
    icon: "▣",
    title: "Mobile responsive",
    description: "Layouts planned to make your content clear and useful on every screen.",
  },
  {
    icon: "⚡",
    title: "Performance minded",
    description: "Efficient builds and testing help keep your website feeling fast and responsive.",
  },
];

const industries = [
  { icon: "✚", name: "Healthcare" },
  { icon: "▤", name: "Education" },
  { icon: "⌂", name: "Real estate" },
  { icon: "◒", name: "Restaurants" },
  { icon: "✳", name: "Startups" },
  { icon: "▧", name: "E-commerce" },
  { icon: "↗", name: "Travel" },
  { icon: "◇", name: "Finance" },
];

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "A clear online starting point for a small business.",
    features: ["5 pages", "Mobile responsive", "Contact form"],
    button: "Get started",
  },
  {
    name: "Business",
    price: "₹19,999",
    description: "More room to share your services and expertise.",
    features: ["10 pages", "SEO setup", "Blog"],
    button: "Choose plan",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹39,999",
    description: "A broader website foundation for growing needs.",
    features: ["Unlimited pages", "Advanced SEO", "Premium support"],
    button: "Contact us",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section" aria-labelledby="why-choose-guffo">
      <div className="container-page">
        <header className="section-head mb-10">
          <p className="eyebrow"><span className="eyebrow-dot" /> Why Guffo Solution</p>
          <h2 id="why-choose-guffo">Why businesses choose Guffo Solution.</h2>
          <p>We bring the right mix of thoughtful design, practical technology, and clear collaboration.</p>
        </header>
        <div className={styles.reasonGrid}>
          {reasons.map((reason, index) => (
            <article className={styles.reasonCard} key={reason.title}>
              <span className={styles.reasonIcon} aria-hidden="true">{reason.icon}</span>
              <span className={styles.cardNumber}>0{index + 1}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesGrid() {
  return (
    <section className="section" aria-labelledby="industries-title">
      <div className="container-page">
        <header className="section-head mb-10">
          <p className="eyebrow"><span className="eyebrow-dot" /> Industries we serve</p>
          <h2 id="industries-title">Serving businesses across industries.</h2>
          <p>Every business is different. We shape each website around its audience, goals, and content.</p>
        </header>
        <ul className={styles.industryGrid}>
          {industries.map((industry) => (
            <li className={styles.industryCard} key={industry.name}>
              <span aria-hidden="true">{industry.icon}</span>
              <h3>{industry.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PricingPreview() {
  return (
    <section className={`section ${styles.pricingSection}`} id="pricing" aria-labelledby="pricing-title">
      <div className="container-page">
        <header className="section-head mb-10">
          <p className="eyebrow"><span className="eyebrow-dot" /> Website packages</p>
          <h2 id="pricing-title">Transparent pricing to get started.</h2>
          <p>Choose a starting package and let&apos;s confirm the scope that fits your business.</p>
        </header>
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <article className={`${styles.planCard} ${plan.popular ? styles.featuredPlan : ""}`} key={plan.name}>
              {plan.popular && <span className={styles.popularBadge}>Popular</span>}
              <p className={styles.planName}>{plan.name}</p>
              <p className={styles.planDescription}>{plan.description}</p>
              <p className={styles.price}>{plan.price}<span> INR</span></p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>
                ))}
              </ul>
              <Link className={`btn ${plan.popular ? "btn-cta" : "btn-ghost"}`} href="#contact">
                {plan.button} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
        <p className={styles.pricingNote}>
          Final scope, features, and delivery timeline are confirmed before work begins.
        </p>
      </div>
    </section>
  );
}
