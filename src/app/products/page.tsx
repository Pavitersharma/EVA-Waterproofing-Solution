import { notFound } from "next/navigation";

// Products page is temporarily commented out as per request.
export default function ProductsPage() {
  notFound();
}

/*
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

const TITLE =
  "Waterproofing Products | EVA Roof Protec, Damp Protec 2K & Universal Repair SBR";
const DESCRIPTION =
  "Explore high-performance waterproofing chemicals by EVA Waterproofing & Solution: EVA Roof Protec (heat-reflective), EVA Damp Protec 2K (two-component barrier), and EVA Universal Repair SBR latex. Call +91 7497090944.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/products",
    type: "website",
  },
  alternates: {
    canonical: "/products",
  },
};

export function InactiveProductsPage() {
  const productsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "EVA Waterproofing & Repair Chemicals",
    description: DESCRIPTION,
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.name,
      description: product.fullDesc,
      category: product.category,
      brand: {
        "@type": "Brand",
        name: SITE.name,
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />

      <div className="min-h-screen bg-background pb-16 lg:pb-0">
        <Navbar />

        <main>
          <section className="relative overflow-hidden bg-primary pt-16 sm:pt-18 text-primary-foreground">
            <div
              className="surface-grid absolute inset-0 opacity-40"
              aria-hidden="true"
            />
            <div className="section-shell relative py-16 text-center sm:py-24">
              <Reveal>
                <nav className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-strong">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                  <span>/</span>
                  <span className="text-primary-foreground/80">
                    Products Range
                  </span>
                </nav>

                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent-strong">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Engineered Waterproofing Chemicals
                </span>

                <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                  High-Performance Waterproofing &amp; Repair Products
                </h1>

                <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-primary-foreground/85">
                  Engineered for Indian climate extremes, structural movement,
                  and heavy moisture pressure. Discover our three specialized
                  solutions for terraces, negative dampness, and concrete bonding
                  repairs.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                  {PRODUCTS.map((p) => (
                    <a
                      key={p.id}
                      href={`#${p.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground backdrop-blur transition-all hover:bg-white hover:text-primary-deep shadow-xs"
                    >
                      <span>{p.name}</span>
                      <ArrowRight className="size-3.5 text-accent-strong" />
                    </a>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Button asChild variant="hero" size="xl">
                    <a href={SITE.phoneHref}>
                      <Phone className="size-4" aria-hidden="true" />
                      Call Technical Team: {SITE.phone}
                    </a>
                  </Button>
                  <Button asChild variant="whatsapp" size="xl">
                    <a
                      href={`https://wa.me/917497090944?text=${encodeURIComponent(
                        "Hi EVA Waterproofing, I am interested in purchasing/enquiring about your waterproofing products.",
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      WhatsApp Inquiry
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-slate-50/70">
            <div className="section-shell space-y-16 sm:space-y-20">
              {PRODUCTS.map((product, idx) => (
                <Reveal key={product.id} delay={idx * 100}>
                  <article
                    id={product.id}
                    className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-lg transition-shadow hover:shadow-2xl"
                  >
                    <div className="grid lg:grid-cols-12 gap-0">
                      <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-slate-100/70 to-slate-200/50 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80">
                        <div>
                          <div className="flex items-center justify-between gap-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-xs">
                              {product.category}
                            </span>
                            <span className="rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-0.5">
                              {product.badge}
                            </span>
                          </div>

                          <div className="relative mx-auto mt-6 aspect-square w-full max-w-[340px] overflow-hidden rounded-2xl bg-white p-4 shadow-md border border-slate-200/80 group">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={480}
                              height={480}
                              priority={idx === 0}
                              className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>

                        <div className="mt-8 space-y-3">
                          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                              Best For
                            </span>
                            <p className="text-sm font-bold text-slate-800 mt-1">
                              {product.bestFor}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <Button asChild variant="whatsapp" className="w-full">
                              <a
                                href={`https://wa.me/917497090944?text=${encodeURIComponent(
                                  `Hi EVA Waterproofing, I want to inquire about purchasing / pricing for ${product.name}.`,
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <MessageCircle className="size-4" />
                                WhatsApp Order
                              </a>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              className="w-full border-slate-300"
                            >
                              <a href={SITE.phoneHref}>
                                <Phone className="size-4" />
                                Call For Price
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                        <div>
                          <div className="space-y-1.5">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                              Product 0{idx + 1}
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                              {product.name}
                            </h2>
                            <p className="text-sm sm:text-base font-bold text-brand">
                              {product.subtitle}
                            </p>
                          </div>

                          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                            {product.fullDesc}
                          </p>

                          <div className="mt-8">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                              <ShieldCheck className="size-4 text-emerald-600" />
                              Key Benefits
                            </h3>
                            <ul className="mt-4 grid gap-2.5">
                              {product.keyBenefits.map((benefit, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 border border-slate-100 text-sm text-slate-700 font-medium"
                                >
                                  <CheckCircle2 className="size-4.5 shrink-0 text-emerald-600 mt-0.5" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-8">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                              <Layers className="size-4 text-primary" />
                              Technical &amp; System Highlights
                            </h3>
                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {product.specs.map((spec, sIdx) => (
                                <div
                                  key={sIdx}
                                  className="rounded-xl border border-slate-100 bg-slate-50/70 p-3"
                                >
                                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block">
                                    {spec.label}
                                  </span>
                                  <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 block">
                                    {spec.value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                          <div className="text-xs text-slate-500 max-w-md">
                            Looking for turnkey application? We provide genuine
                            materials + skilled applicator teams across
                            Kurukshetra.
                          </div>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-strong group"
                          >
                            Request Inspection &amp; Quote
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="bg-white py-16 sm:py-24 border-y border-slate-200">
            <div className="section-shell">
              <Reveal>
                <div className="mx-auto max-w-3xl text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Product Selection Guide
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                    Match The Formulation To Your Project
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Whether you are preventing terrace monsoon leaks, coating
                    water tanks, or creating crack-resistant repair mortars.
                  </p>
                </div>
              </Reveal>

              <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="py-4 px-5 font-bold text-slate-900">Feature</th>
                      <th className="py-4 px-5 font-bold text-slate-900">
                        EVA Roof Protec
                      </th>
                      <th className="py-4 px-5 font-bold text-slate-900">
                        EVA Damp Protec 2K
                      </th>
                      <th className="py-4 px-5 font-bold text-slate-900">
                        EVA Universal Repair SBR
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-4 px-5 font-semibold text-slate-800">
                        Primary Substrate
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        Roofs, terraces &amp; exposed slabs
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        Bathrooms, tanks &amp; retained walls
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        Damaged concrete, plaster &amp; joints
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-4 px-5 font-semibold text-slate-800">
                        Chemistry
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        Fibre-reinforced elastomeric polymer
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        2-Component polymer-cementitious
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        Modified Styrene Butadiene Rubber (SBR)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-4 px-5 font-semibold text-slate-800">
                        Heat Reflectance
                      </td>
                      <td className="py-4 px-5 text-emerald-600 font-bold">
                        Yes (High SRI Solar White)
                      </td>
                      <td className="py-4 px-5 text-slate-400">Not applicable</td>
                      <td className="py-4 px-5 text-slate-400">Not applicable</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-4 px-5 font-semibold text-slate-800">
                        Crack Bridging
                      </td>
                      <td className="py-4 px-5 text-emerald-600 font-semibold">
                        High flexible elasticity
                      </td>
                      <td className="py-4 px-5 text-emerald-600 font-semibold">
                        Flexible dense barrier
                      </td>
                      <td className="py-4 px-5 text-emerald-600 font-semibold">
                        Minimizes shrinkage cracks
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-4 px-5 font-semibold text-slate-800">
                        Best Benefit
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        UV stable &amp; roof cooling
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        Hydrostatic pressure barrier
                      </td>
                      <td className="py-4 px-5 text-slate-600">
                        Extreme bonding &amp; mortar strength
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-primary-deep text-primary-foreground py-16 sm:py-20">
            <div
              className="surface-grid absolute inset-0 opacity-30"
              aria-hidden="true"
            />
            <div className="section-shell relative text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent-strong">
                  Product Supply &amp; Technical Support
                </span>
                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl tracking-tight">
                  Have Questions or Ready to Order?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-primary-foreground/80">
                  Call our waterproofing specialists in Kurukshetra for product
                  advice, coverage calculations, and dealer pricing.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button asChild variant="hero" size="xl">
                    <a href={SITE.phoneHref}>
                      <Phone className="size-4" aria-hidden="true" />
                      Call {SITE.phone}
                    </a>
                  </Button>
                  <Button asChild variant="whatsapp" size="xl">
                    <a
                      href={`https://wa.me/917497090944?text=${encodeURIComponent(
                        "Hi EVA Waterproofing, I would like to get pricing or advice on EVA products.",
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      WhatsApp Inquiry
                    </a>
                  </Button>
                  <Button asChild variant="onDark" size="xl">
                    <Link href="/contact">
                      Request On-Site Inspection
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <Footer />
        <MobileCtaBar />
      </div>
    </>
  );
}
*/
