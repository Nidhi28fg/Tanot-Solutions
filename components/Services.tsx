import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import styles from "./services.module.css";

const services = [
  {
    index: "01",
    title: "Website development",
    body: "Business websites that help you build credibility and make your offer easier to understand.",
    href: "/services/custom-website",
    cta: "Explore custom websites",
  },
  {
    index: "02",
    title: "eCommerce development",
    body: "A practical online store that makes it easy for customers to discover and buy your products.",
    href: "/services/ecommerce-website",
    cta: "Plan an online store",
  },
  {
    index: "03",
    title: "Landing pages",
    body: "Give a campaign, product, or service a focused page with a clear next step.",
    href: "/services/landing-pages",
    cta: "Brief a landing page",
  },
  {
    index: "04",
    title: "Website redesign",
    body: "Give an existing website a more current look, clearer navigation, and a more useful experience.",
    href: "/services/website-redesign",
    cta: "Discuss a redesign",
  },
  {
    index: "05",
    title: "SEO optimization",
    body: "Improve search foundations with practical on-page and technical SEO work.",
    href: "/services/seo-optimization",
    cta: "Improve SEO",
  },
  {
    index: "06",
    title: "Website maintenance",
    body: "Keep your website current with regular updates, security checks, and ongoing support.",
    href: "/services/maintain-website",
    cta: "Explore maintenance",
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.servicesSection}`} id="services">
      <div className="container-page">
        <SectionHead
          index="02"
          kicker="Website services"
          title="Choose the work your business needs next."
          support="Bring us in for a focused service or from planning through launch. We will shape the scope around your requirements."
          actionHref="#contact"
          actionLabel="Talk through your brief"
        />

        <div className={styles.serviceList}>
          {services.map((service) => (
            <Link key={service.index} href={service.href} className={styles.serviceRow}>
              <span className={styles.serviceIndex}>{service.index}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <span className={styles.serviceCta}>
                {service.cta} <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
