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
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Drexflows - AI Automation & Workflow Solutions | Business Process Automation"
        description="Transform your business with Drexflows AI automation solutions. Get custom workflows, process automation, and AI-powered tools. Starting at $11/month. Book a free consultation today."
        keywords="AI automation, workflow automation, business process automation, custom workflows, AI tools, process optimization, business automation, drexflows"
        url="https://drexflows.in/"
      />
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
