import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ReadyToGetSection } from "@/components/home/ReadyToGetSection";
import { PartnerLogos } from "@/components/home/PartnerLogos";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <WhyChooseUs />
      <TestimonialSection />
      <FaqSection />
      <PartnerLogos />
      <ReadyToGetSection />
    </>
  );
}