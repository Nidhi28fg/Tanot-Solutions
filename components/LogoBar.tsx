const trustPoints = [
  { mark: "✳", label: "Every industry" },
  { mark: "↗", label: "India & worldwide" },
  { mark: "◇", label: "Design to development" },
  { mark: "✓", label: "Built around your goals" },
];

export default function LogoBar() {
  return (
    <section className="trust-strip" aria-label="What you can expect">
      <div className="container-page grid grid-cols-2 gap-3 py-5 md:grid-cols-4">
        {trustPoints.map((point) => (
          <div className="trust-badge" key={point.label}>
            <span aria-hidden="true">{point.mark}</span>
            <p>{point.label}</p>
          </div>
          ))}
      </div>
    </section>
  );
}
