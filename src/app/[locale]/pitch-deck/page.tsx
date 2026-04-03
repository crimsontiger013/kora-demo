import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n";
import { DOCUMENTS } from "@/lib/constants";
import { PitchDeckContent } from "./content";

export default async function PitchDeckPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale as Locale);
  const l = locale as Locale;

  return (
    <PitchDeckContent
      title={dictionary.pitchDeck.title}
      subtitle={dictionary.pitchDeck.subtitle}
      locale={l}
      pdfSrc={DOCUMENTS.pitchDeck[l]}
      pptxSrc={DOCUMENTS.pitchDeckPptx[l]}
      downloadPdfLabel={dictionary.pitchDeck.downloadPdf}
      downloadPptxLabel={dictionary.pitchDeck.downloadPptx}
    />
  );
}
