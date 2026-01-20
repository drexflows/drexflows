import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { PlanSelectionDialog } from "@/components/PlanSelectionDialog";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with automation",
    monthlyPrice: "$11",
    projectPrice: "",
    features: [
      "Up to 3 automated workflows",
      "Basic platform integrations",
      "Email & chat support",
      "Monthly performance reports",
      "48-hour response time",
      "Self-service dashboard",
    ],
    notIncluded: [
      "AI agents",
      "Voice automation",
      "Custom development",
      "Priority support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing businesses ready to scale their operations",
    monthlyPrice: "$49",
    projectPrice: "",
    features: [
      "Up to 10 automated workflows",
      "Advanced AI workflows",
      "CRM & social media automation",
      "Priority support",
      "Weekly analytics & insights",
      "Custom integrations",
      "WhatsApp & SMS automation",
      "A/B testing capabilities",
    ],
    notIncluded: ["AI voice agents", "Dedicated architect"],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations with complex needs",
    monthlyPrice: "Custom",
    projectPrice: "",
    features: [
      "Unlimited automated workflows",
      "Dedicated automation architect",
      "AI chat & voice agents",
      "SLA & compliance guarantees",
      "White-glove onboarding",
      "24/7 priority support",
      "Custom development hours",
      "Advanced security features",
      "Multi-region deployment",
      "API access & webhooks",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Most automations are deployed within 2-4 weeks, depending on complexity. Simple workflows can be live in days, while enterprise solutions may take 6-8 weeks.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely! You can upgrade or downgrade at any time. We'll prorate your billing and help migrate your workflows seamlessly.",
  },
  {
    question: "Do you offer project-based pricing?",
    answer:
      "Yes, we offer both monthly retainers and one-time project pricing. Project pricing is ideal for specific automation builds without ongoing commitments.",
  },
  {
    question: "What platforms do you integrate with?",
    answer:
      "We integrate with 500+ platforms including Salesforce, HubSpot, Shopify, Slack, WhatsApp, Gmail, and virtually any tool with an API.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We're SOC 2 compliant, use end-to-end encryption, and never store sensitive data unless explicitly required. Enterprise plans include additional security features.",
  },
  {
    question: "What if I need help after deployment?",
    answer:
      "All plans include ongoing support. Starter gets email support, Growth gets priority chat, and Enterprise gets 24/7 phone support plus a dedicated success manager.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose the plan that fits your automation needs. No hidden fees,
                no surprises.
              </p>
            </div>
          </div>
        </section>


        {/* Pricing Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                    <div className="mt-6 space-y-2">
                      <div>
                        <span className="text-4xl font-bold">
                          {plan.monthlyPrice}
                        </span>
                        {plan.monthlyPrice !== "Custom" && (
                          <span className="text-muted-foreground">/month</span>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          {feature}
                        </li>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-muted-foreground line-through"
                        >
                          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs">–</span>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {plan.name === "Enterprise" ? (
                      <Link to="/contact">
                        <Button
                          className="w-full"
                          variant="outline"
                          size="lg"
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    ) : (
                      <PlanSelectionDialog
                        selectedPlan={{
                          name: plan.name,
                          price: plan.monthlyPrice,
                          period: "/month",
                          projectPrice: `or $${plan.projectPrice} one-time`,
                        }}
                      >
                        <Button
                          className={`w-full ${
                            plan.popular
                              ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                              : ""
                          }`}
                          variant={plan.popular ? "default" : "outline"}
                          size="lg"
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </PlanSelectionDialog>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Frequently Asked{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <Card
                    key={faq.question}
                    className="border-border/50 bg-card/50"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-2">{faq.question}</h4>
                          <p className="text-sm text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Quote?</h2>
              <p className="text-muted-foreground mb-8">
                Enterprise needs are unique. Let's discuss a tailored solution for
                your organization.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
                >
                  Request Custom Quote
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

export default Pricing;
