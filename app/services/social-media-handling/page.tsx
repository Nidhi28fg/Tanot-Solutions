import type { Metadata } from "next";
import Link from "next/link";
import styles from "../maintain-website/maintain-website.module.css";

export const metadata: Metadata = {
  title: "Social Media Handling | Content, Posting & Growth Plans",
  description:
    "Social media handling with consistent content, clean graphics, scheduled posting, and monthly reporting—so your brand stays active and engaging.",
};

const highlights = [
  "Content creation & design",
  "Scheduled posting",
  "Profile optimization",
  "Monthly performance summary",
];

const deliverables = [
  {
    number: "01",
    title: "Content creation & design",
    description:
      "Branded static posts, carousels, and short-form video edits (Reels/Shorts) tailored to your niche.",
  },
  {
    number: "02",
    title: "Copywriting & hashtags",
    description:
      "Clear captions written for engagement, paired with researched, relevant hashtags.",
  },
  {
    number: "03",
    title: "Scheduled posting",
    description:
      "Consistent publishing at optimal times so your profiles never go quiet.",
  },
  {
    number: "04",
    title: "Profile & bio optimization",
    description:
      "Clean highlights, updated bios, and cohesive visual grids that build instant trust.",
  },
  {
    number: "05",
    title: "Monthly performance summary",
    description:
      "A straightforward report showing reach, engagement, and follower growth—no confusing jargon.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹7,999",
    description: "A steady presence across 2 platforms.",
    features: [
      "2 platforms (e.g. Instagram + Facebook)",
      "15 posts / month (alternate days)",
      "4 Reels / month",
      "10 Stories / month",
      "Bio setup & basic hashtags",
      "Monthly report",
    ],
  },
  {
    name: "Growth",
    price: "₹14,999",
    description: "Daily posting with stronger content rhythm.",
    features: [
      "3 platforms (Instagram + Facebook + LinkedIn / GMB)",
      "25–30 posts / month (daily posting)",
      "8–10 Reels / month",
      "20 Stories / month",
      "Content calendar & trend research",
      "Caption copywriting + monthly report",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "₹24,999",
    description: "Full-brand coverage with priority support.",
    features: [
      "4 platforms (Instagram + Facebook + LinkedIn + YouTube Shorts / X)",
      "30+ posts / month (daily + festival posts)",
      "15 Reels / month",
      "Daily Stories",
      "Ad-ready creatives & competitor tracking",
      "Priority support + strategy call",
    ],
  },
];

const platforms = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Google Business Profile",
  "YouTube Shorts",
  "X (Twitter)",
];

const faqs = [
  {
    question: "Which social media platforms do you manage?",
    answer:
      "We handle Instagram, Facebook, LinkedIn, Google Business Profile, and YouTube Shorts. You can pick the platforms where your audience is most active.",
  },
  {
    question: "Do we need to provide photos and videos?",
    answer:
      "If you have raw product photos or office clips, we edit and design around them. If not, we create clean graphic posts and use licensed stock visuals tailored to your brand.",
  },
  {
    question: "Will I approve posts before they go live?",
    answer:
      "Yes. We share a weekly or bi-weekly content calendar in advance so you can review designs and captions before scheduling.",
  },
  {
    question: "How soon can we expect results?",
    answer:
      "Organic social media builds trust steadily. Most businesses notice better profile engagement and consistency within the first 30 to 60 days.",
  },
];

export default function SocialMediaHandlingPage() {
  return (
    <main id="main" className={styles.page}>
      <section className="hero-section relative overflow-hidden">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-violet" aria-hidden="true" />
        <div className="hero-orb hero-orb-coral" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-10 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Social media management · Content &amp; growth
            </p>
            <h1 className="mt-6 max-w-[16ch] text-[3rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
              Social media handling that keeps your brand{" "}
              <em className="font-serif text-orange">active and consistent.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              From daily posts and reels to profile optimization, we manage your
              social presence so you can focus on running your business.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Social media handling highlights">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 text-sm text-muted">
                  <span className="font-semibold text-orange" aria-hidden="true">
                    ✓
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#social-plans" className="btn btn-cta">
                View monthly plans <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/#contact" className="btn btn-ghost">
                Get free consultation <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">
              Consistent content · Clear reporting · Plans that fit your stage
            </p>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.panelTop}>
              <span className={styles.statusDot} />
              <span>Social presence, handled</span>
              <span className={styles.panelMenu} aria-hidden="true">
                •••
              </span>
            </div>
            <div className={styles.panelContent}>
              <span className={styles.panelEyebrow}>This month&apos;s rhythm</span>
              <p className={styles.panelTitle}>Stay visible without the daily scramble.</p>
              <div className={styles.healthTrack} aria-hidden="true">
                <span />
              </div>
              <div className={styles.panelChecks}>
                {["Content calendar", "Designed posts & reels", "Scheduled publishing"].map(
                  (item) => (
                    <div className={styles.panelCheck} key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                      <span className={styles.panelComplete}>In the plan</span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={styles.panelFooter}>
              <span>Active profiles. Clear next steps.</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="social-deliverables">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> What we handle
            </p>
            <h2 id="social-deliverables">Practical social media support.</h2>
            <p>
              Content, posting, and profile care shaped around how your customers
              discover and trust your brand.
            </p>
          </header>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <article
                className={`glass-card rounded-2xl border border-line p-6 shadow-card md:p-7 ${styles.serviceCard}`}
                key={item.number}
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-orange">
                  {item.number}
                </span>
                <h3 className="mt-5 text-xl leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper-2" id="social-plans" aria-labelledby="social-plans-title">
        <div className="container-page">
          <header className="section-head mb-10">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Monthly plans
            </p>
            <h2 id="social-plans-title">Clear packages for consistent social presence.</h2>
            <p>
              Pick a starting point. We&apos;ll refine platforms, posting rhythm, and
              creative scope around your brand.
            </p>
          </header>
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                className={`${styles.planCard} ${plan.popular ? styles.popularPlan : ""}`}
                key={plan.name}
              >
                {plan.popular ? <span className={styles.popularBadge}>Popular</span> : null}
                <p className={styles.planLabel}>{plan.name}</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                  {plan.price}
                  <span className="ml-1 text-sm font-medium text-muted">/ month</span>
                </p>
                <h3 className="mt-3 text-lg leading-snug">{plan.description}</h3>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`btn ${plan.popular ? "btn-cta" : "btn-ghost"} mt-8 w-full`}
                >
                  Discuss this plan <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          <div className={styles.planNote}>
            <p>
              <strong>Billing:</strong> Monthly advance billing. Minimum 3-month
              commitment recommended for organic growth.
            </p>
            <p>
              <strong>Ads budget:</strong> Paid ad spend (Meta/Google ads) is
              separate from management fees.
            </p>
            <p>
              <strong>Revisions:</strong> 2 rounds of creative revisions included
              per content batch.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="social-platforms">
        <div className="container-page grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
          <header className="section-head">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Platforms
            </p>
            <h2 id="social-platforms">Where we keep your brand active.</h2>
            <p>Choose the channels that matter most for your audience.</p>
          </header>
          <ul className={styles.platformList} aria-label="Social platforms we manage">
            {platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-paper-2" aria-labelledby="social-faq">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <header className="section-head">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Frequently asked questions
            </p>
            <h2 id="social-faq">Social media handling, explained.</h2>
            <p>Clear answers before you start a monthly plan.</p>
          </header>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details className={styles.faqItem} key={faq.question} open={index === 0}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="social-cta">
        <div className="container-page">
          <div className={styles.ctaCard}>
            <div className={styles.ctaCardCopy}>
              <p className="eyebrow">
                <span className="eyebrow-dot" /> Ready when you are
              </p>
              <h2 id="social-cta">Keep your brand visible without daily stress.</h2>
              <p>
                Tell us about your business and platforms. We&apos;ll recommend a
                practical monthly plan and content rhythm.
              </p>
            </div>
            <div className={styles.ctaCardActions}>
              <Link href="/#contact" className="btn btn-cta">
                Get free consultation <span aria-hidden="true">↗</span>
              </Link>
              <Link href="#social-plans" className="btn btn-ghost-light">
                View monthly plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
