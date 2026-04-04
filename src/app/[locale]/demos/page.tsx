import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n";
import { DemosContent } from "./content";

export default async function DemosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale as Locale);

  return (
    <DemosContent
      title={dictionary.demos.title}
      subtitle={dictionary.demos.subtitle}
      modules={dictionary.demos.modules}
    />
  );
}
