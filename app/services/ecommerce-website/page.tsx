import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "eCommerce Website Development | Online Stores That Convert",
  description:
    "Practical eCommerce websites with clear product pages, smooth checkout, and store setup that helps customers discover and buy with confidence.",
};

export default function EcommerceWebsitePage() {
  return (
    <ServicePage
      eyebrow="eCommerce website development"
      titleBefore="Build an online store"
      titleAccent="customers can buy from with ease."
      lead="We design and develop eCommerce websites that make products easy to find, carts easy to complete, and your brand look trustworthy from the first visit."
      highlights={[
        "Product catalog & collections",
        "Secure checkout flow",
        "Mobile-ready shopping",
        "Payment & shipping setup",
      ]}
      primaryCta="Plan an online store"
      featuresTitle="Everything a store needs to sell online."
      featuresLead="From product pages to checkout and post-purchase clarity, we focus on the parts that help customers buy."
      features={[
        {
          number: "01",
          title: "Store architecture",
          description:
            "Clear category structure, product pages, and navigation so shoppers can find what they need quickly.",
        },
        {
          number: "02",
          title: "Conversion-focused design",
          description:
            "Layouts that highlight pricing, trust signals, variants, and calls to action without clutter.",
        },
        {
          number: "03",
          title: "Checkout & payments",
          description:
            "A smooth checkout path with the payment options and shipping details your customers expect.",
        },
        {
          number: "04",
          title: "Inventory-ready setup",
          description:
            "Practical product, stock, and order foundations so your team can manage the store day to day.",
        },
        {
          number: "05",
          title: "Mobile shopping experience",
          description:
            "Fast, thumb-friendly browsing and purchasing across phones and tablets.",
        },
        {
          number: "06",
          title: "Launch support",
          description:
            "Testing, content guidance, and go-live support so the store opens cleanly.",
        },
      ]}
      benefitsTitle="Why invest in a dedicated store experience."
      benefitsLead="A good eCommerce site reduces friction and makes your offer feel ready for real customers."
      benefits={[
        {
          title: "More confident purchases",
          description: "Clear product details and a simple path to checkout help reduce hesitation.",
        },
        {
          title: "Stronger brand trust",
          description: "A polished storefront signals reliability before the first order is placed.",
        },
        {
          title: "Easier operations",
          description: "A structured catalog and admin flow make updates less painful for your team.",
        },
        {
          title: "Room to grow",
          description: "Start lean, then expand collections, campaigns, and features as demand grows.",
        },
      ]}
      processTitle="How we build your store."
      processLead="A focused path from product brief to a live shopping experience."
      process={[
        {
          title: "Discovery",
          description: "Map products, audiences, payment needs, and the must-have store features.",
        },
        {
          title: "Design & build",
          description: "Create the storefront, product templates, cart, and checkout experience.",
        },
        {
          title: "Launch & refine",
          description: "Test flows, publish the store, and tighten the details that affect buying.",
        },
      ]}
      faqsTitle="Common questions about eCommerce projects."
      faqs={[
        {
          question: "Which platforms do you work with?",
          answer:
            "We can build or improve stores on common platforms such as Shopify and WooCommerce, or create a custom storefront when that better fits the brief.",
        },
        {
          question: "Can you migrate an existing store?",
          answer:
            "Yes. We can plan a migration of products, pages, and key settings, then rebuild the shopping experience around clearer design and conversion goals.",
        },
        {
          question: "Do you handle payments and shipping setup?",
          answer:
            "We help configure the checkout, payment, and shipping foundations your store needs. Final provider accounts and approvals stay with you.",
        },
        {
          question: "How long does an eCommerce website take?",
          answer:
            "Timelines depend on catalog size and feature scope. A focused store can move quickly; larger catalogs and custom flows take longer.",
        },
      ]}
      ctaTitle="Ready to open a store that sells with clarity?"
      ctaLead="Share your products, audience, and launch goals. We will outline a practical store scope and next steps."
    />
  );
}
