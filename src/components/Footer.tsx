import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="S-P-B MultiCorp Logo" className="w-8 h-8 object-contain" />
              <h4 className="font-heading text-lg font-semibold metal-text">S-P-B MultiCorp</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-driven digital marketing agency and eco-conscious holding company. Built for growth. Rooted in purpose.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary shrink-0" /> Oregon, United States</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary shrink-0" /> +1 (458) 272-5246</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary shrink-0" /> spb-multicorp@outlook.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Strategy", "Leadership", "Contact"].map((l) => (
                <li key={l}>
                  <button onClick={() => l === "Home" ? window.scrollTo({ top: 0, behavior: "smooth" }) : document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-divider mb-6" />
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="S-P-B MultiCorp Logo" className="w-12 h-12 object-contain opacity-60" />
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} S-P-B MultiCorp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
