import Image from "next/image";

const trustPoints = [
  { mark: "✳", label: "Conversion-focused journeys" },
  { mark: "↗", label: "SEO-aware foundations" },
  { mark: "◇", label: "Responsive by design" },
  { mark: "✓", label: "Custom-built for your goals" },
];

export default function LogoBar() {
  return (
    <section className="trust-strip" aria-label="What you can expect">
      <div className="container-page grid grid-cols-2 gap-3 py-5 md:grid-cols-[1fr_1fr_1fr_1fr_1.5fr]">
        {trustPoints.map((point) => (
          <div className="trust-badge" key={point.label}>
            <span aria-hidden="true">{point.mark}</span>
            <p>{point.label}</p>
          </div>
        ))}
        <Image
          className="trust-image"
          src="/images/global-team-photo.jpg"
          alt="Stock photograph of colleagues collaborating in an office"
          width={1200}
          height={800}
          sizes="(max-width: 767px) 100vw, 30vw"
        />
      </div>
    </section>
  );
}
