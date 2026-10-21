

export default function EmployeeTestimonials() {
  return (
    <section className="section testimonial-section" aria-labelledby="employee-feedback">
      <div className="container-page">
        <header className="section-head mb-10">
          <p className="eyebrow"><span className="eyebrow-dot" /> Client feedback</p>
          <h2 id="employee-feedback">What our clients say.</h2>
          <p>
            We&apos;re gathering client-approved feedback. We&apos;ll share
            real client stories here once their quotes and names are approved.
          </p>
        </header>
        <div className="testimonial-slot glass-card border border-line">
          <span className="testimonial-mark" aria-hidden="true">“</span>
          <p>Real client feedback will appear here—with permission, and in their own words.</p>
          <span className="testimonial-attribution">Client stories · Coming soon</span>
        </div>
      </div>
    </section>
  );
}
