import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookingFormDialog } from "@/components/BookingFormDialog";
import {
  MessageSquare,
  Users,
  Bot,
  UserCheck,
  Workflow,
  ArrowRight,
  Check,
  Mic,
  Mail,
  MessageCircle,
  Clock,
  BarChart3,
  FileText,
  UserPlus,
  Calendar,
  Database,
  Plug,
  Zap,
} from "lucide-react";

const services = [
  {
    id: "social",
    icon: MessageSquare,
    title: "Social Media Automation",
    description:
      "Automate your entire social media presence with intelligent responses, scheduled posting, and centralized management.",
    features: [
      "Auto-reply to DMs & comments with AI",
      "Keyword-based smart responses",
      "Centralized inbox dashboard for all platforms",
      "Real-time lead notifications",
      "Auto-posting & content scheduling",
      "Engagement analytics & reporting",
    ],
    platforms: ["Instagram", "Facebook", "Twitter", "LinkedIn", "TikTok"],
    gradient: "from-primary to-primary/70",
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM & Sales Automation",
    description:
      "Capture, nurture, and convert leads automatically with intelligent pipeline management and multi-channel follow-ups.",
    features: [
      "Lead capture from ads & forms",
      "Automated pipeline tracking",
      "Multi-channel follow-ups (Email, WhatsApp, SMS)",
      "Deal status updates & alerts",
      "Sales analytics & reporting",
      "Revenue forecasting",
    ],
    platforms: ["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Custom CRMs"],
    gradient: "from-secondary to-secondary/70",
  },
  {
    id: "ai-agents",
    icon: Bot,
    title: "AI Agents & Support Automation",
    description:
      "Deploy intelligent AI chat and voice agents that handle customer inquiries 24/7 with human-like understanding.",
    features: [
      "AI chat agents for websites & apps",
      "AI voice agents for phone support",
      "Intelligent ticket routing",
      "Sentiment analysis & escalation",
      "Support analytics & insights",
      "Knowledge base automation",
    ],
    platforms: ["Intercom", "Zendesk", "Freshdesk", "Custom Solutions"],
    gradient: "from-accent to-accent/70",
  },
  {
    id: "hr",
    icon: UserCheck,
    title: "HR & Recruiting Automation",
    description:
      "Streamline your entire hiring and HR workflow from resume parsing to employee onboarding.",
    features: [
      "Automated resume parsing & scoring",
      "AI-powered candidate ranking",
      "Interview scheduling automation",
      "Candidate follow-up sequences",
      "Onboarding workflow automation",
      "Centralized employee records",
    ],
    platforms: ["Workday", "BambooHR", "Greenhouse", "Lever", "Custom HRIS"],
    gradient: "from-primary to-secondary",
  },
  {
    id: "custom",
    icon: Workflow,
    title: "Custom Workflow Development",
    description:
      "Build tailored automation solutions with unlimited integrations and custom business logic.",
    features: [
      "Custom workflow design & development",
      "500+ API integrations",
      "No-code + custom code solutions",
      "Scalable infrastructure",
      "Real-time monitoring & alerts",
      "Continuous optimization",
    ],
    platforms: ["Any API", "Webhooks", "Custom Systems", "Legacy Software"],
    gradient: "from-secondary to-accent",
  },
];

const additionalCapabilities = [
  { icon: Mic, label: "Voice Automation" },
  { icon: Mail, label: "Email Automation" },
  { icon: MessageCircle, label: "WhatsApp Flows" },
  { icon: Clock, label: "Task Scheduling" },
  { icon: BarChart3, label: "Report Generation" },
  { icon: FileText, label: "Document Processing" },
  { icon: UserPlus, label: "Lead Nurturing" },
  { icon: Calendar, label: "Calendar Management" },
  { icon: Database, label: "Data Sync" },
  { icon: Plug, label: "API Integrations" },
  { icon: Zap, label: "Trigger Workflows" },
  { icon: Bot, label: "AI Assistants" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Automation Services
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                End-to-end automation solutions designed to transform your operations,
                reduce manual work, and accelerate growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 group">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                      <CardContent className="p-8">
                        <div
                          className={`w-full aspect-video rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                        >
                          <service.icon className="w-24 h-24 text-primary-foreground/30" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Capabilities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Additional{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Beyond our core services, we can automate virtually any business process
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {additionalCapabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 text-center group cursor-pointer"
                >
                  <cap.icon className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">{cap.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a free consultation and let's discuss how we can transform your operations.
              </p>
              <BookingFormDialog>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
                >
                  Book Automation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </BookingFormDialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
