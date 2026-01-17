import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-xl font-semibold text-foreground mt-8">1. Agreement to Terms</h2>
                <p>
                  By accessing or using DREx's automation services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">2. Description of Services</h2>
                <p>
                  DREx provides business automation services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI-powered workflow automation</li>
                  <li>Social media automation and management</li>
                  <li>CRM and sales process automation</li>
                  <li>HR and recruiting automation</li>
                  <li>Custom automation development</li>
                  <li>Pre-audit automation assessments</li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mt-8">3. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate information for automation setup</li>
                  <li>Maintain security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not use automations for spam, harassment, or illegal activities</li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mt-8">4. Automation Audits</h2>
                <p>
                  Our pre-audit automation assessment is designed to identify opportunities for process improvement. The recommendations provided are based on the information you share with us and industry best practices.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">5. Intellectual Property</h2>
                <p>
                  All automation workflows, designs, and systems created by DREx remain our intellectual property unless explicitly transferred. You retain ownership of your business data and content.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">6. Payment Terms</h2>
                <p>
                  Payment terms are outlined in individual service agreements. Pricing may vary based on the complexity of automation requirements and chosen service tier.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">7. Limitation of Liability</h2>
                <p>
                  DREx shall not be liable for any indirect, incidental, or consequential damages arising from the use of our automation services. Our total liability is limited to the amount paid for services.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">8. Termination</h2>
                <p>
                  Either party may terminate services with appropriate notice as specified in the service agreement. Upon termination, we will provide reasonable support for transition.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">9. Contact Information</h2>
                <p>
                  For questions about these Terms of Service:
                </p>
                <p className="font-medium text-foreground">
                  Email: drexflows@gmail.com<br />
                  Address: Vijayanagar, Indore
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
