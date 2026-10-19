import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="container-page flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="flex items-center gap-3 font-semibold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet font-serif text-lg text-white">
            t
          </span>
          <span className="text-[15px] tracking-tight">Tanot Solutions</span>
        </a>
        <p className="text-sm text-muted">Thoughtful websites. Built to move you forward.</p>
        <p className="text-sm text-muted">© 2026 Tanot Solutions. All rights reserved.</p>
      </div>
      <Image
        className="footer-image"
        src="/images/industries-world.svg"
        alt=""
        aria-hidden="true"
        width={720}
        height={240}
      />
    </footer>
  );
}
