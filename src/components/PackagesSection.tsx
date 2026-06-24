import { useState } from "react";
import { Check, X, Search, Globe, Rocket, TrendingUp, Sparkles, Zap, Clock, Layout, Monitor } from "lucide-react";
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

type WebsiteDevPackage = {
  pages: string;
  price: string;
  popular?: boolean;
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

const websiteDevPackages: WebsiteDevPackage[] = [
  { pages: "1 Page", price: "$500" },
  { pages: "2 Pages", price: "$900" },
  { pages: "3 Pages", price: "$1,350" },
  { pages: "4 Pages", price: "$1,800" },
  { pages: "5 Pages", price: "$2,250" },
  { pages: "6-10 Pages", price: "$4,500" },
  { pages: "11-15 Pages", price: "$6,750" },
  { pages: "16-20 Pages", price: "$9,000", popular: true },
  { pages: "21-30 Pages", price: "$13,500" },
  { pages: "31-40 Pages", price: "$18,000" },
  { pages: "41-50 Pages", price: "$22,500" },
  { pages: "51+ Pages", price: "$30,000+" },
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


        {/* Website Development Packages */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-4">
              <Monitor size={24} />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold metal-text mb-3">
              Website Development
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional website creation optimized for conversions and user experience.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {websiteDevPackages.map((pkg, i) => (
              <WebsiteDevCard key={pkg.pages} pkg={pkg} delay={`${i * 0.05}s`} />
            ))}
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

function WebsiteDevCard({
  pkg,
  delay,
}: {
  pkg: WebsiteDevPackage;
  delay: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      ref={ref}
      className={`glass-card p-5 text-center flex flex-col items-center justify-between transition-all duration-700 electric-glow-hover ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${pkg.popular ? "ring-2 ring-primary electric-glow" : ""}`}
      style={{ transitionDelay: delay }}
    >
      {pkg.popular && (
        <span className="mb-2 inline-block px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-heading font-semibold tracking-wide uppercase">
          Popular
        </span>
      )}
      <div className="w-9 h-9 rounded-lg bg-muted/30 text-foreground flex items-center justify-center mb-3">
        <Layout size={18} />
      </div>
      <h4 className="font-heading text-base font-bold text-foreground mb-1">{pkg.pages}</h4>
      <p className="font-heading text-xl font-bold metal-text mb-4">{pkg.price}</p>
      <button
        onClick={scrollToContact}
        className="w-full px-3 py-2 rounded-md text-xs font-heading font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label={`Get started with ${pkg.pages} website development package for ${pkg.price}`}
      >
        Get Started
      </button>
    </div>
  );
}
