import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { BookingFormDialog } from "@/components/BookingFormDialog";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Ready to Transform Your Business?
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let AI Run Your{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Operations
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Schedule a free automation audit and discover how much time and money you could save with intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookingFormDialog>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-xl shadow-primary/25 px-8 h-14 text-lg group"
              >
                Book Automation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </BookingFormDialog>
            <Link to="/use-cases">
              <Button size="lg" variant="outline" className="px-8 h-14 text-lg">
                Explore Use Cases
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No commitment required • 30-minute consultation • Custom recommendations
          </p>
        </div>
      </div>
    </section>
  );
};
