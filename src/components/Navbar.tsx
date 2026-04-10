import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Services", "Mission", "Leadership", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scroll = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-heading text-xl font-bold metal-text tracking-wider">
          S-P-B MultiCorp
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scroll(l)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              {l}
            </button>
          ))}
          <button onClick={() => scroll("Contact")} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold electric-glow-hover electric-glow transition-all duration-300">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-border px-6 pb-6 pt-2 space-y-3">
          {links.map((l) => (
            <button key={l} onClick={() => scroll(l)} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-2">
              {l}
            </button>
          ))}
          <button onClick={() => scroll("Contact")} className="w-full px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold electric-glow">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
