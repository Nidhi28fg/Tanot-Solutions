"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";

const filters = ["All", "E-commerce", "Healthcare", "Hospitality"] as const;

const work = [
  {
    number: "01",
    title: "E-commerce product discovery",
    type: "E-commerce",
    className: "project-retail",
    image: "/images/concept-commerce-preview.svg",
    imageAlt: "Original demo e-commerce website concept shown in a desktop browser frame",
    goal: "Make product discovery and key shopping paths easy to explore.",
    detail:
      "Homepage, category, and product paths designed for clearer browsing. This is a concept direction—not a published client site.",
  },
  {
    number: "02",
    title: "Healthcare service clarity",
    type: "Healthcare",
    className: "project-health",
    image: "/images/concept-healthcare-preview.svg",
    imageAlt: "Original demo healthcare website concept shown in a desktop browser frame",
    goal: "Make healthcare services and next steps easier to understand.",
    detail:
      "Service explanations and enquiry journeys designed for trust and clarity. This is a concept direction—not a published client site.",
  },
  {
    number: "03",
    title: "Hospitality stay journey",
    type: "Hospitality",
    className: "project-stay",
    image: "/images/portfolio-hospitality.svg",
    imageAlt: "Original hospitality concept visual showing a destination-inspired website direction",
    goal: "Bring destination details and stay options into a clearer journey.",
    detail:
      "Destination storytelling and stay options arranged into a calmer browsing flow. This is a concept direction—not a published client site.",
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
        <SectionHead
          index="04"
          kicker="Design portfolio"
          title="Concepts shaped for real industries."
          support="Interactive concept previews that show our approach. Live client work will appear here once we have permission to share it."
          actionHref="#contact"
          actionLabel="Discuss a similar direction"
        />

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
            <article
              key={project.number}
              className={`project-card glass-card${project.number === "01" ? " project-card-featured" : ""}`}
            >
              <figure className={`project-preview ${project.className}`}>
                <Image
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
                <figcaption className="project-tag">Concept preview · design sample</figcaption>
              </figure>
              <div className="project-info">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.11em] text-orange">
                      {project.type}
                    </p>
                    <h3 className="mt-2 max-w-[22ch] text-xl leading-snug">{project.title}</h3>
                  </div>
                  <span className="pt-1 text-xs font-semibold text-muted">{project.number}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">
                  <strong className="font-semibold text-ink">Design goal:</strong> {project.goal}
                </p>
                <details className="project-details">
                  <summary>
                    Design notes <span aria-hidden="true">↗</span>
                  </summary>
                  <p>{project.detail}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
        <div className="portfolio-followup">
          <p>
            Looking for examples relevant to your brief? Tell us what you&apos;re
            planning and we can discuss the right direction.
          </p>
          <Link className="portfolio-contact-link" href="#contact">
            Request a free consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
