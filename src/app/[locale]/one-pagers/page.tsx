import type { Locale } from "@/types";
import { getDictionary } from "@/lib/i18n";
import { DOCUMENTS } from "@/lib/constants";
import { OnePagerContent } from "./content";

export default async function OnePagersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale as Locale);
  const l = locale as Locale;

  const cards = [
    {
      title: dictionary.onePagers.toolsSuite.title,
      badge: dictionary.onePagers.toolsSuite.badge,
      desc: dictionary.onePagers.toolsSuite.desc,
      pdfSrc: DOCUMENTS.onePagerToolsSuite[l],
      downloadLabel: dictionary.onePagers.download,
      expandLabel: dictionary.onePagers.expand,
      closeLabel: dictionary.onePagers.close,
    },
    {
      title: dictionary.onePagers.erpVision.title,
      badge: dictionary.onePagers.erpVision.badge,
      desc: dictionary.onePagers.erpVision.desc,
      pdfSrc: DOCUMENTS.onePagerErpVision[l],
      downloadLabel: dictionary.onePagers.download,
      expandLabel: dictionary.onePagers.expand,
      closeLabel: dictionary.onePagers.close,
    },
  ];

  return (
    <OnePagerContent
      title={dictionary.onePagers.title}
      subtitle={dictionary.onePagers.subtitle}
      cards={cards}
    />
  );
}
