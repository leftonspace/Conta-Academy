import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import coachImage from "@/assets/coach-posing.jpg.png";

const principles = [
  {
    title: "Individualization is Non-Negotiable",
    description: "Your body is unique. Your training should be too. Generic programs produce generic results."
  },
  {
    title: "Precision Creates Progress",
    description: "It's not about training harder — it's about training smarter. Biomechanics, execution, and intent matter more than weight on the bar."
  },
  {
    title: "Balance is Essential",
    description: "A balance approach to training and nutrition supports an attractive, well-proportioned physique without sacrificing lifestyle, and staying injury-free."
  },
  {
    title: "Consistency Creates Results",
    description: "Building a strong, aesthetic physique is a long game. Sustainable progress comes from disciplined repetition, patience, and relentless commitment over time."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                About
              </p>
              <h1 className="text-display mb-8">
                The Approach
              </h1>
              <p className="text-body-lg mb-6">
                This isn't about hype or motivation speeches. It's not about chasing soreness, exhaustion, or trends.
              </p>
              <p className="text-body-lg mb-6">
                It's about results built through structure, precision, and ruthless execution.
              </p>
              <p className="text-body-lg mb-6">
                After years of training and coaching, one pattern became obvious: the lifters who transform their physiques aren't the ones who train the hardest. They're the ones who train with intelligence, manage recovery, and progress with intent over time.
              </p>
              <p className="text-body-lg">
                This is a system for lifters who value accuracy over ego and long-term results over short-term hype.
              </p>
            </div>
            <div className="relative">
              <img
                src={coachImage}
                alt="Coach correcting client form during training"
                className="w-full aspect-[3/4] object-cover rounded-sm"
                style={{ objectPosition: "center bottom" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent rounded-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-transparent rounded-sm md:block hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-heading">Coaching Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="p-8 md:p-10 bg-secondary border border-border"
              >
                <h3 className="font-display text-2xl tracking-wide mb-4">
                  {principle.title}
                </h3>
                <p className="text-body">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <h2 className="text-heading mb-8 text-center">Why This Exists</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-body-lg">
              This coaching exists because I kept seeing the same pattern especially among natural lifters.
            </p>
            <p className="text-body-lg">
              Every day, people are told their potential is limited. Social media reinforces the need of shortcuts to achieve your best version. If results don't come quickly, you're doing something wrong. Over time, this creates doubt and disconnects people from what's truly possible naturally. I don't blame you.
            </p>
            <p className="text-body-lg">
              I built this system to challenge that narrative.
            </p>
            <p className="text-body-lg">
              When training, nutrition, recovery, and execution are aligned correctly, the natural potential of a person is far greater than most believe. Just like an eagle sheds worn feathers to preserve perfect flight and is always improving. We train with precision to build your strongest self.
            </p>
            <p className="text-lg text-foreground font-medium">
              This is the natural path.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="text-heading mb-6">Ready to Work Together?</h2>
          <p className="text-body-lg max-w-xl mx-auto mb-12">
            If this resonates with how you want to approach your training,
            the next step is simple.
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

export default About;
