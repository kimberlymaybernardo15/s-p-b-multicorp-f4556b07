import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTheme } from "@/hooks/useTheme";

const links: { label: string; id: string }[] = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Why Us", id: "why-choose-us" },
  { label: "Process", id: "how-it-works" },
  { label: "Packages", id: "packages" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  const scroll = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <img src={logo} alt="S-P-B MultiCorp Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          <span className="sr-only">S-P-B MultiCorp</span>
        </button>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button key={l.id} onClick={() => scroll(l.id)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              {l.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <ThemeIcon size={18} />
          </button>
          <button onClick={() => scroll("packages")} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold electric-glow-hover electric-glow transition-all duration-300">
            Get Started
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <ThemeIcon size={18} />
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-border px-6 pb-6 pt-2 space-y-3">
          {links.map((l) => (
            <button key={l.id} onClick={() => scroll(l.id)} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-2">
              {l.label}
            </button>
          ))}
          <button onClick={() => scroll("packages")} className="w-full px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold electric-glow">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
