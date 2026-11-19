import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { href: "/#services", label: "All services" },
  { href: "/services/custom-website", label: "Custom website" },
  { href: "/services/ecommerce-website", label: "eCommerce website" },
  { href: "/services/landing-pages", label: "Landing pages" },
  { href: "/services/website-redesign", label: "Website redesign" },
  { href: "/services/seo-optimization", label: "SEO optimization" },
  { href: "/services/maintain-website", label: "Website care" },
  { href: "/services/social-media-handling", label: "Social media handling" },
];

const exploreLinks = [
  { href: "/#approach", label: "How we work" },
  { href: "/#proof", label: "Selected work" },
  { href: "/#faq", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer border-t border-line">
      <div className="container-page site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/#top" className="site-footer-brand-lockup" aria-label="DigitalWebNet home">
            <span className="site-footer-logo">
              <Image
                src="/digitalwebnet-logo.jpg"
                alt=""
                width={168}
                height={60}
                className="site-footer-logo-image"
              />
            </span>
            <span className="site-footer-brand-name">DigitalWebNet</span>
          </Link>
          <p>
            Custom websites designed and developed for businesses that want a
            clear offer, stronger first impression, and a site ready to grow.
          </p>
          <div className="site-footer-pills">
            <span>India-based</span>
            <span>Worldwide clients</span>
            <span>Custom builds</span>
          </div>
        </div>

        <div>
          <h2 className="site-footer-title">Services</h2>
          <ul className="site-footer-links">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer-title">Explore</h2>
          <ul className="site-footer-links">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer-title">Get in touch</h2>
          <ul className="site-footer-contact">
            <li>
              <a href="https://wa.me/918860523651" target="_blank" rel="noreferrer">
                WhatsApp · +91 88605 23651
              </a>
            </li>
            <li>
              <a href="mailto:hello@digitalwebnet.com">hello@digitalwebnet.com</a>
            </li>
            <li>
              <span>Based in India · Working worldwide</span>
            </li>
          </ul>
          <Link className="btn btn-cta site-footer-cta" href="/#contact">
            Request a free consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="container-page site-footer-bottom">
        <p>© 2026 DigitalWebNet. All rights reserved.</p>
        <div className="site-footer-bottom-links">
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#contact">Start a project</Link>
          <a href="mailto:hello@digitalwebnet.com">Email us</a>
        </div>
      </div>
    </footer>
  );
}
