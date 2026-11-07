import Link from "next/link";
import SectionHead from "@/components/SectionHead";
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
    delivery: "Typical delivery: 7–10 days",
    features: ["5 pages", "Mobile responsive", "Contact form", "1 revision round"],
    button: "Get started",
  },
  {
    name: "Business",
    price: "₹19,999",
    description: "More room to share your services and expertise.",
    delivery: "Typical delivery: 14–21 days",
    features: ["10 pages", "SEO setup", "Blog", "2 revision rounds"],
    button: "Choose plan",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹39,999",
    description: "A broader website foundation for growing needs.",
    delivery: "Typical delivery: 3–5 weeks",
    features: ["Unlimited pages", "Advanced SEO", "Premium support", "Priority revisions"],
    button: "Contact us",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section" aria-labelledby="why-choose-guffo">
      <div className="container-page">
        <SectionHead
          index="01"
          kicker="Why Guffo Solution"
          title="A sharper digital presence for growth."
          titleId="why-choose-guffo"
          support="Thoughtful design, practical technology, and clear collaboration—shaped around what your customers need to do next."
        />
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
        <SectionHead
          index="05"
          kicker="Industries we serve"
          title="One craft. Many kinds of business."
          titleId="industries-title"
          support="Every audience is different. We shape structure, content, and journeys around the industry you serve."
        />
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
        <SectionHead
          index="06"
          kicker="Website packages"
          title="Clear packages. Confirmed before we begin."
          titleId="pricing-title"
          support="Pick a starting point. We'll refine scope, timeline, and features so you know exactly what you're getting."
          actionHref="#contact"
          actionLabel="Request a custom quote"
        />
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <article className={`${styles.planCard} ${plan.popular ? styles.featuredPlan : ""}`} key={plan.name}>
              {plan.popular && <span className={styles.popularBadge}>Popular</span>}
              <p className={styles.planName}>{plan.name}</p>
              <p className={styles.planDescription}>{plan.description}</p>
              <p className={styles.price}>
                {plan.price}
                <span> INR</span>
              </p>
              {"delivery" in plan && plan.delivery ? (
                <p className={styles.planDelivery}>{plan.delivery}</p>
              ) : null}
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link className={`btn ${plan.popular ? "btn-cta" : "btn-ghost"}`} href="#contact">
                {plan.button} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.pricingTrust}>
          <p>
            <strong>Payment:</strong> 50% to start, 50% before launch.
          </p>
          <p>
            <strong>Support:</strong> 14 days of post-launch fixes included.
          </p>
          <p>
            <strong>Scope:</strong> Final features and timeline are confirmed in writing before work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
