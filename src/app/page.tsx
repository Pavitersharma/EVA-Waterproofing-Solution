import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bath,
  Blocks,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Handshake,
  Home,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PaintRoller,
  Search,
  ShieldCheck,
  Sparkles,
  Syringe,
  Waves,
  Wrench,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ReviewCarousel, ReviewCard, type ReviewData } from "@/components/site/ReviewCarousel";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/lib/site";

import heroImg from "@/assets/hero-terrace-waterproofing.jpg";
import aboutImg from "@/assets/about-inspection.jpg";
import beforeTerrace from "@/assets/before-terrace.jpg";
import afterTerrace from "@/assets/after-terrace.jpg";
import beforeWall from "@/assets/before-wall.jpg";
import afterWall from "@/assets/after-wall.jpg";
import beforeBathroom from "@/assets/before-bathroom.jpg";
import afterBathroom from "@/assets/after-bathroom.jpg";

import logoEmblem from "@/assets/logo-emblem.png";

const TITLE = "EVA Waterproofing & Solution | Waterproofing Services in Kurukshetra";
const DESCRIPTION =
  "EVA Waterproofing & Solution provides terrace, roof, bathroom and basement waterproofing, leakage repair, seepage and dampness treatment in Kurukshetra and nearby areas. Call +91 7027143118.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "waterproofing services Kurukshetra",
    "terrace waterproofing Kurukshetra",
    "roof waterproofing",
    "bathroom waterproofing",
    "water leakage repair",
    "wall seepage treatment",
    "basement waterproofing Haryana",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

/* ─────────────────────────── data ─────────────────────────── */

const TRUST_POINTS = [
  "Professional Workmanship",
  "Quality Waterproofing Solutions",
  "Transparent Guidance",
  "Residential & Commercial Services",
];

const SERVICES = [
  {
    icon: Layers,
    title: "Terrace Waterproofing",
    text: "Protection against rainwater penetration, cracks, seepage and terrace leakage.",
  },
  {
    icon: Home,
    title: "Roof Waterproofing",
    text: "Waterproofing solutions designed to help protect roofs from water damage.",
  },
  {
    icon: Bath,
    title: "Bathroom Waterproofing",
    text: "Treatment for bathroom leakage, seepage and moisture-related problems.",
  },
  {
    icon: Building2,
    title: "Basement Waterproofing",
    text: "Protection against groundwater seepage, dampness and water penetration.",
  },
  {
    icon: Blocks,
    title: "Water Tank Waterproofing",
    text: "Waterproofing solutions for overhead and underground water tanks.",
  },
  {
    icon: Droplets,
    title: "Water Leakage Repair",
    text: "Identify and treat common leakage and water penetration issues.",
  },
  {
    icon: PaintRoller,
    title: "Wall Seepage & Dampness Treatment",
    text: "Solutions for damp patches, peeling surfaces and wall seepage.",
  },
  {
    icon: Wrench,
    title: "Crack Filling & Repair",
    text: "Treatment of cracks that can allow water to penetrate the structure.",
  },
  {
    icon: Syringe,
    title: "PU Injection Waterproofing",
    text: "Injection-based waterproofing for suitable cracks, joints and leakage points.",
  },
  {
    icon: Waves,
    title: "Balcony Waterproofing",
    text: "Protection against rainwater and surface leakage.",
  },
];

const STEPS = [
  {
    title: "Inspection",
    text: "We inspect the affected area and identify visible signs of leakage, seepage, cracks or dampness.",
  },
  {
    title: "Problem Identification",
    text: "We assess the likely source and extent of the water-related problem.",
  },
  {
    title: "Solution Recommendation",
    text: "We recommend a suitable waterproofing approach based on the property and problem.",
  },
  {
    title: "Professional Application",
    text: "The required surface preparation, treatment and waterproofing work is carried out carefully.",
  },
  {
    title: "Final Inspection",
    text: "The completed work is checked to ensure proper coverage and finishing.",
  },
];

const WHY_US = [
  {
    icon: Search,
    title: "Professional Approach",
    text: "We focus on understanding the actual water-related problem before recommending a solution.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Materials",
    text: "Use suitable waterproofing materials and systems based on the project requirements.",
  },
  {
    icon: Handshake,
    title: "Transparent Guidance",
    text: "Explain the problem and recommended work clearly before starting.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    text: "Waterproofing solutions for homes, offices, shops and other properties.",
  },
  {
    icon: MapPin,
    title: "Local Service",
    text: "Serving customers in Kurukshetra and nearby areas.",
  },
  {
    icon: Sparkles,
    title: "Customer-Focused Service",
    text: "Our goal is to provide practical waterproofing solutions with clean and professional workmanship.",
  },
];

const PROJECTS = [
  { category: "Terrace Waterproofing", before: beforeTerrace, after: afterTerrace },
  { category: "Wall Seepage Treatment", before: beforeWall, after: afterWall },
  { category: "Bathroom Waterproofing", before: beforeBathroom, after: afterBathroom },
];

const REVIEWS: ReviewData[] = [
  {
    name: "Dr. Subash",
    rating: 5,
    text: "Very professional waterproofing service. The team explained the problem clearly, kept us informed throughout the process, and delivered excellent results. Really satisfied with the overall experience.",
    initials: "DS",
  },
  {
    name: "Rampal",
    rating: 5,
    text: "Reliable and hassle-free service. The staff was helpful right from the first call, guided us on what needed to be done, and completed the bathroom waterproofing work smoothly. Would definitely recommend.",
    initials: "R",
  },
  {
    name: "Brijlal Dhiman",
    rating: 5,
    text: "Excellent quality of work on our terrace seepage issue. They responded quickly to our inquiry, arrived on time, and finished the job neatly. I would happily recommend EVA Waterproofing to anyone.",
    initials: "BD",
  },
];

const FAQS = [
  {
    q: "What areas do you provide waterproofing services in?",
    a: "We provide waterproofing and leakage treatment services in Kurukshetra and nearby areas of Haryana. If you are unsure whether your location is covered, call or WhatsApp us and we will let you know.",
  },
  {
    q: "Do you provide terrace waterproofing?",
    a: "Yes, terrace waterproofing is one of our key services. We offer protection against rainwater penetration, cracks, seepage and terrace leakage.",
  },
  {
    q: "Do you treat wall seepage and dampness?",
    a: "Yes, we provide seepage and dampness treatment solutions for damp patches, peeling surfaces and moisture-related wall problems.",
  },
  {
    q: "How can I get a waterproofing inspection?",
    a: `Customers can call or WhatsApp ${SITE.phone} to discuss their requirement and arrange an inspection.`,
  },
];

/* ─────────────────────────── page ─────────────────────────── */

export default function HomeLandingPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: DESCRIPTION,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: { "@type": "City", name: "Kurukshetra, Haryana, India" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kurukshetra",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Terrace waterproofing",
      "Roof waterproofing",
      "Bathroom waterproofing",
      "Basement waterproofing",
      "Water leakage repair",
      "Wall seepage and dampness treatment",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-background pb-16 lg:pb-0">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <WhyUs />
          <Projects />
          <ServiceArea />
          <About />
          <Reviews />
          <Faq />
          <CtaBanner />
        </main>
        <Footer />
        <MobileCtaBar />
      </div>
    </>
  );
}

/* ─────────────────────── section components ─────────────────────── */

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden  pt-16 sm:pt-18">
      <Image
        src={heroImg}
        alt="Waterproofing team applying blue waterproof coating on a terrace roof in Kurukshetra"
        priority
        fill
        className="absolute inset-0 -z-20 size-full object-cover opacity-100"
      />
      <div className="hero-veil absolute inset-0 -z-10" />
      <div className="section-shell py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur">
              <MapPin className="size-3.5" aria-hidden="true" />
              Serving Kurukshetra &amp; Nearby Areas
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
              Reliable Waterproofing Solutions That Protect Your Property
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Professional waterproofing, leakage repair, seepage treatment and dampness solutions
              for homes, commercial properties and other buildings in Kurukshetra and nearby areas.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href="/contact">
                  Get Free Inspection
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <a href={SITE.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call {SITE.phone}
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 px-4 py-3 text-sm font-semibold text-primary-foreground backdrop-blur"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-accent-strong" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Waterproofing Solutions"
          subtitle="Solutions designed around the specific water leakage, seepage and dampness problems affecting your property."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 60}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-brand transition-transform duration-300 group-hover:scale-105">
                  <s.icon className="size-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-all hover:gap-2.5"
                >
                  Enquire Now
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-primary py-16 sm:py-24">
      <div className="surface-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur border border-white/15 shadow-sm">
              <div className="size-6 overflow-hidden rounded-md bg-white p-0.5">
                <Image
                  src={logoEmblem}
                  alt="EVA Waterproofing"
                  width={24}
                  height={24}
                  className="size-full object-contain"
                />
              </div>
              <span className="text-xs font-bold text-primary-foreground tracking-wide">
                EVA Waterproofing &amp; Solution
              </span>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent-strong">
            <ClipboardCheck className="size-3.5" aria-hidden="true" />
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
            Our Simple 5-Step Waterproofing Process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
            We follow a proper sequence instead of simply applying waterproofing material — so the
            treatment matches the actual problem.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} className="h-full">
              <li className="relative h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-6 backdrop-blur transition-colors hover:border-accent-strong/60">
                <span className="grid size-11 place-items-center rounded-xl bg-accent-strong text-base font-extrabold text-accent-strong-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-primary-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                  {step.text}
                </p>
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 place-items-center rounded-full bg-accent-strong/20 text-accent-strong lg:grid"
                    aria-hidden="true"
                  >
                    <ArrowRight className="size-3.5" />
                  </span>
                )}
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="xl">
            <a href="/contact">Book a Property Inspection</a>
          </Button>
          <Button asChild variant="onDark" size="xl">
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Customers Choose EVA Waterproofing & Solution"
          subtitle="A practical, clearly explained approach to waterproofing — for homes and commercial properties alike."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 60}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-primary">
                  <item.icon className="size-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const categories = [
    "Terrace Waterproofing",
    "Bathroom Waterproofing",
    "Wall Seepage Treatment",
    "Basement Waterproofing",
    "Leakage Repair",
  ];
  return (
    <section id="projects" className="bg-secondary py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Waterproofing Results"
          subtitle="How affected surfaces typically look before treatment, and after proper preparation and waterproofing work."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.category} delay={i * 80}>
              <article className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="grid grid-cols-2">
                  {(
                    [
                      { label: "Before", src: p.before },
                      { label: "After", src: p.after },
                    ] as const
                  ).map((shot) => (
                    <div key={shot.label} className="relative">
                      <Image
                        src={shot.src}
                        alt={`${p.category} — ${shot.label.toLowerCase()} waterproofing treatment`}
                        loading="lazy"
                        width={1000}
                        height={750}
                        className="aspect-4/3 w-full object-cover"
                      />
                      <span
                        className={`absolute left-2 top-2 rounded-md px-2 py-1 text-[0.6rem] font-extrabold uppercase tracking-widest ${
                          shot.label === "Before"
                            ? "bg-primary-deep text-primary-foreground"
                            : "bg-accent-strong text-accent-strong-foreground"
                        }`}
                      >
                        {shot.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <h3 className="text-base font-bold">{p.category}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">
                    Before → After
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Representative project imagery. Actual results may vary depending on site conditions.
        </p>
      </div>
    </section>
  );
}

function ServiceArea() {
  const areas = ["Kurukshetra City", "Thanesar", "Pehowa", "Shahabad", "Ladwa", "Nearby Villages"];
  return (
    <section id="service-area" className="py-16 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Service Area"
            title="Waterproofing Services in Kurukshetra"
            subtitle="EVA Waterproofing & Solution provides waterproofing and leakage treatment services in Kurukshetra and nearby areas of Haryana."
          />
          <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
            {areas.map((a) => (
              <li
                key={a}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground/80 shadow-card"
              >
                <MapPin className="size-4 shrink-0 text-brand" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-secondary p-6 text-center">
            <p className="text-lg font-bold">Need waterproofing help near you?</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button asChild variant="cta" size="lg">
                <a href={SITE.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call {SITE.phone}
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-secondary py-16 sm:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-lift">
            <Image
              src={aboutImg}
              alt="Technician checking wall dampness with a moisture meter during a waterproofing inspection"
              loading="lazy"
              width={1200}
              height={1008}
              className="aspect-4/3 w-full object-cover"
            />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-background/95 p-3 shadow-lift backdrop-blur">
              <div className="size-12 sm:size-14 rounded-2xl bg-white p-1 border border-border/80 shadow-sm">
                <Image
                  src={logoEmblem}
                  alt="EVA Waterproofing Badge"
                  width={56}
                  height={56}
                  className="size-full object-contain"
                />
              </div>
              <div className="pr-2">
                <p className="text-xs sm:text-sm font-bold text-primary">
                  Certified Waterproofing Team
                </p>
                <p className="text-[0.7rem] font-semibold text-muted-foreground">
                  EVA Waterproofing &amp; Solution
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="About EVA Waterproofing & Solution"
          />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            EVA Waterproofing &amp; Solution provides practical waterproofing and water leakage
            solutions for residential and commercial properties in Kurukshetra and nearby areas. Our
            focus is on identifying water-related problems and providing suitable treatment for
            leakage, seepage, dampness and waterproofing requirements.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Problem-first inspection",
              "Clear recommendations",
              "Clean workmanship",
              "Residential & commercial",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-semibold">
                <CheckCircle2 className="size-4 shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg">
              <a href="/contact">Get Free Inspection</a>
            </Button>
            <Button asChild variant="softOutline" size="lg">
              <a href="/#services">View Our Services</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our Customers Say"
          subtitle="Genuine feedback from customers we have worked with."
        />

        {/* Desktop grid */}
        <div className="mt-12 hidden gap-5 lg:grid lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 70}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        {/* Mobile & Tablet carousel */}
        <div className="mt-12 lg:hidden">
          <ReviewCarousel reviews={REVIEWS} />
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="softOutline" size="lg">
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
              Leave a Review
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-secondary py-16 sm:py-24">
      <div className="section-shell max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-card"
            >
              <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-16 sm:py-20">
      <div className="surface-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="section-shell relative text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-3.5 rounded-2xl bg-white/10 px-5 py-2.5 backdrop-blur border border-white/15 shadow-lift">
            <div className="size-12 overflow-hidden rounded-xl bg-white p-1 shadow-sm">
              <Image
                src={logoEmblem}
                alt="EVA Waterproofing Emblem"
                width={48}
                height={48}
                className="size-full object-contain"
              />
            </div>
            <span className="text-sm sm:text-base font-extrabold text-primary-foreground tracking-wide">
              EVA Waterproofing &amp; Solution
            </span>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">
          Don&apos;t Let Water Damage Get Worse
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
          Tell us about your leakage, seepage or waterproofing problem and let our team help you
          find a suitable solution.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="xl">
            <a href="/contact">Get a Free Inspection</a>
          </Button>
          <Button asChild variant="whatsapp" size="xl">
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-primary-foreground/85">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 hover:text-accent-strong"
          >
            <Phone className="size-4" aria-hidden="true" />
            {SITE.phone}
          </a>
          <a
            href={SITE.emailHref}
            className="inline-flex items-center gap-2 hover:text-accent-strong"
          >
            <Mail className="size-4" aria-hidden="true" />
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
