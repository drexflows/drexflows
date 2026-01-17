import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const CookiePolicy = () => {
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
                  Cookie Policy
                </span>
              </h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-xl font-semibold text-foreground mt-8">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how you interact with our automation services.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">2. Types of Cookies We Use</h2>
                
                <h3 className="text-lg font-medium text-foreground mt-6">Essential Cookies</h3>
                <p>
                  Required for the website to function properly. These enable core features like authentication and security.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6">Functional Cookies</h3>
                <p>
                  Remember your preferences and settings to enhance your experience on our platform.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6">Analytics Cookies</h3>
                <p>
                  Help us understand how visitors interact with our website, allowing us to improve our services.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">3. How We Use Cookies</h2>
                <p>We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keep you signed in to your account</li>
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve our automation services</li>
                  <li>Provide personalized content</li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mt-8">4. Third-Party Cookies</h2>
                <p>
                  Some cookies are placed by third-party services that appear on our pages, such as Google for authentication. These parties have their own privacy policies.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">5. Managing Cookies</h2>
                <p>
                  You can control and manage cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.
                </p>
                <p>Common browser cookie settings:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>Firefox: Settings → Privacy & Security → Cookies</li>
                  <li>Safari: Preferences → Privacy → Cookies</li>
                  <li>Edge: Settings → Privacy & Security → Cookies</li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mt-8">6. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">7. Contact Us</h2>
                <p>
                  If you have questions about our use of cookies:
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

export default CookiePolicy;
