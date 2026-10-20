"use client";

import { useState } from "react";
import styles from "../app/services/custom-website/custom-website.module.css";

const questions = [
  {
    question: "How long does a custom website take?",
    answer:
      "Timelines depend on the agreed scope, content, features and feedback cycle. Once we understand your requirements, we will outline a realistic schedule before work begins.",
  },
  {
    question: "How do you estimate the cost?",
    answer:
      "We prepare a custom proposal based on your project scope, requirements and timeline. Share what you have in mind and we can discuss the right approach before estimating.",
  },
  {
    question: "Can you connect my website to a CMS or other tools?",
    answer:
      "We can discuss CMS, CRM, e-commerce and analytics integrations as part of discovery. The right tools depend on your workflows and project requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Responsive design and checks across key screen sizes are part of the custom design and development process.",
  },
  {
    question: "Can you help after launch?",
    answer:
      "Ongoing support can include maintenance, updates, new pages and future improvements. We can discuss what level of support makes sense for your team.",
  },
];

export default function CustomWebsiteFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `custom-faq-answer-${index}`;

        return (
          <article className="faq-item" key={item.question}>
            <h3>
              <button
                type="button"
                className={styles.faqTrigger}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className={styles.faqChevron} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="m5 7.5 5 5 5-5" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={answerId}
              className={styles.faqAnswer}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              <div className={styles.faqAnswerInner}>
                <p>{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
