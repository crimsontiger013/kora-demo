# Kora Metrics — Demo Website

## Résumé du projet

Site vitrine / showcase destiné à accompagner les rencontres investisseurs et partenaires lors du GITEX Africa 2026 (Marrakech, 7-9 avril). Le site centralise tous les supports de communication de Kora Metrics (one pagers, pitch decks, vidéos de démo) dans une interface bilingue FR/EN conforme au Design System Kora.

Le site sera partagé via un QR code unique imprimé sur les cartes de visite et projeté pendant les présentations. Il doit donc charger instantanément, être irréprochable visuellement sur mobile comme desktop, et donner une image premium de la startup.

---

## Stack technique

| Composant | Choix | Justification |
|-----------|-------|---------------|
| Framework | **Next.js 14+ (App Router)** | SSG, i18n natif, performance |
| Styling | **Tailwind CSS 3.4+** | Cohérence Design System, utilitaire |
| Animations | **Framer Motion** | Scroll-reveal, transitions douces |
| Langue | **TypeScript** | Sécurité typage, DX |
| Hébergement | **Vercel** (ou Netlify) | Deploy 1 clic, CDN global, preview branches |
| Fonts | **Inter** (Google Fonts via `next/font`) | Identité Kora |
| Icons | **Lucide React** | Cohérent, léger, accessible |

---

## Architecture fichiers

```
kora-demo-site/
├── public/
│   ├── images/
│   │   ├── kora-logo-dark.svg          # Logo pour fond sombre
│   │   ├── kora-logo-light.svg         # Logo pour fond clair
│   │   └── og-image.png                # Image OpenGraph 1200x630
│   ├── documents/
│   │   ├── Kora-Metrics-One-Pager-Suite-Outils-FR.pdf
│   │   ├── Kora-Metrics-One-Pager-Suite-Outils-EN.pdf
│   │   ├── Kora-Metrics-One-Pager-Vision-ERP-FR.pdf
│   │   ├── Kora-Metrics-One-Pager-Vision-ERP-EN.pdf
│   │   ├── Kora-Metrics-Pitch-Deck-FR.pdf
│   │   └── Kora-Metrics-Pitch-Deck-EN.pdf
│   └── videos/                         # Placeholder — vidéos à venir
│       └── .gitkeep
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout : <html>, fonts, metadata
│   │   ├── page.tsx                    # Splash / Language selector
│   │   ├── [locale]/                   # Route dynamique i18n (fr | en)
│   │   │   ├── layout.tsx             # Locale layout (navbar, footer)
│   │   │   ├── page.tsx               # Page d'accueil locale
│   │   │   ├── one-pagers/
│   │   │   │   └── page.tsx           # Section One Pagers
│   │   │   ├── pitch-deck/
│   │   │   │   └── page.tsx           # Section Pitch Deck
│   │   │   └── demos/
│   │   │       └── page.tsx           # Section Vidéos Démo
│   │   └── globals.css                # CSS variables Kora Design System
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── DocumentViewer.tsx     # Lecteur PDF intégré
│   │   │   ├── VideoPlaceholder.tsx   # Composant "Coming soon"
│   │   │   └── GridBackground.tsx     # Graph-paper pattern
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── OnePagerSection.tsx
│   │       ├── PitchDeckSection.tsx
│   │       └── DemoSection.tsx
│   ├── lib/
│   │   ├── i18n.ts                    # Dictionnaires FR/EN
│   │   └── constants.ts              # Chemins fichiers, metadata
│   └── types/
│       └── index.ts
├── CLAUDE.md
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Page par page — Spécifications détaillées

### Page 0 : Splash / Sélecteur de langue (`/`)

C'est la première page vue par l'utilisateur. Elle doit être immédiate et marquante.

**Layout :**
- Plein écran, fond `--background` (#0F172A)
- Graph paper grid en arrière-plan (pattern signature Kora)
- Glow radial subtil centré (orange `--primary` à 20% opacité, blur 120px)
- Logo Kora centré verticalement, taille 240px de large
- Sous le logo : tagline "AI-Powered Finance & Tax Automation"
- Deux boutons côte à côte, style pill (rounded-full) :
  - **Français** → navigue vers `/fr`
  - **English** → navigue vers `/en`
- Boutons : fond `--card` (#1E293B), border `--border`, hover → `bg-[#253047]` + `border-primary/30`
- Au survol, léger scale (1.02) via Framer Motion
- En bas de page : "GITEX Africa 2026 · Marrakech" en `--muted-foreground`, taille 12px

**Animation d'entrée :**
- Logo : fade-in + scale de 0.95 à 1, durée 0.6s
- Tagline : fade-up, délai 0.2s
- Boutons : fade-up staggeré, délai 0.4s

**Comportement :**
- Si l'URL contient déjà `/fr` ou `/en`, skip cette page
- Pas de détection automatique de langue (choix explicite voulu)
- Les boutons font un `router.push('/fr')` ou `router.push('/en')`

---

### Layout locale (`/[locale]/layout.tsx`)

Ce layout encapsule toutes les pages FR et EN.

**Navbar (fixe, en haut) :**
- Fond : `--sidebar` (#111827) avec `backdrop-blur-sm` et opacité 95%
- Hauteur : 64px
- Logo Kora à gauche (logo dark, 120px de large)
- Navigation centrale :
  - **One Pagers** → `/[locale]/one-pagers`
  - **Pitch Deck** → `/[locale]/pitch-deck`
  - **Démos** → `/[locale]/demos`
  - Style liens : `text-muted-foreground` au repos, `text-foreground` au hover, `text-primary` + indicateur bottom-border quand actif
- À droite : `LanguageSwitcher` — toggle FR/EN
  - Deux boutons pill côte à côte
  - Actif : `bg-primary text-white`
  - Inactif : `bg-transparent text-muted-foreground`
  - Au clic, navigue vers la même page dans l'autre locale
- Mobile : burger menu → drawer latéral fond `--sidebar`

**Footer :**
- Fond : `--sidebar` (#111827)
- Logo Kora + texte "© 2026 Kora Metrics · SAS Sénégal"
- Liens : site web, email, WhatsApp Sédar
- Badge "GITEX Africa 2026"

---

### Page d'accueil locale (`/[locale]/page.tsx`)

**Hero Section :**
- Fond : `--background` + graph paper grid
- Glow radial subtil derrière le titre
- Badge pill en haut : "GITEX AFRICA 2026 · MARRAKECH"
- Titre principal (hero) :
  - FR : "L'IA au service de la comptabilité & fiscalité africaine"
  - EN : "AI-Powered Accounting & Tax for Africa"
  - Style : `text-4xl md:text-6xl font-bold tracking-tight`
- Sous-titre :
  - FR : "Suite d'outils IA et système de gestion intégré pour le référentiel SYSCOHADA"
  - EN : "AI tools suite and integrated management system for the SYSCOHADA framework"
  - Style : `text-lg text-muted-foreground`
- Deux CTA boutons :
  - Principal : "Voir le Pitch Deck" / "View Pitch Deck" → `/[locale]/pitch-deck` (bg-primary, rounded-full)
  - Secondaire : "Nos One Pagers" / "Our One Pagers" → `/[locale]/one-pagers` (outline, rounded-full)

**Section Chiffres clés (sous le hero) :**
- 4 cards stat en row (responsive : 2×2 sur mobile)
- Chaque card : fond `--card`, border-top colorée
  - "70-80%" / "Time savings" — accent `--primary`
  - "4" / "AI Modules" — accent `--secondary`
  - "3" / "Committed Firms" — accent `--chart-3` (green)
  - "17" / "OHADA Countries" — accent `--chart-4` (purple)
- Nombres en 36px bold, couleur de l'accent
- Labels en 12px `--muted-foreground`
- Animation : counter-up au scroll + fade-in staggeré

**Section Navigation rapide :**
- 3 grandes cards cliquables (bento grid)
- Chaque card occupe le tiers de la largeur :
  1. **One Pagers** — icône FileText, desc courte, flèche →
  2. **Pitch Deck** — icône Presentation, desc courte, flèche →
  3. **Vidéos Démo** — icône Play, desc courte + badge "Bientôt" / "Coming soon"
- Cards : fond `--card`, rounded-2xl, hover → `bg-[#253047]` + `border-primary/30`
- Animation hover : translateY(-2px) + shadow

---

### Page One Pagers (`/[locale]/one-pagers`)

Présente les deux one pagers côte à côte.

**Layout :**
- Titre : "One Pagers" (section-title style)
- Sous-titre : FR "Deux documents, deux visions de Kora Metrics" / EN "Two documents, two visions of Kora Metrics"
- Grille 2 colonnes (1 col sur mobile)

**Card 1 — Suite d'Outils Standalone :**
- Titre : "Suite d'Outils IA" / "AI Tools Suite"
- Description (2-3 lignes) : résumé des 4 modules standalone
- Badge : "MODULES STANDALONE"
- Preview : embed du PDF dans un cadre avec bordure `--border`, coins arrondis, ombre
  - Utiliser `<iframe src="/documents/...pdf" />` ou une lib comme `react-pdf`
  - Hauteur fixe 500px, scroll interne
- Bouton télécharger : icône Download + "Télécharger PDF" / "Download PDF"
  - Lien direct vers le fichier PDF dans `/public/documents/`
- Le PDF affiché est celui de la langue courante (FR ou EN)

**Card 2 — Vision ERP Intégré :**
- Même structure que Card 1
- Titre : "Vision ERP Intégré" / "Integrated ERP Vision"
- Badge : "VISION PRODUIT"
- Description : résumé de la roadmap vers le ERP complet

**Comportement responsive :**
- Desktop : 2 colonnes côte à côte
- Tablet : 2 colonnes mais preview PDF réduit à 400px
- Mobile : 1 colonne, preview PDF pleine largeur, hauteur 350px

---

### Page Pitch Deck (`/[locale]/pitch-deck`)

**Layout :**
- Titre : "Pitch Deck — GITEX Africa 2026"
- Sous-titre : "12 slides · Kora Metrics" + badge langue active

**Contenu principal :**
- Embed PDF pleine largeur du pitch deck
  - Utiliser le PDF converti depuis le PPTX (à générer au préalable)
  - Ou utiliser une lib d'affichage de slides (carrousel)
- Navigation slides :
  - Flèches gauche/droite
  - Barre de progression en bas (12 points cliquables, actif = `--primary`)
  - Miniatures des slides en row horizontale scrollable sous le viewer principal
- Bouton "Télécharger le Pitch Deck" / "Download Pitch Deck" (PDF)
- Bouton secondaire "Télécharger (PowerPoint)" / "Download (PowerPoint)" (PPTX)

**Alternative si embed PDF trop lourd :**
- Convertir chaque slide en image JPG/PNG haute résolution
- Afficher dans un carrousel Framer Motion avec swipe touch
- Plus léger et plus fluide sur mobile

---

### Page Vidéos Démo (`/[locale]/demos`)

**État actuel : placeholder (vidéos à venir)**

**Layout :**
- Titre : "Démos Produit" / "Product Demos"
- Sous-titre : "Découvrez Kora Metrics en action" / "See Kora Metrics in action"

**Grille de placeholders :**
- 4 cards (grille 2×2, 1 col sur mobile)
- Chaque card représente un module :
  1. OCR + Analyse Fiscale IA
  2. Réconciliation Bancaire
  3. Déclarations TVA
  4. Gestion de la Paie

**Design de chaque placeholder :**
- Card fond `--card`, rounded-2xl
- En haut : zone vidéo 16:9 ratio
  - Fond `--muted` (#334155)
  - Icône Play centrée (64px, couleur `--primary`, opacité 50%)
  - Overlay texte : "Bientôt disponible" / "Coming soon"
  - Léger effet glassmorphic sur le texte
- Sous la zone vidéo :
  - Titre du module (card-title)
  - Description courte (card-desc, 2 lignes)
  - Badge : "À VENIR" / "COMING SOON" — style badge avec `bg-primary/10 text-primary`

**Animation :**
- Cards : fade-in staggeré au scroll
- Icône Play : pulse léger (scale 1 → 1.05 → 1, boucle infinie, durée 2s)

**Quand les vidéos seront prêtes :**
- Remplacer le placeholder par un player vidéo (HTML5 `<video>` ou embed YouTube/Vimeo)
- Garder le même layout de cards

---

## Internationalisation (i18n)

### Stratégie

Utiliser un dictionnaire statique JS/TS (pas de lib i18n lourde). Les deux langues sont identiques en structure.

### Fichier `src/lib/i18n.ts`

```typescript
export const dictionaries = {
  fr: {
    nav: {
      onePagers: "One Pagers",
      pitchDeck: "Pitch Deck",
      demos: "Démos",
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
      subtitle: "Suite d'outils IA et système de gestion intégré pour le référentiel SYSCOHADA",
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
        { title: "OCR + Analyse Fiscale IA", desc: "De la facture fournisseur à l'écriture comptable, automatiquement." },
        { title: "Réconciliation Bancaire", desc: "Rapprochement intelligent des relevés bancaires et écritures." },
        { title: "Déclarations TVA", desc: "Génération automatique des déclarations conformes DGID." },
        { title: "Gestion de la Paie", desc: "Calcul automatisé des salaires et bulletins de paie." },
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
      subtitle: "AI tools suite and integrated management system for the SYSCOHADA framework",
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
        { title: "OCR + AI Tax Analysis", desc: "From supplier invoice to accounting entry, automatically." },
        { title: "Bank Reconciliation", desc: "Intelligent matching of bank statements and entries." },
        { title: "VAT Declarations", desc: "Automatic generation of DGID-compliant declarations." },
        { title: "Payroll Management", desc: "Automated salary computation and payslips." },
      ],
    },
    footer: {
      rights: "© 2026 Kora Metrics · SAS Senegal",
      event: "GITEX Africa 2026",
    },
  },
} as const;
```

---

## Design System — Rappel des tokens à appliquer

Le site doit impérativement suivre le Kora Design System **dark mode** (défaut). Se référer au fichier `KORA_DESIGN_SYSTEM.md` pour les valeurs exactes. Points critiques :

### Couleurs fondamentales

| Rôle | Token | Valeur |
|------|-------|--------|
| Fond page | `--background` | `#0F172A` |
| Texte principal | `--foreground` | `#F1F5F9` |
| Accent principal | `--primary` | `#e78a53` |
| Accent secondaire | `--secondary` | `#3B82F6` |
| Fond cards | `--card` | `#1E293B` |
| Texte secondaire | `--muted-foreground` | `#94A3B8` |
| Bordures | `--border` | `#334155` |
| Sidebar/Navbar | `--sidebar` | `#111827` |

### Patterns obligatoires

1. **Graph paper grid** en arrière-plan fixe (40×40px, 3% opacité) — sur toutes les pages
2. **Glow radial** orange subtil derrière le hero et les sections CTA
3. **Hover cards** : transition vers `bg-[#253047]` + `border-primary/30`
4. **Boutons pill** : `rounded-full` systématiquement
5. **Badges** : `rounded-full`, texte uppercase, tracking 0.2em, fond `--card`
6. **Border-top colorée** sur les cards de stats/modules pour identifier chaque élément
7. **Pas de mode light** — le site est exclusivement dark mode

### Typographie

- Font : **Inter** (via `next/font/google`)
- Titres : `font-bold tracking-tight`
- Hero : `text-4xl md:text-6xl`
- Section : `text-3xl md:text-5xl`
- Body : `text-base md:text-lg`
- Small/captions : `text-sm`
- Badges : `text-[10px] tracking-[0.2em] uppercase`

### Animations

- Scroll-reveal : `initial={{ opacity: 0, y: 20 }}` → `whileInView={{ opacity: 1, y: 0 }}`
- Stagger enfants : délai `i * 0.04s`
- Hover scale boutons : `whileHover={{ scale: 1.02 }}`
- Transitions : `transition-all duration-300`

---

## SEO & Metadata

```typescript
// src/app/layout.tsx
export const metadata = {
  title: "Kora Metrics — AI-Powered Accounting & Tax Automation",
  description: "Suite d'outils IA pour l'automatisation comptable et fiscale en Afrique. SYSCOHADA · OHADA · Sénégal.",
  openGraph: {
    title: "Kora Metrics",
    description: "AI-Powered Accounting & Tax Automation for Africa",
    images: ["/images/og-image.png"],
    url: "https://demo.korametrics.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kora Metrics",
    description: "AI-Powered Accounting & Tax Automation for Africa",
  },
};
```

---

## Performance cibles

| Métrique | Cible |
|----------|-------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.0s |
| Bundle JS initial | < 150 KB gzip |

- Utiliser `next/image` pour toutes les images (lazy load, WebP auto)
- Les PDFs sont téléchargés à la demande, pas pré-chargés
- Les images de slides du pitch deck sont lazy-loaded au scroll
- Pas de vidéo en autoplay (placeholder statique)

---

## Déploiement

```bash
# Installation
npx create-next-app@latest kora-demo-site --typescript --tailwind --app --src-dir
cd kora-demo-site
npm install framer-motion lucide-react

# Développement
npm run dev

# Build & deploy
npm run build
vercel deploy --prod
```

**Variables d'environnement :**
- `NEXT_PUBLIC_SITE_URL` : URL du site déployé
- Aucune variable secrète requise (site statique)

---

## Checklist livraison

- [ ] Splash page avec sélecteur FR/EN fonctionnel
- [ ] Navigation complète entre les 4 pages dans chaque langue
- [ ] Switcher FR/EN persistant dans la navbar
- [ ] One Pagers : 2 PDFs embedés avec téléchargement
- [ ] Pitch Deck : viewer slides avec navigation
- [ ] Démos : 4 placeholders "Coming soon" avec design soigné
- [ ] Graph paper grid en arrière-plan sur toutes les pages
- [ ] Responsive : mobile, tablet, desktop
- [ ] Animations scroll-reveal et hover sur tous les éléments interactifs
- [ ] Metadata SEO + OpenGraph
- [ ] Lighthouse > 90
- [ ] Tester QR code → site sur mobile
