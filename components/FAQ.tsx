import Image from "next/image";

const questions = [
  {
    question: "What kinds of websites do you create?",
    answer:
      "We design, redesign and develop websites for businesses across industries. We shape the scope around your audience, requirements and goals.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review what is working, identify friction in the experience, and create a refreshed design and build plan that fits your brand and business needs.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. Guffo Solution works with customers in India and internationally, collaborating remotely across time zones.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Timing depends on the scope, content, features and feedback cycle. After understanding your project, we will outline a realistic schedule before work begins.",
  },
  {
    question: "Can you help after the website launches?",
    answer:
      "Yes. Ongoing support can include maintenance, updates, new pages and future improvements. We can discuss the right level of support for your team.",
  },
  {
    question: "How is website project pricing determined?",
    answer:
      "Every project is unique. Pricing depends on its scope, requirements and timeline. After discussing what you need, we can prepare a custom proposal.",
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
