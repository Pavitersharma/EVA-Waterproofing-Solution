"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import festiveImg from "@/assets/festive-greeting-popup.jpg";

export function FestivePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem("eva_festive_seen");
      if (!hasSeen) {
        // Small delay to allow initial page render smoothly
        const timer = setTimeout(() => {
          setOpen(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if sessionStorage is not accessible
      const timer = setTimeout(() => setOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    try {
      sessionStorage.setItem("eva_festive_seen", "true");
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Festive Greetings"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[440px] sm:max-w-[480px] overflow-hidden rounded-3xl bg-white shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close greetings popup"
          className="absolute right-3.5 top-3.5 z-30 grid size-9 place-items-center rounded-full bg-black/65 text-white backdrop-blur transition-all hover:bg-black hover:scale-105 shadow-md cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Festive Greeting Artwork */}
        <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
          <Image
            src={festiveImg}
            alt="EVA Waterproofing & Solution - Happy Dussehra and Happy Diwali"
            fill
            priority
            sizes="(max-width: 640px) 90vw, 480px"
            className="size-full object-contain"
          />
        </div>

        {/* Bottom Interactive Bar */}
        <div className="bg-primary-deep p-4 sm:p-4.5 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-accent-strong">
                Festive Greetings &amp; Offers
              </span>
              <span className="block text-xs sm:text-sm font-extrabold text-white">
                EVA Waterproofing &amp; Solution
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                asChild
                variant="cta"
                size="sm"
                className="flex-1 sm:flex-initial"
                onClick={handleClose}
              >
                <a href={SITE.phoneHref}>
                  <Phone className="size-3.5" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                variant="whatsapp"
                size="sm"
                className="flex-1 sm:flex-initial"
                onClick={handleClose}
              >
                <a
                  href={`https://wa.me/917497090944?text=${encodeURIComponent(
                    "Happy Dussehra & Diwali! I would like to inquire about waterproofing inspection and festive offers.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-3.5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
