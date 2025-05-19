import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FaqSection } from "@/components/home/FaqSection";
import { ReadyToGetSection } from "@/components/home/ReadyToGetSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <WhyChooseUs />
      <FaqSection />
      <ReadyToGetSection />
      <ContactSection />
    </>
  );
}