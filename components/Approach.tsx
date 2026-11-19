import SectionHead from "@/components/SectionHead";

const steps = [
  {
    title: "Discovery call",
    body: "We learn about your business, audience, and website goals.",
  },
  {
    title: "Planning & strategy",
    body: "We map the project scope, content, and priorities together.",
  },
  {
    title: "UI/UX design",
    body: "We shape a clear, considered experience around your customers.",
  },
  {
    title: "Development",
    body: "We build the approved website to work across screen sizes.",
  },
  {
    title: "Testing",
    body: "We review the agreed pages and functionality before launch.",
  },
  {
    title: "Launch",
    body: "We prepare the website to go live and hand over the finished work.",
  },
];

export default function Approach() {
  return (
    <section className="section approach-section" id="approach">
      <div className="container-page">
        <SectionHead
          index="03"
          kicker="Our process"
          title="From first call to launch, without the fog."
          support="A clear series of steps keeps the project moving and gives you space to review the work along the way."
        />

        <ol className="process-steps-grid">
          {steps.map((step, index) => (
            <li key={step.title} className="process-card">
              <span className="process-step-icon" aria-hidden="true">
                {["◌", "⌘", "✳", "‹/›", "✓", "↗"][index]}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
