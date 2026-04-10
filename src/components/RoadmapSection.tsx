import { MonitorSmartphone, MapPin, ShieldCheck, Crosshair, Share2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: MonitorSmartphone,
    title: "AI Web Design",
    points: ["Conversion-focused architecture", "A/B testing & continuous optimization", "Mobile-first responsive builds"],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    points: ["Local search dominance", "Strategic review management", "Geo-targeted content strategy"],
  },
  {
    icon: ShieldCheck,
    title: "Reputation Optimization",
    points: ["AI-powered sentiment analysis", "Brand monitoring & alerts", "Proactive reputation management"],
  },
  {
    icon: Crosshair,
    title: "Precision Lead Generation & Outreach",
    points: [
      "Identifying and targeting \"ready-to-buy\" leads through AI-driven data mining",
      "Optimized email and DM sequences that nurture prospects into customers",
      "Aligning outreach with the latest Generative Engine Optimization trends for 2026",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    points: [
      "Consistent, high-impact presence across LinkedIn, Facebook, and Instagram",
      "AI-driven content calendars that keep your brand relevant 24/7",
      "Professional interaction management that turns followers into brand advocates",
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-6">
        <SectionHeading title="Digital Growth Roadmap" subtitle="Five pillars powering your market dominance" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <Pillar key={p.title} {...p} delay={`${i * 0.15}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">{title}</h2>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}

function Pillar({ icon: Icon, title, points, delay }: { icon: any; title: string; points: string[]; delay: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card p-8 group electric-glow-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: delay }}>
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {points.map((pt) => (
          <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}
