import Image from "next/image";

const steps = [
  {
    title: "Discovery & strategy",
    body: "We learn about your business, audience, requirements and what the website needs to support.",
  },
  {
    title: "UX/UI design",
    body: "We plan the structure and design page experiences around your brand and visitors.",
  },
  {
    title: "Development",
    body: "We build the agreed experience responsively, using an approach suited to the project.",
  },
  {
    title: "Quality assurance",
    body: "We review the website across key screens and check the agreed functionality before launch.",
  },
  {
    title: "Launch & support",
    body: "We coordinate launch and can discuss ongoing updates or improvements for your site.",
  },
];

export default function Approach() {
  return (
    <section className="section approach-section" id="approach">
      <div className="container-page grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> Our process</p>
          <h2>Know what happens next, from discovery to launch.</h2>
          <p>
            Every project follows a structured process for clarity and
            consistency. We collaborate with you from planning through
            design, development, testing and launch.
          </p>
          <div className="approach-image-wrap">
            <Image
              className="section-image approach-image"
              src="/images/process-team-photo.jpg"
              alt="Stock photograph of colleagues discussing work around a laptop"
              width={1200}
              height={800}
              sizes="(max-width: 1023px) 100vw, 40vw"
            />
            <span className="image-caption">Better work, built together <span aria-hidden="true">✳</span></span>
          </div>
        </header>

        <ol className="process-steps-grid grid gap-6 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="process-card rounded-2xl border border-line bg-paper p-6">
              <span className="text-xs font-semibold text-violet">0{index + 1}</span>
              <h3 className="mt-3 text-xl">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
