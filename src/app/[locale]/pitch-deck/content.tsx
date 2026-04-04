"use client";

import { Download, FileDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Locale } from "@/types";

type PitchDeckContentProps = {
  title: string;
  subtitle: string;
  locale: Locale;
  pdfSrc: string;
  pptxSrc: string;
  downloadPdfLabel: string;
  downloadPptxLabel: string;
};

export function PitchDeckContent({
  title,
  subtitle,
  locale,
  pdfSrc,
  pptxSrc,
  downloadPdfLabel,
  downloadPptxLabel,
}: PitchDeckContentProps) {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="mt-4 flex items-center justify-center gap-3">
              <p className="text-lg text-muted-foreground">{subtitle}</p>
              <Badge>{locale.toUpperCase()}</Badge>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="overflow-hidden rounded-xl border border-border bg-muted" style={{ height: "600px" }}>
            <iframe
              src={`${pdfSrc}#toolbar=0`}
              title={title}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={pdfSrc}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              <Download size={16} />
              {downloadPdfLabel}
            </a>
            <a
              href={pptxSrc}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-muted hover:border-primary/30"
            >
              <FileDown size={16} />
              {downloadPptxLabel}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
