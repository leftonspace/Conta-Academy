import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/Video correcting form.mp4";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative container-wide px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-display animate-fade-up">
            Structure.<br />
            Precision.<br />
            Results.
          </h1>

          <div className="mt-8 space-y-4 animate-fade-up delay-200">
            <p className="text-body-lg">
              You train hard. You stay consistent.
            </p>
            <p className="text-body-lg">
              Yet your physique isn't changing the way it should.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium">
              That's not a motivation issue — it's a structure problem.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Link to="/apply">
              <Button variant="hero" size="xl">
                Apply for Coaching
              </Button>
            </Link>
            <Link to="/transformations">
              <Button variant="heroOutline" size="xl">
                View Results
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
