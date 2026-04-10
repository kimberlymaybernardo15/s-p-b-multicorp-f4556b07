import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Megaphone } from "lucide-react";

const leaders = [
  {
    name: "Steven R. Stapleton",
    role: "Founder & CEO",
    icon: Award,
    bio: "A former wildland derrick man known as the \"Iron Cowboy,\" Steven brings decades of rugged, mission-critical experience to digital marketing. A NASA-affiliated responder and Marquis Who's Who honoree, he bridges raw tenacity with cutting-edge AI strategy to drive unparalleled results.",
  },
  {
    name: "Kim Bernardo",
    role: "Director of Digital Media & Partner",
    icon: Megaphone,
    bio: "A top-tier digital strategist with deep expertise in social media advertising, Kim architects high-converting campaigns across every major platform. Her data-driven approach and creative instincts make her the engine behind S-P-B MultiCorp's client growth.",
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        <Heading />
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((l, i) => (
            <LeaderCard key={l.name} {...l} delay={`${i * 0.15}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Heading() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">Leadership</h2>
      <p className="text-muted-foreground text-lg">The people behind the mission</p>
    </div>
  );
}

function LeaderCard({ name, role, icon: Icon, bio, delay }: typeof leaders[0] & { delay: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: delay }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="text-primary" size={28} />
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-primary font-medium">{role}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
    </div>
  );
}
