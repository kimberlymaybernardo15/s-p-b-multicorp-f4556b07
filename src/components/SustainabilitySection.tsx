import { Apple, TreePine, Heart, Sprout } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Sprout, label: "Land Restoration & Conservation", desc: "Rehabilitating Oregon landscapes through sustainable land management" },
  { icon: Heart, label: "Equine Breeding & Training", desc: "Building a world-class equine program rooted in humane practices" },
  { icon: Apple, label: "Clean Health Food Imports", desc: "Expanding into ethical, sustainable food sourcing and distribution" },
  { icon: TreePine, label: "Wildland Fire Support", desc: "Continued commitment to wildland firefighting infrastructure" },
];

export default function SustainabilitySection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-24">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">The Sustainable Conglomerate</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Our roadmap for purpose-driven expansion</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <ItemCard key={item.label} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ItemCard({ icon: Icon, label, desc, index }: typeof items[0] & { index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card p-6 text-center electric-glow-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="text-primary" size={26} />
      </div>
      <h3 className="font-heading text-base font-semibold text-foreground mb-2">{label}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
