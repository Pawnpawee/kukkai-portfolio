# GitHub Copilot Instructions — Portfolio Website

## Project Overview

This is a **personal portfolio website** built with:

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Design Source**: Figma via MCP

---

## ⚠️ Critical Rules — Read First

> **NEVER assume, guess, or invent any design detail.**
> If you are unsure about **any** value — color, spacing, font, text content, layout, icon, image, border-radius, animation, or anything else — **STOP and ask the user immediately.**
>
> This rule applies to **every single component and every single layer** in the Figma file.

---

## Figma MCP Integration

### Connection Method

Access Figma **via Node ID only** — always use the MCP tool with an explicit `nodeId` parameter.

```
// ✅ Correct
figma.getNode({ nodeId: "123:456" })

// ❌ Never browse by file URL or search by name alone
```

> ⚠️ If you do not have the node ID for a component, **ask the user for it** before doing anything else.

### How to Fetch Design Data

Before writing **any** code for a component or page:

1. Use the Figma MCP tool to **fetch the full node tree** of the relevant Figma frame/component using its **node ID**.
2. Traverse **every layer** in the hierarchy — do not skip nested groups, frames, auto-layouts, or hidden layers.
3. Extract and record:
   - Exact hex/rgba color values
   - Typography: font family, weight, size (px), line-height, letter-spacing, text-align
   - Spacing: padding, margin, gap (from Auto Layout)
   - Dimensions: width, height (fixed vs. fill vs. hug)
   - Border: radius, width, color, style
   - Effects: shadows (`box-shadow`), blurs (`backdrop-filter`), opacity
   - Assets: image fills, icon names/SVGs, gradient definitions
   - Component variants and their property differences
   - Interaction states: hover, active, focus, disabled

4. If any layer is **unclear, ambiguous, or missing data** — ask the user before proceeding.
5. Map every Figma value to its **exact Tailwind class** or **CSS custom property**.

### Figma Layer Naming Convention

| Figma Layer Name          | Implementation                   |
| ------------------------- | -------------------------------- |
| `Header`                  | `components/Header.tsx`          |
| `Navbar`                  | `components/Navbar.tsx`          |
| `CTA btn`                 | `components/CTAButton.tsx`       |
| `CTA with arrow btn`      | `components/CTAArrowButton.tsx`  |
| `Badge`                   | `components/Badge.tsx`           |
| `Home/Hero Section`       | `sections/HeroSection.tsx`       |
| `Home/Highlights Section` | `sections/HighlightsSection.tsx` |
| `Home/About Me Section`   | `sections/AboutMeSection.tsx`    |
| `Home/Contact Section`    | `sections/ContactSection.tsx`    |

---

## Project Structure

```
portfolio/
├── .github/
│   ├── copilot-instructions.md       ← This file
│   └── prompts/
│       ├── figma-component.prompt.md
│       ├── page-builder.prompt.md
│       └── navbar.prompt.md
│
├── app/
│   ├── globals.css
│   ├── layout.tsx                    ← Root layout (Header + Navbar)
│   ├── page.tsx                      ← Home page
│   ├── projects/
│   │   └── page.tsx
│   ├── work-experience/
│   │   └── page.tsx
│   ├── activities/
│   │   └── page.tsx
│   └── skills/
│       └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── CTAButton.tsx
│   ├── CTAArrowButton.tsx
│   └── Badge.tsx
│
├── sections/
│   ├── HeroSection.tsx
│   ├── HighlightsSection.tsx
│   ├── AboutMeSection.tsx
│   └── ContactSection.tsx
│
├── public/
├── postcss.config.mjs
├── tsconfig.json
└── next.config.ts
```

---

## Component Specifications

### Reusable Components

#### `Header` Component

- Fetch Figma node: **`Header`**
- Contains the site branding/logo area
- Used in root `layout.tsx`
- Extract exact dimensions, colors, and content from Figma

#### `Navbar` Component

- Fetch Figma node: **`Navbar`**
- Navigation links (see routing table below)
- Position and sticky behavior must match Figma exactly

**Navbar Routing Table:**

| Button / Element  | Type                              | Destination                     | Notes                                 |
| ----------------- | --------------------------------- | ------------------------------- | ------------------------------------- |
| Logo / Brand Name | Internal Link                     | `/`                             | Links back to Home                    |
| Project           | Internal Link                     | `/projects`                     |                                       |
| Work Exp          | Internal Link                     | `/work-experience`              |                                       |
| Activities        | Internal Link                     | `/activities`                   |                                       |
| Skills            | Internal Link                     | `/skills`                       |                                       |
| Github            | External Link (`target="_blank"`) | `https://github.com/Pawnpawee`  | `rel="noopener noreferrer"`           |
| Email             | Mailto                            | `mailto:pornpawee214@gmail.com` |                                       |
| Contact           | Anchor Scroll                     | `/#contact`                     | Smooth scroll to Home Section Contact |

- Use `next/link` for internal navigation
- Use `<a>` with `rel="noopener noreferrer"` for external links
- Active state styling must match Figma variant

#### `CTAButton` Component

- Fetch Figma node: **`CTA btn`**
- Props: `label: string`, `href: string`, `variant?: string`
- Export all Figma variants as TypeScript union types

#### `CTAArrowButton` Component

- Fetch Figma node: **`CTA with arrow btn`**
- Same props as `CTAButton` but includes an arrow icon
- Arrow icon: fetch exact SVG or icon name from Figma

#### `Badge` Component

- Fetch Figma node: **`Badge`**
- Props: `text: string`, `variant?: string`
- Extract all color/style variants from Figma

---

### Pages

#### Home Page (`/`)

Sections in order (verify order from Figma):

1. `HeroSection` — Figma node: **`Home Section Hero`**
2. `HighlightsSection` — Figma node: **`Hero Section Highlights`**
3. `AboutMeSection` — Figma node: **`Home Section About Me`**
4. `ContactSection` — Figma node: **`Home Section Contact`** (id=`"contact"`)

#### Projects Page (`/projects`)

- Fetch Figma node when available
- Ask user for content/data structure if not in Figma

#### Work Experience Page (`/work-experience`)

- Fetch Figma node when available

#### Activities Page (`/activities`)

- Fetch Figma node when available

#### Skills Page (`/skills`)

- Fetch Figma node when available

---

## Responsive Design Rules

> **There is no mobile Figma frame.** Copilot must design the mobile layout independently using best practices. The desktop Figma design is the single source of truth for all visual tokens (colors, typography, spacing, assets). Responsive behavior is Copilot's responsibility.

### Breakpoint Strategy (Tailwind)

| Breakpoint | Prefix      | Usage                          |
| ---------- | ----------- | ------------------------------ |
| < 768px    | _(default)_ | Mobile — primary base styles   |
| ≥ 768px    | `md:`       | Tablet                         |
| ≥ 1024px   | `lg:`       | Desktop — matches Figma design |
| ≥ 1280px   | `xl:`       | Wide desktop                   |

Write **mobile-first**: base classes = mobile, `lg:` classes = desktop Figma values.

### Responsive Rules per Component

**Navbar**

- Desktop: vertical nav (from Figma)
- Mobile: hamburger menu (morphs to X) — ask if the menu should be a drawer or dropdown
- Ask user if they have a preference for mobile nav pattern before building

**HeroSection**

- Desktop: layout from Figma
- Mobile: stack elements vertically, reduce font sizes proportionally, full-width CTAs

**General Layout**

- Sections: `px-4 md:px-8 lg:px-16` (adjust to match Figma desktop padding at `lg:`)
- Typography: scale down 1–2 steps on mobile (e.g., Figma `text-5xl` → mobile `text-3xl`)
- Images: `w-full` on mobile, fixed dimensions from Figma on `lg:`
- Grid layouts: single column on mobile → Figma columns on `lg:`

### What to Ask the User

> ⚠️ Before implementing mobile layout for **any section**, briefly describe your planned mobile layout and ask: _"Does this responsive approach work for you, or do you have a different preference?"_

Do NOT silently implement complex responsive behavior. Always confirm with the user first.

---

## TypeScript Standards

```typescript
// ✅ Always define explicit prop types
interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary"; // derived from Figma variants
  className?: string;
}

// ✅ Use 'use client' only when necessary (event handlers, hooks)
("use client");

// ✅ Prefer server components by default
// ✅ Never use 'any' type
// ✅ Always type useState, useRef, etc.
```

---

## Tailwind CSS Standards

```typescript
// ✅ Use Tailwind classes from exact Figma values
// Example: if Figma shows padding: 16px 24px → use px-6 py-4

// ✅ Extend tailwind.config.ts for custom values NOT in default Tailwind scale
// Example: if Figma uses a non-standard color #1A2B3C
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add exact Figma colors here
      },
      fontFamily: {
        // Add exact Figma fonts here
      },
    },
  },
};

// ✅ Never hardcode inline styles unless Tailwind cannot represent the value
// ✅ Use CSS variables in globals.css for design tokens
// ✅ Prefer Tailwind font-size scale (e.g., text-2xl/3xl/4xl) over arbitrary sizes like text-[28px]
// ✅ When asked to reduce font sizes, decrease one Tailwind scale step (e.g., text-3xl -> text-2xl)
```

### Mapping Figma font sizes to Tailwind

- Map the Figma pixel font-size to the nearest Tailwind font-size utility (e.g., Figma 48px → `text-4xl`).
- Avoid arbitrary bracketed utilities like `text-[28px]`; extend `tailwind.config.ts` only when an exact non-standard value is necessary.
- After choosing the nearest Tailwind class, implement a one-step reduction (e.g., mapped `text-5xl` → implemented `text-4xl`) for the production mobile-first base styles.
- Document the mapping in the component (short comment) and in PR descriptions: "Figma: 56px → chosen: text-5xl → implemented: text-4xl".

---

## Workflow: How to Build Each Component

```
1. User requests a component or page
   ↓
2. Fetch Figma node tree via MCP
   ↓
3. Traverse ALL layers — record every design token
   ↓
4. Identify unclear values → ASK USER before continuing
   ↓
5. Map Figma values to Tailwind classes / CSS variables
   ↓
6. Write TypeScript component with exact prop types
   ↓
7. Implement all Figma variants and interaction states
   ↓
8. Review against Figma — flag any discrepancies to user
```

---

## What to ALWAYS Ask the User About

- Any color, font, or spacing value not clearly visible in Figma
- Image/asset sources that are not exported from Figma
- Animation/transition behavior not described in Figma
- Content (copy, names, descriptions) not in Figma
- Any Figma node that is hidden, locked, or has no content
- Responsive/breakpoint behavior (if not annotated in Figma)
- Data fetching strategy (static, SSR, CSR) for dynamic sections

---

## What NOT to Do

- ❌ Never invent colors, spacing, or typography
- ❌ Never skip Figma layers or assume they are decorative
- ❌ Never use placeholder content without asking
- ❌ Never use `any` TypeScript type
- ❌ Never add features not specified in Figma or by the user
- ❌ Never use inline `style={{}}` when Tailwind can cover it
- ❌ Never guess responsive behavior — ask first

---

## Confirmed Project Requirements

- **Fonts**: `Manjari` is the default font. `Bitcount` is used for the "Full-Stack" word in the hero headline.
- **Navbar (mobile)**: hamburger button that morphs into an X on toggle.
- **Header (mobile)**: layout is hamburger | logo | Ask Bot button.
- **Animations**: use Framer Motion. Entrance slide-up for Header, Navbar, Hero text, and Hero badges (20px, 0.5s, 0.1s stagger). Hero headline uses typing animation (0.1s per character) with a blinking cursor. Ask Bot button shakes (rotate +/-2deg) after 1s pause, two shakes per cycle, total shake duration 0.4s, looping.
- **Ask Bot**: links to `/chatbot` with a placeholder page heading "Coming Soon...".

---

## Recent Implementation Decisions

- **Icons:** Use `@heroicons/react` (24/solid) for UI icons by default. Prefer inline SVG Heroicons over raster images when possible.
- **Icon Color:** Accent icon color is `#AEDEFC` (use CSS variable `--color-accent` in `globals.css`).
- **GitHub Asset:** Place the GitHub image at `public/assets/Github.png` and reference it as `/assets/Github.png`.
- **Fonts:** `Teachers` loaded via `next/font/google` and set as the site `--font-teachers` variable. `Bitcount` is applied via the `--font-bitcount` CSS variable — if Bitcount is a paid/custom font, include local font files or load via a provided Google stylesheet link and confirm license/availability before bundling.
- **Navbar (mobile):** Implement as a left drawer with a backdrop; backdrop click or hamburger toggle closes the drawer. Ensure hamburger button has higher `z-index` than drawer content.
- **Hero typing animation:** Implement typing with a looping sequence (type → pause → delete → pause → repeat). Use non-breaking spaces (`\u00A0`) to avoid collapsed spacing during typing and ensure the blinking cursor only appears on the active line.
- **Tailwind rules enforcement:** Continue avoiding arbitrary bracketed utilities for font-sizes and spacing; prefer theme extensions or mapped CSS variables when a value is not in the default scale.
