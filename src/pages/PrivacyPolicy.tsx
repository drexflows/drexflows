import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const PrivacyPolicy = () => {
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
                  Privacy Policy
                </span>
              </h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-xl font-semibold text-foreground mt-8">1. Introduction</h2>
                <p>
                  DREx ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our automation services and visit our website.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">2. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Business information (company name, industry, workflow details)</li>
                  <li>Communication data (messages, support inquiries)</li>
                  <li>Account credentials when you sign in with Google</li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mt-8">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our automation services</li>
                  <li>Communicate with you about our services</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mt-8">4. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data. Our automation systems use encrypted connections and secure data handling practices to ensure your business information remains confidential.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">5. Third-Party Services</h2>
                <p>
                  Our automation services may integrate with third-party platforms (CRMs, social media, etc.). Each integration is configured with your consent, and we only access data necessary for the automation workflows you request.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mt-8">7. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
