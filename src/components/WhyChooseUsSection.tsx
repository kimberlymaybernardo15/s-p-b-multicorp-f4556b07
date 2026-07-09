import { Rocket, Smartphone, Search, FileText, Settings, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  {
    icon: Rocket,
    title: "Rapid Deployment",
    challenge: "Long build timelines delay revenue and let competitors move first.",
    solution: "We deliver production-ready websites in days, not months — without cutting corners on quality.",
    benefit: "Start capturing leads and generating revenue in a single week.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    challenge: "Most visitors arrive on mobile, but sites still look and behave like desktop afterthoughts.",
    solution: "Every layout is engineered mobile-first, with touch-friendly flows and fast rendering on any device.",
    benefit: "Higher engagement, lower bounce rates, and more conversions from mobile traffic.",
  },
  {
    icon: Search,
    title: "Findable by the Right Buyers",
    challenge: "Great businesses stay invisible when SEO is treated as an afterthought.",
    solution: "Structured data, performance tuning, and search-ready content are built in from day one.",
    benefit: "Consistent visibility in front of the customers actively looking for what you offer.",
  },
  {
    icon: FileText,
    title: "Lead Capture That Works",
    challenge: "Traffic without conversion is wasted marketing spend.",
    solution: "Booking, quote, and callback flows are integrated and tested to turn visits into qualified leads.",
    benefit: "A predictable pipeline of opportunities landing directly in your inbox or CRM.",
  },
  {
    icon: Settings,
    title: "Systems That Integrate",
    challenge: "Disconnected tools create manual work and let leads slip through the cracks.",
    solution: "We connect your website to the CRM, scheduling, and email platforms your team already uses.",
    benefit: "A tighter operation where information moves automatically and nothing gets missed.",
  },
  {
    icon: MapPin,
    title: "Local Search Optimized",
    challenge: "Nearby customers can't hire you if they can't find you.",
    solution: "Google Business Profile, local schema, and geo-targeted content position you for your service area.",
    benefit: "More calls, more directions, and more foot traffic from buyers close by.",
  },
];

export default function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="why-choose-us" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">Business Challenges, Solved</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Are your current systems supporting your growth — or slowing it down? Here's how we turn common friction points into measurable results.</p>
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

function Card({ icon: Icon, title, challenge, solution, benefit, delay }: { icon: any; title: string; challenge: string; solution: string; benefit: string; delay: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card p-8 group electric-glow-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: delay }}>
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-5">{title}</h3>
      <dl className="space-y-4 text-sm leading-relaxed">
        <div>
          <dt className="font-heading text-[11px] font-semibold tracking-widest uppercase text-primary/80 mb-1">Business Challenge</dt>
          <dd className="text-muted-foreground">{challenge}</dd>
        </div>
        <div>
          <dt className="font-heading text-[11px] font-semibold tracking-widest uppercase text-primary/80 mb-1">Our Solution</dt>
          <dd className="text-muted-foreground">{solution}</dd>
        </div>
        <div>
          <dt className="font-heading text-[11px] font-semibold tracking-widest uppercase text-primary/80 mb-1">Business Benefit</dt>
          <dd className="text-foreground/90">{benefit}</dd>
        </div>
      </dl>
    </div>
  );
}
