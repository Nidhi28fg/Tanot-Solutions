const steps = [
  {
    title: "Get to know you",
    body: "We learn about your business, your customers and what success should look like.",
  },
  {
    title: "Plan with purpose",
    body: "Together, we shape the right direction, site structure and a clear project plan.",
  },
  {
    title: "Design & build",
    body: "Our team turns the plan into a distinctive, responsive website—crafted around your brand.",
  },
  {
    title: "Launch & grow",
    body: "We test every detail, help you launch with confidence and stay by your side as you grow.",
  },
];

export default function Approach() {
  return (
    <section className="section approach-section" id="approach">
      <div className="container-page grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <header className="section-head">
          <p className="eyebrow"><span className="eyebrow-dot" /> How we work</p>
          <h2>Good work starts with a good conversation.</h2>
          <p>
            Clear communication, considered decisions and a hands-on team at
            every step. No one-size-fits-all templates—just the right solution
            for your business.
          </p>
        </header>

        <ol className="grid gap-6 sm:grid-cols-2">
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
