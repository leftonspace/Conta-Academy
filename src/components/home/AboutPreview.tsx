import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import coachImage from "@/assets/coach-correcting-form.jpg.png";

export const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              The Coach
            </p>
            <h2 className="text-heading mb-8">
              Why Generic Programs Fail
            </h2>
            <div className="space-y-6 mb-8">
              <p className="text-body-lg">
                Most programs treat you as an average. They give you the same sets, 
                reps, and progressions as everyone else. But your body isn't average.
              </p>
              <p className="text-body-lg">
                Real progress requires understanding your specific biomechanics, 
                recovery capacity, and weak points. It requires someone who sees 
                what you can't.
              </p>
              <p className="text-lg text-foreground font-medium">
                Structure beats motivation. Precision creates results. 
                This is coaching at a different level.
              </p>
            </div>
            <Link to="/about">
              <Button variant="minimal" size="lg">
                Learn More About the Approach
              </Button>
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={coachImage}
                alt="Coach correcting client form during training session"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
