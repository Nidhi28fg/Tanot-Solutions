"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  {
    label: "Services",
    children: [
      { href: "/#services", label: "All services" },
      { href: "/services/custom-website", label: "Custom Website" },
    ],
  },
  { href: "/#approach", label: "How we work" },
  { href: "/#proof", label: "Selected work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="container-page pt-3">
        <div className="glass-nav flex h-16 items-center justify-between gap-4 rounded-2xl px-4 md:h-[4.5rem] md:rounded-full md:px-6">
          <Link
            href="/#top"
            className="flex shrink-0 items-center gap-3 whitespace-nowrap font-semibold text-ink"
            aria-label="Tanot Solutions home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet font-serif text-lg text-white">
              t
            </span>
            <span className="text-[15px] tracking-tight">Tanot Solutions</span>
          </Link>

          <nav className="hidden items-center gap-5 whitespace-nowrap text-sm font-medium lg:flex lg:gap-7" aria-label="Primary">
            {links.map((link) => (
              link.children ? (
                <details key={link.label} className="group relative">
                  <summary className="flex cursor-pointer list-none items-center gap-1 text-muted transition-colors hover:text-violet [&::-webkit-details-marker]:hidden">
                    {link.label}
                    <span aria-hidden="true" className="text-[10px] transition-transform group-open:rotate-180">▾</span>
                  </summary>
                  <div className="absolute left-0 top-full z-50 min-w-48 pt-3">
                    <div className="mobile-glass-nav rounded-xl border border-line p-2 shadow-card">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-ink transition-colors hover:bg-paper-2 hover:text-violet"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted transition-colors hover:text-violet"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/#contact" className="btn btn-cta hidden min-h-10 whitespace-nowrap px-5 text-sm lg:inline-flex">
              Request a quote
            </Link>
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
          className="mobile-glass-nav mt-2 rounded-2xl px-4 py-5 lg:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {links.map((link) => (
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-3 text-base font-semibold text-ink">{link.label}</p>
                  <div className="ml-3 flex flex-col border-l border-line pl-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link href="/#contact" className="btn btn-cta mt-2" onClick={() => setOpen(false)}>
              Request a quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
