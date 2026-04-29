import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const whatItIs = [
  "Individualized training programming",
  "Form and execution correction via video review",
  "Progressive overload tracking and adjustments",
  "Nutrition guidance tailored to your goals",
  "Daily support and weekly check-ins",
  "New Program Strategy every 6 to 8 weeks"
];

const whoItsFor = [
  "People who value structure over randomness",
  "People are willing to track and execute consistently",
  "People who are committed to long-term progress",
  "People who understand their WHY or willing to find it"
];

const whoItsNotFor = [
  "Shortcut seekers looking for magic solutions",
  "Inconsistent trainees who can't commit to 3+ sessions per week",
  "Anyone unwilling to follow structure or track progress",
  "People expecting overnight transformations"
];

const process = [
  { step: "01", title: "Apply", description: "Complete the application form with your training history and goals." },
  { step: "02", title: "Review", description: "Your application is reviewed to ensure mutual fit and commitment." },
  { step: "03", title: "Onboarding", description: "1 hour call to understand and explain the strategy we are going to use with you." },
  { step: "04", title: "Execute", description: "Begin your individualized program with ongoing support and adjustments." }
];

const Coaching = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Application Only
          </p>
          <h1 className="text-display mb-8">
            Individualized Coaching.<br />No Templates.
          </h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            We are all different so should your program be. This coaching is designed around your body, your schedule, and your goals.
          </p>
        </div>
      </section>

      {/* What This Coaching Is */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-heading mb-8">What This Coaching Is</h2>
              <ul className="space-y-4">
                {whatItIs.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-body-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary p-8 md:p-12 border border-border">
              <h3 className="text-subheading mb-6">Monthly Investment</h3>
              <p className="text-body mb-8">
                Coaching is priced to reflect the time, attention, and expertise
                invested in your development. Specific pricing is discussed during
                the application review (no long-term contract needed).
              </p>
              <Link to="/apply">
                <Button variant="hero" size="lg" className="w-full">
                  Apply to Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For / Not For */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-heading mb-8">Who It's For</h2>
              <ul className="space-y-4">
                {whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-body-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-heading mb-8">Who It's Not For</h2>
              <ul className="space-y-4">
                {whoItsNotFor.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-body-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-heading">The Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step}>
                <p className="font-display text-5xl text-muted-foreground/30 mb-4">
                  {item.step}
                </p>
                <h3 className="font-display text-xl tracking-wide mb-3">{item.title}</h3>
                <p className="text-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-secondary border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="text-heading mb-6">Ready to Start?</h2>
          <p className="text-body-lg mb-12 max-w-xl mx-auto">
            Applications are reviewed within 48 hours. If we're a good fit,
            you'll receive next steps to begin.
          </p>
          <Link to="/apply">
            <Button variant="hero" size="xl">
              Apply for Coaching
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Coaching;
