import { Rocket, Smartphone, Search, FileText, Settings, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  {
    icon: Rocket,
    title: "5-Day Deployment",
    desc: "Launch your website fast. No months of planning. Live within a week.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Over 60% of leads come from mobile. We build for phones first, desktops second.",
  },
  {
    icon: Search,
    title: "Built-In SEO Structure",
    desc: "Schema markup, fast load times, and local search optimization included from day one.",
  },
  {
    icon: FileText,
    title: "Lead Capture Forms",
    desc: "Appointment booking, quote requests, and callback forms integrated and ready to collect leads.",
  },
  {
    icon: Settings,
    title: "Integrates With Your Systems",
    desc: "Connects to your scheduling software, CRM, or email platform so leads flow directly to you.",
  },
  {
    icon: MapPin,
    title: "Local Search Optimization",
    desc: "Google Local Pack ready. We optimize for your business area and nearby regions.",
  },
];

export default function StrategySection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="strategy" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">Strategy</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">Fast, Mobile-First Websites That Rank & Convert</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <Card key={item.title} {...item} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card p-8 group electric-glow-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: delay }}>
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
