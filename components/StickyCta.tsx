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
      <span className="sticky-cta-copy">Have a website in mind? <span>Let&apos;s make it happen.</span></span>
      <a href="#contact" tabIndex={visible ? 0 : -1}>
        Start a project <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}
