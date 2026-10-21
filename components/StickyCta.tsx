"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(window.scrollY > 480 && !entry.isIntersecting);
      },
      { threshold: 0.08 },
    );
    observer.observe(contact);

    const handleScroll = () => {
      if (window.scrollY <= 480) {
        setVisible(false);
      } else {
        const bounds = contact.getBoundingClientRect();
        setVisible(bounds.top > window.innerHeight || bounds.bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside className={`sticky-cta ${visible ? "is-visible" : ""}`} aria-label="Start a website project" aria-hidden={!visible}>
      <span className="sticky-cta-copy">Need a website? <span>Get free project advice.</span></span>
      <a
        href="https://wa.me/918860523651?text=Hi%20Guffo%20Solution%2C%20I%27d%20like%20free%20website%20advice."
        target="_blank"
        rel="noreferrer"
        tabIndex={visible ? 0 : -1}
      >
        WhatsApp <span aria-hidden="true">↗</span>
      </a>
      <a
        className="sticky-cta-call"
        href="tel:+918860523651"
        tabIndex={visible ? 0 : -1}
      >
        Call <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}
