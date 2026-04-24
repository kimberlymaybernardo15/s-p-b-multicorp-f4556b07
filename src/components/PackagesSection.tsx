import { useState } from "react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import PaymentDialog from "./PaymentDialog";

const packages = [
  {
    name: "Basic Package",
    tagline: "Essential growth tools to get found and chosen",
    price: "$997",
    priceNote: "monthly",
    subNote: null as string | null,
    period: "monthly",
    features: [
      "Lead generation",
      "Review automation",
      "Google profile management",
    ],
    highlighted: false,
  },
  {
    name: "Advanced Package",
    tagline: "Most popular — website + ongoing growth",
    price: "$2,500",
    priceNote: "to get started",
    subNote: "Includes the first month",
    period: "to get started (includes the first month)",
    features: [
      "Advanced web design delivered in 5 days",
      "Lead generation",
      "Review automation",
      "Google profile management",
    ],
    highlighted: true,
  },
  {
    name: "Plus Package",
    tagline: "Full-service search & market dominance",
    price: "$2,997",
    priceNote: "to get started",
    subNote: "Includes the first month",
    period: "to get started (includes the first month)",
    features: [
      "Everything in the Advanced Package plus SEO-optimized advanced web design",
    ],
    highlighted: false,
  },
];

export default function PackagesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState<typeof packages[0] | undefined>();

  const handleGetStarted = (pkg: typeof packages[0]) => {
    setSelected(pkg);
    setDialogOpen(true);
  };

  return (
    <section id="packages" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">Packages</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">Choose Your Growth Plan</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Transparent tiers built around your goals. Pricing finalized after your free audit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((p, i) => (
            <PackageCard key={p.name} pkg={p} delay={`${i * 0.12}s`} onGetStarted={handleGetStarted} />
          ))}
        </div>
      </div>

      <PaymentDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        packageName={selected?.name}
        price={selected?.price}
        period={selected?.period}
      />
    </section>
  );
}

function PackageCard({
  pkg,
  delay,
  onGetStarted,
}: {
  pkg: typeof packages[0];
  delay: string;
  onGetStarted: (pkg: typeof packages[0]) => void;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`glass-card p-8 flex flex-col transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${pkg.highlighted ? "ring-2 ring-primary electric-glow relative" : "electric-glow-hover"}`}
      style={{ transitionDelay: delay }}
    >
      {pkg.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-heading font-semibold tracking-wide">
          MOST POPULAR
        </span>
      )}
      <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{pkg.name}</h3>
      <p className="text-sm text-muted-foreground mb-6">{pkg.tagline}</p>
      <div className="mb-8 space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-4xl font-bold metal-text leading-tight">{pkg.price}</span>
          <span className="text-sm text-muted-foreground">{pkg.priceNote}</span>
        </div>
        {pkg.subNote && (
          <p className="text-sm text-muted-foreground leading-relaxed">{pkg.subNote}</p>
        )}
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check size={16} className="text-primary shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onGetStarted(pkg)}
        className={`w-full px-6 py-3 rounded-lg font-heading font-semibold transition-all ${pkg.highlighted ? "bg-primary text-primary-foreground electric-glow electric-glow-hover" : "metal-btn text-foreground"}`}
      >
        Get Started
      </button>
    </div>
  );
}
