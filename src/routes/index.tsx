import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Check,
  MapPin,
  Tag,
  Headphones,
  Star,
  ChevronDown,
  ShieldCheck,
  Clock,
  Globe2,
} from "lucide-react";
import { useState } from "react";

import { Header, PHONE_HREF } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import heroImg from "@/assets/hero.jpg";
import catEconomy from "@/assets/cat-economy.jpg";
import catSuv from "@/assets/cat-suv.jpg";
import catLuxury from "@/assets/cat-luxury.jpg";
import catVan from "@/assets/cat-van.jpg";
import catPremium from "@/assets/cat-premium.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Travel Booking Center | Compare Rental Cars Across The USA" },
      {
        name: "description",
        content:
          "Find rental vehicle options from trusted providers across the United States. Compare categories, explore travel solutions, and connect with our team today.",
      },
      { property: "og:title", content: "Travel Booking Center | Compare Rental Cars Across The USA" },
      {
        property: "og:description",
        content:
          "Compare top rental providers, discover unbeatable rates, and book the ideal vehicle for your next journey in minutes.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
  }),
  component: HomePage,
});

const categories = [
  { title: "Economy", desc: "Compact, fuel-efficient cars for smart city travel.", img: catEconomy },
  { title: "SUV", desc: "Spacious and capable for family trips and weekend escapes.", img: catSuv },
  { title: "Luxury", desc: "Premium sedans for an elevated travel experience.", img: catLuxury },
  { title: "Van", desc: "Large passenger vans built for groups and gear.", img: catVan },
  { title: "Premium", desc: "Executive-class vehicles for business travel.", img: catPremium },
];

const reviews = [
  {
    name: "Michael R.",
    location: "Dallas, Texas",
    text: "Booking a rental was incredibly easy. Great communication and excellent support throughout the trip.",
  },
  {
    name: "Sarah T.",
    location: "Toronto, Canada",
    text: "The process was smooth and transparent. I found a vehicle that perfectly fit our family vacation.",
  },
  {
    name: "James W.",
    location: "Los Angeles, California",
    text: "Professional service and helpful customer support. I would absolutely use them again.",
  },
  {
    name: "Emily C.",
    location: "Vancouver, Canada",
    text: "Simple, fast, and reliable. Everything worked exactly as expected.",
  },
];

const faqs = [
  {
    q: "How do I reserve a rental car?",
    a: "Contact our team and we'll help you explore available rental options.",
  },
  {
    q: "Do you offer rentals at airports?",
    a: "Rental availability may include major airport locations across the United States.",
  },
  {
    q: "Can I rent a vehicle for a road trip?",
    a: "Many rental options are suitable for long-distance travel and vacations.",
  },
  {
    q: "What vehicle categories are available?",
    a: "Economy, SUV, Luxury, Van, and Premium vehicle options may be available.",
  },
  {
    q: "How can I contact support?",
    a: "Call +1 (279) 210-1334 or visit the Contact page.",
  },
];

const partners = ["Enterprise", "Hertz", "Avis", "Europcar", "National", "Budget", "Alamo", "Sixt"];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Partners />
        <WhyChoose />
        <Vehicles />
        <Reviews />
        <Support />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 -z-10 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div className="container-page pt-10 md:pt-20 pb-20 md:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-foreground shadow-soft">
            <span className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            Trusted By Millions Of Travelers
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            Find The Perfect <span className="text-accent">Rental Car</span> Anywhere In The USA
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Compare top rental providers, discover unbeatable rates, and book the ideal vehicle for
            your next journey in minutes.
          </p>

          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
            {[
              "No hidden fees",
              "Trusted rental partners",
              "Nationwide availability",
              "Fast customer support",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/10 text-success">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow hover:translate-y-[-1px] transition-transform"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft hover:bg-secondary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-elevated ring-1 ring-black/5">
            <img
              src={heroImg}
              alt="Modern SUV driving through an American highway during golden hour"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          </div>

          {/* floating cards */}
          <FloatCard
            className="hidden sm:flex absolute -left-4 lg:-left-8 top-8 float-soft"
            icon={<Headphones className="h-4 w-4" />}
            title="24/7 Customer Support"
            sub="We're always here to help"
          />
          <FloatCard
            className="absolute -right-3 lg:-right-6 top-1/2 -translate-y-1/2 float-soft [animation-delay:1s]"
            icon={<MapPin className="h-4 w-4" />}
            title="500+ Pickup Locations"
            sub="Across the United States"
          />
          <FloatCard
            className="hidden sm:flex absolute left-6 -bottom-5 float-soft [animation-delay:2s]"
            icon={<ShieldCheck className="h-4 w-4" />}
            title="Trusted Travel Partner"
            sub="Vetted rental brands"
          />
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  icon,
  title,
  sub,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-elevated ring-1 ring-black/5 ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
        {icon}
      </span>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section className="border-y border-border/70 bg-surface py-14">
      <div className="container-page text-center">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
          Trusted Rental Brands
        </h2>
        <p className="mt-2 text-base text-foreground/80">
          Access vehicles from the world's leading rental companies.
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10"
        />
        <div className="flex marquee-track w-max gap-16 px-8 items-center">
          {loop.map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    {
      icon: Globe2,
      title: "Nationwide Coverage",
      desc: "Find vehicles in major cities, airports, and travel destinations across the United States.",
    },
    {
      icon: Tag,
      title: "Competitive Pricing",
      desc: "Access attractive rental options from leading providers.",
    },
    {
      icon: Headphones,
      title: "Customer-First Support",
      desc: "Friendly assistance whenever you need help planning your trip.",
    },
  ];
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Why us</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Why Travelers Choose Travel Booking Center
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-border bg-white p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vehicles() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Fleet</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Choose The Right Vehicle For Every Journey
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            From compact city cars to executive-class sedans — find a vehicle that matches your trip.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <article
              key={c.title}
              className={`group relative overflow-hidden rounded-3xl bg-white border border-border shadow-soft hover:shadow-elevated transition-all duration-500 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"} bg-secondary`}>
                <img
                  src={c.img}
                  alt={`${c.title} rental car`}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Reviews</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What Travelers Are Saying
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-3xl border border-border bg-white/70 backdrop-blur-md p-6 shadow-soft hover:shadow-elevated transition-all"
            >
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 md:px-16 md:py-24 text-center shadow-elevated"
          style={{ background: "var(--gradient-dark)" }}
        >
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
          />
          <div className="relative max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/80 px-3 py-1 text-xs font-medium ring-1 ring-white/15">
              <Clock className="h-3.5 w-3.5" /> Available 24/7
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Need Help Finding The Right Rental Car?
            </h2>
            <p className="mt-5 text-base text-white/75 leading-relaxed">
              Our travel specialists are available to assist with rental options, travel planning,
              and booking guidance.
            </p>
            <div className="mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-elevated hover:bg-white/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-surface">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-white shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
