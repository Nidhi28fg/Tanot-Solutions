import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Landing Page Design & Development | Campaign Pages That Convert",
  description:
    "Focused landing pages for products, offers, and campaigns—with clear messaging, strong hierarchy, and one decisive next step.",
};

export default function LandingPagesPage() {
  return (
    <ServicePage
      eyebrow="Landing page design & development"
      titleBefore="Give every campaign"
      titleAccent="one clear page and one clear action."
      lead="We build landing pages that strip away distraction. Visitors get the offer, the proof, and the next step—without hunting through a full website."
      highlights={[
        "Offer-first messaging",
        "Mobile-first layouts",
        "Fast load times",
        "Clear conversion CTA",
      ]}
      primaryCta="Brief a landing page"
      featuresTitle="Built for focus, not clutter."
      featuresLead="Every section earns its place: headline, proof, offer details, and a decisive call to action."
      features={[
        {
          number: "01",
          title: "Message hierarchy",
          description:
            "A strong headline, supporting copy, and scannable benefits that match the campaign intent.",
        },
        {
          number: "02",
          title: "Conversion layout",
          description:
            "Sections ordered to reduce bounce and guide visitors toward one primary action.",
        },
        {
          number: "03",
          title: "Trust & proof blocks",
          description:
            "Space for testimonials, logos, results, or guarantees that make the offer feel credible.",
        },
        {
          number: "04",
          title: "Form & CTA design",
          description:
            "Clean form fields, button wording, and placement that make responding feel easy.",
        },
        {
          number: "05",
          title: "Campaign variants",
          description:
            "Optional A/B-ready layouts or offer variants when you are testing messaging.",
        },
        {
          number: "06",
          title: "Tracking-ready handoff",
          description:
            "Clean structure for pixels, UTM parameters, and analytics events your team can connect.",
        },
      ]}
      benefitsTitle="Why a dedicated landing page wins."
      benefitsLead="Campaign traffic converts better when the page matches the ad and removes competing paths."
      benefits={[
        {
          title: "Higher intent match",
          description: "Visitors land on a page that continues the promise from the ad or email.",
        },
        {
          title: "Fewer distractions",
          description: "No deep menus or unrelated links pulling attention away from the offer.",
        },
        {
          title: "Faster testing cycles",
          description: "Iterate on headlines, offers, and CTAs without redesigning the whole site.",
        },
        {
          title: "Clearer performance",
          description: "One page, one goal—easier to measure what worked and what did not.",
        },
      ]}
      processTitle="From brief to live page."
      processLead="A short, sharp process so campaign pages can ship without drama."
      process={[
        {
          title: "Brief & offer map",
          description: "Clarify audience, promise, proof points, and the single conversion goal.",
        },
        {
          title: "Design & copy structure",
          description: "Shape the page flow, visuals, and CTA placement around that goal.",
        },
        {
          title: "Build & launch",
          description: "Develop, polish on mobile, connect tracking hooks, and publish.",
        },
      ]}
      faqsTitle="Landing page questions, answered."
      faqs={[
        {
          question: "Can you build a page for ads or email campaigns?",
          answer:
            "Yes. Landing pages work well for paid ads, launches, webinars, lead magnets, and seasonal offers.",
        },
        {
          question: "Do you write the copy as well?",
          answer:
            "We can structure the page and draft conversion-focused copy from your brief, or work from messaging you already have.",
        },
        {
          question: "How many landing pages can you deliver?",
          answer:
            "One focused page or a set of campaign variants. Scope depends on how many offers and audiences you need to support.",
        },
        {
          question: "Will it match my existing brand?",
          answer:
            "Yes. We align typography, color, and tone with your current brand while keeping the page conversion-first.",
        },
      ]}
      ctaTitle="Have an offer that needs a sharper page?"
      ctaLead="Send the campaign goal, audience, and proof points. We will shape a landing page built to convert."
    />
  );
}
