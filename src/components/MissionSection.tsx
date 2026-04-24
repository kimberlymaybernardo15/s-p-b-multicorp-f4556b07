import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function MissionSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">About Us</p>
            <h2 id="mission" className="font-heading text-3xl md:text-5xl font-bold metal-text mb-6">Our Mission</h2>
          </div>
          <div className="glass-card p-8 md:p-12">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              SPB MultiCorp is an eco-conscious holding company building the next generation of AI-powered digital marketing services. We help businesses bridge the gap between traditional SEO and 2026 AI search behavior — so the right buyers find you first. Our long-term mission is to grow into a sustainable conglomerate spanning wildland fire support, land restoration, and clean food imports, all anchored in environmental responsibility.
            </p>
          </div>
          <p className="text-center text-lg font-heading metal-text font-semibold tracking-wide mt-8">
            Built for Growth. Rooted in Purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
