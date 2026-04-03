"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type DemosContentProps = {
  title: string;
  subtitle: string;
  comingSoon: string;
  comingSoonBadge: string;
  modules: readonly {
    readonly title: string;
    readonly desc: string;
    readonly youtubeId: string | null;
  }[];
};

export function DemosContent({
  title,
  subtitle,
  comingSoon,
  comingSoonBadge,
  modules,
}: DemosContentProps) {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {modules.map((mod, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <Card hover={false} className="flex flex-col gap-4">
                {mod.youtubeId ? (
                  <YouTubeEmbed videoId={mod.youtubeId} title={mod.title} />
                ) : (
                  <VideoPlaceholder comingSoonText={comingSoon} />
                )}
                <h3 className="text-lg font-semibold">{mod.title}</h3>
                <p className="text-sm text-muted-foreground">{mod.desc}</p>
                {!mod.youtubeId && (
                  <Badge className="bg-primary/10 text-primary border-primary/20 self-start">
                    {comingSoonBadge}
                  </Badge>
                )}
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
