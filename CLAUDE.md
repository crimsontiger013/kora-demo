# CLAUDE.md — Kora Metrics Demo Website

## Projet

Site vitrine bilingue (FR/EN) pour Kora Metrics, destiné au GITEX Africa 2026. Centralise les one pagers, pitch decks et vidéos démo dans le Design System Kora (dark mode).

## Commandes

```bash
npm run dev          # Développement local (port 3000)
npm run build        # Build production
npm run lint         # ESLint
npm run type-check   # TypeScript check
vercel deploy --prod # Déploiement
```

## Stack

- Next.js 14+ (App Router, TypeScript, SSG)
- Tailwind CSS 3.4+
- Framer Motion (animations)
- Inter (font via next/font)
- Lucide React (icons)

## Structure

```
src/app/page.tsx              → Splash / sélecteur de langue
src/app/[locale]/page.tsx     → Accueil par langue
src/app/[locale]/one-pagers/  → Viewer PDFs one pagers
src/app/[locale]/pitch-deck/  → Viewer pitch deck
src/app/[locale]/demos/       → Placeholders vidéos démo
src/lib/i18n.ts               → Dictionnaires FR/EN
src/components/               → Composants réutilisables
public/documents/             → PDFs (one pagers + pitch deck)
public/images/                → Logos, OG image
```

## Design System — Règles absolues

Ce site utilise **exclusivement** le Kora Design System en **dark mode**. Se référer à `KORA_DESIGN_SYSTEM.md` pour les tokens complets.

### Couleurs principales

| Rôle | Hex |
|------|-----|
| Background | `#0F172A` |
| Text | `#F1F5F9` |
| Primary (orange) | `#e78a53` |
| Secondary (blue) | `#3B82F6` |
| Card | `#1E293B` |
| Muted text | `#94A3B8` |
| Border | `#334155` |
| Navbar/Footer | `#111827` |

### Patterns visuels obligatoires

1. **Graph paper grid** en arrière-plan fixe (40×40px, rgba(241,245,249,0.03)) sur toutes les pages
2. **Glow radial** orange subtil derrière les sections hero/CTA
3. **Hover cards** → `bg-[#253047]` + `border-primary/30`
4. **Boutons** : toujours `rounded-full`
5. **Badges** : `rounded-full`, uppercase, `tracking-[0.2em]`, 10px
6. **Cards stat** : border-top colorée pour identifier chaque métrique
7. **Pas de mode light** sur ce site

### Typographie

- Font : Inter uniquement
- Hero : `text-4xl md:text-6xl font-bold tracking-tight`
- Section titles : `text-3xl md:text-5xl font-bold tracking-tight`
- Body : `text-base md:text-lg text-muted-foreground`
- Captions : `text-sm text-muted-foreground`

### Animations (Framer Motion)

- Scroll-reveal : `initial={{ opacity: 0, y: 20 }}` → `whileInView={{ opacity: 1, y: 0 }}`
- Stagger : délai `i * 0.04`
- Hover boutons : `whileHover={{ scale: 1.02 }}`

## Internationalisation

- Route-based : `/fr/...` et `/en/...`
- Dictionnaire dans `src/lib/i18n.ts`
- Les deux langues ont une structure 100% identique
- La page splash (`/`) est le sélecteur de langue, pas de détection auto
- Le switcher FR/EN dans la navbar change la locale sans recharger

## Fichiers à placer dans public/documents/

| Fichier | Source |
|---------|--------|
| `Kora-Metrics-One-Pager-Suite-Outils-FR.pdf` | One Pager Suite Outils FR |
| `Kora-Metrics-One-Pager-Suite-Outils-EN.pdf` | One Pager Suite Outils EN |
| `Kora-Metrics-One-Pager-Vision-ERP-FR.pdf` | One Pager Vision ERP FR |
| `Kora-Metrics-One-Pager-Vision-ERP-EN.pdf` | One Pager Vision ERP EN |
| `Kora-Metrics-Pitch-Deck-FR.pdf` | Pitch Deck FR (converti depuis PPTX) |
| `Kora-Metrics-Pitch-Deck-EN.pdf` | Pitch Deck EN (converti depuis PPTX) |

## Logos

- Dark background : `public/images/kora-logo-dark.svg`
- Light background : `public/images/kora-logo-light.svg`

## Performance

- Lighthouse > 90
- LCP < 2.5s
- PDFs : téléchargement à la demande, pas de preload
- Images slides : lazy-load
- Pas de vidéo autoplay

## Contexte métier

Kora Metrics est une startup SAS sénégalaise qui automatise la comptabilité et la fiscalité par IA pour la zone OHADA (17 pays). Le produit cible les cabinets comptables et les PME. MVP finalisé, beta test démarrant avec SENCAS (Dakar) en avril 2026. L'entreprise lève 300 000 € en pré-seed.

Les 4 associés :
- Sédar H. Senghor (CEO) — Finance & Stratégie, 16 ans
- Medoune Ndiaye (CTO) — IA & Architecture, 15 ans, ex-Microsoft
- Cheikh A.T. Diouf (Dir. Fiscalité) — Droit fiscal, 15 ans
- Alassane Boye (Dir. Opérations) — Droit des affaires, 20 ans

Contact : sedar.senghor@korametrics.com · +221 77 182 39 26 · www.korametrics.com
