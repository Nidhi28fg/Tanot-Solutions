"use client";

import { useState } from "react";
import Image from "next/image";

const filters = ["All", "E-commerce", "Healthcare", "Hospitality"] as const;

const work = [
  {
    number: "01",
    title: "A digital storefront with a little more soul.",
    type: "E-commerce",
    className: "project-retail",
    image: "/images/portfolio-retail-photo.jpg",
    imageAlt: "A shopper browsing a clothing rack in a boutique",
    mark: "GOOD\nTHINGS",
    label: "Curated goods, considered living",
    detail: "A warm, editorial storefront concept for a lifestyle brand, with product discovery and a clear path to purchase.",
  },
  {
    number: "02",
    title: "A calmer way to find the care you need.",
    type: "Healthcare",
    className: "project-health",
    image: "/images/portfolio-health-photo.jpg",
    imageAlt: "A doctor using a mobile phone in a clinical setting",
    mark: "wellkind",
    label: "Care that meets you where you are.",
    detail: "A welcoming healthcare experience concept focused on clear service information, accessibility and patient confidence.",
  },
  {
    number: "03",
    title: "A stay worth planning your next trip around.",
    type: "Hospitality",
    className: "project-stay",
    image: "/images/portfolio-hospitality-photo.jpg",
    imageAlt: "A resort with a pool and guest lounge beside the water",
    mark: "Casa\nSol",
    label: "A slower kind of escape.",
    detail: "A boutique hospitality concept that brings the destination to life and makes exploring a stay feel effortless.",
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
          <p className="eyebrow"><span className="eyebrow-dot" /> Selected directions</p>
          <h2>Different businesses. Distinctive digital experiences.</h2>
          <p>
            Explore a few creative directions across industries. Each preview
            is a concept—not a client project—and every real website starts
            with your own goals.
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleWork.map((project) => (
            <article key={project.number} className="project-card glass-card">
              <div className={`project-preview ${project.className}`} aria-label={`${project.type} website concept preview`}>
                <Image
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
                <div className="project-browser"><span aria-hidden="true">● ● ●</span><span>brandstudio.com</span><span aria-hidden="true">↗</span></div>
                <div className="project-art">
                  <span className="project-mark">{project.mark.split("\n").map((part) => <span key={part}>{part}</span>)}</span>
                  <span className="project-label">{project.label}</span>
                  <span className="project-graphic" aria-hidden="true" />
                </div>
                <span className="project-tag">Concept direction</span>
              </div>
              <div className="project-info">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.11em] text-violet">{project.type}</p>
                    <h3 className="mt-2 max-w-[22ch] text-xl leading-snug">{project.title}</h3>
                  </div>
                  <span className="pt-1 text-xs font-semibold text-muted">{project.number}</span>
                </div>
                <details className="project-details">
                  <summary>Explore concept <span aria-hidden="true">↗</span></summary>
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
