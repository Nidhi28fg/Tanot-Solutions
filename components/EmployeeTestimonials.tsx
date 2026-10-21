

const clientTestimonials = [
  {
    quote:
      "The entire process was smooth and professional. Communication was clear throughout and the final website matched our vision perfectly.",
    name: "Rahul Sharma",
    role: "Founder, ABC Healthcare",
  },
  {
    quote:
      "We appreciated the attention to detail and collaborative approach. The website feels modern, fast, and easy to manage.",
    name: "Neha Kapoor",
    role: "Director, Bright Education",
  },
  {
    quote:
      "Our online presence feels much stronger now. The project was delivered with great professionalism.",
    name: "Amit Verma",
    role: "Owner, AV Consulting",
  },
  {
    quote:
      "Excellent communication, clear timelines, and a website that truly reflects our business.",
    name: "Priya Singh",
    role: "Marketing Manager, Growth Ventures",
  },
];

export default function EmployeeTestimonials() {
  return (
    <section className="section testimonial-section" aria-labelledby="employee-feedback">
      <div className="container-page">
        <header className="section-head mb-10">
          <p className="eyebrow"><span className="eyebrow-dot" /> Our team</p>
          <h2 id="employee-feedback">Client feedback</h2>
          <p>
            We&apos;re gathering client-approved feedback. These spaces are
            placeholders—not testimonials—and will be updated with real quotes
            and names only after approval.
          </p>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clientTestimonials.map((slot) => (
            <article
              className="testimonial-slot glass-card border border-line"
              key={slot.name}
              aria-label={`Client feedback placeholder ${slot.name}`}
            >
              <span className="testimonial-mark" aria-hidden="true">“</span>
              <p>{slot.quote}</p>
              <span className="testimonial-attribution">
                {slot.name} &amp; {slot.role}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
