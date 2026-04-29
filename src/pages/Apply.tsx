import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const Apply = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    goal: "",
    frustration: "",
    willTrack: "",
    whyNow: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In production, this would send to a backend
    console.log("Application submitted:", formData);

    toast({
      title: "Application Received",
      description: "Thank you for applying. You'll hear back within 48 hours.",
    });

    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <Layout>
        <section className="section-padding min-h-[70vh] flex items-center">
          <div className="container-narrow text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-8 text-foreground" strokeWidth={1} />
            <h1 className="text-heading mb-6">Application Received</h1>
            <p className="text-body-lg max-w-xl mx-auto">
              Thank you for applying. Your application will be reviewed within 48 hours.
              If we're a good fit, you'll receive next steps via email.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Apply for Coaching
          </p>
          <h1 className="text-display mb-8">
            Start Here
          </h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            This application helps us understand your goals, current situation,
            and whether we're a good fit to work together.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container-narrow">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm uppercase tracking-widest">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="bg-secondary border-border focus:border-foreground h-12"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm uppercase tracking-widest">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-secondary border-border focus:border-foreground h-12"
              />
            </div>

            {/* Training Experience */}
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-sm uppercase tracking-widest">
                Training Experience (Years) *
              </Label>
              <Input
                id="experience"
                type="text"
                required
                placeholder="e.g., 3 years"
                value={formData.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
                className="bg-secondary border-border focus:border-foreground h-12"
              />
            </div>

            {/* Primary Goal */}
            <div className="space-y-2">
              <Label htmlFor="goal" className="text-sm uppercase tracking-widest">
                Primary Goal *
              </Label>
              <Textarea
                id="goal"
                required
                placeholder="What physique goal are you working towards?"
                value={formData.goal}
                onChange={(e) => handleChange("goal", e.target.value)}
                className="bg-secondary border-border focus:border-foreground min-h-24 resize-none"
              />
            </div>

            {/* Biggest Frustration */}
            <div className="space-y-2">
              <Label htmlFor="frustration" className="text-sm uppercase tracking-widest">
                Primary Barrier *
              </Label>
              <Textarea
                id="frustration"
                required
                placeholder="What is the primary barrier between you and further progress?"
                value={formData.frustration}
                onChange={(e) => handleChange("frustration", e.target.value)}
                className="bg-secondary border-border focus:border-foreground min-h-24 resize-none"
              />
            </div>

            {/* Willingness to Track */}
            <div className="space-y-4">
              <Label className="text-sm uppercase tracking-widest">
                Are you willing to track your training and follow a structured program? *
              </Label>
              <RadioGroup
                value={formData.willTrack}
                onValueChange={(value) => handleChange("willTrack", value)}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="yes" id="track-yes" className="border-border" />
                  <Label htmlFor="track-yes" className="cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="no" id="track-no" className="border-border" />
                  <Label htmlFor="track-no" className="cursor-pointer">No</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Why Coaching Now */}
            <div className="space-y-2">
              <Label htmlFor="whyNow" className="text-sm uppercase tracking-widest">
                Why Coaching Now? *
              </Label>
              <Textarea
                id="whyNow"
                required
                placeholder="What made you decide to seek coaching at this point?"
                value={formData.whyNow}
                onChange={(e) => handleChange("whyNow", e.target.value)}
                className="bg-secondary border-border focus:border-foreground min-h-24 resize-none"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" variant="hero" size="xl" className="w-full">
                Submit Application
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Applications are reviewed within 48 hours. You'll receive a response
              regardless of the outcome.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
