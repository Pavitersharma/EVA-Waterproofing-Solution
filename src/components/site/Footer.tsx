import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import logoEmblem from "@/assets/logo-emblem.png";

export function Footer() {
  return (
    <footer className="bg-primary-deep pt-14">
      <div className="section-shell grid gap-10 pb-10 lg:grid-cols-3">
        <div>
          <a
            href="/#home"
            className="inline-flex items-center gap-3.5 group transition-opacity hover:opacity-95"
          >
            <div className="relative size-14 sm:size-16 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logoEmblem}
                alt="EVA Waterproofing & Solution Emblem"
                width={64}
                height={64}
                className="size-full object-contain"
              />
            </div>
            <span className="leading-tight">
              <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-primary-foreground">
                EVA Waterproofing
              </span>
              <span className="block text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">
                &amp; Solution
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Professional waterproofing, leakage repair, seepage and dampness solutions in
            Kurukshetra and nearby areas.
          </p>

          {/* Social Media Links */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
              Follow Us:
            </span>
            <a
              href={SITE.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="EVA Waterproofing on Instagram"
              className="grid size-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-primary-foreground/85 transition-all hover:border-accent-strong/60 hover:bg-white/15 hover:text-white hover:scale-105"
            >
              <Instagram className="size-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.facebookHref}
              target="_blank"
              rel="noreferrer"
              aria-label="EVA Waterproofing on Facebook"
              className="grid size-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-primary-foreground/85 transition-all hover:border-accent-strong/60 hover:bg-white/15 hover:text-white hover:scale-105"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-accent-strong">
            Quick Links
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2.5">
            {[...NAV_LINKS, { label: "Privacy Policy", href: "#privacy" } as const].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-accent-strong">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            <li>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 hover:text-primary-foreground"
              >
                <Phone className="size-4" aria-hidden="true" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="inline-flex items-center gap-2 hover:text-primary-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                {SITE.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              {SITE.location}
            </li>
            <li className="pt-2 flex items-center gap-3">
              <a
                href={SITE.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-strong hover:underline"
              >
                <Instagram className="size-3.5" /> Instagram
              </a>
              <span className="text-white/30">•</span>
              <a
                href={SITE.facebookHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-strong hover:underline"
              >
                <Facebook className="size-3.5" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5">
        <p className="section-shell text-center text-xs text-primary-foreground/55">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
