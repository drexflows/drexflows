import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Shield, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcome-Driven",
    description:
      "We measure success by business impact, not just technical implementation. Your goals are our goals.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Every decision we make starts with what's best for our clients. We're partners, not just vendors.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Your data security is paramount. We maintain the highest standards of privacy and compliance.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We work alongside your team, not in silos. Transparent communication and shared ownership.",
  },
];

const stats = [
  { value: "500+", label: "Workflows Deployed" },
  { value: "150+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "40hrs", label: "Saved Weekly/Client" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  DREx
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to help businesses work smarter, not harder,
                through the power of intelligent automation and AI.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To democratize business automation by making intelligent,
                    AI-powered solutions accessible to companies of all sizes. We
                    believe every business deserves to operate at peak efficiency
                    without the burden of repetitive, manual tasks.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-gradient-to-br from-secondary/5 to-accent/5">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground">
                    A world where businesses run on automation—where human talent
                    is freed to focus on creativity, strategy, and growth. We
                    envision organizations that scale effortlessly, powered by
                    intelligent systems that work 24/7.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Approach
                  </span>
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  We don't believe in one-size-fits-all solutions. Every business is
                  unique, and so are its automation needs. That's why we start every
                  engagement with a deep dive into your operations, understanding
                  your workflows, pain points, and goals.
                </p>
                <p>
                  Our team combines expertise in AI, software development, and
                  business operations to design automation solutions that actually
                  work. We don't just implement tools—we transform how your business
                  operates.
                </p>
                <p>
                  From day one, we focus on measurable outcomes. Whether it's hours
                  saved, leads generated, or revenue increased, we track the metrics
                  that matter to your business. And we don't stop at deployment—we
                  continuously optimize and improve your automations to ensure
                  maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border/50 bg-gradient-to-br from-primary to-secondary text-primary-foreground overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <Award className="w-12 h-12" />
                    <div>
                      <h3 className="text-2xl font-bold">Enterprise-Grade Security</h3>
                      <p className="text-primary-foreground/80">
                        SOC 2 Compliant • GDPR Ready • End-to-End Encryption
                      </p>
                    </div>
                  </div>
                  <p className="text-primary-foreground/90 mb-6">
                    Your data security is our top priority. We maintain rigorous
                    security standards and compliance certifications to ensure your
                    business data is always protected.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["SOC 2 Type II", "GDPR", "HIPAA Ready", "256-bit Encryption"].map(
                      (cert) => (
                        <span
                          key={cert}
                          className="px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium"
                        >
                          {cert}
                        </span>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how we can transform your operations with intelligent
                automation.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
