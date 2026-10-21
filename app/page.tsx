import type { Metadata } from "next";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import EmployeeTestimonials from "@/components/EmployeeTestimonials";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import LogoBar from "@/components/LogoBar";
import Proof from "@/components/Proof";
import Services from "@/components/Services";
import StickyCta from "@/components/StickyCta";
import StudioTicker from "@/components/StudioTicker";
import {
  IndustriesSection,
  CustomVsBuilder,
  FounderIntroduction,
  LaunchSupport,
  StudioIntroduction,
  StudioPartnership,
  WebsiteStandards,
  WhyTanot,
} from "@/components/StudioSections";

export const metadata: Metadata = {
  title: "Websites Designed to Grow Your Business | Guffo Solution",
  description:
    "Guffo Solution designs and develops custom, SEO-conscious websites that build trust, clarify your offer and help turn visitors into customers.",
};

export default function HomePage() {
  return (
    <main id="main" className="home-page">
      <Hero />
      <LogoBar />
      <Proof />
      <EmployeeTestimonials />
      <StudioTicker />
      <StudioIntroduction />
      <FounderIntroduction />
      <Services />
      <CustomVsBuilder />
      <Contact />
      <IndustriesSection />
      <Approach />
      <WebsiteStandards />
      <StudioPartnership />
      <WhyTanot />
      <LaunchSupport />
      <FAQ />
      <CtaBand />
      <StickyCta />
    </main>
  );
}
