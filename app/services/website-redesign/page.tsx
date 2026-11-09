import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Website Redesign Services | Modernize Look, UX & Conversion",
  description:
    "Website redesign that updates your look, clarifies navigation, and improves the experience without losing what already works.",
};

export default function WebsiteRedesignPage() {
  return (
    <ServicePage
      eyebrow="Website redesign services"
      titleBefore="Refresh the site you have"
      titleAccent="into something clearer and more current."
      lead="A redesign is not just a new skin. We improve structure, visual hierarchy, and user flow so your existing website feels modern, trustworthy, and easier to use."
      highlights={[
        "Modern visual system",
        "Clearer navigation",
        "Better mobile UX",
        "Preserve what works",
      ]}
      primaryCta="Discuss a redesign"
      featuresTitle="What a thoughtful redesign includes."
      featuresLead="We keep your strengths, fix the friction, and rebuild the experience around how people actually browse."
      features={[
        {
          number: "01",
          title: "UX & content audit",
          description:
            "Review pages, navigation paths, and messaging gaps before changing the design.",
        },
        {
          number: "02",
          title: "Information architecture",
          description:
            "Reorganize menus and page structure so visitors reach the right content faster.",
        },
        {
          number: "03",
          title: "Visual redesign",
          description:
            "Update typography, spacing, color, and components into a cohesive modern system.",
        },
        {
          number: "04",
          title: "Responsive rebuild",
          description:
            "Make key templates feel intentional on desktop, tablet, and phone—not just squeezed.",
        },
        {
          number: "05",
          title: "Conversion improvements",
          description:
            "Strengthen CTAs, forms, and page flow where visitors currently drop off.",
        },
        {
          number: "06",
          title: "Migration care",
          description:
            "Protect important URLs, content, and SEO foundations during the transition.",
        },
      ]}
      benefitsTitle="Why redesign instead of starting over."
      benefitsLead="You already have a site and an audience. Redesign makes that asset work harder."
      benefits={[
        {
          title: "Stronger first impression",
          description: "A current look helps visitors trust your business in the first few seconds.",
        },
        {
          title: "Easier journeys",
          description: "Clearer paths reduce bounce and help people find services or contact options.",
        },
        {
          title: "Better mobile use",
          description: "Most visits happen on phones—redesign makes that experience feel intentional.",
        },
        {
          title: "Room to grow content",
          description: "A cleaner system makes future pages and campaigns easier to add.",
        },
      ]}
      processTitle="How a redesign project moves."
      processLead="Audit, redesign, rebuild—without throwing away the parts that already convert."
      process={[
        {
          title: "Audit & priorities",
          description: "Identify what to keep, what to fix, and which pages matter most commercially.",
        },
        {
          title: "Design system & templates",
          description: "Define the new look and apply it across homepage and key templates.",
        },
        {
          title: "Rebuild & launch",
          description: "Implement, test, redirect carefully, and publish with a clear handoff.",
        },
      ]}
      faqsTitle="Website redesign FAQs."
      faqs={[
        {
          question: "Do I need a full rebuild or just a visual refresh?",
          answer:
            "It depends on the current codebase and goals. Some projects are a visual and UX refresh; others need a deeper rebuild for speed, SEO, or maintainability.",
        },
        {
          question: "Will my SEO rankings be affected?",
          answer:
            "We plan redirects, preserve important URLs where possible, and keep technical foundations healthy so redesign does not wipe out search progress.",
        },
        {
          question: "Can you redesign only the homepage first?",
          answer:
            "Yes. Many clients start with the homepage and primary templates, then roll the system across the rest of the site.",
        },
        {
          question: "What do you need from us to start?",
          answer:
            "Access to the current site, brand assets, analytics if available, and clarity on what the website should help visitors do next.",
        },
      ]}
      ctaTitle="Is your current site holding the brand back?"
      ctaLead="Share the live URL and what feels outdated. We will outline a redesign plan that fits your goals and timeline."
    />
  );
}
