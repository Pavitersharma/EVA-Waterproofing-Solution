"use client";

import { useCallback, useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface ReviewData {
  name: string;
  rating: number;
  text: string;
  initials: string;
}

export function ReviewCard({ review }: { review: ReviewData }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
      <div className="flex gap-1 text-accent-strong" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, s) => (
          <Star key={s} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-full bg-brand-soft text-xs font-bold text-brand">
          {review.initials}
        </span>
        <span className="text-sm font-bold text-primary">{review.name}</span>
      </div>
    </article>
  );
}

export function ReviewCarousel({ reviews }: { reviews: readonly ReviewData[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    updateState();
    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  return (
    <div>
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {reviews.map((review) => (
            <CarouselItem key={review.name} className="pl-4 basis-full sm:basis-1/2">
              <ReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {count > 1 && (
        <div className="mt-6 flex justify-center gap-2.5" role="tablist" aria-label="Review slides">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`size-2.5 rounded-full transition-all duration-300 ${
                i === current ? "scale-125 bg-brand" : "bg-border hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
