import { ShoppingCart, ArrowUpRight } from "lucide-react";

export default function EcomBanner() {
  return (
    <section aria-label="S-P-B Ecom Store Promotion" className="relative z-10 -mt-6 pb-10">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/20">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Icon / Visual */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                <ShoppingCart
                  size={32}
                  className="text-primary"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-2">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold metal-text leading-tight">
                <span aria-hidden="true" className="mr-2">
                  🛒
                </span>
                Visit S-P-B Ecom
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                Explore our online store for products, special offers, and
                exclusive deals.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <a
                href="https://s-p-b-store.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shop Now at S-P-B Ecom - opens in a new tab"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm sm:text-base electric-glow electric-glow-hover transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                Shop Now
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
