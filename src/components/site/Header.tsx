import { Link } from "@tanstack/react-router";
import { Phone, Car } from "lucide-react";
import { useEffect, useState } from "react";

export const PHONE = "+1 (279) 210-1334";
export const PHONE_HREF = "tel:+12792101334";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border/60 shadow-[0_1px_0_0_rgb(0_0_0/0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
            <Car className="h-5 w-5" />
          </span>
          <span className="font-display font-semibold tracking-tight text-[15px] md:text-base text-foreground">
            Travel Booking Center
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 md:px-5 py-2.5 text-xs md:text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-elevated transition-all"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
