import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Travel Booking Center" },
      {
        name: "description",
        content:
          "Reach the Travel Booking Center team for help with rental car options, travel planning, and booking guidance across the United States.",
      },
      { property: "og:title", content: "Contact — Travel Booking Center" },
      {
        property: "og:description",
        content: "Our team is here to assist with your travel and rental car inquiries.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-xl">
          <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-elevated ring-1 ring-black/5 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Get in touch</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Contact Travel Booking Center
            </h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our team is here to assist with your travel and rental car inquiries.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:+11111111111"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 hover:bg-secondary px-5 py-4 text-left transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-soft">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone
                  </p>
                  <p className="text-base font-semibold text-foreground">+1 (111) 111-1111</p>
                </div>
              </a>
              <a
                href="mailto:support@travelbookingcenter.com"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 hover:bg-secondary px-5 py-4 text-left transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email
                  </p>
                  <p className="text-base font-semibold text-foreground truncate">
                    support@travelbookingcenter.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
