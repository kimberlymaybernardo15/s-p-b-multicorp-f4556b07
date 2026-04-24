import { useState } from "react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SignInPromptDialog from "./SignInPromptDialog";

const packages = [
  {
    name: "Advanced Website Only",
    tagline: "Mobile-first website built to convert",
    price: "$1,997",
    period: "one-time",
    features: [
      "Mobile-first website (1–7 pages)",
      "Custom design & on-page SEO foundation",
      "Lead capture forms & contact integration",
      "Google Business Profile setup",
      "30 days launch support",
    ],
    highlighted: false,
  },
  {
    name: "Growth Package",
    tagline: "Most popular — website + ongoing growth",
    price: "$2,497",
    period: "setup + $997/month",
    features: [
      "Everything in Advanced Website",
      "Generative Engine Optimization (GEO)",
      "Reputation & review management",
      "Targeted lead generation campaigns",
      "Monthly performance reporting",
    ],
    highlighted: true,
  },
  {
    name: "SEO Full Package",
    tagline: "Full-service search & market dominance",
    price: "$3,497",
    period: "setup + $997/month",
    features: [
      "Everything in Growth Package",
      "Advanced SEO & multi-channel social management",
      "AI-driven outreach & nurture sequences",
      "Dedicated strategist & priority support",
      "Custom integrations & analytics",
    ],
    highlighted: false,
  },
];

export default function PackagesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>();

  const handleGetStarted = (name: string) => {
    setSelected(name);
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

      <SignInPromptDialog open={dialogOpen} onOpenChange={setDialogOpen} packageName={selected} />
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
  onGetStarted: (name: string) => void;
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
      <div className="mb-6">
        <span className="font-heading text-4xl font-bold metal-text">{pkg.price}</span>
        <span className="text-sm text-muted-foreground ml-2">{pkg.period}</span>
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
        onClick={() => onGetStarted(pkg.name)}
        className={`w-full px-6 py-3 rounded-lg font-heading font-semibold transition-all ${pkg.highlighted ? "bg-primary text-primary-foreground electric-glow electric-glow-hover" : "metal-btn text-foreground"}`}
      >
        Get Started
      </button>
    </div>
  );
}
