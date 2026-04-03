import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { QuickNavSection } from "@/components/sections/QuickNavSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale as Locale);

  return (
    <>
      <HeroSection locale={locale as Locale} dictionary={dictionary} />
      <StatsSection dictionary={dictionary} />
      <QuickNavSection locale={locale as Locale} dictionary={dictionary} />
    </>
  );
}
