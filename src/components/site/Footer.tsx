import { Link } from "@tanstack/react-router";
import { Car, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <Car className="h-5 w-5" />
            </span>
            <span className="font-display font-semibold">Travel Booking Center</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            Helping travelers find convenient rental vehicle options across the United States.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                aria-hidden
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-white/90">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-white/90">Rental Companies</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {["Enterprise", "Hertz", "Avis", "Europcar", "National"].map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-white/90">Popular Cities</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {["New York", "Los Angeles", "Las Vegas", "Orlando", "Miami", "Chicago"].map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 text-xs text-white/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© 2025 Travel Booking Center. All rights reserved.</p>
          <p>Making travel simpler, one trip at a time.</p>
        </div>
      </div>
    </footer>
  );
}
