import Image from "next/image";

const services = [
  {
    index: "01",
    title: "Website design",
    icon: "design",
    image: "/images/service-design-photo.jpg",
    imageAlt: "Stock photograph of a person working on a digital design with a stylus",
    body: "Make your offer easier to understand with a user-first design shaped around your brand and customers.",
    items: ["Clear page structure", "Responsive visual design", "A considered path to enquire"],
  },
  {
    index: "02",
    title: "Website redesign",
    icon: "redesign",
    image: "/images/service-redesign-photo.jpg",
    imageAlt: "A web designer's screen showing website layouts across devices",
    body: "Give an existing website a more current look, clearer navigation and a more useful experience.",
    items: ["Review of structure and content", "Refreshed visual direction", "Responsive experience updates"],
  },
  {
    index: "03",
    title: "Web development",
    icon: "development",
    image: "/images/service-development-photo.jpg",
    imageAlt: "A team collaborating around laptops in a bright workspace",
    body: "Turn an approved design into a responsive website, built around your features and content needs.",
    items: ["Custom front-end development", "CMS and e-commerce options", "Testing across key screens"],
  },
  {
    index: "04",
    title: "Ongoing support",
    icon: "support",
    image: "/images/service-support-photo.jpg",
    imageAlt: "A small team working together around a laptop",
    body: "Keep your website current with practical updates and help planning what to improve next.",
    items: ["Updates and maintenance", "New features and landing pages", "Practical growth guidance"],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container-page">
        <header className="section-head mb-12">
          <p className="eyebrow"><span className="eyebrow-dot" /> Website services</p>
          <h2>What does your website need to do next?</h2>
          <p>
            Choose a focused service or bring us in from planning through
            launch. We&apos;ll shape the scope around your requirements.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.index}
              className="service-card glass-card rounded-2xl border border-line p-7 shadow-card md:p-8"
            >
              <div className="service-image-wrap">
                <Image
                  className="section-image service-image"
                  src={service.image}
                  alt={service.imageAlt}
                  width={640}
                  height={360}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <span className="image-glint" aria-hidden="true" />
              </div>
              <span className="service-number text-xs font-semibold tracking-[0.14em] text-violet">
                {service.index}
              </span>
              <span className={`service-icon service-icon-${service.icon}`} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {service.icon === "design" && <><path d="m15 5 4 4" /><path d="M4 20l4.5-1 10-10a2.12 2.12 0 0 0-3-3l-10 10L4 20Z" /><path d="M13 7 17 11" /></>}
                  {service.icon === "redesign" && <><path d="M20 7v5h-5" /><path d="M4.5 9A8 8 0 0 1 18 5l2 2" /><path d="M4 17v-5h5" /><path d="M19.5 15A8 8 0 0 1 6 19l-2-2" /></>}
                  {service.icon === "development" && <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m14 5-4 14" /></>}
                  {service.icon === "support" && <><path d="m13 2-3 8h7l-6 12 1-9H6l7-11Z" /></>}
                </svg>
              </span>
              <h3 className="mt-4 text-2xl leading-snug">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-muted">{service.body}</p>
              <ul className="mt-6 space-y-2 text-sm font-medium text-ink">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
