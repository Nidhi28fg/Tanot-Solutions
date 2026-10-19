"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "What we do" },
  { href: "#approach", label: "How we work" },
  { href: "#proof", label: "Who we help" },
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
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur-md transition-colors ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-18">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 whitespace-nowrap font-semibold text-ink"
          aria-label="Tanot Solutions home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet font-serif text-lg text-white">
            t
          </span>
          <span className="text-[15px] tracking-tight">Tanot Solutions</span>
        </a>

        <nav className="hidden items-center gap-5 whitespace-nowrap text-sm font-medium lg:flex lg:gap-7" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-violet"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn-cta hidden min-h-10 whitespace-nowrap px-5 text-sm lg:inline-flex">
            Start a project
          </a>
          <button
            type="button"
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-lg text-ink lg:hidden"
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
        className="border-t border-line bg-paper px-4 py-6 lg:hidden"
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
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
