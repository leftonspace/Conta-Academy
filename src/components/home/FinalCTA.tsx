import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-narrow text-center">
        <h2 className="text-heading mb-6">
          Ready to Build the Physique You're Capable Of?
        </h2>
        <p className="text-body-lg max-w-2xl mx-auto mb-12">
          If you're serious about structured progress and elite-level attention 
          to your training, this is where it starts.
        </p>
        <Link to="/apply">
          <Button variant="hero" size="xl">
            Apply for Coaching
          </Button>
        </Link>
      </div>
    </section>
  );
};
