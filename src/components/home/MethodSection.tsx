import { Link } from "react-router-dom";
import { Layers, Target, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Individualized Program",
    description: "Clear training architecture. Form, biomechanics and recovery individualized to meet your goals."
  },
  {
    icon: Target,
    title: "Nutrition",
    description: "There is no bad or superfood everyone reacts differently and your plan should look like it's made for only you."
  },
  {
    icon: RefreshCw,
    title: "Check-ins",
    description: "This isn't generic coaching. You'll receive continuous guidance, accountability, and real support every step of the way."
  }
];

export const MethodSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            The Method
          </p>
          <h2 className="text-heading">
            Three Pillars of Coaching
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <Link
              to="/apply"
              key={pillar.title}
              onClick={() => window.scrollTo(0, 0)}
              className="group p-8 md:p-10 bg-secondary border border-border hover:border-foreground/20 transition-all duration-500 cursor-pointer block"
            >
              <pillar.icon
                className="w-8 h-8 mb-6 text-muted-foreground group-hover:text-foreground transition-colors"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-2xl tracking-wide mb-4">
                {pillar.title}
              </h3>
              <p className="text-body">
                {pillar.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
