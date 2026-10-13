"use client";

import Image from "next/image";
import Link from "next/link";
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
          ? "border-white/10 bg-primary-deep/95 shadow-card backdrop-blur"
          : "border-white/10 bg-primary-deep/85 backdrop-blur",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/#home"
          className="flex items-center gap-3.5 group"
          onClick={() => setOpen(false)}
        >
          <div className="relative size-12 sm:size-14 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
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
            <span className="block text-[1.05rem] font-extrabold tracking-tight text-white sm:text-lg">
              EVA Waterproofing
            </span>
            <span className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent-strong sm:text-xs">
              &amp; Solution
            </span>
          </span>
        </Link>

        {/* Desktop Navigation: Home, Services, About, Contact */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Action Section */}
        <div className="flex items-center gap-2">
          <div className="hidden text-right lg:block">
            <span className="block text-[0.65rem] font-semibold uppercase tracking-widest text-white/60">
              Call us
            </span>
            <a
              href={SITE.phoneHref}
              className="block text-sm font-bold text-white transition-colors hover:text-accent-strong"
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
            className="grid size-10 place-items-center rounded-lg border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-white/10 bg-primary-deep lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2">
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
