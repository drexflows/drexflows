import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyze",
    description: "We audit your current workflows to identify automation opportunities and bottlenecks.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design",
    description: "Our team designs AI-powered automation strategies tailored to your business needs.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & Integrate",
    description: "We develop and seamlessly integrate automations with your existing tools and platforms.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description: "Deploy, monitor, and continuously optimize your automation for maximum ROI.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process to transform your operations through intelligent automation
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative z-10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold bg-gradient-to-br from-primary/20 to-secondary/20 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
