import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import transformation1 from "@/assets/Transformation 2.png";
import transformation2 from "@/assets/Transformation 3.png";
import transformation3 from "@/assets/Transformation 4.png";

const transformations = [
  {
    image: transformation1,
    name: "Alexis L.",
    duration: "16 weeks",
    alt: "Male physique transformation showing significant muscle definition improvement"
  },
  {
    image: transformation2,
    name: "Raphael H.",
    duration: "24 months",
    alt: "Female fitness transformation showing improved muscle tone and definition"
  },
  {
    image: transformation3,
    name: "Mathieu L.",
    duration: "11 weeks",
    alt: "Male back transformation showing improved width and definition"
  }
];

export const ProofSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Real Results
          </p>
          <h2 className="text-heading mb-6">
            Transformations Speak Louder Than Words
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            These aren't lucky outliers. They're the result of structured coaching, 
            precise execution, and unwavering commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {transformations.map((item) => (
            <div 
              key={item.name}
              className="group relative overflow-hidden bg-charcoal"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-xl tracking-wide">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/transformations">
            <Button variant="minimal" size="lg">
              View All Transformations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
