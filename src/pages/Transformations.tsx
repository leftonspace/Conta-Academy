import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Star, User, ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import transformation1 from "@/assets/Transformation 2.png";
import transformation2 from "@/assets/Transformation 3.png";
import transformation3 from "@/assets/Transformation 4.png";
import alexTransformation from "@/assets/Transformation 1.png";

const transformations = [
  {
    image: alexTransformation,
    name: "Alex C.",
    duration: "7 years",
    quote: "I made most of my gains in the last 3 years when i understood programming and data, no more guessing what workout i do today.",
    age: "28",
    alt: "Male bodybuilder transformation showing dramatic muscle development"
  },
  {
    image: transformation1,
    name: "Caroline N.",
    duration: "18 months",
    quote: "Training with Alex gave me a lot of confidence. I stopped guessing—everything was structured and followed a clear timeline. It gave me a real sense of peace of mind.",
    age: "54",
    alt: "Female physique transformation with improved muscle definition"
  },
  {
    image: transformation2,
    name: "Raphael H.",
    duration: "24 months",
    quote: "No hype, no shortcuts. Just clear guidance and consistent progress. Exactly what I needed.",
    age: "31",
    alt: "Male fitness transformation with improved muscle tone"
  },
  {
    image: transformation3,
    name: "Mathieu L.",
    duration: "11 weeks",
    quote: "My back development was always a weakness. The targeted approach finally fixed years of imbalance.",
    age: "42",
    alt: "Male back transformation showing improved width and definition"
  }
];

const reviews = [
  {
    name: "You S.",
    rating: 5,
    text: "Coaching très engagé et assidu. Des entraînements de qualité, avec des explications de mouvements très détaillées, grâce aux connaissances approfondies et scientifiques du coach. Le tout dans une ambiance sympathique, drôle et légère.",
    translation: "Highly engaged and diligent coaching. High-quality workouts, with very detailed movement explanations, thanks to the coach's deep and scientific knowledge. All in a friendly, funny, and light-hearted atmosphere."
  },
  {
    name: "Gali Z.",
    rating: 5,
    text: "I really like the weekly check-ins, I find it super effective since we can make modifications quite quickly based on results/feedback! I like how personalized Alex’s coaching is, when something is complicated or needs more explaining, he sends a video explanation and makes sure we’re comfortable and understand everything."
  },
  {
    name: "Micheal K.",
    rating: 5,
    text: "Alex est super honnête et un coach vraiment de qualité. Tu sais bien parler à la personne avec une grande intelligence ça fais de toi un coach professionnel que je recommande à tout le monde.",
    translation: "Alex is super honest and a truly high-quality coach. You know how to talk to people with great intelligence, which makes you a professional coach that I recommend to everyone."
  },
  {
    name: "Carlos C.",
    rating: 5,
    text: "Pour moi C'est un coaching sur mesure. Je conseille fortement Alex , car il te met a l'aise. Il s'adapte a tes besoins.Il t'acconpagne sur ton parcours santé. C'est un grand motivateur.\nC'est simple, avec Alex tout est simple.",
    translation: "For me, it's tailor-made coaching. I highly recommend Alex, because he makes you feel comfortable. He adapts to your needs. He accompanies you on your health journey. He is a great motivator.\nIt's simple, with Alex everything is simple."
  },
  {
    name: "Annie P.",
    rating: 4,
    text: "Après seulement 2 semaines, j’aime les menus et les exercices qui sont fait pour nous et pour nous dépasser.",
    translation: "After only 2 weeks, I like the menus and exercises that are made for us and to push us further."
  },
  {
    name: "Anonymous",
    rating: 5,
    text: "Après quelques semaines, ce n’est pas juste la perte de poids qui est positive. Je dors mieux, j’ai de l’énergie pour m’entraîner et accomplir mes journées de travail sans baisse d’énergie dans la journée. Je recommande à tout le monde le coaching.",
    translation: "After a few weeks, it's not just the weight loss that is positive. I sleep better, I have the energy to train and get through my work days without a drop in energy during the day. I recommend the coaching to everyone."
  },
  {
    name: "Anonymous",
    rating: 5,
    text: "Alex est soucieux de nos besoins et de nos objectifs. Il est respectueux et a l’écoute.",
    translation: "Alex is mindful of our needs and goals. He is respectful and attentive."
  },
  {
    name: "Edith T.",
    rating: 5,
    text: "Se faire coacher par Alex est une expérience à la fois rassurante et enrichissante. Il prend le temps de bien comprendre nos besoins, de nous guider avec clarté et de nous accompagner à chaque étape. Son écoute attentive lui permet d’offrir un coaching véritablement personnalisé, parfaitement adapté à chacun.",
    translation: "Being coached by Alex is both a reassuring and enriching experience. He takes the time to truly understand our needs, guide us clearly, and support us every step of the way. His attentive listening allows him to offer truly personalized coaching, perfectly adapted to each individual."
  },
  {
    name: "Marcus T.",
    rating: 5,
    text: "My overall strength has skyrocketed. But more importantly, I finally understand the 'why' behind my training. Highly recommended for serious lifters."
  }
];

const ReviewCard = ({ review }: { review: any }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="bg-background border border-border p-6 rounded-sm flex flex-col h-full min-h-[280px]">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border flex-shrink-0">
          <User className="w-6 h-6 text-muted-foreground" />
        </div>
        <div>
          <h4 className="font-display text-lg">{review.name}</h4>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${index < review.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-body flex-grow italic text-muted-foreground whitespace-pre-wrap">
        "{showTranslation && review.translation ? review.translation : review.text}"
      </p>
      {review.translation && (
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="text-xs text-muted-foreground hover:text-primary mt-4 self-start underline underline-offset-4 transition-colors"
        >
          {showTranslation ? "Show Original" : "See Translation"}
        </button>
      )}
    </div>
  );
};

const Transformations = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Real Results
          </p>
          <h1 className="text-display mb-8">
            Transformations
          </h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            These aren't exceptional outliers. They're the result of structured coaching,
            precise execution, and unwavering commitment to the process.
          </p>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            {transformations.map((item) => (
              <div
                key={item.name}
                className="group bg-secondary border border-border overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full aspect-[4/3] object-contain bg-secondary"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl tracking-wide">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Age {item.age}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </div>
                  <p className="text-body italic">"{item.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => {
                document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding bg-secondary border-t border-border overflow-hidden">
        <div className="container-wide px-4 md:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-heading">Client Experiences</h2>
            <p className="text-body-lg text-muted-foreground mt-4">Real feedback from people who trusted the process.</p>
          </div>

          <div className="absolute top-0 right-4 md:right-8 hidden md:block">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex flex-col items-end cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-display">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    Hover for details <ChevronDown className="w-3 h-3" />
                  </p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent align="end" className="w-72 p-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="font-semibold text-lg">4.9 out of 5</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Based on {reviews.length} reviews</p>
                  
                  <div className="space-y-2 text-sm">
                    {[
                      { stars: 5, percentage: 89 },
                      { stars: 4, percentage: 11 },
                      { stars: 3, percentage: 0 },
                      { stars: 2, percentage: 0 },
                      { stars: 1, percentage: 0 },
                    ].map((row) => (
                      <div key={row.stars} className="flex items-center gap-3">
                        <span className="w-12 text-muted-foreground">{row.stars} star</span>
                        <div className="flex-grow h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${row.percentage}%` }}
                          />
                        </div>
                        <span className="w-8 text-right text-muted-foreground">{row.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static transform-none h-12 w-12 bg-background border-border hover:bg-secondary" />
              <CarouselNext className="static transform-none h-12 w-12 bg-background border-border hover:bg-secondary" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="text-heading mb-6">Your Transformation Awaits</h2>
          <p className="text-body-lg max-w-xl mx-auto mb-12">
            If you're ready for structured progress and results that match your effort,
            start with an application.
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

export default Transformations;
