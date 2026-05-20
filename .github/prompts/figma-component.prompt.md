# Skill: Build Component from Figma

## Trigger

Use this prompt when asked to **create or implement any UI component or page section** from the Figma design.

---

## Step-by-Step Process

### Step 1 — Identify the Target

State clearly which component you are building:
- Component name (e.g., `CTAButton`, `Navbar`, `HeroSection`)
- Figma layer name (e.g., `CTA btn`, `Navbar`, `Home Section Hero`)
- Output file path (e.g., `components/CTAButton.tsx` or `sections/HeroSection.tsx`)

---

### Step 2 — Fetch from Figma MCP

```
Use the Figma MCP tool to:
1. Get the full node for the target layer by name
2. Fetch ALL child layers recursively — do not stop at the first level
3. For each layer, extract:
   - Layer type (FRAME, GROUP, TEXT, RECTANGLE, VECTOR, INSTANCE, etc.)
   - Layer name
   - Visibility (is it hidden?)
   - Fill: color (hex/rgba), gradient, or image
   - Stroke: color, width, position
   - Border radius (each corner individually if different)
   - Opacity
   - Effects: drop-shadow, inner-shadow, blur (backdrop or layer)
   - For TEXT layers: font family, weight, size, line-height, letter-spacing, text-align, content
   - For FRAME/GROUP: Auto Layout direction, gap, padding (top/right/bottom/left), alignment
   - For INSTANCE: component name, variant properties
   - Constraints: horizontal and vertical sizing behavior
   - Dimensions: width and height
```

> ⚠️ If ANY layer returns incomplete data or is ambiguous, **stop and ask the user** before proceeding.

---

### Step 3 — Document Extracted Values

Before writing code, list all extracted design tokens in this format:

```
## Extracted Design Tokens: [ComponentName]

### Colors
- Background: #______
- Text primary: #______
- Border: #______
- Hover state bg: #______

### Typography
- Font family: ______
- Font weight: ______
- Font size: ______px
- Line height: ______
- Letter spacing: ______

### Spacing (Auto Layout)
- Padding: top __ right __ bottom __ left __
- Gap between children: __px

### Dimensions
- Width: __ (fixed / fill / hug)
- Height: __ (fixed / fill / hug)

### Border
- Radius: __px
- Width: __px
- Color: #______

### Effects
- Shadow: x__ y__ blur__ spread__ color______

### Variants
- [variant name]: [property differences]

### Unclear / Missing Values
- [List anything that needs user clarification]
```

> ⚠️ If "Unclear / Missing Values" section is not empty — **ask the user before writing any code**.

---

### Step 4 — Map to Tailwind + TypeScript

Convert each design token:

| Figma Value | Tailwind Class / CSS |
|---|---|
| padding: 12px 24px | `py-3 px-6` |
| gap: 8px | `gap-2` |
| font-size: 16px | `text-base` |
| border-radius: 9999px | `rounded-full` |
| Non-standard value | `tailwind.config.ts extend` or CSS variable |

For values **not in Tailwind's default scale**:
1. Add to `tailwind.config.ts` under `theme.extend`
2. Name it semantically (e.g., `colors.brand-primary`, `spacing.section-gap`)

---

### Step 5 — Write the Component

```tsx
// components/[ComponentName].tsx

// 1. 'use client' only if needed (onClick, useState, etc.)
// 2. Import next/link for internal navigation
// 3. Define explicit TypeScript interface for props
// 4. Implement ALL Figma variants
// 5. Implement ALL interaction states (hover, active, focus, disabled)
// 6. Use Tailwind classes — no inline styles unless unavoidable
// 7. Add aria attributes for accessibility

interface [ComponentName]Props {
  // Props derived from Figma variants and usage context
}

export default function [ComponentName]({ ... }: [ComponentName]Props) {
  return (
    // Exact implementation from Figma
  )
}
```

---

### Step 6 — Self-Review Checklist

Before submitting the component, verify:

- [ ] Every Figma layer is accounted for in the implementation
- [ ] Colors match exactly (use browser DevTools color picker if needed)
- [ ] Typography matches (family, weight, size, line-height, spacing)
- [ ] Padding and gap values match Auto Layout
- [ ] Border radius matches exactly
- [ ] All variants are implemented
- [ ] Hover/active/focus states match Figma
- [ ] No hardcoded magic numbers without a corresponding design token
- [ ] No `any` TypeScript types
- [ ] Responsive behavior confirmed with user (if not in Figma)

---

### Step 7 — Report to User

After completing the component:
1. Summarize what was built
2. List any assumptions that were made (should be zero)
3. List any values that need user confirmation
4. Ask if anything looks different from the Figma design

---

### Implementation Notes (repo conventions)

- Map Figma font sizes to the nearest Tailwind utility and then reduce by one scale step for production (e.g., Figma 56px → choose `text-5xl` → implement `text-4xl`). Avoid `text-[xxx]` unless unavoidable; extend `tailwind.config.ts` instead.
- Prefer inline SVG Heroicons (`@heroicons/react/24/solid`) over raster images. Use accent color `#AEDEFC` for icons and define it as `--color-accent` in `globals.css`.
- Place shared raster assets (like the GitHub image) in `public/assets` and reference as `/assets/Github.png`.
- For typing animations, implement a looping sequence (type → pause → delete → pause → repeat) and use `\u00A0` for non-breaking spaces to avoid collapsed spacing during typing.
- Document any Figma→Tailwind mapping inside the component file (short comment) and mention it in the PR description.
