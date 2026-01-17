import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  Mail,
  Calendar,
  FileText,
  Phone,
  TrendingUp,
  ShoppingCart,
  Share2,
  Database,
  Clock,
  Newspaper,
  CreditCard,
} from "lucide-react";

const useCases = [
  {
    icon: MessageCircle,
    title: "AI Chat Agents for Support",
    description:
      "Deploy intelligent chatbots that handle customer inquiries 24/7 with human-like responses and escalation protocols.",
    problem: "Support teams overwhelmed with repetitive inquiries",
    solution: "AI agents handle 80% of queries automatically",
    outcome: "70% reduction in support tickets, 24/7 availability",
    tag: "Support",
  },
  {
    icon: Mail,
    title: "AI Email Categorization",
    description:
      "Automatically sort, label, and route incoming emails to the right team members based on AI analysis.",
    problem: "Hours spent manually sorting emails daily",
    solution: "AI categorizes and routes emails instantly",
    outcome: "90% faster email processing, zero misrouting",
    tag: "Productivity",
  },
  {
    icon: Share2,
    title: "Blog to Social Repurposing",
    description:
      "Transform blog posts into optimized social media content for all platforms automatically.",
    problem: "Time-consuming content repurposing across platforms",
    solution: "AI generates platform-specific posts from blogs",
    outcome: "5x more content output, consistent posting",
    tag: "Marketing",
  },
  {
    icon: Phone,
    title: "AI Cold Calling Agent",
    description:
      "Voice AI that makes outbound calls, qualifies leads, and books appointments automatically.",
    problem: "Sales reps spending hours on cold calls",
    solution: "AI agent handles initial outreach and qualification",
    outcome: "300% more calls made, higher qualified leads",
    tag: "Sales",
  },
  {
    icon: ShoppingCart,
    title: "Shopify COD Confirmation",
    description:
      "Automated WhatsApp messages to confirm cash-on-delivery orders and reduce fake orders.",
    problem: "High rate of fake COD orders causing losses",
    solution: "Automated confirmation flow via WhatsApp",
    outcome: "85% reduction in fake orders, faster processing",
    tag: "E-commerce",
  },
  {
    icon: Calendar,
    title: "Appointment Reminders",
    description:
      "Automated multi-channel reminders that reduce no-shows and keep calendars optimized.",
    problem: "High no-show rates affecting revenue",
    solution: "Smart reminders via SMS, email, and WhatsApp",
    outcome: "60% reduction in no-shows",
    tag: "Scheduling",
  },
  {
    icon: TrendingUp,
    title: "Daily Sales Reporting",
    description:
      "Automated reports delivered to your inbox or Slack with key metrics and insights.",
    problem: "Manual report creation taking hours",
    solution: "Auto-generated reports from CRM/database",
    outcome: "100% automated, always on time",
    tag: "Analytics",
  },
  {
    icon: CreditCard,
    title: "Financial Tracking Automation",
    description:
      "Sync transactions, categorize expenses, and generate financial summaries automatically.",
    problem: "Manual expense tracking and reconciliation",
    solution: "AI-powered categorization and sync",
    outcome: "Real-time financial visibility",
    tag: "Finance",
  },
  {
    icon: Newspaper,
    title: "News Scraping & Posting",
    description:
      "Automatically curate industry news and post relevant updates to your channels.",
    problem: "Keeping audience updated with relevant news",
    solution: "AI scrapes, filters, and posts news",
    outcome: "Consistent thought leadership content",
    tag: "Content",
  },
  {
    icon: FileText,
    title: "CRM-to-WhatsApp Workflows",
    description:
      "Sync your CRM data with WhatsApp for seamless customer communication and follow-ups.",
    problem: "Disconnected communication channels",
    solution: "Automated WhatsApp messages from CRM triggers",
    outcome: "Higher response rates, better engagement",
    tag: "Sales",
  },
  {
    icon: Database,
    title: "Facebook Leads to CRM",
    description:
      "Automatically capture leads from Facebook ads and sync them to your CRM instantly.",
    problem: "Manual lead entry causing delays",
    solution: "Real-time sync from ads to CRM",
    outcome: "Instant lead capture, faster follow-up",
    tag: "Lead Gen",
  },
  {
    icon: Clock,
    title: "WhatsApp Campaign Automation",
    description:
      "Schedule and send personalized WhatsApp campaigns to segmented audiences.",
    problem: "Manual WhatsApp outreach is not scalable",
    solution: "Automated, personalized campaign flows",
    outcome: "10x outreach capacity, higher open rates",
    tag: "Marketing",
  },
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Automation{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Real automation workflows that are transforming businesses today.
                See what's possible with intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card
                  key={useCase.title}
                  className="group bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {useCase.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {useCase.description}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-border/50">
                      <div>
                        <span className="text-xs font-medium text-destructive">
                          Problem:
                        </span>
                        <p className="text-xs text-muted-foreground">
                          {useCase.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary">
                          Solution:
                        </span>
                        <p className="text-xs text-muted-foreground">
                          {useCase.solution}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-accent-foreground">
                          Outcome:
                        </span>
                        <p className="text-xs text-muted-foreground">
                          {useCase.outcome}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Don't See Your Use Case?
              </h2>
              <p className="text-muted-foreground mb-8">
                We build custom automation solutions for any business process.
                Let's discuss your specific needs.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
                >
                  Request Custom Automation
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

export default UseCases;
