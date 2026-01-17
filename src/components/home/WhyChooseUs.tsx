import { Check, Cpu, Shield, Zap, BarChart3, Headphones } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Custom-Built Automations",
    description: "No templates. Every solution is engineered specifically for your unique business processes.",
  },
  {
    icon: Zap,
    title: "AI-Powered Decision Logic",
    description: "Intelligent systems that learn, adapt, and make smart decisions autonomously.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption and secure data handling.",
  },
  {
    icon: BarChart3,
    title: "Multi-Platform Integration",
    description: "Seamlessly connect with 500+ apps including Salesforce, HubSpot, Slack, and more.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Your own automation architect and priority support throughout your journey.",
  },
  {
    icon: Check,
    title: "Outcome-Focused Approach",
    description: "We measure success by business impact, not just technical implementation.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Leading Companies{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just automate tasks — we transform how your business operates. Our approach combines cutting-edge AI with deep business expertise to deliver measurable results.
            </p>

            <div className="grid gap-4">
              {features.slice(0, 3).map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {features.slice(3).map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground mt-4">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-1">500+</div>
                  <div className="text-primary-foreground/80 text-sm">Workflows Deployed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">98%</div>
                  <div className="text-primary-foreground/80 text-sm">Client Retention</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">40hrs</div>
                  <div className="text-primary-foreground/80 text-sm">Saved Weekly/Client</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">3x</div>
                  <div className="text-primary-foreground/80 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
