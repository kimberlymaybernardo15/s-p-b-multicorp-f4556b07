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
              SPB MultiCorp is an eco-conscious holding company currently building advanced digital marketing and AI services. Our long-term mission is to create a sustainable conglomerate that actively reduces our carbon footprint and protects Mother Nature. We are committed to responsible growth. Our future divisions will include wildland firefighting and land restoration, clean health food imports, and additional sustainable ventures — all built with environmental responsibility at their core.
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
