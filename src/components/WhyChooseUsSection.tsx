import { Rocket, Smartphone, Search, FileText, Settings, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Rocket, title: "5-Day Deployment", desc: "Launch in a week, not months. Speed without sacrificing quality." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Built for the 60%+ of leads that arrive from mobile devices." },
  { icon: Search, title: "Built-In SEO & GEO", desc: "Schema, fast load times, and Advanced search optimization from day one." },
  { icon: FileText, title: "Lead Capture Ready", desc: "Booking, quote, and callback forms wired up to start collecting leads." },
  { icon: Settings, title: "Integrates With Your Stack", desc: "Connects to your CRM, scheduling, and email so nothing slips through." },
  { icon: MapPin, title: "Local Search Optimized", desc: "Google Local Pack–ready and tuned for your service area." },
];

export default function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="why-choose-us" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">Engineered to Rank, Built to Convert</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">The difference between a website and a lead-generation machine.</p>
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
