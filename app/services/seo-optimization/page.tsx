import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "SEO Optimization Services | On-Page & Technical Foundations",
  description:
    "Practical SEO optimization focused on technical health, on-page clarity, and search foundations that help the right people find your website.",
};

export default function SeoOptimizationPage() {
  return (
    <ServicePage
      eyebrow="SEO optimization services"
      titleBefore="Strengthen the search foundations"
      titleAccent="your website needs to be found."
      lead="We improve the practical SEO work that supports visibility: technical health, page clarity, metadata, structure, and performance—without empty ranking promises."
      highlights={[
        "Technical SEO checks",
        "On-page optimization",
        "Metadata & structure",
        "Performance foundations",
      ]}
      primaryCta="Improve SEO"
      featuresTitle="SEO work that supports real visibility."
      featuresLead="Search engines and people both need a clear, fast, well-structured website. That is where we start."
      features={[
        {
          number: "01",
          title: "Technical SEO audit",
          description:
            "Review crawlability, index signals, redirects, broken pages, and structural issues that block progress.",
        },
        {
          number: "02",
          title: "On-page optimization",
          description:
            "Tighten titles, headings, copy hierarchy, and internal links around the topics that matter.",
        },
        {
          number: "03",
          title: "Metadata & snippets",
          description:
            "Write clearer title tags and meta descriptions that improve click-through potential in search.",
        },
        {
          number: "04",
          title: "Content structure",
          description:
            "Organize pages and FAQs so search engines can understand services, locations, and offers.",
        },
        {
          number: "05",
          title: "Speed & Core Web Vitals",
          description:
            "Address performance issues that affect usability and search experience signals.",
        },
        {
          number: "06",
          title: "Measurement setup",
          description:
            "Confirm analytics and Search Console foundations so you can track what changes over time.",
        },
      ]}
      benefitsTitle="Why practical SEO still matters."
      benefitsLead="Ads can buy attention. SEO helps the right people find you when they are already looking."
      benefits={[
        {
          title: "Clearer discoverability",
          description: "Well-structured pages make it easier for search engines to understand your offer.",
        },
        {
          title: "Better page quality",
          description: "SEO improvements often make the site easier to read and navigate for humans too.",
        },
        {
          title: "Stronger technical health",
          description: "Fixing crawl and performance issues removes silent barriers to growth.",
        },
        {
          title: "Compounding value",
          description: "Foundational SEO work continues to support campaigns and content over time.",
        },
      ]}
      processTitle="How SEO engagements typically run."
      processLead="Audit, prioritize, implement—then measure what actually moved."
      process={[
        {
          title: "Audit & keyword map",
          description: "Assess the current site and identify the pages and topics worth prioritizing.",
        },
        {
          title: "Fix & optimize",
          description: "Implement technical fixes and on-page improvements with clear ownership.",
        },
        {
          title: "Review & iterate",
          description: "Track Search Console and analytics signals, then refine the next round of work.",
        },
      ]}
      faqsTitle="SEO questions we hear most."
      faqs={[
        {
          question: "Can you guarantee #1 rankings?",
          answer:
            "No responsible SEO service can. Rankings depend on competition, content, authority, and many external factors. We focus on foundations that improve your chance to compete.",
        },
        {
          question: "How long before we see results?",
          answer:
            "Technical and on-page improvements can start helping soon, but meaningful ranking movement often takes weeks to months depending on competition and site history.",
        },
        {
          question: "Do you create new content as part of SEO?",
          answer:
            "We can recommend and structure content opportunities. Full content production can be included when the scope calls for it.",
        },
        {
          question: "Is SEO useful for a brand-new website?",
          answer:
            "Yes. Launching with clean structure, metadata, and technical health prevents expensive cleanup later and supports growth from day one.",
        },
      ]}
      ctaTitle="Want search foundations that actually help?"
      ctaLead="Share your website and target keywords or services. We will outline practical SEO priorities for the next phase."
    />
  );
}
