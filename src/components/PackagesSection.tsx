import { useState } from "react";
import { Check, X, Search, Globe, Rocket, TrendingUp, Sparkles, Zap, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import PaymentDialog from "./PaymentDialog";

type Package = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  subNote: string | null;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  icon: typeof Search;
  badge?: string;
};

const packages: Package[] = [
  {
    name: "Basic Package",
    tagline: "Get found, get optimized, start growing",
    price: "$1,997",
    priceNote: "upfront",
    subNote: "Then $997/month — first month included",
    period: "upfront + $997/month",
    features: [
      "Website optimization",
      "Basic SEO setup",
      "Performance improvements",
      "First month included",
    ],
    cta: "Get Started",
    highlighted: false,
    icon: TrendingUp,
  },
  {
    name: "Plus Package",
    tagline: "Our most complete growth system",
    price: "$2,497",
    priceNote: "upfront",
    subNote: "Then $997/month — first month included",
    period: "upfront + $997/month",
    features: [
      "Everything in Basic",
      "Advanced SEO strategy",
      "GEO optimization (AI search visibility)",
      "Conversion optimization system",
      "Priority support",
    ],
    cta: "Scale My Business",
    highlighted: true,
    icon: Sparkles,
    badge: "MOST POPULAR",
  },
  {
    name: "Services Only",
    tagline: "Already have a site? Let us grow it.",
    price: "$997",
    priceNote: "per month",
    subNote: "No website build included",
    period: "per month",
    features: [
      "SEO & GEO services",
      "Ongoing optimization",
      "Monthly performance reports",
    ],
    cta: "Start Growing",
    highlighted: false,
    icon: Zap,
  },
  {
    name: "Advanced Website Only",
    tagline: "A professional site built to convert",
    price: "$1,000",
    priceNote: "one-time",
    subNote: null,
    period: "one-time",
    features: [
      "Professional website build",
      "Conversion-focused design",
      "Mobile optimized",
    ],
    cta: "Get My Website",
    highlighted: false,
    icon: Globe,
  },
  {
    name: "SEO-Optimized Website",
    tagline: "Launch-ready and built for search",
    price: "$1,500",
    priceNote: "one-time",
    subNote: null,
    period: "one-time",
    features: [
      "Website + SEO-ready structure",
      "Keyword optimization",
      "Fast-loading pages",
    ],
    cta: "Launch Optimized Site",
    highlighted: false,
    icon: Rocket,
  },
];

const comparisonRows: { label: string; values: (boolean | string)[] }[] = [
  { label: "Website Included", values: [true, true, false, true, true] },
  { label: "SEO Included", values: [true, true, true, false, true] },
  { label: "GEO Included", values: [false, true, true, false, false] },
  { label: "Monthly Optimization", values: [true, true, true, false, false] },
  {
    label: "Best For",
    values: [
      "New Businesses",
      "Growing Businesses",
      "Established Sites",
      "Beginners",
      "Search-Focused",
    ],
  },
];

export default function PackagesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState<Package | undefined>();

  const handleGetStarted = (pkg: Package) => {
    setSelected(pkg);
    setDialogOpen(true);
  };

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="packages" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">
            Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">
            Simple Pricing. Real Results.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the right system to grow your business with SEO, GEO, and advanced website management.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-heading font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/30 px-4 py-2 rounded-full">
            <Clock size={14} />
            Limited onboarding slots available
          </div>
        </div>

        {/* Value Proposition */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-heading text-xl md:text-2xl text-foreground mb-3">
            We don't just build websites — <span className="metal-text font-bold">we build revenue systems.</span>
          </p>
          <p className="text-muted-foreground">
            Engineered for lead generation, higher conversion rates, and long-term growth.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto mb-20">
          {packages.map((p, i) => (
            <PackageCard key={p.name} pkg={p} delay={`${i * 0.08}s`} onGetStarted={handleGetStarted} />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-center metal-text mb-8">
            Compare Packages
          </h3>
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-heading text-muted-foreground font-semibold">Feature</th>
                  {packages.map((p) => (
                    <th
                      key={p.name}
                      className={`text-center p-4 font-heading font-semibold ${p.highlighted ? "text-primary" : "text-foreground"}`}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border/50 last:border-0">
                    <td className="p-4 font-medium text-foreground">{row.label}</td>
                    {row.values.map((v, idx) => (
                      <td key={idx} className="p-4 text-center">
                        {typeof v === "boolean" ? (
                          v ? (
                            <Check size={18} className="text-primary mx-auto" />
                          ) : (
                            <X size={18} className="text-muted-foreground/40 mx-auto" />
                          )
                        ) : (
                          <span className="text-muted-foreground text-xs">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto text-center glass-card p-10 electric-glow">
          <h3 className="font-heading text-2xl md:text-4xl font-bold metal-text mb-4">
            Ready to Turn Your Website Into a Revenue Machine?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's find the best package for your business.
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base electric-glow electric-glow-hover"
          >
            Book a Free Consultation
          </button>
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
  pkg: Package;
  delay: string;
  onGetStarted: (pkg: Package) => void;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = pkg.icon;
  return (
    <div
      ref={ref}
      className={`glass-card p-6 flex flex-col transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${pkg.highlighted ? "ring-2 ring-primary electric-glow relative xl:scale-105" : "electric-glow-hover"}`}
      style={{ transitionDelay: delay }}
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-heading font-semibold tracking-wide whitespace-nowrap">
          {pkg.badge}
        </span>
      )}
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${pkg.highlighted ? "bg-primary/20 text-primary" : "bg-muted/30 text-foreground"}`}>
        <Icon size={20} />
      </div>
      <h3 className="font-heading text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
      <p className="text-xs text-muted-foreground mb-6 min-h-[2.5rem]">{pkg.tagline}</p>

      <div className="mb-6 space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-3xl font-bold metal-text leading-tight">{pkg.price}</span>
          <span className="text-xs text-muted-foreground">{pkg.priceNote}</span>
        </div>
        {pkg.subNote && (
          <p className="text-xs text-muted-foreground leading-relaxed">{pkg.subNote}</p>
        )}
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
            <Check size={14} className="text-primary shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onGetStarted(pkg)}
        className={`w-full px-4 py-3 rounded-lg font-heading font-semibold text-sm transition-all ${pkg.highlighted ? "bg-primary text-primary-foreground electric-glow electric-glow-hover" : "metal-btn text-foreground"}`}
      >
        {pkg.cta}
      </button>
    </div>
  );
}
