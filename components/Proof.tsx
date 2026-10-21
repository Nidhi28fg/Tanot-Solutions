"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const filters = ["All", "E-commerce", "Healthcare", "Hospitality"] as const;

const work = [
  {
    number: "01",
    title: "E-commerce design exploration",
    type: "E-commerce",
    className: "project-retail",
    image: "/images/concept-commerce-preview.svg",
    imageAlt: "Original demo e-commerce website concept shown in a desktop browser frame",
    goal: "Make product discovery and key shopping paths easy to explore.",
    detail: "Designed to make product discovery and key shopping paths easier to explore. This is a concept direction, not a measured client result.",
  },
  {
    number: "02",
    title: "Healthcare website exploration",
    type: "Healthcare",
    className: "project-health",
    image: "/images/concept-healthcare-preview.svg",
    imageAlt: "Original demo healthcare website concept shown in a desktop browser frame",
    goal: "Make healthcare services and next steps easier to understand.",
    detail: "Designed to make healthcare services and next steps easier to understand. This is a concept direction, not a measured client result.",
  },
  {
    number: "03",
    title: "Hospitality website exploration",
    type: "Hospitality",
    className: "project-stay",
    image: "/images/portfolio-hospitality.svg",
    imageAlt: "Original hospitality concept visual showing a destination-inspired website direction",
    goal: "Bring destination details and stay options into a clearer journey.",
    detail: "Designed to bring destination information and stay options into a clear browsing journey. This is a concept direction, not a measured client result.",
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
          <p className="eyebrow"><span className="eyebrow-dot" /> Selected concepts</p>
          <h2>Recent project concepts.</h2>
          <p>
            Explore original demo website concepts demonstrating our design
            approach. These are illustrative previews with fictional content,
            not published client projects or performance case studies.
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

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                <figcaption className="project-tag">Demo concept · not client work</figcaption>
              </figure>
              <div className="project-info">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.11em] text-violet">{project.type}</p>
                    <h3 className="mt-2 max-w-[22ch] text-xl leading-snug">{project.title}</h3>
                  </div>
                  <span className="pt-1 text-xs font-semibold text-muted">{project.number}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">
                  <strong className="font-semibold text-ink">Design goal (concept):</strong>{" "}
                  {project.goal}
                </p>
                <details className="project-details">
                  <summary>Design intent <span aria-hidden="true">↗</span></summary>
                  <p>{project.detail}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
        <div className="portfolio-followup">
          <p>
            Looking for examples relevant to your brief? Tell us what you&apos;re
            planning and we can discuss the right direction for your project.
          </p>
          <Link className="portfolio-contact-link" href="#contact">
            Discuss your project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
