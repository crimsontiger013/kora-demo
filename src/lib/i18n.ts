import type { Locale } from "@/types";

export const dictionaries = {
  fr: {
    nav: {
      onePagers: "One Pagers",
      pitchDeck: "Pitch Deck",
      demos: "Demos",
    },
    splash: {
      tagline: "Automatisation Comptable & Fiscale par IA",
      chooseLang: "Choisissez votre langue",
      french: "Français",
      english: "English",
      event: "GITEX Africa 2026 · Marrakech",
    },
    hero: {
      badge: "GITEX AFRICA 2026 · MARRAKECH",
      title: "L'IA au service de la comptabilité & fiscalité africaine",
      subtitle:
        "Suite d'outils IA et système de gestion intégré pour le référentiel SYSCOHADA",
      ctaPrimary: "Voir le Pitch Deck",
      ctaSecondary: "Nos One Pagers",
    },
    stats: {
      timeSaved: "Gain de temps",
      modules: "Modules IA",
      firms: "Cabinets engagés",
      countries: "Pays OHADA",
    },
    onePagers: {
      title: "One Pagers",
      subtitle: "Deux documents, deux visions de Kora Metrics",
      toolsSuite: {
        title: "Suite d'Outils IA",
        badge: "MODULES STANDALONE",
        desc: "Nos 4 modules autonomes résolvant les plus grandes douleurs des cabinets comptables : OCR fiscal, réconciliation bancaire, déclarations TVA et gestion de la paie.",
      },
      erpVision: {
        title: "Vision ERP Intégré",
        badge: "VISION PRODUIT",
        desc: "Notre roadmap vers un système de gestion intégré Finances & Fiscalité entièrement piloté par l'IA, de la facture aux états financiers.",
      },
      download: "Télécharger PDF",
      expand: "Voir en plein écran",
      close: "Fermer",
    },
    pitchDeck: {
      title: "Pitch Deck — GITEX Africa 2026",
      subtitle: "12 slides · Kora Metrics",
      downloadPdf: "Télécharger (PDF)",
      downloadPptx: "Télécharger (PowerPoint)",
    },
    demos: {
      title: "Démos Produit",
      subtitle: "Découvrez Kora Metrics en action",
      comingSoon: "Bientôt disponible",
      comingSoonBadge: "À VENIR",
      modules: [
        {
          title: "OCR + Analyse Fiscale IA",
          desc: "De la facture fournisseur à l'écriture comptable, automatiquement.",
          youtubeId: "I5ewvaCY7QY",
        },
        {
          title: "Réconciliation Bancaire",
          desc: "Rapprochement intelligent des relevés bancaires et écritures.",
          youtubeId: "aO7GSeJ7UZw",
        },
        {
          title: "Déclarations TVA",
          desc: "Génération automatique des déclarations conformes DGID.",
          youtubeId: "z1ayD1tgbpc",
        },
        {
          title: "Gestion de la Paie",
          desc: "Calcul automatisé des salaires et bulletins de paie.",
          youtubeId: "ZNoUvPEttBo",
        },
      ],
    },
    footer: {
      rights: "© 2026 Kora Metrics · SAS Sénégal",
      event: "GITEX Africa 2026",
    },
  },
  en: {
    nav: {
      onePagers: "One Pagers",
      pitchDeck: "Pitch Deck",
      demos: "Demos",
    },
    splash: {
      tagline: "AI-Powered Accounting & Tax Automation",
      chooseLang: "Choose your language",
      french: "Français",
      english: "English",
      event: "GITEX Africa 2026 · Marrakech",
    },
    hero: {
      badge: "GITEX AFRICA 2026 · MARRAKECH",
      title: "AI-Powered Accounting & Tax for Africa",
      subtitle:
        "AI tools suite and integrated management system for the SYSCOHADA framework",
      ctaPrimary: "View Pitch Deck",
      ctaSecondary: "Our One Pagers",
    },
    stats: {
      timeSaved: "Time Saved",
      modules: "AI Modules",
      firms: "Committed Firms",
      countries: "OHADA Countries",
    },
    onePagers: {
      title: "One Pagers",
      subtitle: "Two documents, two visions of Kora Metrics",
      toolsSuite: {
        title: "AI Tools Suite",
        badge: "STANDALONE MODULES",
        desc: "Our 4 standalone modules solving the biggest pain points for accounting firms: tax OCR, bank reconciliation, VAT declarations and payroll management.",
      },
      erpVision: {
        title: "Integrated ERP Vision",
        badge: "PRODUCT VISION",
        desc: "Our roadmap toward a fully AI-driven integrated Finance & Tax management system, from invoices to financial statements.",
      },
      download: "Download PDF",
      expand: "View fullscreen",
      close: "Close",
    },
    pitchDeck: {
      title: "Pitch Deck — GITEX Africa 2026",
      subtitle: "12 slides · Kora Metrics",
      downloadPdf: "Download (PDF)",
      downloadPptx: "Download (PowerPoint)",
    },
    demos: {
      title: "Product Demos",
      subtitle: "See Kora Metrics in action",
      comingSoon: "Coming soon",
      comingSoonBadge: "COMING SOON",
      modules: [
        {
          title: "OCR + AI Tax Analysis",
          desc: "From supplier invoice to accounting entry, automatically.",
          youtubeId: "Ss7Lr_F5ZAU",
        },
        {
          title: "Bank Reconciliation",
          desc: "Intelligent matching of bank statements and entries.",
          youtubeId: "jc11zUrTUSU",
        },
        {
          title: "VAT Declarations",
          desc: "Automatic generation of DGID-compliant declarations.",
          youtubeId: "NxC1H02oE8Q",
        },
        {
          title: "Payroll Management",
          desc: "Automated salary computation and payslips.",
          youtubeId: "ZH1pAJSmoVE",
        },
      ],
    },
    footer: {
      rights: "© 2026 Kora Metrics · SAS Senegal",
      event: "GITEX Africa 2026",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
