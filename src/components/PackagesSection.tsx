import { Layout, Monitor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type WebsiteDevPackage = {
  pages: string;
  price: string;
  popular?: boolean;
};

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
  return (
    <section id="packages" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        {/* Website Development Packages */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-4">
              <Monitor size={24} />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">
              Website Development
            </h2>
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
      </div>
    </section>
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
