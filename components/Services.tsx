import Image from "next/image";

const services = [
  {
    index: "01",
    title: "Website design",
    image: "/images/service-design.svg",
    imageAlt: "Vibrant interface design concept displayed inside a glass browser window",
    body: "Distinctive, user-first design that brings your brand to life and makes every visit feel effortless.",
    items: ["Brand-led visual direction", "Responsive page design", "Conversion-focused journeys"],
  },
  {
    index: "02",
    title: "Website redesign",
    image: "/images/service-redesign.svg",
    imageAlt: "Website redesign concept showing an updated mobile-first interface",
    body: "A clearer story, a fresher look and a better experience—built to help your existing website do more.",
    items: ["UX and content review", "Modern visual refresh", "Performance improvements"],
  },
  {
    index: "03",
    title: "Web development",
    image: "/images/service-development.svg",
    imageAlt: "Colorful development workspace with code and interface panels",
    body: "Reliable, responsive websites with thoughtful details, clean code and the right technology for your goals.",
    items: ["Custom front-end development", "CMS and e-commerce builds", "Accessibility and quality checks"],
  },
  {
    index: "04",
    title: "Ongoing support",
    image: "/images/service-support.svg",
    imageAlt: "Glowing heart and connected support cards representing ongoing website care",
    body: "A dependable creative and technical partner to keep your website secure, current and moving in the right direction.",
    items: ["Updates and maintenance", "New features and landing pages", "Practical growth guidance"],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container-page">
        <header className="section-head mb-12">
          <p className="eyebrow"><span className="eyebrow-dot" /> What we do</p>
          <h2>Everything your website needs to make a great first impression.</h2>
          <p>
            From the first sketch to launch day and beyond, we bring strategy,
            design and development together under one roof.
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
