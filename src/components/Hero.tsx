import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Oregon wilderness with AI overlays" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold metal-text leading-tight mb-6 animate-fade-up">
          The Future of Lead Generation
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Bridging the gap between traditional SEO and 2026 AI search behavior through Generative Engine Optimization (GEO).
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <button onClick={() => scroll("contact")} className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base electric-glow electric-glow-hover">
            Get a Digital Audit
          </button>
          <button onClick={() => scroll("mission")} className="metal-btn px-8 py-4 rounded-lg text-foreground font-heading font-semibold text-base">
            Explore Our Mission
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
