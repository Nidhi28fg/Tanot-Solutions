"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import styles from "./proof.module.css";

const filters = ["All", "Fintech", "E-commerce", "Healthcare", "Hospitality"] as const;

const liveWork = {
  number: "01",
  title: "Coin2CashX crypto exchange",
  type: "Fintech",
  image: "/images/portfolio-coin2cashx.png",
  imageAlt: "Coin2CashX live website homepage for buying and selling USDT in India",
  goal: "Give traders a clear, trustworthy path to buy and sell USDT at live rates.",
  href: "https://coin2cashx.com/",
  urlLabel: "coin2cashx.com",
  tag: "Live website",
};

const concepts = [
  {
    number: "02",
    title: "E-commerce product discovery",
    type: "E-commerce",
    image: "/images/portfolio-retail-photo.jpg",
    imageAlt: "E-commerce website concept with product browsing and shopping paths",
    goal: "Make product discovery and key shopping paths easy to explore.",
    detail:
      "Homepage, category, and product paths designed for clearer browsing and a smoother path to purchase.",
    tag: "Concept preview",
  },
  {
    number: "03",
    title: "Healthcare service clarity",
    type: "Healthcare",
    image: "/images/portfolio-health-photo.jpg",
    imageAlt: "Healthcare website concept focused on clear services and next steps",
    goal: "Make healthcare services and next steps easier to understand.",
    detail:
      "Service explanations and enquiry journeys designed for trust, calm reading, and clear next steps.",
    tag: "Concept preview",
  },
  {
    number: "04",
    title: "Hospitality stay journey",
    type: "Hospitality",
    image: "/images/portfolio-hospitality-photo.jpg",
    imageAlt: "Hospitality website concept with destination-inspired stay journey",
    goal: "Bring destination details and stay options into a clearer journey.",
    detail:
      "Destination storytelling and stay options arranged into a calmer browsing flow that supports booking enquiries.",
    tag: "Concept preview",
  },
];

export default function Proof() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const showLive = activeFilter === "All" || activeFilter === liveWork.type;
  const visibleConcepts =
    activeFilter === "All"
      ? concepts
      : concepts.filter((project) => project.type === activeFilter);

  return (
    <section className="section portfolio-section" id="proof">
      <div className="container-page">
        <SectionHead
          index="04"
          kicker="Selected work"
          title="Real projects and concept directions."
          support="Live client work first, then sample directions for e-commerce, healthcare, and hospitality."
          actionHref="#contact"
          actionLabel="Discuss a similar direction"
        />

        <div className="portfolio-filters mb-7" role="group" aria-label="Filter work by industry">
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

        <div className={styles.grid}>
          {showLive ? (
            <a
              className={styles.showcase}
              href={liveWork.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.browser}>
                <div className={styles.browserBar} aria-hidden="true">
                  <span className={styles.dots}>
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className={styles.url}>{liveWork.urlLabel}</span>
                </div>
                <figure className={styles.shot}>
                  <Image
                    className={styles.shotImage}
                    src={liveWork.image}
                    alt={liveWork.imageAlt}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 899px) 100vw, 70vw"
                  />
                  <figcaption className={styles.badge}>{liveWork.tag}</figcaption>
                </figure>
              </div>
              <div className={styles.meta}>
                <div className={styles.metaTop}>
                  <div>
                    <p className={styles.kicker}>{liveWork.type}</p>
                    <h3>{liveWork.title}</h3>
                  </div>
                  <span className={styles.number}>{liveWork.number}</span>
                </div>
                <p className={styles.goal}>
                  <strong>Design goal:</strong> {liveWork.goal}
                </p>
                <span className={styles.cta}>
                  Visit live site <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ) : null}

          {visibleConcepts.length > 0 ? (
            <div className={styles.concepts}>
              {visibleConcepts.map((project) => (
                <article key={project.number} className={styles.conceptCard}>
                  <figure className={styles.conceptMedia}>
                    <Image
                      className={styles.conceptImage}
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 899px) 100vw, 33vw"
                    />
                    <figcaption className={styles.conceptTag}>{project.tag}</figcaption>
                  </figure>
                  <div className={styles.conceptBody}>
                    <p className={styles.kicker}>{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>
                      <strong className="text-ink">Design goal:</strong> {project.goal}
                    </p>
                    <details className={styles.notes}>
                      <summary>
                        Design notes <span aria-hidden="true">↗</span>
                      </summary>
                      <p>{project.detail}</p>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
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
