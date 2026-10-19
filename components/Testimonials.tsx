import Image from "next/image";

const prompts = [
  {
    text: "Add an approved client quote about the collaboration and creative process.",
    image: "/images/client-workspace-photo.jpg",
    alt: "A team working together around a shared laptop",
  },
  {
    text: "Add a client-approved note about the impact of their new website.",
    image: "/images/client-team-photo.jpg",
    alt: "Colleagues sharing ideas around a laptop",
  },
  {
    text: "Add a client quote for a website redesign or development project.",
    image: "/images/global-team-photo.jpg",
    alt: "A team collaborating in a modern office",
  },
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
          {prompts.map((item, index) => (
            <article className="testimonial-slot glass-card" key={item.text}>
              <Image
                className="testimonial-image"
                src={item.image}
                alt={item.alt}
                width={720}
                height={400}
                sizes="(max-width: 767px) 100vw, 33vw"
              />
              <span className="testimonial-mark" aria-hidden="true">“</span>
              <p>{item.text}</p>
              <span className="testimonial-attribution">Approved client quote · {String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
