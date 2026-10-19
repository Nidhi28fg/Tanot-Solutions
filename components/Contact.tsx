"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("Please complete the required fields.");
      return;
    }
    setStatus("Received. We will reply within one business day.");
    form.reset();
  }

  return (
    <section className="section pt-8" id="contact">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        <header className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Tell us where you need to be found.</h2>
          <p>
            Share your market and current stack. We reply within one business
            day with whether we are the right fit — and what a first sprint
            would look like.
          </p>
          <ul className="mt-8 space-y-5 text-sm">
            <li>
              <strong className="block text-ink">Email</strong>
              <a className="mt-1 inline-block text-teal hover:underline" href="mailto:hello@tanot.solutions">
                hello@tanot.solutions
              </a>
            </li>
            <li>
              <strong className="block text-ink">Typical engagement</strong>
              <span className="mt-1 block text-muted">8-week foundation, then monthly ops</span>
            </li>
          </ul>
        </header>

        <form className="rounded-2xl border border-line bg-paper-2 p-6 shadow-card md:p-8" onSubmit={onSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">
              Full name
              <input
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-teal"
                type="text"
                name="name"
                autoComplete="name"
                required
              />
            </label>
            <label className="block text-sm font-medium text-ink">
              Work email
              <input
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-teal"
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
              className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-teal"
              type="text"
              name="company"
              autoComplete="organization"
            />
          </label>
          <label className="mt-5 block text-sm font-medium text-ink">
            What should AI search say about you?
            <textarea
              className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-[15px] outline-none focus:border-teal"
              name="message"
              rows={4}
              required
            />
          </label>
          <button className="btn btn-cta mt-6 w-full" type="submit">
            Request a strategy session
          </button>
          <p className="mt-3 min-h-6 text-sm text-teal" role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
