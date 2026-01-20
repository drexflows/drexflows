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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendMeetingRequestToTelegram } from "@/services/telegramService";
import { SuccessMessage } from "@/components/ui/success-message";
import { useSuccessMessage } from "@/hooks/use-success-message";

interface MeetingBookingDialogProps {
  children: React.ReactNode;
}

export const MeetingBookingDialog = ({ children }: MeetingBookingDialogProps) => {
  const { toast } = useToast();
  const { isVisible, title, description, showSuccess, hideSuccess } = useSuccessMessage();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    purpose: "",
    gmail: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send meeting request to Telegram bot
      const success = await sendMeetingRequestToTelegram(formData);
      
      if (success) {
        showSuccess(
          "Meeting request sent successfully!",
          "We'll contact you within 24 hours to schedule your meeting."
        );

        setFormData({
          name: "",
          number: "",
          purpose: "",
          gmail: "",
        });
        setIsOpen(false);
      } else {
        toast({
          title: "Error sending meeting request",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending meeting request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Schedule a Meeting
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="meeting-name">Full Name *</Label>
            <Input
              id="meeting-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="meeting-number">Phone Number *</Label>
            <Input
              id="meeting-number"
              name="number"
              type="tel"
              value={formData.number}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="meeting-gmail">Gmail Address *</Label>
            <Input
              id="meeting-gmail"
              name="gmail"
              type="email"
              value={formData.gmail}
              onChange={handleChange}
              placeholder="john@gmail.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="meeting-purpose">Purpose of Meeting *</Label>
            <Textarea
              id="meeting-purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Describe what you'd like to discuss in the meeting..."
              rows={3}
              required
            />
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
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              {isSubmitting ? "Sending..." : "Schedule Meeting"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
};
