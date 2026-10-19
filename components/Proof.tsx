"use client";

import { useState } from "react";
import Image from "next/image";

const filters = ["All", "E-commerce", "Healthcare", "Hospitality"] as const;

const work = [
  {
    number: "01",
    title: "Product discovery concept",
    type: "E-commerce",
    className: "project-retail",
    image: "/images/portfolio-retail-photo.jpg",
    imageAlt: "Stock photograph of a shopper browsing a clothing rack",
    detail: "Illustrative e-commerce direction exploring product discovery and clear paths through a storefront. This is a concept, not a client project.",
  },
  {
    number: "02",
    title: "Healthcare information concept",
    type: "Healthcare",
    className: "project-health",
    image: "/images/portfolio-health-photo.jpg",
    imageAlt: "Stock photograph of a doctor using a mobile phone",
    detail: "Illustrative healthcare direction exploring clear service information and accessible page structure. This is a concept, not a client project.",
  },
  {
    number: "03",
    title: "Hospitality discovery concept",
    type: "Hospitality",
    className: "project-stay",
    image: "/images/portfolio-hospitality-photo.jpg",
    imageAlt: "Stock photograph of a resort with a pool beside the water",
    detail: "Illustrative hospitality direction exploring destination imagery and stay information. This is a concept, not a client project.",
  },
];

export default function Proof() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visibleWork =
    activeFilter === "All"
      ? work
      : work.filter((project) => project.type === activeFilter);

  return (
    <section className="section portfolio-section" id="proof">
      <div className="container-page">
        <header className="section-head mb-10">
          <p className="eyebrow"><span className="eyebrow-dot" /> Selected work</p>
          <h2>Explore design directions across different kinds of websites.</h2>
          <p>
            Examples below showcase our design approach, visual direction,
            and development capabilities. These are concepts, not client
            projects. Detailed performance results are not currently published.
          </p>
        </header>

        <div className="portfolio-filters mb-7" role="group" aria-label="Filter concepts by industry">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`portfolio-filter ${activeFilter === filter ? "is-active" : ""}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleWork.map((project) => (
            <article key={project.number} className={`project-card glass-card${project.number === "01" ? " project-card-featured" : ""}`}>
              <figure className={`project-preview ${project.className}`}>
                <Image
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
                <figcaption className="project-tag">Concept visual · not client work</figcaption>
              </figure>
              <div className="project-info">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.11em] text-violet">{project.type}</p>
                    <h3 className="mt-2 max-w-[22ch] text-xl leading-snug">{project.title}</h3>
                  </div>
                  <span className="pt-1 text-xs font-semibold text-muted">{project.number}</span>
                </div>
                <details className="project-details">
                  <summary>About this concept <span aria-hidden="true">↗</span></summary>
                  <p>{project.detail}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
