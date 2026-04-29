import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const InvitationSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Application Only
          </p>
          <h2 className="text-heading mb-8">
            This Is Not for Everyone — And That's by Design
          </h2>
          <div className="space-y-6 mb-12">
            <p className="text-body-lg">
              Coaching spots are limited. Not because of artificial scarcity, 
              but because genuine attention requires it.
            </p>
            <p className="text-body-lg">
              This is for lifters who are ready to commit. Who understand that 
              results come from structure, not shortcuts. Who want a coach, 
              not a cheerleader.
            </p>
          </div>

          <div className="bg-secondary border border-border p-8 md:p-12 mb-12">
            <h3 className="font-display text-xl tracking-wide mb-4">
              What's Required of You
            </h3>
            <ul className="space-y-3 text-body max-w-md mx-auto text-left">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground">—</span>
                <span>Consistent training (minimum 3x/week)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground">—</span>
                <span>Willingness to track and execute the plan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground">—</span>
                <span>Honest communication and feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground">—</span>
                <span>Long-term mindset over quick fixes</span>
              </li>
            </ul>
          </div>

          <Link to="/apply">
            <Button variant="hero" size="xl">
              Apply for Coaching
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
