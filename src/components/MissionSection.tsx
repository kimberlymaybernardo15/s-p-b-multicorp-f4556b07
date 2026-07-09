import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function MissionSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-2">About Us</p>
            <h2 id="mission" className="font-heading text-3xl md:text-5xl font-bold metal-text mb-6">Built to Solve Real Business Challenges</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">What's preventing your business from reaching the next level?</p>
          </div>
          <div className="glass-card p-8 md:p-12">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              SPB MultiCorp partners with companies to turn operational friction into measurable results. We design practical systems, sharpen digital presence, and put dependable processes in place — so leaders can spend less time managing problems and more time creating opportunities. Every engagement is grounded in clarity, accountability, and outcomes you can measure.
            </p>
          </div>
          <p className="text-center text-lg font-heading metal-text font-semibold tracking-wide mt-8">
            Business Expertise. Operational Excellence. Practical Solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
