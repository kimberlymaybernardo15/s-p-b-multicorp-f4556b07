import { Brain, Globe, Star, TreePine, Flame, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Card = ({ title, icon: Icon, items, delay }: { title: string; icon: any; items: { icon: any; label: string }[]; delay: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card p-8 flex-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: delay }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="text-primary" size={24} />
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-3 text-secondary-foreground">
            <item.icon size={18} className="text-primary shrink-0" />
            <span className="text-sm">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function MissionSection() {
  return (
    <section id="mission" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card
            title="AI-Powered Marketing"
            icon={Brain}
            delay="0s"
            items={[
              { icon: Globe, label: "AI Web Design & Development" },
              { icon: Star, label: "Generative Engine Optimization (GEO)" },
              { icon: Globe, label: "Google Business Profile Management" },
            ]}
          />
          <Card
            title="Sustainability & Stewardship"
            icon={TreePine}
            delay="0.15s"
            items={[
              { icon: Flame, label: "Wildland Firefighting Support" },
              { icon: TreePine, label: "Land Restoration & Conservation" },
              { icon: Heart, label: "Equine Services & Training" },
            ]}
          />
        </div>
        <p className="text-center text-lg font-heading metal-text font-semibold tracking-wide">
          Built for Growth. Rooted in Purpose.
        </p>
      </div>
    </section>
  );
}
