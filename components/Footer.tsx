import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
        <div>
          <Link href="/#top" className="flex items-center gap-3 font-semibold text-ink">
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-[0_0_18px_rgba(139,92,246,0.22)]">
              <Image src="/guffo-mark.png" alt="" fill sizes="36px" />
            </span>
            <span className="text-[15px] tracking-tight">Guffo Solution</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            Thoughtful websites. Built to move your business forward.
          </p>
        </div>
        <div className="grid content-start gap-2 text-sm">
          <h2 className="mb-1 text-sm font-semibold text-ink">Let&apos;s talk about your project</h2>
          <a className="text-violet hover:underline" href="https://wa.me/918860523651" target="_blank" rel="noreferrer">
            Chat on WhatsApp: +91 88605 23651
          </a>
          <a className="text-violet hover:underline" href="mailto:teamguffonidhi28@gmail.com">teamguffonidhi28@gmail.com</a>
          <span className="text-muted">Based in India · Working worldwide</span>
          <Link className="btn btn-cta mt-2 w-fit" href="/#contact">
            Request a free consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <p className="text-sm text-muted md:text-right">© 2026 Guffo Solution. All rights reserved.</p>
      </div>
      
    </footer>
  );
}
