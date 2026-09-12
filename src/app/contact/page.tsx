import type { Metadata } from "next";
import Image from "next/image";
import { Droplets, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import logoEmblem from "@/assets/logo-emblem.png";

const TITLE = "Contact Us | EVA Waterproofing & Solution";
const DESCRIPTION =
  "Contact EVA Waterproofing & Solution for waterproofing, leakage repair, and seepage treatment in Kurukshetra. Call +91 7027143118 or fill out our contact form.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description:
      "Get in touch for professional waterproofing and leakage solutions in Kurukshetra, Haryana.",
    url: "/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-primary pt-16 sm:pt-18">
          <div className="surface-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="section-shell relative py-16 text-center sm:py-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent-strong">
                <Droplets className="size-3.5" aria-hidden="true" />
                Contact Us
              </span>
              <h1 className="mt-4 text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">
                Let&apos;s Solve Your Waterproofing Problem
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
                Share a few details about the affected area and we will get back to you to arrange
                an inspection.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="xl">
                  <a href={SITE.phoneHref}>
                    <Phone className="size-4" aria-hidden="true" />
                    Call {SITE.phone}
                  </a>
                </Button>
                <Button asChild variant="whatsapp" size="xl">
                  <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Contact Form + Info ── */}
        <section className="py-16 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Get In Touch"
                title="Request a Free Inspection"
                subtitle="Fill in the form below and our team will get back to you shortly."
              />
              <ContactForm />
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4">
                {/* Logo card */}
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="size-14 shrink-0 rounded-2xl border border-border/80 bg-white p-1 shadow-sm">
                    <Image
                      src={logoEmblem}
                      alt="EVA Waterproofing"
                      width={56}
                      height={56}
                      className="size-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-primary">
                      EVA Waterproofing &amp; Solution
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Local Inspection &amp; Treatment Experts
                    </p>
                  </div>
                </div>

                {/* Contact cards */}
                {(
                  [
                    { icon: Phone, label: "Call", value: SITE.phone, href: SITE.phoneHref },
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                      value: SITE.phone,
                      href: SITE.whatsappHref,
                    },
                    { icon: Mail, label: "Email", value: SITE.email, href: SITE.emailHref },
                  ] as const
                ).map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "WhatsApp" ? "_blank" : undefined}
                    rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="block text-sm font-bold text-primary">{item.value}</span>
                    </span>
                  </a>
                ))}

                {/* Location card */}
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-secondary p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Location
                    </span>
                    <span className="block text-sm font-bold text-primary">{SITE.location}</span>
                  </span>
                </div>

                {/* Info card */}
                <div className="rounded-2xl border border-brand/20 bg-brand-soft p-5">
                  <p className="text-sm font-bold text-primary">Working across Kurukshetra</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Call or WhatsApp with photos of the affected area for quicker guidance before
                    the site inspection.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
