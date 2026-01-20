import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendPlanSelectionToTelegram } from "@/services/telegramService";
import { SuccessMessage } from "@/components/ui/success-message";
import { useSuccessMessage } from "@/hooks/use-success-message";

interface PlanSelectionDialogProps {
  children: React.ReactNode;
  selectedPlan?: {
    name: string;
    price: string;
    period: string;
    projectPrice?: string;
  };
}

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", 
  "India", "Japan", "China", "Brazil", "Mexico", "Spain", "Italy", "Netherlands",
  "Sweden", "Norway", "Denmark", "Finland", "Switzerland", "Austria", "Belgium",
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Egypt", "Jordan",
  "Lebanon", "Turkey", "South Africa", "Nigeria", "Kenya", "Ghana", "Morocco",
  "Singapore", "Malaysia", "Thailand", "Philippines", "Indonesia", "Vietnam",
  "South Korea", "Taiwan", "Hong Kong", "New Zealand", "Argentina", "Chile",
  "Colombia", "Peru", "Venezuela", "Uruguay", "Paraguay", "Bolivia", "Ecuador"
];

const plans = [
  {
    name: "Starter",
    price: "$11",
    period: "/month",
    projectPrice: "",
    features: ["Up to 3 automated workflows", "Basic platform integrations", "Email & chat support"]
  },
  {
    name: "Growth", 
    price: "$49",
    period: "/month",
    projectPrice: "",
    features: ["Up to 10 automated workflows", "Advanced AI workflows", "Priority support"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    projectPrice: "",
    features: ["Unlimited workflows", "Dedicated architect", "24/7 support"]
  }
];

export const PlanSelectionDialog = ({ children, selectedPlan }: PlanSelectionDialogProps) => {
  const { toast } = useToast();
  const { isVisible, title, description, showSuccess, hideSuccess } = useSuccessMessage();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    selectedPlan: selectedPlan?.name || "",
    pricingType: "monthly", // monthly or project
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendPlanSelectionToTelegram({
        name: formData.name,
        email: formData.email,
        number: formData.number,
        country: formData.country,
        selectedPlan: formData.selectedPlan,
        pricingType: formData.pricingType,
      });
      
      if (success) {
        showSuccess(
          "Plan selection sent successfully!",
          "We'll contact you within 24 hours to get started."
        );

        setFormData({
          name: "",
          email: "",
          number: "",
          country: "",
          selectedPlan: selectedPlan?.name || "",
          pricingType: "monthly",
        });
        setIsOpen(false);
      } else {
        toast({
          title: "Error sending plan selection",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending plan selection",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const selectedPlanDetails = plans.find(plan => plan.name === formData.selectedPlan);

  return (
    <>
      <SuccessMessage
        isVisible={isVisible}
        title={title}
        description={description}
        onClose={hideSuccess}
      />
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Get Started with Automation
          </DialogTitle>
          <DialogDescription>
            Tell us about yourself and select your preferred plan to get started.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Personal Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="plan-name">Full Name *</Label>
                <Input
                  id="plan-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan-email">Email Address *</Label>
                <Input
                  id="plan-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="plan-number">Phone Number *</Label>
                <Input
                  id="plan-number"
                  name="number"
                  type="tel"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan-country">Country *</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, country: value }))
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Plan Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Select Your Plan</h3>
            
            <div className="grid gap-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`cursor-pointer transition-all ${
                    formData.selectedPlan === plan.name
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  } ${plan.popular ? "border-primary/50" : ""}`}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, selectedPlan: plan.name }))
                  }
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          formData.selectedPlan === plan.name
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}>
                          {formData.selectedPlan === plan.name && (
                            <Check className="w-2 h-2 text-primary-foreground m-0.5" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{plan.name}</h4>
                            {plan.popular && (
                              <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {plan.features.slice(0, 2).join(", ")}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{plan.price}{plan.period}</div>
                        {plan.projectPrice && (
                          <div className="text-xs text-muted-foreground">{plan.projectPrice}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !formData.selectedPlan}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              {isSubmitting ? "Sending..." : "Get Started"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
};
