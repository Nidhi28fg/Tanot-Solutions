import type { Metadata } from "next";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import EmployeeTestimonials from "@/components/EmployeeTestimonials";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import {
  IndustriesGrid,
  PricingPreview,
  WhyChooseUs,
} from "@/components/HomeSections";
import Proof from "@/components/Proof";
import Services from "@/components/Services";
import StickyCta from "@/components/StickyCta";

export const metadata: Metadata = {
  title: "Websites Designed to Grow Your Business | Guffo Solution",
  description:
    "Guffo Solution designs and develops custom, SEO-conscious websites that build trust, clarify your offer and help turn visitors into customers.",
};

export default function HomePage() {
  return (
    <main id="main" className="home-page">
      <Hero />
      <WhyChooseUs />
      <Services />
      <Approach />
      <Proof />
      <IndustriesGrid />
      <PricingPreview />
      <EmployeeTestimonials />
      <FAQ />
      <Contact />
      <CtaBand />
      <StickyCta />
    </main>
  );
}
