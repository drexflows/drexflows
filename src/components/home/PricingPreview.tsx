import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with automation",
    price: "$997",
    period: "/month",
    features: [
      "Up to 3 automated workflows",
      "Basic integrations",
      "Email & chat support",
      "Monthly reporting",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing businesses ready to scale operations",
    price: "$2,497",
    period: "/month",
    features: [
      "Up to 10 automated workflows",
      "Advanced AI workflows",
      "CRM & social automation",
      "Priority support",
      "Weekly analytics",
      "Custom integrations",
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: "Custom",
    period: "",
    features: [
      "Unlimited workflows",
      "Dedicated automation architect",
      "AI agents & voice bots",
      "SLA & compliance",
      "White-glove onboarding",
      "24/7 priority support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const PricingPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your automation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-border/50 hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-center py-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 inline-block mr-1" />
                  Most Popular
                </div>
              )}
              <CardHeader className={plan.popular ? "pt-14" : ""}>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/pricing">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/pricing">
            <Button variant="ghost" className="group">
              View Full Pricing Details
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
