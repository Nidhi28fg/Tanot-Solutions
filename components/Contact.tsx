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
      `Hi Guffo Solution, I'd like a free website recommendation.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness type: ${data.get("businessType")}\nWebsite: ${data.get("website") || "Not provided"}\nWhatsApp number: ${data.get("phone") || "Not provided"}\nCompany: ${data.get("company") || "Not provided"}\nWhat I need: ${data.get("projectType") || "Not specified"}\n\nAnything else to know:\n${data.get("message") || "Not provided"}`,
    );
    window.location.assign(`https://wa.me/${whatsappNumber}?text=${message}`);
  }

  return (
    <section className="section pt-8" id="contact">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> Free initial consultation</p>
          <h2>Get a free website recommendation.</h2>
          <p>
            Tell us a little about your business. We&apos;ll start a
            no-obligation conversation about a useful next step for your
            website.
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
              Name
              <input
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
                type="text"
                name="name"
                autoComplete="name"
                required
              />
            </label>
            <label className="block text-sm font-medium text-ink">
              Email
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
            What type of business do you run?
            <select
              className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
              name="businessType"
              defaultValue=""
              required
            >
              <option value="" disabled>Select a business type</option>
              <option value="Startup">Startup</option>
              <option value="Professional services">Professional services</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Retail or e-commerce">Retail or e-commerce</option>
              <option value="Education">Education</option>
              <option value="Real estate">Real estate</option>
              <option value="Other / still deciding">Other / still deciding</option>
            </select>
          </label>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
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
              Current website <span className="font-normal text-muted">(optional)</span>
              <input
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
                type="url"
                name="website"
                placeholder="https://"
              />
            </label>
            <label className="block text-sm font-medium text-ink">
              What do you need? <span className="font-normal text-muted">(optional)</span>
              <select
                className="mt-2 min-h-12 w-full rounded-lg border border-line bg-paper px-4 text-[15px] outline-none focus:border-violet"
                name="projectType"
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                <option value="New website design and development">New website design and development</option>
                <option value="Website redesign">Website redesign</option>
                <option value="Website development">Website development</option>
                <option value="Ongoing website support">Ongoing website support</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium text-ink">
            Anything else you&apos;d like us to know? <span className="font-normal text-muted">(optional)</span>
            <textarea
              className="mt-2 w-full rounded-lg border border-line bg-paper px-4 py-3 text-[15px] outline-none focus:border-violet"
              name="message"
              rows={4}
              placeholder="What are you building or improving? Who is the website for, and what should it help them do?"
            />
          </label>
          <button className="btn btn-cta mt-6 w-full" type="submit">
            Get free website advice <span aria-hidden="true">↗</span>
          </button>
          <p className="mt-3 text-xs leading-5 text-muted">
            WhatsApp opens with your details ready. Review the message and
            send it when you&apos;re ready—nothing is sent automatically.
          </p>
        </form>
      </div>
    </section>
  );
}
