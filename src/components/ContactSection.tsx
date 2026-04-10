import { useState, type FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 brushed-metal-bg">
      <div className="container mx-auto px-6 max-w-2xl">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-bold metal-text mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">Ready to dominate your market? Let's talk.</p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            {(["Name", "Email", "Company"] as const).map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-secondary-foreground mb-2">{field}</label>
                <input
                  required
                  type={field === "Email" ? "email" : "text"}
                  name={field.toLowerCase()}
                  maxLength={field === "Email" ? 255 : 100}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder={`Your ${field.toLowerCase()}`}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-secondary-foreground mb-2">Message</label>
              <textarea
                required
                name="message"
                rows={4}
                maxLength={1000}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell us about your project"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold electric-glow electric-glow-hover disabled:opacity-50 transition-all"
            >
              {loading ? "Sending..." : <><Send size={18} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
