"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RadialGlow } from "@/components/ui/RadialGlow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/types";

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const { hero } = dictionary;

  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-32">
      <RadialGlow className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/4" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <Badge className="mb-6">{hero.badge}</Badge>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {hero.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {hero.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={`/${locale}/pitch-deck`} variant="primary">
              {hero.ctaPrimary}
            </Button>
            <Button href={`/${locale}/one-pagers`} variant="outline">
              {hero.ctaSecondary}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
