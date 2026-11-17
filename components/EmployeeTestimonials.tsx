import Link from "next/link";
import SectionHead from "@/components/SectionHead";

const trustSignals = [
  {
    title: "Scope before we start",
    description:
      "You get a clear proposal covering pages, features, timeline, and pricing before any build work begins.",
  },
  {
    title: "Milestone updates",
    description:
      "Design and development move in agreed stages, so you can review progress and give feedback at the right time.",
  },
  {
    title: "Handover & support",
    description:
      "Every project includes a launch handover. Ongoing updates and care are available when you need them.",
  },
];

export default function EmployeeTestimonials() {
  return (
    <section className="section testimonial-section" aria-labelledby="trust-signals">
      <div className="container-page">
        <SectionHead
          index="07"
          kicker="How we work with you"
          title="Clear process. No guesswork."
          titleId="trust-signals"
          support="Before testimonials go live, here is the working rhythm you can count on from first call through handover."
          actionHref="#contact"
          actionLabel="Get free consultation"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {trustSignals.map((signal) => (
            <article key={signal.title} className="testimonial-slot glass-card border border-line trust-signal-card">
              <span className="testimonial-mark" aria-hidden="true">
                ✓
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{signal.title}</h3>
              <p className="trust-signal-copy">{signal.description}</p>
            </article>
          ))}
        </div>
        <div className="portfolio-followup">
          <p>
            Prefer to talk through your project first? Book a free consultation
            and we&apos;ll recommend a realistic scope.
          </p>
          <Link className="portfolio-contact-link" href="#contact">
            Start the conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
