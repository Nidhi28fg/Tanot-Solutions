const channels = [
  { name: "Google AI Overviews", width: "88%", status: "Cited" },
  { name: "ChatGPT", width: "74%", status: "Cited" },
  { name: "Perplexity", width: "61%", status: "Rising" },
  { name: "Classic SERP", width: "92%", status: "Page 1" },
];

const metrics = [
  { label: "AI citation lift", value: "3.2×" },
  { label: "Content systems shipped", value: "140+" },
  { label: "Avg. time to first win", value: "8 wks" },
];

export default function Hero() {
  return (
    <section className="bg-ink text-white" id="top">
      <div className="container-page grid items-center gap-12 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-16 md:py-24">
        <div>
          <p className="eyebrow-light">AI search · SEO · content systems</p>
          <h1 className="max-w-[14ch] text-[2.5rem] leading-[1.08] text-white sm:text-5xl md:text-[4rem]">
            Be the answer{" "}
            <em className="font-serif italic text-cta">AI search recommends.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
            Tanot Solutions engineers visibility for growth teams — so your brand
            is cited in ChatGPT, ranked in Google, and chosen when buyers ask AI
            what to buy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn btn-cta">
              Book a strategy session
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore services
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/50">
                  {metric.label}
                </dt>
                <dd className="mt-2 font-serif text-2xl text-white md:text-[2rem]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside aria-label="AI search visibility snapshot">
          <div className="rounded-2xl border border-white/10 bg-ink-2 p-6 shadow-panel md:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Visibility console
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-cta">
                <span className="h-1.5 w-1.5 rounded-full bg-cta" />
                Live
              </span>
            </div>
            <p className="mt-4 text-lg font-semibold">AI Search Presence</p>
            <div className="mt-6 flex items-end gap-4">
              <span className="font-serif text-6xl leading-none text-cta">86</span>
              <span className="pb-1 text-sm leading-6 text-white/60">
                Presence score
                <strong className="mt-0.5 block font-semibold text-white">
                  +12 this quarter
                </strong>
              </span>
            </div>
            <ul className="mt-8 space-y-5">
              {channels.map((channel) => (
                <li key={channel.name}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                    <span className="text-white/70">{channel.name}</span>
                    <b className="text-xs font-semibold text-white">{channel.status}</b>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <i
                      className="block h-full rounded-full bg-cta"
                      style={{ width: channel.width }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
