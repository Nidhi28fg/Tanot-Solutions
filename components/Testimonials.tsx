const prompts = [
  "Add an approved client quote about the collaboration and creative process.",
  "Add a client-approved note about the impact of their new website.",
  "Add a client quote for a website redesign or development project.",
];

export default function Testimonials() {
  return (
    <section className="section testimonial-section" aria-labelledby="testimonials-title">
      <div className="container-page">
        <header className="section-head mb-10">
          <p className="eyebrow"><span className="eyebrow-dot" /> Client stories</p>
          <h2 id="testimonials-title">Good work is a conversation.</h2>
          <p>
            We don&apos;t publish invented reviews. These testimonial slots are
            ready for real client quotes once they&apos;re approved to share.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {prompts.map((prompt, index) => (
            <article className="testimonial-slot glass-card" key={prompt}>
              <span className="testimonial-mark" aria-hidden="true">“</span>
              <p>{prompt}</p>
              <span className="testimonial-attribution">Approved client quote · {String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
