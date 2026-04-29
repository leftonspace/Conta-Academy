import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const ebooks = [
  {
    title: "The Conta System",
    subtitle: "The nutrition and training guideline",
    description: "A deep dive on how to build a training and nutrition architecture respecting your recovery capacity and physiology.",
    pages: "48 pages",
    price: "Free"
  },
  {
    title: "Understanding Biomechanics",
    subtitle: "How biomechanics can drastically change your physique",
    description: "Understanding how form, intent, and muscle mechanics create better results than simply adding weight to the bar.",
    pages: "72 pages",
    price: "$19"
  },
  {
    title: "The Long Game",
    subtitle: "Natural Physique Development Over Years, Not Weeks",
    description: "A realistic framework for understanding progress timelines, setting expectations, and building sustainable training habits.",
    pages: "56 pages",
    price: "$24"
  }
];

const Ebooks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Educational Resources
          </p>
          <h1 className="text-display mb-8">
            Ebooks
          </h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            In-depth guides that show you how a serious coach thinks about
            training, nutrition, and long-term physique development.
          </p>
        </div>
      </section>

      {/* Ebooks Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-8">
            {ebooks.map((ebook, index) => (
              <div
                key={ebook.title}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12 bg-secondary border border-border"
              >
                <div className="lg:col-span-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                    {ebook.pages}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-2">
                    {ebook.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {ebook.subtitle}
                  </p>
                  <p className="text-body max-w-xl">
                    {ebook.description}
                  </p>
                </div>

                <div className="flex flex-col justify-center items-start lg:items-end">
                  <p className="font-display text-4xl mb-4">{ebook.price}</p>
                  <Button
                    variant={index === 0 ? "hero" : "heroOutline"}
                    size="lg"
                    className="group"
                  >
                    {ebook.price === "Free" ? (
                      <>
                        <Download className="w-4 h-4" />
                        Download Free
                      </>
                    ) : (
                      <>
                        Get Ebook
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="text-heading mb-6">Ready to Take It Further?</h2>
          <p className="text-body-lg max-w-xl mx-auto mb-12">
            If the ideas in the eBooks resonate with you—and the philosophy behind them makes sense—coaching is the next step.
          </p>
          <Link to="/coaching">
            <Button variant="hero" size="xl">
              Learn About Coaching
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Ebooks;
