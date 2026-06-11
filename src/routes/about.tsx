import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Globe2, Users, Sparkles } from "lucide-react";
import { Header, PHONE_HREF } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Travel Booking Center" },
      {
        name: "description",
        content:
          "Travel Booking Center helps travelers across the United States compare rental cars from trusted providers and find the right vehicle for every trip.",
      },
      { property: "og:title", content: "About — Travel Booking Center" },
      {
        property: "og:description",
        content:
          "Learn about Travel Booking Center — helping travelers find convenient rental vehicle options across the United States.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trust First", desc: "We work only with reputable rental partners and clearly explain options." },
  { icon: Globe2, title: "Nationwide Reach", desc: "Coverage across major US cities, airports, and travel destinations." },
  { icon: Users, title: "Traveler-Centric", desc: "Friendly humans dedicated to helping you plan a smoother trip." },
  { icon: Sparkles, title: "Effortless Booking", desc: "Skip the comparison fatigue — call once and we'll guide you." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <div className="container-page py-20 md:py-28 text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">About us</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Making rental car travel simpler across the USA
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Travel Booking Center is a modern travel concierge helping travelers across the United States
              find the right rental vehicle from trusted providers — quickly, transparently, and without
              the usual comparison fatigue.
            </p>
            <div className="mt-9 flex justify-center gap-3 flex-wrap">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-page">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-border bg-white p-6 shadow-soft hover:shadow-elevated transition-all"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="container-page max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Our mission
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              We believe finding a rental car shouldn't feel like a second job. Whether you're flying into
              an airport, planning a family road trip, or coordinating travel for a business team, our
              specialists are here to help you compare options from leading rental providers and choose
              the vehicle that fits your trip best.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              From economy compacts to executive-class sedans, we surface availability nationwide so you
              can travel with confidence — backed by real human support whenever you need it.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
