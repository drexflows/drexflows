import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Users, 
  Bot, 
  UserCheck, 
  Workflow,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Social Media Automation",
    description: "Auto-reply to DMs, comments, and mentions. Schedule posts and centralize your inbox.",
    link: "/services#social",
    color: "from-primary to-primary/70",
  },
  {
    icon: Users,
    title: "CRM & Sales Automation",
    description: "Capture leads, track pipelines, and automate follow-ups across all channels.",
    link: "/services#crm",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Bot,
    title: "AI Agents & Support",
    description: "Deploy intelligent chat and voice agents for 24/7 customer support.",
    link: "/services#ai-agents",
    color: "from-accent to-accent/70",
  },
  {
    icon: UserCheck,
    title: "HR & Recruiting Automation",
    description: "Automate resume parsing, candidate ranking, and onboarding workflows.",
    link: "/services#hr",
    color: "from-primary to-secondary",
  },
  {
    icon: Workflow,
    title: "Custom Workflow Development",
    description: "Build tailored automation solutions with API integrations and custom logic.",
    link: "/services#custom",
    color: "from-secondary to-accent",
  },
];

export const ServicesOverview = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automate
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end automation solutions designed to streamline your operations and accelerate growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
