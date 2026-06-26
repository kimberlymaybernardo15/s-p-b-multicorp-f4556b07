import { Star, ShieldCheck, BadgeCheck, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import dewolfeVideo from "@/assets/dewolfe-testimonial.mp4.asset.json";

type Testimonial = {
  videoUrl: string;
  name: string;
  business: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    videoUrl: dewolfeVideo.url,
    name: "Dion De Wolfe",
    business: "DeWolfe & Sons Moving — Licensed #149881",
    quote:
      "I can't say enough about the incredible work that Steve did on my business website. From the very beginning, he took my vision and turned it into a stunning, professional online presence that truly represents my brand. Steve went above and beyond, handling every detail with care and expertise. Thanks to him, my business is thriving, and I couldn't be prouder. I wholeheartedly recommend Steve's services to anyone looking to take their business to the next level.",
    rating: 5,
  },
];

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
            Client Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real feedback from businesses we've worked with.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <TrustBadge icon={ShieldCheck} label="Verified Reviews" />
            <TrustBadge icon={BadgeCheck} label="Licensed & Insured Clients" />
            <TrustBadge icon={Award} label="5-Star Rated" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={`${i * 0.1}s`} />
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="glass-card p-10 text-center electric-glow-hover transition-transform duration-300 hover:-translate-y-1">
            <h3 className="font-heading text-2xl md:text-3xl font-bold metal-text mb-3">
              Ready to grow your business online?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the businesses leveling up with SPB MultiCorp.
            </p>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold electric-glow electric-glow-hover transition-all"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-secondary-foreground">
      <Icon size={16} className="text-primary" />
      <span>{label}</span>
    </div>
  );
}

function TestimonialCard({
  videoUrl,
  name,
  business,
  quote,
  rating,
  delay,
}: Testimonial & { delay: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`glass-card overflow-hidden group transition-all duration-700 hover:-translate-y-1 electric-glow-hover ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="relative w-full bg-black aspect-video">
        <video
          src={videoUrl}
          controls
          preload="none"
          playsInline
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <div className="p-8">
        <div className="flex items-center gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? "fill-primary text-primary" : "text-muted-foreground/40"}
            />
          ))}
        </div>

        <blockquote className="text-secondary-foreground leading-relaxed italic mb-6">
          "{quote}"
        </blockquote>

        <div className="border-t border-border pt-4">
          <p className="font-heading font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{business}</p>
        </div>
      </div>
    </div>
  );
}
