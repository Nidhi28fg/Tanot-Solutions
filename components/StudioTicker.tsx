const messages = [
  "Made for your kind of ambitious",
  "Designed to feel different",
  "Built for people, not templates",
  "Good work travels",
];

export default function StudioTicker() {
  return (
    <div className="studio-ticker" role="group" aria-label="Made for ambitious businesses, designed to feel different">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
            {messages.map((message) => (
              <span className="ticker-message" key={`${copy}-${message}`}>
                {message}
                <i aria-hidden="true">✳</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
