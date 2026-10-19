const brands = ["Google", "ChatGPT", "Perplexity", "Gemini", "Bing Copilot"];

export default function LogoBar() {
  return (
    <section className="border-y border-line bg-paper-2" aria-label="Channels we optimize">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-6 md:flex-row md:items-center">
        <p className="text-sm font-medium text-muted">Built for where demand now lives</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold tracking-wide text-ink">
          {brands.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
