"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Website project enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "Not provided"}\n\nProject details:\n${data.get("message")}`,
    );
    window.location.href = `mailto:hello@tanot.solutions?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with your project details ready to send.");
  }

  return (
    <section className="section pt-8" id="contact">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> Start a conversation</p>
          <h2>Tell us what you have in mind.</h2>
          <p>
            A new website, a redesign or an idea that needs a digital home—we
            would love to hear about it. Share a few details and let&apos;s take
            it from there.
          </p>
          <div className="contact-image-wrap">
            <Image
              className="section-image contact-image"
              src="/images/contact-project.svg"
              alt="A colorful project enquiry form illustration ready for your next website idea"
              width={720}
              height={420}
              sizes="(max-width: 767px) 100vw, 42vw"
            />
            <span className="contact-image-note"><span aria-hidden="true">●</span> Your next idea starts here</span>
          </div>
          <ul className="mt-8 space-y-5 text-sm">
            <li>
              <strong className="block text-ink">Email</strong>
              <a className="mt-1 inline-block text-violet hover:underline" href="mailto:hello@tanot.solutions">
                hello@tanot.solutions
              </a>
            </li>
            <li>
              <strong className="block text-ink">Working worldwide</strong>
              <span className="mt-1 block text-muted">Based in India · Collaborating across time zones</span>
            </li>
          </ul>
        </header>

        <form className="contact-glass-card glass-card rounded-2xl border border-line p-6 shadow-card md:p-8" onSubmit={onSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">
              Full name
              <input
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
                type="text"
                name="name"
                autoComplete="name"
                required
              />
            </label>
            <label className="block text-sm font-medium text-ink">
              Work email
              <input
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium text-ink">
            Company
            <input
              className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
              type="text"
              name="company"
              autoComplete="organization"
            />
          </label>
          <label className="mt-5 block text-sm font-medium text-ink">
            Tell us about your project
            <textarea
              className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-[15px] outline-none focus:border-violet"
              name="message"
              rows={4}
              required
            />
          </label>
          <button className="btn btn-cta mt-6 w-full" type="submit">
            Send your project enquiry <span aria-hidden="true">↗</span>
          </button>
          <p className="mt-3 min-h-6 text-sm text-violet" role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
