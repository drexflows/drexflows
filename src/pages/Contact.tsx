import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactFormToTelegram } from "@/services/telegramService";
import { MeetingBookingDialog } from "@/components/MeetingBookingDialog";
import { SuccessMessage } from "@/components/ui/success-message";
import { useSuccessMessage } from "@/hooks/use-success-message";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "drexflows@gmail.com",
    description: "We typically respond under 2 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Vijayanagar, Indore",
    description: "By appointment only",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Under 2 hours",
    description: "Priority for all inquiries",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const { isVisible, title, description, showSuccess, hideSuccess } = useSuccessMessage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budgetAmount: "",
    currency: "USD",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to Telegram bot
      const success = await sendContactFormToTelegram(formData);
      
      if (success) {
        showSuccess(
          "Message sent successfully!",
          "We'll get back to you within 24 hours."
        );

        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budgetAmount: "",
          currency: "USD",
          message: "",
        });
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
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
      
      <div className="min-h-screen bg-background">
        <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your business with automation? We'd love to hear
                from you. Reach out and let's discuss your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <MessageSquare className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-bold">Send us a message</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interest</Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) =>
                              setFormData((prev) => ({ ...prev, service: value }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="social">
                                Social Media Automation
                              </SelectItem>
                              <SelectItem value="crm">
                                CRM & Sales Automation
                              </SelectItem>
                              <SelectItem value="ai-agents">
                                AI Agents & Support
                              </SelectItem>
                              <SelectItem value="hr">
                                HR & Recruiting Automation
                              </SelectItem>
                              <SelectItem value="custom">
                                Custom Workflow Development
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Estimated Budget</Label>
                        <div className="flex gap-2">
                          <Input
                            id="budgetAmount"
                            name="budgetAmount"
                            type="number"
                            value={formData.budgetAmount}
                            onChange={handleChange}
                            placeholder="Enter amount"
                            className="flex-1"
                          />
                          <Select
                            value={formData.currency}
                            onValueChange={(value) =>
                              setFormData((prev) => ({ ...prev, currency: value }))
                            }
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USD">$ USD</SelectItem>
                              <SelectItem value="INR">₹ INR</SelectItem>
                              <SelectItem value="EUR">€ EUR</SelectItem>
                              <SelectItem value="AED">د.إ AED</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your automation needs, current challenges, and goals..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Calendar className="w-6 h-6 text-primary" />
                      <h2 className="text-xl font-bold">Book a Call</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Prefer a direct conversation? Schedule a free 30-minute
                      consultation to discuss your automation needs.
                    </p>
                    <MeetingBookingDialog>
                      <Button
                        variant="outline"
                        className="w-full border-primary/50 hover:bg-primary/10"
                      >
                        Schedule a Call
                      </Button>
                    </MeetingBookingDialog>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Card key={info.label} className="border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{info.label}</div>
                            <div className="text-sm text-foreground">
                              {info.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {info.description}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
              <p className="text-muted-foreground mb-8">
                Check out our pricing page for frequently asked questions, or
                reach out directly and we'll be happy to help.
              </p>
              <Button variant="outline" asChild>
                <a href="/pricing#faq">View FAQ</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Contact;
