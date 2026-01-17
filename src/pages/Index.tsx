import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Industries } from "@/components/home/Industries";
import { FeaturedUseCases } from "@/components/home/FeaturedUseCases";
import { PricingPreview } from "@/components/home/PricingPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <HowItWorks />
        <WhyChooseUs />
        <Industries />
        <FeaturedUseCases />
        <PricingPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
