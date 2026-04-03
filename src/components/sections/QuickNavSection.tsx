"use client";

import Link from "next/link";
import { FileText, Presentation, Play, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/types";

type QuickNavSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function QuickNavSection({ locale, dictionary }: QuickNavSectionProps) {
  const items = [
    {
      href: `/${locale}/one-pagers`,
      icon: FileText,
      title: dictionary.nav.onePagers,
      desc:
        locale === "fr"
          ? "Découvrez nos solutions en un coup d'oeil"
          : "Discover our solutions at a glance",
    },
    {
      href: `/${locale}/pitch-deck`,
      icon: Presentation,
      title: dictionary.nav.pitchDeck,
      desc:
        locale === "fr"
          ? "Notre vision et notre stratégie complète"
          : "Our vision and complete strategy",
    },
    {
      href: `/${locale}/demos`,
      icon: Play,
      title: dictionary.nav.demos,
      desc:
        locale === "fr"
          ? "Vidéos de démonstration de nos modules"
          : "Demo videos of our modules",
      badge: dictionary.demos.comingSoonBadge,
    },
  ];

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {items.map((item, i) => (
          <ScrollReveal key={item.href} delay={i * 0.04}>
            <Link href={item.href} className="block h-full">
              <Card className="flex h-full flex-col gap-4 p-6">
                <item.icon size={32} className="text-primary" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.badge && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight size={18} className="text-muted-foreground" />
              </Card>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
