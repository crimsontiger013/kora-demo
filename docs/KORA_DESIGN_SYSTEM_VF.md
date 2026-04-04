# Kora Design System

A comprehensive, portable design system for building Kora-branded applications. This document describes the **current, implemented** visual identity and component patterns. Use it as the single source of truth when replicating the Kora frontend in any project.

*Last updated: March 21, 2026*

---

## Table of Contents

1. [Foundations](#1-foundations)
2. [Color Tokens](#2-color-tokens)
3. [Typography](#3-typography)
4. [Layout & Spacing](#4-layout--spacing)
5. [Background & Depth](#5-background--depth)
6. [Component Patterns](#6-component-patterns)
7. [Data Display](#7-data-display)
8. [Navigation](#8-navigation)
9. [Forms](#9-forms)
10. [Feedback & Alerts](#10-feedback--alerts)
11. [Animations & Transitions](#11-animations--transitions)
12. [Theming Infrastructure](#12-theming-infrastructure)
13. [Quick Start Checklist](#13-quick-start-checklist)

---

## 1. Foundations

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS v4 (`@theme` syntax) |
| Components | shadcn/ui (customized with Kora tokens) |
| Animations | Framer Motion |
| Font | Inter (sans-serif), Geist Mono (monospace) |
| Theming | `next-themes` with class strategy |
| Icons | Lucide React |

### Design Principles

- **Dark mode first** — dark is the default theme; light modes are alternatives
- **Three themes** — Dark, Light (Warm Beige), Light Mist (Cool Slate)
- **Warm accent** — orange primary (`#e78a53`) across all themes
- **Semantic tokens** — all colors referenced via CSS custom properties, never hardcoded
- **Financial precision** — tabular numerals, destructive coloring for negative values
- **Subtle depth** — shadows in light mode, border/background hierarchy in dark mode

### Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0.75rem` (12px) | Base radius |
| `--radius-sm` | `calc(--radius - 4px)` | Small elements |
| `--radius-md` | `calc(--radius - 2px)` | Medium elements |
| `--radius-lg` | `var(--radius)` | Default (inputs, inner cards) |
| `--radius-xl` | `calc(--radius + 4px)` | Larger containers |
| `rounded-2xl` | 24px | Cards, panels |
| `rounded-full` | 9999px | Buttons, badges, pills |

---

## 2. Color Tokens

All colors are defined as CSS custom properties in `globals.css` using Tailwind v4's `@theme` block (dark) and `.light` / `.light-mist` class overrides.

### Dark Mode (Default)

```
Background:          #0F172A  (deep navy)
Foreground:          #F1F5F9  (off-white)
Primary:             #e78a53  (warm orange)
Primary Foreground:  #FFFFFF
Secondary:           #3B82F6  (blue)
Card:                #1E293B  (elevated navy)
Muted:               #334155  (slate)
Muted Foreground:    #94A3B8
Accent:              #64748B
Border:              #334155
Input:               #1E293B  (same as card - see Forms section)
Ring:                #e78a53
Destructive:         #EF4444
Success:             #10B981
Warning:             #F59E0B
```

**Sidebar (Dark)**
```
Background:          #111827  (darker than main bg - receding depth)
Foreground:          #F1F5F9
Primary:             #e78a53
Accent:              #475569
Border:              #334155
```

**Charts (Dark)**
```
chart-1: #3B82F6  (blue)
chart-2: #e78a53  (orange)
chart-3: #10B981  (green)
chart-4: #8B5CF6  (purple)
chart-5: #F59E0B  (yellow)
```

### Light Mode — Warm Beige

> Warm off-white background (`#FAF6F1`) where white cards float on beige. Every surface has warm undertones.

```
Background:          #FAF6F1  (warm beige, NOT white)
Foreground:          #1A1A1A  (near-black)
Primary:             #e07840  (slightly deeper orange)
Secondary:           #0B4479  (deep navy)
Card:                #FFFFFF
Muted:               #F5F0EA  (soft beige)
Muted Foreground:    #6B7280
Accent:              #F0EBE4  (warm taupe)
Border:              #E8E0D8  (warm taupe)
Input:               #E8E0D8
Ring:                #e07840
Destructive:         #EF4444
Success:             #059669
Warning:             #D97706
```

**Sidebar (Light Beige)**
```
Background:          #FFFFFF  (with sidebar-separator shadow for edge separation)
Primary:             #e07840
Accent:              #F5F0EA
Border:              #E8E0D8
```

**Charts (Light Beige)**
```
chart-1: #0EA5E9  (sky blue)
chart-2: #e78a53  (orange)
chart-3: #059669  (emerald)
chart-4: #7C3AED  (violet)
chart-5: #64748B  (slate)
```

### Light Mode — Slate Mist

> Cool grey-blue alternative (`#F0F4F8`). Inspired by Notion/Linear. Better for long data-entry sessions.

```
Background:          #F0F4F8  (cool blue-grey)
Foreground:          #1E2A3A  (deep navy-slate)
Primary:             #0B4479  (deep navy)
Secondary:           #E07840  (warm orange accent)
Card:                #FFFFFF
Muted:               #DDE5EF  (cool blue-grey)
Muted Foreground:    #64748B
Accent:              #E8EFF7
Border:              #CBD5E1  (slate-200)
Input:               #CBD5E1
Ring:                #0B4479
```

**Sidebar (Slate Mist)**
```
Background:          #E8EFF7  (blue-tinted, distinct from main bg)
Primary:             #0B4479
Accent:              #DDE5EF
Border:              #CBD5E1
```

**Charts (Slate Mist)**
```
chart-1: #3B82F6  chart-2: #E07840  chart-3: #059669  chart-4: #7C3AED  chart-5: #F59E0B
```

### Semantic Icon Color System

Map icon colors to chart tokens for consistency:

| Semantic Role | Token | Color |
|--------------|-------|-------|
| Financial / Money | `text-chart-2` | Orange |
| Documents / Files | `text-chart-1` | Blue |
| People / Contacts | `text-chart-4` | Purple |
| Status / Success | `text-chart-3` | Green |
| Time / Calendar | `text-chart-5` | Yellow |

---

## 3. Typography

### Font Stack

```css
--font-sans: "Inter", system-ui, sans-serif;
--font-mono: "Geist Mono", monospace;
```

### Font Weights

| Weight | Usage |
|--------|-------|
| 400 (Regular) | Body text, descriptions |
| 500 (Medium) | Labels, buttons, nav items |
| 600 (Semibold) | Subheadings, card titles |
| 700 (Bold) | Page titles, emphasis |

### Text Scale

| Element | Classes |
|---------|---------|
| Page Title | `text-3xl font-bold tracking-tight text-foreground` |
| Page Subtitle | `mt-1 text-muted-foreground` |
| Section Title | `text-lg font-semibold text-foreground` |
| Card Title | `text-lg md:text-xl font-semibold` |
| Body Text | `text-base md:text-lg text-muted-foreground` |
| Small / Label | `text-sm text-muted-foreground` |
| Badge / Pill | `text-[10px] tracking-[0.2em] uppercase` |
| Sidebar Group | `text-xs font-semibold uppercase tracking-wider` |

### Financial Values

All monetary amounts use tabular numerals for column alignment:

```css
.financial-value {
  font-variant-numeric: tabular-nums;
}
```

Apply via `className="financial-value"` on any element displaying XOF amounts.

**Negative values** must use `text-destructive` (red) — this is a critical UX signal for financial apps.

---

## 4. Layout & Spacing

### App Shell

```
+--sidebar--+--main-area--------------------+
|  w-64     |  header (h-16)                |
|  or       |-------------------------------|
|  w-[68px] |  <main> p-6 overflow-y-auto   |
|  (collapsed)|                             |
+-----------+-------------------------------+
```

- Sidebar: fixed height (`h-screen`), `w-64` expanded / `w-[68px]` collapsed
- Header: `h-16`, `border-b border-border`, `bg-card/50 backdrop-blur-sm`
- Main content: `flex-1 overflow-y-auto p-6`

### Container

```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
```

### Grid Patterns

```tsx
// KPI cards (4 columns)
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

// Quick actions (4 columns, smaller gap)
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

// Two-panel layout
<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

// Three columns
<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
```

### Spacing Scale (commonly used)

| Class | Size | Context |
|-------|------|---------|
| `gap-3` | 12px | Between action cards |
| `gap-4` | 16px | Between KPI cards |
| `gap-6` | 24px | Between major sections |
| `space-y-6` | 24px | Page vertical rhythm |
| `space-y-8` | 32px | Dashboard sections |
| `p-4` | 16px | Action card padding |
| `p-5` | 20px | Compact stat card |
| `p-6` | 24px | Standard card padding |

---

## 5. Background & Depth

### Graph Paper Grid

The signature Kora background pattern. Applied as a fixed full-page underlay.

```css
/* Dark mode */
.grid-background {
  background-image:
    linear-gradient(rgba(241, 245, 249, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(241, 245, 249, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Light modes */
.light .grid-background,
.light-mist .grid-background {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
}
```

### Depth System

**Dark mode** — avoid box-shadows (they get lost). Use background color hierarchy:

```
Background (#0F172A) < Sidebar (#111827) < Card (#1E293B) < Muted (#334155)
```

Hover on cards: `hover:bg-muted/50 hover:border-primary/30`

**Light modes** — use the `card-elevated` utility class for micro-shadows:

```css
.light .card-elevated,
.light-mist .card-elevated {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
}
.light .card-elevated:hover,
.light-mist .card-elevated:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.07);
}
```

**Sidebar edge separation (light modes):**

```css
.light .sidebar-separator,
.light-mist .sidebar-separator {
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.04);
}
```

### Header Depth

```tsx
<header className="flex h-16 items-center justify-between border-b border-border bg-card/50 px-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-sm">
```

---

## 6. Component Patterns

### Cards

**KPI / Stat Card:**
```tsx
<div className="card-elevated rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-muted/50">
  <div className="flex items-center justify-between">
    <span className="text-sm text-muted-foreground">{label}</span>
    <Icon className="h-5 w-5 text-chart-1" />  {/* use chart tokens */}
  </div>
  <p className="mt-3 text-2xl font-bold financial-value text-foreground">{value}</p>
</div>
```

**Standard Card:**
```tsx
<div className="card-elevated rounded-2xl border border-border bg-card p-6">
  {/* content */}
</div>
```

**Action Card (quick action tiles):**
```tsx
<a className="card-elevated flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-muted/50">
  <Icon className="h-5 w-5 text-primary" />
  {label}
</a>
```

All interactive cards MUST have:
- `transition-all`
- `hover:border-primary/30 hover:bg-muted/50`
- `card-elevated` class (for light mode shadows)

### Buttons

**Primary (CTA):**
```tsx
<button className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
  <Plus className="h-4 w-4" />
  Label
</button>
```

**Outline:**
```tsx
<button className="border-border text-foreground hover:bg-card rounded-full px-8 py-6 text-base font-medium">
```

**Icon Button (toolbar):**
```tsx
<button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
  <Icon className="h-5 w-5" />
</button>
```

Buttons are always `rounded-full`. Icon-only buttons use `rounded-lg`.

**Export Buttons (file format colors):**

Export/download buttons use colors that mirror the real-world app branding of each format:

| Format | Background | Hover | Text |
|--------|-----------|-------|------|
| Excel / CSV | `bg-emerald-600` | `hover:bg-emerald-700` | `text-white` |
| Word | `bg-blue-600` | `hover:bg-blue-700` | `text-white` |
| PDF | `bg-red-800` | `hover:bg-red-900` | `text-white` |

```tsx
// Excel / CSV export
<button className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700">
  <Download className="h-4 w-4" />
  Excel
</button>

// PDF export
<button className="flex items-center gap-2 rounded-full bg-red-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-900">
  <FileText className="h-4 w-4" />
  PDF
</button>

// Word export
<button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
  <FileText className="h-4 w-4" />
  Word
</button>
```

### Badges / Pills

**Type badge (colored by semantic):**
```tsx
<span className="inline-flex rounded-full px-2 py-0.5 text-xs font-medium bg-chart-1/10 text-chart-1">
  Client
</span>
```

**Filter pill (active/inactive):**
```tsx
// Active
<button className="rounded-full px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground">

// Inactive
<button className="rounded-full px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground hover:bg-muted/80">
```

**Section badge:**
```tsx
<span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
```

### View Switcher (segmented control)

```tsx
<div className="flex items-center rounded-full border border-border bg-muted/50 p-0.5">
  <button className={active
    ? "bg-primary text-primary-foreground shadow-sm"
    : "text-muted-foreground hover:text-foreground"
  } + " flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors">
    <Icon className="h-3 w-3" />
    Label
  </button>
</div>
```

---

## 7. Data Display

### Tables

Tables are wrapped in a card container with proper header styling and row separators:

```tsx
<div className="rounded-2xl border border-border bg-card">
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="bg-muted/30 border-b border-border text-left text-sm text-muted-foreground">
          <th className="px-6 py-3 font-medium">Column</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        <tr className="text-sm transition-colors hover:bg-muted/30">
          <td className="px-6 py-3 text-foreground">Value</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

Key rules:
- **Header background:** `bg-muted/30` with `border-b border-border`
- **Row dividers:** `divide-y divide-border` on `<tbody>`
- **Row hover:** `hover:bg-muted/30` on each `<tr>`
- **Cell padding:** `px-6 py-3`
- **Financial columns:** right-aligned with `text-right font-medium financial-value`

### Empty States

```tsx
<div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-20">
  <Icon className="mb-4 h-12 w-12 text-muted-foreground/50" />
  <p className="text-lg font-medium text-foreground">Title</p>
  <p className="mt-1 text-sm text-muted-foreground">Description</p>
</div>
```

Key rules:
- `border-dashed` (not solid) to communicate "waiting for content"
- Icon uses `text-muted-foreground/50` (50% opacity)
- Icon should vary per entity type (use semantic icon mapping)

### Loading States

**Spinner:**
```tsx
<div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
```

**Skeleton placeholder:**
```tsx
<span className="inline-block h-7 w-20 animate-pulse rounded bg-muted" />
```

---

## 8. Navigation

### Sidebar

Structure: Logo > Org Selector > Divider > Nav Groups > Collapse Toggle

**Key patterns:**

- Width: `w-64` expanded, `w-[68px]` collapsed
- Background: `bg-sidebar` + `sidebar-separator` class (light mode edge shadow)
- Border: `border-r border-sidebar-border`
- Transition: `transition-all duration-200`

**Active nav item:**
```tsx
className="bg-sidebar-primary/10 text-sidebar-primary font-medium"
```

**Inactive nav item:**
```tsx
className="text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
```

**Group headers (collapsible sections):**
```tsx
className="text-xs font-semibold uppercase tracking-wider"
// Active group: text-sidebar-primary
// Inactive group: text-muted-foreground hover:text-sidebar-foreground
```

**Sub-menu animation:**
```tsx
<ul className={cn(
  "space-y-0.5 overflow-hidden transition-all duration-200",
  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
)}>
```

**Child items** are indented with `pl-10` and use the same active/inactive pattern.

**Collapsed mode:** Group icons show as centered `h-10 w-10` touch targets with `rounded-lg`.

### Header / Topbar

```tsx
<header className="flex h-16 items-center justify-between border-b border-border bg-card/50 px-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-sm">
```

**Search bar:**
```tsx
<input className="h-9 w-64 rounded-lg border border-border bg-muted/70 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
```

**Toolbar icon buttons:** `rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground`

---

## 9. Forms

### Critical Rule: Dark Mode Inputs

> `--input` (`#1E293B`) is identical to `--card` (`#1E293B`) in dark mode. Using `bg-input` makes inputs invisible on card backgrounds.

**Solution — always use this pattern:**
```
bg-muted/70 border border-border
```

This applies to: `<input>`, `<select>`, `<textarea>`, and any shadcn/ui form component.

### Input Styling

```tsx
<input className="h-9 w-full rounded-lg border border-border bg-muted/70 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
```

### Form Layout

```tsx
{/* Form card container */}
<div className="rounded-xl border bg-card p-6 space-y-8">
  <section className="space-y-5">
    <h2 className="text-lg font-semibold">Section Title</h2>
    <div className="grid gap-5 sm:grid-cols-2">
      {/* Field wrapper */}
      <div className="space-y-1.5">
        <Label htmlFor="name">Nom *</Label>
        <Input id="name" />
      </div>
    </div>
  </section>
</div>
```

### Focus States

All interactive elements must have: `focus-visible:ring-2 focus-visible:ring-ring`

---

## 10. Feedback & Alerts

### Alert Severity System

Alerts use colored left borders and tinted backgrounds. Defined in `globals.css`:

```css
.alert-warning {
  background-color: rgba(245, 158, 11, 0.08);
  border-left: 3px solid var(--color-warning);
}
.alert-error {
  background-color: rgba(239, 68, 68, 0.08);
  border-left: 3px solid var(--color-destructive);
}
.alert-info {
  background-color: rgba(59, 130, 246, 0.08);
  border-left: 3px solid var(--color-secondary);
}
```

**Usage pattern:**
```tsx
const alertBgClasses = {
  warning: "alert-warning",
  error: "alert-error",
  info: "alert-info",
};

const alertColors = {
  warning: "text-warning",
  error: "text-destructive",
  info: "text-secondary",
};

<div className={`flex items-start gap-3 rounded-xl border border-border p-3 ${alertBgClasses[type]}`}>
  <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${alertColors[type]}`} />
  <div>
    <p className="text-sm font-medium text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
</div>
```

### Negative Financial Values

Any negative monetary amount MUST render in `text-destructive`:

```tsx
const valueColor = amount < 0 ? "text-destructive" : "text-foreground";
```

---

## 11. Animations & Transitions

### Framer Motion — Scroll/Load Reveal

**Fade up:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.1 }}
>
```

**Scale in (staggered):**
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4 + i * 0.05 }}
>
```

### CSS Transitions

**Theme switch (body):**
```css
body {
  transition: background-color 0.2s ease, color 0.2s ease;
}
```

**Card hover:**
```
transition-all hover:border-primary/30 hover:bg-muted/50
```

**Sidebar collapse:**
```
transition-all duration-200
```

**Sub-menu expand:**
```
overflow-hidden transition-all duration-200
isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
```

**Theme toggle icon rotation:**
```
transition-all duration-300
active: "rotate-0 scale-100 opacity-100"
inactive: "rotate-90 scale-0 opacity-0"
```

---

## 12. Theming Infrastructure

### Setup (next-themes)

```tsx
// theme-provider.tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} themes={["dark", "light", "light-mist"]}>
  {children}
</ThemeProvider>
```

### Theme Selector Component

Three options: Dark, Light (Beige), Light Mist (Cool). Displayed as a dropdown with icon rotation animation.

### CSS Structure (globals.css)

```
@theme { }           -> Dark mode defaults (Tailwind v4 token block)
.light { }            -> Warm Beige overrides
.light-mist { }       -> Slate Mist overrides
@layer base { }       -> Global resets (border-border, body bg/text/transition)
.financial-value { }  -> Tabular nums
.card-elevated { }    -> Light mode card shadows
.sidebar-separator {} -> Light mode sidebar edge shadow
.alert-* { }         -> Severity-based alert styles
.grid-background { }  -> Graph paper grid (dark + light variants)
```

### Adding a New Theme

1. Add a new class block in `globals.css` (e.g., `.dark-ocean { }`)
2. Override all `--color-*` tokens
3. Add the theme ID to `themes={[...]}` in `ThemeProvider`
4. Add a new entry in the theme toggle dropdown
5. Add `.dark-ocean .card-elevated` and `.dark-ocean .grid-background` rules if needed

---

## 13. Quick Start Checklist

To replicate the Kora frontend in a new project:

1. **Install dependencies:** `next-themes`, `framer-motion`, `lucide-react`, `@tailwindcss/*`, `class-variance-authority`, `clsx`, `tailwind-merge`
2. **Copy `globals.css`** with all theme tokens, utility classes, and grid background
3. **Set up Inter font** via `next/font/google`
4. **Wrap app in `ThemeProvider`** with `attribute="class" defaultTheme="dark" themes={["dark","light","light-mist"]}`
5. **Use semantic tokens everywhere** — `bg-background`, `text-foreground`, `bg-card`, `border-border`, etc. Never hardcode colors
6. **Apply `card-elevated`** on all card-like containers for automatic light mode shadows
7. **Apply `sidebar-separator`** on the sidebar `<aside>` for light mode edge shadow
8. **Apply `financial-value`** on all monetary displays
9. **Use chart tokens for icons** — `text-chart-1` through `text-chart-5` mapped to semantic roles
10. **Buttons: `rounded-full`**, cards: `rounded-2xl`, inputs: `rounded-lg`
11. **All interactive cards** must have `transition-all hover:border-primary/30 hover:bg-muted/50`
12. **Tables** must have `bg-muted/30` headers, `divide-y divide-border` rows, `hover:bg-muted/30` row hover
13. **Negative financial values** must use `text-destructive`
14. **Alerts** must use severity classes (`alert-warning`, `alert-error`, `alert-info`)
15. **Empty states** use `border-dashed` borders
16. **Dark mode inputs** use `bg-muted/70 border border-border`, never `bg-input`

---

## Logo Assets

| Asset | Path | Usage |
|-------|------|-------|
| Dark mode logo (icon) | `/images/kora-k-dark.png` | Collapsed sidebar |
| Light mode logo (icon) | `/images/kora-k-light.png` | Collapsed sidebar |
| Dark mode logo (full) | `/images/kora-logo-dark.png` | Expanded sidebar |
| Light mode logo (full) | `/images/kora-logo-light.png` | Expanded sidebar |

Logo in sidebar: `width={28} height={28}` + wordmark "KORA" in `text-sidebar-foreground` with "ERP" in `text-sidebar-primary`.
