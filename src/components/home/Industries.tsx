import { ShoppingCart, Code, Briefcase, Building2, Heart, Rocket } from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description: "Order management, inventory sync, and customer communication automation",
  },
  {
    icon: Code,
    name: "SaaS",
    description: "User onboarding, subscription management, and support ticket routing",
  },
  {
    icon: Briefcase,
    name: "Agencies",
    description: "Client reporting, project management, and campaign automation",
  },
  {
    icon: Building2,
    name: "Real Estate",
    description: "Lead nurturing, property alerts, and document processing",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Appointment scheduling, patient follow-ups, and record management",
  },
  {
    icon: Rocket,
    name: "Startups",
    description: "Scalable operations, growth automation, and lean process optimization",
  },
];

export const Industries = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored automation solutions for every sector
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <industry.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
              <p className="text-xs text-muted-foreground hidden lg:block">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
