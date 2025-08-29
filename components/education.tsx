"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { experiencesData } from "@/lib/data";

export function EducationTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll("[data-timeline-item]");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Education
          </h2>

          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

            <div className="space-y-12">
              {experiencesData.map((item, index) => {
                const isLeft = index % 2 === 0;
                const isVisible = visibleItems.has(index);

                return (
                  <div
                    key={index}
                    data-timeline-item
                    data-index={index}
                    className={cn(
                      "relative flex items-center transition-all duration-700 ease-out",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                  >
                    {/* Timeline node/marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div
                        className={cn(
                          "w-4 h-4 rounded-full border-4 transition-all duration-300",
                          "bg-background border-primary",
                          "hover:scale-125 hover:border-primary/80"
                        )}
                      />
                    </div>

                    {/* Content container */}
                    <div
                      className={cn(
                        "w-full flex",
                        isLeft ? "justify-start pr-8" : "justify-end pl-8"
                      )}
                    >
                      <div
                        className={cn(
                          "w-full max-w-md p-6 rounded-lg border bg-card text-card-foreground",
                          "shadow-sm hover:shadow-md transition-all duration-300",
                          "hover:scale-[1.02] hover:border-primary/20",
                          isLeft ? "mr-8 text-right" : "ml-8 text-left"
                        )}
                      >
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {item.location}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.date}
                        </p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
