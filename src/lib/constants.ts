import type { Locale } from "@/types";

export const DOCUMENTS = {
  onePagerToolsSuite: {
    fr: "/documents/Kora-Metrics-One-Pager-Suite-Outils-FR.pdf",
    en: "/documents/Kora-Metrics-One-Pager-Suite-Outils-EN.pdf",
  },
  onePagerErpVision: {
    fr: "/documents/Kora-Metrics-One-Pager-Vision-ERP-FR.pdf",
    en: "/documents/Kora-Metrics-One-Pager-Vision-ERP-EN.pdf",
  },
  pitchDeck: {
    fr: "/documents/Kora-Metrics-Pitch-Deck-FR.pdf",
    en: "/documents/Kora-Metrics-Pitch-Deck-EN.pdf",
  },
  pitchDeckPptx: {
    fr: "/documents/Kora-Metrics-Pitch-Deck-FR.pptx",
    en: "/documents/Kora-Metrics-Pitch-Deck-EN.pptx",
  },
} satisfies Record<string, Record<Locale, string>>;

export const STATS = [
  { value: "70-80%", accent: "var(--color-primary)" },
  { value: "4", accent: "var(--color-secondary)" },
  { value: "3", accent: "var(--color-chart-3)" },
  { value: "17", accent: "var(--color-chart-4)" },
] as const;

export const SITE_URL = "https://demo.korametrics.com";

export const CONTACT = {
  email: "contact@korametrics.com",
  phone: "+221 77 182 39 26",
  website: "https://www.korametrics.com",
  whatsapp: "https://wa.me/221771823926",
} as const;
