import heroBg from "@/assets/hero-bg.jpg";
import HeroNetworkAnimation from "./HeroNetworkAnimation";

export default function Hero() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Oregon wilderness with Advanced overlays" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_13%_10%/0.7)] via-[hsl(220_13%_10%/0.5)] to-background" />
      <HeroNetworkAnimation />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <p className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-up">Practical Solutions for Growing Businesses</p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
          Is your business ready for the next stage of growth?
        </h1>
        <p className="text-lg md:text-xl text-[hsl(220_10%_85%)] max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          SPB MultiCorp helps companies streamline operations, strengthen customer relationships, and turn inefficiencies into opportunities — with clear strategy and dependable execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <button onClick={() => scroll("contact")} className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base electric-glow electric-glow-hover">
            Discover Business Solutions
          </button>
          <button onClick={() => scroll("why-choose-us")} className="metal-btn px-8 py-4 rounded-lg text-foreground font-heading font-semibold text-base">
            Explore Growth Opportunities
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
