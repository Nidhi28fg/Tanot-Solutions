"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#proof", label: "Proof" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-paper/92 backdrop-blur-md"
          : "border-transparent bg-ink"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-18">
        <a
          href="#top"
          className={`flex items-center gap-3 font-semibold ${
            scrolled ? "text-ink" : "text-white"
          }`}
          aria-label="Tanot Solutions home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cta font-sans text-sm font-bold text-ink">
            T
          </span>
          <span className="text-[15px] tracking-tight">Tanot Solutions</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={scrolled ? "text-muted hover:text-ink" : "text-white/70 hover:text-white"}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn-cta hidden min-h-10 px-5 text-sm sm:inline-flex">
            Book a session
          </a>
          <button
            type="button"
            className={`flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden ${
              scrolled ? "text-ink" : "text-white"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`block h-0.5 w-5 rounded bg-current transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded bg-current transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-paper px-4 py-6 md:hidden"
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-cta mt-2" onClick={() => setOpen(false)}>
            Book a session
          </a>
        </nav>
      </div>
    </header>
  );
}
