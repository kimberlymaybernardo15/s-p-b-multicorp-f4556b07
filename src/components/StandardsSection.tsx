import { Heart, Award, Headphones, Users2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const standards = [
  {
    icon: Heart,
    title: "The Golden Rule",
    body: [
      '"You hear a lot of people say it, but we live by it."',
      "From our clients to our staff, everybody here at SPB MultiCorp leads by treating others how they would like to be treated with dignity and respect.",
      "No matter your race, religion, or gender, inside and outside of SPB MultiCorp, you will be met with respect, professionalism, and dignity.",
      "Here at SPB MultiCorp, we treat everyone as equals, regardless of position. Every voice matters, and leadership maintains an open-door policy.",
      "We maintain zero tolerance for anything less than equality, respect, dignity, and professionalism from both employees and clients.",
      "We reserve the right to immediately terminate employment, partnerships, or client relationships that violate these standards.",
    ],
  },
  {
    icon: Award,
    title: "SPB Quality Guarantee",
    body: [
      "SPB MultiCorp's reputation is built on client satisfaction, trust, and measurable results.",
      "Regardless of project size or scope, our team is committed to executing every detail with precision, professionalism, and purpose.",
      "Our goal is not only to meet expectations but to exceed them.",
      "At SPB MultiCorp, quality is not optional; it is our standard.",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    body: [
      "Customer satisfaction and communication remain top priorities at SPB MultiCorp.",
      "We are committed to clear, responsive, and professional communication throughout every stage of a project.",
      "Our team understands that strong support builds strong partnerships.",
      "Our clients are never treated like numbers; they are treated like partners.",
    ],
  },
  {
    icon: Users2,
    title: "The SPB Culture",
    body: [
      "At SPB MultiCorp, we believe strong companies are built through teamwork, accountability, leadership, and continuous growth.",
      "We strive to create an environment where employees feel valued, supported, heard, and motivated to succeed.",
      "Our culture is built on integrity, professionalism, discipline, innovation, and mutual respect.",
      "As our company grows, we remain committed to building a workplace that reflects the same standards we proudly deliver to our clients.",
    ],
  },
];

export default function StandardsSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section aria-labelledby="standards" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
              About Us
            </p>
            <h2
              id="standards"
              className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4"
            >
              Our Standards
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Values, Guarantee &amp; Culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {standards.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className="glass-card p-8 md:p-10 electric-glow-hover flex flex-col gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold metal-text">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground text-base leading-relaxed">
                    {item.body.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
