import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="container-page flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <Link href="/#top" className="flex items-center gap-3 font-semibold text-ink">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-[0_0_18px_rgba(139,92,246,0.22)]">
            <Image src="/guffo-mark.png" alt="" fill sizes="36px" />
          </span>
          <span className="text-[15px] tracking-tight">Guffo Solution</span>
        </Link>
        <p className="text-sm text-muted">Thoughtful websites. Built to move you forward.</p>
        <p className="text-sm text-muted">© 2026 Guffo Solution. All rights reserved.</p>
      </div>
      
    </footer>
  );
}
