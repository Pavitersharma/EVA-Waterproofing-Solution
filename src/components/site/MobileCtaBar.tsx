import { MessageCircle, Phone, ClipboardList } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href={SITE.phoneHref}
          className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-bold uppercase tracking-wide text-primary"
        >
          <Phone className="size-5" aria-hidden="true" />
          Call
        </a>
        <a
          href={SITE.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-bold uppercase tracking-wide text-whatsapp"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center gap-1 bg-primary py-2.5 text-[0.7rem] font-bold uppercase tracking-wide text-primary-foreground"
        >
          <ClipboardList className="size-5" aria-hidden="true" />
          Get Quote
        </a>
      </div>
    </div>
  );
}
