# Kora Metrics Design System

A comprehensive guide to the Kora Metrics visual identity and design language for building consistent applications.

---

## Brand Colors

Kora Metrics supports both **dark mode** (default) and **light mode** themes. All color tokens are shared — only values change per theme.

---

### 🌑 Dark Mode (Default)

#### Primary Theme Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#0F172A` | Main page background (dark navy) |
| `--foreground` | `#F1F5F9` | Primary text color (off-white) |
| `--primary` | `#e78a53` | Primary accent, CTAs, highlights (warm orange) |
| `--primary-foreground` | `#FFFFFF` | Text on primary buttons |

#### Secondary & Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--secondary` | `#3B82F6` | Secondary accent (blue) |
| `--secondary-foreground` | `#FFFFFF` | Text on secondary elements |
| `--accent` | `#64748B` | Subtle accents (slate) |
| `--accent-foreground` | `#F1F5F9` | Text on accent elements |

#### UI Component Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--card` | `#1E293B` | Card backgrounds, elevated surfaces |
| `--card-foreground` | `#F1F5F9` | Text on cards |
| `--popover` | `#1E293B` | Popover/dropdown backgrounds |
| `--popover-foreground` | `#F1F5F9` | Text in popovers |
| `--muted` | `#334155` | Muted backgrounds, borders |
| `--muted-foreground` | `#94A3B8` | Secondary/muted text |

#### Utility & Form Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--border` | `#334155` | Default border color |
| `--input` | `#1E293B` | Input field backgrounds |
| `--ring` | `#e78a53` | Focus ring color |

#### Status Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--destructive` | `#EF4444` | Error states, destructive actions |
| `--destructive-foreground` | `#FFFFFF` | Text on destructive elements |

#### Chart & Visualization Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--chart-1` | `#3B82F6` | Blue |
| `--chart-2` | `#e78a53` | Orange |
| `--chart-3` | `#10B981` | Green |
| `--chart-4` | `#8B5CF6` | Purple |
| `--chart-5` | `#F59E0B` | Yellow |

#### Sidebar & Navigation Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--sidebar` | `#111827` | Sidebar background |
| `--sidebar-foreground` | `#F1F5F9` | Sidebar text |
| `--sidebar-primary` | `#e78a53` | Active sidebar items |
| `--sidebar-accent` | `#475569` | Sidebar hover states |
| `--sidebar-border` | `#334155` | Sidebar borders |

---

### ☀️ Light Mode — Warm Beige Theme

> **Design philosophy:** Light mode uses a warm beige palette instead of plain white. The background is `#FAF6F1` (warm off-white), borders are `#E8E0D8` (warm taupe), and muted surfaces are `#F5F0EA` (soft beige). This creates a premium, cohesive aesthetic where white cards float on warm backgrounds and every element has warm undertones.

#### Primary Theme Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#FAF6F1` | Main page background (warm beige, NOT white) |
| `--foreground` | `#1A1A1A` | Primary text color (near-black) |
| `--primary` | `#e07840` | Primary accent, CTAs, highlights (warm orange) |
| `--primary-foreground` | `#FFFFFF` | Text on primary buttons |

#### Secondary & Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--secondary` | `#0B4479` | Secondary accent (deep navy) |
| `--secondary-foreground` | `#FFFFFF` | Text on secondary elements |
| `--accent` | `#F0EBE4` | Subtle accents (warm taupe) |
| `--accent-foreground` | `#1A1A1A` | Text on accent elements |

#### UI Component Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--card` | `#FFFFFF` | Card backgrounds — white floats on warm beige page |
| `--card-foreground` | `#1A1A1A` | Text on cards |
| `--popover` | `#FFFFFF` | Popover/dropdown backgrounds |
| `--popover-foreground` | `#1A1A1A` | Text in popovers |
| `--muted` | `#F5F0EA` | Muted backgrounds (warm beige) |
| `--muted-foreground` | `#6B7280` | Secondary/muted text |

#### Utility & Form Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--border` | `#E8E0D8` | Default border color (warm taupe) |
| `--input` | `#E8E0D8` | Input field borders (warm taupe) |
| `--ring` | `#e07840` | Focus ring color |

#### Status Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--destructive` | `#EF4444` | Error states, destructive actions |
| `--destructive-foreground` | `#FFFFFF` | Text on destructive elements |
| `--success` | `#059669` | Success states |
| `--success-foreground` | `#FFFFFF` | Text on success elements |
| `--warning` | `#D97706` | Warning states |
| `--warning-foreground` | `#FFFFFF` | Text on warning elements |

#### Chart & Visualization Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--chart-1` | `#0EA5E9` | Sky blue |
| `--chart-2` | `#e78a53` | Orange |
| `--chart-3` | `#059669` | Emerald green |
| `--chart-4` | `#7C3AED` | Violet |
| `--chart-5` | `#64748B` | Slate gray |

#### Sidebar & Navigation Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--sidebar` | `#FFFFFF` | Sidebar background (white) |
| `--sidebar-foreground` | `#1A1A1A` | Sidebar text |
| `--sidebar-primary` | `#e07840` | Active sidebar items |
| `--sidebar-primary-foreground` | `#FFFFFF` | Text on active sidebar items |
| `--sidebar-accent` | `#F5F0EA` | Sidebar hover states (warm beige) |
| `--sidebar-accent-foreground` | `#1A1A1A` | Text on sidebar hover |
| `--sidebar-border` | `#E8E0D8` | Sidebar borders (warm taupe) |
| `--sidebar-ring` | `#e07840` | Sidebar focus ring |

---

## Typography

### Font Family

```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'Geist Mono', monospace;
```

### Font Weights

- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Labels, buttons
- **Semibold (600)**: Subheadings, card titles
- **Bold (700)**: Main headings, emphasis

### Text Sizes & Styles

| Element | Classes | Example |
|---------|---------|---------|
| Hero Title | `text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter` | Main page headline |
| Section Title | `text-3xl md:text-5xl font-bold tracking-tight` | Section headings |
| Card Title | `text-lg md:text-xl font-semibold` | Feature cards |
| Body Text | `text-base md:text-lg text-muted-foreground` | Paragraphs |
| Small Text | `text-sm text-muted-foreground` | Captions, labels |
| Badge/Pill | `text-[10px] tracking-[0.2em] uppercase` | Category badges |

### Text Colors

- **Primary text**: `text-foreground` (#F1F5F9)
- **Secondary text**: `text-muted-foreground` (#94A3B8)
- **Accent text**: `text-primary` (#e78a53)

---

## Background Patterns

### Graph Paper Grid

The signature Kora Metrics background pattern - a subtle engineering graph paper grid.

```tsx
// Fixed full-page grid background
<div
  className="pointer-events-none fixed inset-0 z-0"
  style={{
    backgroundImage:
      "linear-gradient(rgba(241,245,249,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(241,245,249,0.03) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  }}
/>
```

**Parameters:**
- Grid line color: `rgba(241,245,249,0.03)` (3% opacity off-white)
- Grid size: `40px x 40px`
- Position: Fixed, full viewport
- Z-index: 0 (behind all content)

### Radial Glow Effect

Add depth with subtle radial gradients behind key sections.

```tsx
// Primary color glow (for hero/CTA sections)
<div
  className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[120px]"
  style={{ background: "radial-gradient(circle, #e78a53 0%, transparent 70%)" }}
/>
```

---

## Component Styles

### Buttons

#### Primary Button
```tsx
<Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium">
  Demander une démo
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

#### Secondary/Outline Button
```tsx
<Button variant="outline" className="border-border text-foreground hover:bg-card rounded-full px-8 py-6 text-base font-medium">
  Voir la solution
</Button>
```

### Cards

#### Standard Card
```tsx
<div className="rounded-2xl border border-border bg-card p-6 transition-all hover:bg-[#253047] hover:border-primary/30">
  {/* Card content */}
</div>
```

#### Glassmorphic Card
```tsx
<div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
  {/* Card content */}
</div>
```

### Badges/Pills

#### Section Badge
```tsx
<span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
  Fonctionnalités
</span>
```

#### Integration Pill
```tsx
<div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-sm text-muted-foreground transition-all hover:bg-[#253047] hover:text-foreground hover:border-primary/30">
  <Image src={logo} alt={name} width={24} height={24} className="h-6 w-6 object-contain" />
  {name}
</div>
```

### Section Headers

```tsx
<div className="mx-auto max-w-3xl text-center mb-16">
  {badge && (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
      {badge}
    </span>
  )}
  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
    {title}
  </h2>
  {subtitle && (
    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
      {subtitle}
    </p>
  )}
</div>
```

### Form Inputs

> **Important:** In dark mode, `--input` (`#1E293B`) is identical to `--card` (`#1E293B`). Never use raw `bg-input` for input backgrounds in dark mode — inputs will be invisible.

#### Input/Select/Textarea Background

```
Light mode: bg-muted/50 border-input        → warm beige tint on white cards
Dark mode:  dark:bg-muted/70 dark:border-muted → slate tint on dark cards (visible contrast)
```

#### Form Field Layout

```tsx
{/* Field wrapper — space-y-1.5 separates label from input */}
<div className="space-y-1.5">
  <Label htmlFor="name">Nom *</Label>
  <Input id="name" ... />
</div>

{/* Form card container */}
<div className="rounded-xl border bg-card p-6 space-y-8">
  <section className="space-y-5">
    <h2 className="text-lg font-semibold">Section Title</h2>
    <div className="grid gap-5 sm:grid-cols-2">
      {/* Fields */}
    </div>
  </section>
</div>
```

#### Input Sizing
- Height: `h-9`
- Padding: `px-3 py-1.5`
- Border radius: `rounded-lg`
- Text: `text-base md:text-sm`

---

## Layout

### Container
```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Section Spacing
```tsx
<section className="py-20 md:py-32 border-t border-border">
  {/* Section content */}
</section>
```

### Grid Layouts

#### Bento Grid (Features)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  {/* Feature cards */}
</div>
```

#### Three Column Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
  {/* Items */}
</div>
```

---

## Animations

### Scroll Reveal (Framer Motion)

```tsx
import { motion } from "framer-motion"

// Fade up on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>

// Staggered children
{items.map((item, i) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.04 }}
  >
    {/* Item content */}
  </motion.div>
))}
```

### Hover Transitions

```css
transition-all hover:bg-[#253047] hover:border-primary/30
```

---

## Spacing Scale

Using Tailwind's default spacing scale:

| Class | Size |
|-------|------|
| `gap-2` | 8px |
| `gap-3` | 12px |
| `gap-4` | 16px |
| `gap-6` | 24px |
| `gap-8` | 32px |
| `py-20` | 80px |
| `py-32` | 128px |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0.75rem` (12px) | Default radius |
| `rounded-lg` | 12px | Cards, inputs |
| `rounded-xl` | 16px | Larger cards |
| `rounded-2xl` | 24px | Hero elements |
| `rounded-full` | 9999px | Buttons, badges |

---

## Logo Assets

- **Full Logo**: `/images/kora-logo-full.png` - K icon + KORA wordmark
- **Icon Only**: `/images/kora-logo-icon.png` - K symbol
- **Text Only**: `/images/kora-logo-text.png` - KORA wordmark

### Logo Usage

```tsx
// Navbar (larger)
<Image
  src="/images/kora-logo-full.png"
  alt="Kora Metrics"
  width={160}
  height={40}
  className="h-10 w-auto"
/>

// Footer (smaller)
<Image
  src="/images/kora-logo-full.png"
  alt="Kora Metrics"
  width={120}
  height={32}
  className="h-8 w-auto"
/>
```

---

## CSS Variables (globals.css)

```css
/* ── Dark mode (default) ── */
:root {
  --background: #0F172A;
  --foreground: #F1F5F9;
  --card: #1E293B;
  --card-foreground: #F1F5F9;
  --popover: #1E293B;
  --popover-foreground: #F1F5F9;
  --primary: #e78a53;
  --primary-foreground: #FFFFFF;
  --secondary: #3B82F6;
  --secondary-foreground: #FFFFFF;
  --muted: #334155;
  --muted-foreground: #94A3B8;
  --accent: #64748B;
  --accent-foreground: #F1F5F9;
  --destructive: #EF4444;
  --destructive-foreground: #FFFFFF;
  --border: #334155;
  --input: #1E293B;
  --ring: #e78a53;
  --radius: 0.75rem;
  /* Sidebar */
  --sidebar: #111827;
  --sidebar-foreground: #F1F5F9;
  --sidebar-primary: #e78a53;
  --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #475569;
  --sidebar-accent-foreground: #F1F5F9;
  --sidebar-border: #334155;
  --sidebar-ring: #e78a53;
  /* Charts */
  --chart-1: #3B82F6;
  --chart-2: #e78a53;
  --chart-3: #10B981;
  --chart-4: #8B5CF6;
  --chart-5: #F59E0B;
}

/* ── Light mode (warm beige) ── */
.light {
  --background: #FAF6F1;
  --foreground: #1A1A1A;
  --card: #FFFFFF;
  --card-foreground: #1A1A1A;
  --popover: #FFFFFF;
  --popover-foreground: #1A1A1A;
  --primary: #e07840;
  --primary-foreground: #FFFFFF;
  --secondary: #0B4479;
  --secondary-foreground: #FFFFFF;
  --muted: #F5F0EA;
  --muted-foreground: #6B7280;
  --accent: #F0EBE4;
  --accent-foreground: #1A1A1A;
  --destructive: #EF4444;
  --destructive-foreground: #FFFFFF;
  --success: #059669;
  --success-foreground: #FFFFFF;
  --warning: #D97706;
  --warning-foreground: #FFFFFF;
  --border: #E8E0D8;
  --input: #E8E0D8;
  --ring: #e07840;
  --radius: 0.75rem;
  /* Sidebar */
  --sidebar: #FFFFFF;
  --sidebar-foreground: #1A1A1A;
  --sidebar-primary: #e07840;
  --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #F5F0EA;
  --sidebar-accent-foreground: #1A1A1A;
  --sidebar-border: #E8E0D8;
  --sidebar-ring: #e07840;
  /* Charts */
  --chart-1: #0EA5E9;
  --chart-2: #e78a53;
  --chart-3: #059669;
  --chart-4: #7C3AED;
  --chart-5: #64748B;
}
```

---

## Quick Start Checklist

1. Set up CSS variables in `globals.css`
2. Add Inter font via `next/font/google`
3. Add Framer Motion for animations
4. Create graph paper grid as fixed background
5. Use semantic color tokens (`bg-background`, `text-foreground`, etc.)
6. Apply consistent spacing with Tailwind scale
7. Use rounded-full for buttons and badges
8. Add hover transitions on interactive elements

---

*Last updated: March 11, 2026 — Synced warm beige light mode colors, added form input styling conventions, dark mode input visibility fix*
