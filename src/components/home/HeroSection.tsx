import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Bot } from "lucide-react";
import { BookingFormDialog } from "@/components/BookingFormDialog";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Automation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              AI-Powered Business Automation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Automate Your Business.
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Scale Faster with AI.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in delay-100">
            We design intelligent automation systems that replace manual work, increase efficiency, and unlock exponential growth for your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200">
            <BookingFormDialog>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-xl shadow-primary/25 px-8 h-14 text-lg group">
                Book Automation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </BookingFormDialog>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 px-8 h-14 text-lg group">
                <Play className="mr-2 w-5 h-5" />
                View Solutions
              </Button>
            </Link>
          </div>

          {/* Pre-Audit Highlight */}
          <div className="mt-16 pt-10 border-t border-border/30 animate-fade-in delay-300">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <Bot className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                <span className="text-primary">Pre-Audit using Automation</span>
                <span className="text-muted-foreground"> — AI-powered workflow analysis before we start</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
