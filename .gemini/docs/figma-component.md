# Skill: Build Component from Figma

Use this skill when building **any UI component or page section** from Figma.

---

## Step 1 — Identify Target

Before touching any code, confirm:
- Component name (e.g. `CTAButton`)
- Figma layer name (e.g. `CTA btn`)
- **Figma node ID** — if missing, ask the user immediately
- Output file path (e.g. `components/CTAButton.tsx`)

---

## Step 2 — Fetch from Figma MCP

```
figma.getNode({ nodeId: "___" })
```

Traverse every layer recursively. For each layer extract:
- Type: FRAME / GROUP / TEXT / RECTANGLE / VECTOR / INSTANCE
- Visibility (hidden layers still matter)
- Fill: hex/rgba, gradient, or image
- Stroke: color, width, position
- Border radius (per corner if different)
- Opacity
- Effects: drop-shadow, inner-shadow, backdrop blur
- TEXT: font family, weight, size, line-height, letter-spacing, text-align, content
- FRAME/GROUP: Auto Layout direction, gap, padding (T/R/B/L), alignment
- INSTANCE: component name, variant properties
- Dimensions: width/height (fixed / fill / hug)

> ⚠️ Incomplete or ambiguous layer? Stop. Ask the user.

---

## Step 3 — Document Tokens (before writing any code)

```
## Tokens: [ComponentName]

Colors:       bg #____ | text #____ | border #____ | hover #____
Typography:   [family] [weight] [size]px / [line-height] ls:[letter-spacing]
Spacing:      padding T__ R__ B__ L__ | gap __px
Dimensions:   W: __ (fixed/fill/hug) | H: __ (fixed/fill/hug)
Border:       radius __px | width __px | color #____
Effects:      shadow x__ y__ blur__ spread__ #____
Variants:     [name] → [property differences]

Unclear / Missing:
- (list here — if not empty, ASK USER before continuing)
```

---

## Step 4 — Map to Tailwind

| Figma | Tailwind |
|---|---|
| padding 12px 24px | `py-3 px-6` |
| gap 8px | `gap-2` |
| font-size 16px | `text-base` |
| border-radius 9999px | `rounded-full` |
| non-standard value | extend `tailwind.config.ts` or CSS variable |

**Font size rule:** Figma px → nearest Tailwind step → **reduce one step** for production.
Comment in file: `// Figma: 48px → text-4xl → implemented: text-3xl`
No arbitrary `text-[px]` values.

---

## Step 5 — Write Component

> All sections must use the standard wrapper — see Layout Conventions in CLAUDE.md

```tsx
// components/[ComponentName].tsx
// Figma: [layer name] | node: [ID]
// Font mapping: Figma __px → text-___ → implemented: text-___

'use client' // only if needed

import Link from 'next/link'

interface [ComponentName]Props {
  // Derived from Figma variants — no any
}

export default function [ComponentName]({ ... }: [ComponentName]Props) {
  return (
    // Exact Figma implementation
    // Tailwind only — no style={{}} unless unavoidable
    // aria-* attributes for accessibility
  )
}
```

Rules:
- All Figma variants implemented
- All states: hover, active, focus, disabled
- Icons: `@heroicons/react/24/solid` · accent `--color-accent` (`#AEDEFC`)
- Raster assets: `public/assets/` → reference as `/assets/<name>`
- Animations: Framer Motion (slide-up 20px / 0.5s / 0.1s stagger where applicable)

---

## Step 6 — Self-Review

- [ ] Every Figma layer accounted for
- [ ] Colors exact
- [ ] Typography exact (family, weight, size, line-height, letter-spacing)
- [ ] Padding/gap matches Auto Layout
- [ ] Border radius exact
- [ ] All variants implemented
- [ ] All interaction states implemented
- [ ] No magic numbers without a design token
- [ ] No `any` type
- [ ] Font mapping commented in file
- [ ] Mobile layout described and confirmed with user before implementing

---

## Step 7 — Report

1. Summarize what was built
2. List assumptions (target: zero)
3. List values needing user confirmation
4. Ask if anything differs from Figma
