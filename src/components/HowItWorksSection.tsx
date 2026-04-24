import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    n: "01",
    title: "Discovery & Audit",
    desc: "We start with a free digital audit — analyzing your current presence, competitors, and 2026 Advanced search readiness.",
  },
  {
    n: "02",
    title: "Strategy & Build",
    desc: "We design a tailored GEO + SEO roadmap and deploy a fast, mobile-first site engineered to convert.",
  },
  {
    n: "03",
    title: "Launch & Scale",
    desc: "We go live, monitor performance, and continuously optimize lead flow, reputation, and Advanced visibility.",
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">How It Works</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">From Audit to Market Dominance in 3 Steps</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">A simple, proven process that gets your business in front of the right buyers — fast.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <Step key={s.n} {...s} delay={`${i * 0.15}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, desc, delay }: { n: string; title: string; desc: string; delay: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card p-8 electric-glow-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: delay }}>
      <div className="font-heading text-5xl font-bold text-primary/30 mb-4">{n}</div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
