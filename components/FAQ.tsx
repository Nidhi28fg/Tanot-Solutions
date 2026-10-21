import Image from "next/image";

const questions = [
  {
    question: "How long does a website take?",
    answer:
      "Timelines depend on the agreed scope, content, features, and feedback cycle. After discussing your project, we will outline a realistic schedule before work begins.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. We plan responsive layouts and check the agreed website experience across key screen sizes.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "We can discuss hosting options and setup guidance that fit your website. Any hosting arrangements are confirmed as part of the project scope.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review your current website and plan a redesign around your brand, audience, and business needs.",
  },
  {
    question: "Do you offer SEO?",
    answer:
      "We can include SEO foundations such as clear page structure, metadata, and technical best practices. Search rankings depend on many factors, so specific results cannot be guaranteed.",
  },
];

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> FAQs</p>
          <h2>Good questions. Clear answers.</h2>
          <p>
            Want to talk through something specific? Tell us a little about your
            project and we&apos;ll take it from there.
          </p>
          <a className="faq-contact-link" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a>
          <div className="faq-image-wrap">
            <Image
              className="section-image faq-image"
              src="/images/faq-team-photo.jpg"
              alt="Stock photograph of colleagues discussing ideas in a workspace"
              width={1200}
              height={800}
              sizes="(max-width: 1023px) 100vw, 32vw"
            />
          </div>
        </header>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
