import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Mail, Calendar, FileText, Phone, TrendingUp } from "lucide-react";

const useCases = [
  {
    icon: MessageCircle,
    title: "AI Chat Agents",
    description: "Deploy intelligent chatbots that handle customer inquiries 24/7 with human-like responses.",
    tag: "Support",
  },
  {
    icon: Mail,
    title: "Email Categorization",
    description: "AI-powered email sorting that routes messages to the right team automatically.",
    tag: "Productivity",
  },
  {
    icon: Calendar,
    title: "Appointment Automation",
    description: "Automated scheduling with reminders, follow-ups, and calendar sync.",
    tag: "Scheduling",
  },
  {
    icon: FileText,
    title: "CRM-to-WhatsApp",
    description: "Sync your CRM data with WhatsApp for seamless customer communication.",
    tag: "Sales",
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    description: "Intelligent voice bots for cold calling, lead qualification, and support.",
    tag: "Communication",
  },
  {
    icon: TrendingUp,
    title: "Sales Reporting",
    description: "Automated daily/weekly reports with insights delivered to your inbox or Slack.",
    tag: "Analytics",
  },
];

export const FeaturedUseCases = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Real automation workflows that are transforming businesses today
            </p>
          </div>
          <Link to="/use-cases">
            <Button variant="outline" className="group">
              View All Use Cases
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card
              key={useCase.title}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
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
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
