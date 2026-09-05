"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";

interface ContactFormProps {
  serviceOptions?: readonly string[];
}

const DEFAULT_SERVICES = [
  "Terrace Waterproofing",
  "Roof Waterproofing",
  "Bathroom Waterproofing",
  "Basement Waterproofing",
  "Water Tank Waterproofing",
  "Water Leakage Repair",
  "Wall Seepage & Dampness Treatment",
  "Crack Filling & Repair",
  "PU Injection Waterproofing",
  "Balcony Waterproofing",
] as const;

export function ContactForm({ serviceOptions = DEFAULT_SERVICES }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Request received", {
        description: `Thank you! For a faster response you can also call or WhatsApp ${SITE.phone}.`,
      });
    }, 500);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            placeholder="10-digit mobile number"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="location">Property Location</Label>
          <Input id="location" name="location" placeholder="Area, Kurukshetra" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="service">Service Required</Label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="problem">Describe Your Problem</Label>
        <Textarea
          id="problem"
          name="problem"
          rows={4}
          placeholder="Where is the leakage or dampness, and how long has it been there?"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="photos">Upload Photos (optional)</Label>
        <Input id="photos" name="photos" type="file" accept="image/*" multiple className="pt-2" />
      </div>
      <Button type="submit" variant="cta" size="xl" disabled={submitting} className="mt-2">
        {submitting ? "Sending..." : "Request Inspection"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Prefer talking directly? Call or WhatsApp {SITE.phone}.
      </p>
    </form>
  );
}
