"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { DocumentViewer } from "@/components/ui/DocumentViewer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type OnePagerCard = {
  title: string;
  badge: string;
  desc: string;
  pdfSrc: string;
  downloadLabel: string;
  expandLabel: string;
  closeLabel: string;
};

type OnePagerContentProps = {
  title: string;
  subtitle: string;
  cards: OnePagerCard[];
};

export function OnePagerContent({
  title,
  subtitle,
  cards,
}: OnePagerContentProps) {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <Card hover={false} className="flex flex-col gap-4">
                <Badge>{card.badge}</Badge>
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
                <DocumentViewer
                  src={card.pdfSrc}
                  title={card.title}
                  height="500px"
                  downloadLabel={card.downloadLabel}
                  expandLabel={card.expandLabel}
                  closeLabel={card.closeLabel}
                />
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
