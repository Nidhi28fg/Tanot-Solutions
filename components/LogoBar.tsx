import Image from "next/image";

const trustPoints = [
  { mark: "✳", label: "Every industry" },
  { mark: "↗", label: "India & worldwide" },
  { mark: "◇", label: "Design to development" },
  { mark: "✓", label: "Built around your goals" },
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
          src="/images/industries-world.svg"
          alt="Colorful globe illustration representing customers across India and around the world"
          width={720}
          height={240}
          sizes="(max-width: 767px) 100vw, 30vw"
        />
      </div>
    </section>
  );
}
