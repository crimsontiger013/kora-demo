"use client";

import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STATS } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";

type StatsSectionProps = {
  dictionary: Dictionary;
};

export function StatsSection({ dictionary }: StatsSectionProps) {
  const labels = [
    dictionary.stats.timeSaved,
    dictionary.stats.modules,
    dictionary.stats.firms,
    dictionary.stats.countries,
  ];

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {STATS.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 0.04}>
            <Card borderTopColor={stat.accent} hover={false}>
              <div className="text-center">
                <p
                  className="text-4xl font-bold"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {labels[i]}
                </p>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
