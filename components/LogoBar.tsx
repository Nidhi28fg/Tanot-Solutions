const trustPoints = [
  { value: "SEO", label: "Conscious development" },
  { value: "Mobile-first", label: "Responsive by design" },
  { value: "Custom", label: "Design & development" },
  { value: "Strategy", label: "Built around your goals" },
];

export default function LogoBar() {
  return (
    <section className="trust-strip" aria-label="What you can expect">
      <div className="container-page grid grid-cols-2 gap-3 py-5 md:grid-cols-4">
        {trustPoints.map((point) => (
          <div className="trust-badge trust-stat" key={point.label}>
            <strong className="trust-stat-value">{point.value}</strong>
            <p>{point.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
