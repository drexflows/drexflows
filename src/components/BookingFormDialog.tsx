import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { sendAutomationRequirementToTelegram } from "@/services/telegramService";
import { SuccessMessage } from "@/components/ui/success-message";
import { useSuccessMessage } from "@/hooks/use-success-message";

interface BookingFormDialogProps {
  children: React.ReactNode;
}

export const BookingFormDialog = ({ children }: BookingFormDialogProps) => {
  const { isVisible, title, description, showSuccess, hideSuccess } = useSuccessMessage();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    usecase: "",
  });

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxUN6tkdtuetLRKR_bEIaq5lN-1DpxgaDRX_uK6g3D_7JUuGcyRodkiEbinv4Hti64O4w/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formDataObj = new FormData();
    formDataObj.append("Name", formData.name);
    formDataObj.append("Email", formData.email);
    formDataObj.append("Contact Number", formData.contactNumber);
    formDataObj.append("Usecase", formData.usecase);

    try {
      // Send to Google Sheets (existing functionality)
      const sheetsResponse = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formDataObj,
      });
      const sheetsData = await sheetsResponse.json();

      // Send to Telegram bot (new functionality)
      const telegramSuccess = await sendAutomationRequirementToTelegram({
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        usecase: formData.usecase,
      });

      // Check if both submissions were successful
      if (sheetsData.result === "success" && telegramSuccess) {
        showSuccess(
          "Thank you!",
          "We'll get back to you within 2 hours"
        );
        setFormData({ name: "", email: "", contactNumber: "", usecase: "" });
        setIsOpen(false);
        setStatus("idle");
      } else if (sheetsData.result === "success" && !telegramSuccess) {
        // Google Sheets worked but Telegram failed
        showSuccess(
          "Thank you!",
          "We'll get back to you within 2 hours"
        );
        setFormData({ name: "", email: "", contactNumber: "", usecase: "" });
        console.warn("Data saved to Google Sheets but Telegram notification failed");
        setIsOpen(false);
        setStatus("idle");
      } else {
        setStatus("error");
        setErrorMessage(sheetsData.message || "Error submitting form");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const fields = [
    { id: "name", label: "Full Name", type: "text", icon: "👤" },
    { id: "email", label: "Email Address", type: "email", icon: "✉️" },
    { id: "contactNumber", label: "Phone Number", type: "tel", icon: "📱" },
  ];

  return (
    <>
      <SuccessMessage
        isVisible={isVisible}
        title={title}
        description={description}
        onClose={hideSuccess}
      />
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[460px] p-0 border-0 bg-transparent shadow-none overflow-visible">
        {/* Main Card with glassmorphism */}
        <div 
          className={cn(
            "relative w-full rounded-3xl overflow-hidden",
            "animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]"
          )}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] rounded-3xl" />
          
          {/* Inner content */}
          <div className="relative m-[2px] rounded-[22px] bg-background/95 backdrop-blur-2xl p-8">
            {/* Floating orbs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            
            {/* Header */}
            <div className="relative z-10 text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-[fadeIn_0.6s_ease-out_0.2s_both]">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">AI-Powered</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2 animate-[fadeIn_0.6s_ease-out_0.3s_both]">
                Automation Requirement
              </h2>
              <p className="text-sm text-muted-foreground animate-[fadeIn_0.6s_ease-out_0.4s_both]">
                Tell us about your automation needs
              </p>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)]">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                    <CheckCircle2 className="w-10 h-10 text-background" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">Thank you!</p>
                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 2 hours
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                {fields.map((field, index) => (
                  <div 
                    key={field.id}
                    className="animate-[fadeIn_0.5s_ease-out_both]"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div 
                      className={cn(
                        "relative group rounded-2xl transition-all duration-300",
                        focusedField === field.id && "scale-[1.02]"
                      )}
                    >
                      {/* Glow effect on focus */}
                      <div className={cn(
                        "absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 blur transition-opacity duration-300",
                        focusedField === field.id && "opacity-50"
                      )} />
                      
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-lg z-10">{field.icon}</span>
                        <input
                          type={field.type}
                          id={field.id}
                          placeholder={field.label}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={(e) => handleChange(field.id as keyof typeof formData, e.target.value)}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={cn(
                            "w-full pl-12 pr-4 py-4 rounded-2xl",
                            "bg-muted/50 border-2 border-border/50",
                            "text-foreground text-sm placeholder:text-muted-foreground/70",
                            "outline-none transition-all duration-300",
                            "focus:border-primary focus:bg-background",
                            "hover:border-primary/50 hover:bg-muted/70"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Usecase Field */}
                <div 
                  className="animate-[fadeIn_0.5s_ease-out_both]"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div 
                    className={cn(
                      "relative group rounded-2xl transition-all duration-300",
                      focusedField === "usecase" && "scale-[1.02]"
                    )}
                  >
                    <div className={cn(
                      "absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 blur transition-opacity duration-300",
                      focusedField === "usecase" && "opacity-50"
                    )} />
                    
                    <div className="relative">
                      <span className="absolute left-4 top-4 text-lg z-10">💡</span>
                      <textarea
                        id="usecase"
                        placeholder="Describe your automation requirement..."
                        rows={3}
                        value={formData.usecase}
                        onChange={(e) => handleChange("usecase", e.target.value)}
                        onFocus={() => setFocusedField("usecase")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={cn(
                          "w-full pl-12 pr-4 py-4 rounded-2xl resize-none",
                          "bg-muted/50 border-2 border-border/50",
                          "text-foreground text-sm placeholder:text-muted-foreground/70",
                          "outline-none transition-all duration-300",
                          "focus:border-primary focus:bg-background",
                          "hover:border-primary/50 hover:bg-muted/70"
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div 
                  className="pt-2 animate-[fadeIn_0.5s_ease-out_both]"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full h-14 rounded-2xl text-base font-semibold",
                      "bg-gradient-to-r from-primary via-primary to-secondary",
                      "hover:shadow-[0_20px_40px_-10px_hsl(var(--primary)/0.5)]",
                      "hover:scale-[1.02] active:scale-[0.98]",
                      "transition-all duration-300",
                      "group relative overflow-hidden"
                    )}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Submit Request
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    )}
                  </Button>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-destructive/10 border border-destructive/20 animate-[shake_0.5s_ease-in-out]">
                    <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                    <p className="text-sm text-destructive">{errorMessage}</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};
