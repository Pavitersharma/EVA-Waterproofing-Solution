"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/site";
import logoEmblem from "@/assets/logo-emblem.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 shadow-card backdrop-blur"
          : "border-transparent bg-background/80 backdrop-blur",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 lg:px-8">
        <a href="#home" className="flex items-center gap-3.5 group" onClick={() => setOpen(false)}>
          <div className="relative size-12 sm:size-14 shrink-0 overflow-hidden rounded-2xl border border-border/80 bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logoEmblem}
              alt="EVA Waterproofing & Solution Logo"
              width={64}
              height={64}
              priority
              className="size-full object-contain"
            />
          </div>
          <span className="leading-tight">
            <span className="block text-[1.05rem] font-extrabold tracking-tight text-primary sm:text-lg">
              EVA Waterproofing
            </span>
            <span className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
              &amp; Solution
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden text-right lg:block">
            <span className="block text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
              Call us
            </span>
            <a
              href={SITE.phoneHref}
              className="block text-sm font-bold text-primary hover:text-accent-strong"
            >
              {SITE.phone}
            </a>
          </div>
          <Button asChild variant="cta" size="sm" className="hidden sm:inline-flex">
            <a href={SITE.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border text-primary xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button asChild variant="cta">
                <a href={SITE.phoneHref}>Call Now</a>
              </Button>
              <Button asChild variant="whatsapp">
                <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
