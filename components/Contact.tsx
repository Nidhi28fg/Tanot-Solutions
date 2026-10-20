"use client";

import { FormEvent } from "react";
import Image from "next/image";

const whatsappNumber = "918860523651";

export default function Contact() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }
    const data = new FormData(form);
    const message = encodeURIComponent(
      `Hi Guffo Solution, I'd like to discuss a website project.\n\nName: ${data.get("name")}\nWhatsApp number: ${data.get("phone") || "Not provided"}\nCompany: ${data.get("company") || "Not provided"}\nProject type: ${data.get("projectType")}\nTarget timing: ${data.get("timeline")}\nBudget: ${data.get("budget")}\n\nProject details:\n${data.get("message")}`,
    );
    window.location.assign(`https://wa.me/${whatsappNumber}?text=${message}`);
  }

  return (
    <section className="section pt-8" id="contact">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> Start a conversation</p>
          <h2>Tell us what you have in mind.</h2>
          <p>
            Share what you need, when you hope to launch and whether you have
            a budget in mind. We&apos;ll use that context to discuss scope and
            prepare a custom estimate.
          </p>
          <div className="contact-image-wrap">
            <Image
              className="section-image contact-image"
              src="/images/contact-office-photo.jpg"
              alt="Stock photograph of a bright, modern office"
              width={1200}
              height={800}
              sizes="(max-width: 767px) 100vw, 42vw"
            />
            <span className="contact-image-note"><span aria-hidden="true">●</span> Your next idea starts here</span>
          </div>
          <ul className="mt-8 space-y-5 text-sm">
            <li>
              <strong className="block text-ink">Chat with us on WhatsApp</strong>
              <a
                className="mt-1 inline-flex items-center gap-2 text-violet hover:underline"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                +91 88605 23651 <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <strong className="block text-ink">Email</strong>
              <a
                className="mt-1 inline-block text-violet hover:underline"
                href="mailto:teamguffonidhi28@gmail.com"
              >
                teamguffonidhi28@gmail.com
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
              WhatsApp number <span className="font-normal text-muted">(optional)</span>
              <input
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="e.g. +91 98765 43210"
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
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink">
              What do you need?
              <select
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
                name="projectType"
                defaultValue=""
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="New website design and development">New website design and development</option>
                <option value="Website redesign">Website redesign</option>
                <option value="Website development">Website development</option>
                <option value="Ongoing website support">Ongoing website support</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-ink">
              Target timing
              <select
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
                name="timeline"
                defaultValue=""
                required
              >
                <option value="" disabled>Select timing</option>
                <option value="As soon as practical">As soon as practical</option>
                <option value="Within 1–3 months">Within 1–3 months</option>
                <option value="More than 3 months">More than 3 months</option>
                <option value="Flexible / not sure yet">Flexible / not sure yet</option>
              </select>
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium text-ink">
            Budget
            <select
              className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
              name="budget"
              defaultValue=""
              required
            >
              <option value="" disabled>Choose what best describes you</option>
              <option value="I have a budget in mind and would like to discuss it">I have a budget in mind and would like to discuss it</option>
              <option value="I would like help defining a suitable budget">I would like help defining a suitable budget</option>
              <option value="I prefer to discuss budget after scope">I prefer to discuss budget after scope</option>
            </select>
          </label>
          <label className="mt-5 block text-sm font-medium text-ink">
            Tell us about your project
            <textarea
              className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-[15px] outline-none focus:border-violet"
              name="message"
              rows={4}
              placeholder="What are you building or improving? Who is the website for, and what should it help them do?"
              required
            />
          </label>
          <button className="btn btn-cta mt-6 w-full" type="submit">
            Continue to WhatsApp <span aria-hidden="true">↗</span>
          </button>
          <p className="mt-3 text-xs leading-5 text-muted">
            WhatsApp will open with your project details ready. Review the
            message and send it when you&apos;re ready.
          </p>
        </form>
      </div>
    </section>
  );
}
