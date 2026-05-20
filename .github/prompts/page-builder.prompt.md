# Skill: Build Full Page from Figma

## Trigger

Use this prompt when building a **full page** (not just a single component).

---

## Pages in This Project

| Route | File | Figma Frame |
|---|---|---|
| `/` | `app/page.tsx` | Home Page |
| `/projects` | `app/projects/page.tsx` | Projects Page |
| `/work-experience` | `app/work-experience/page.tsx` | Work Experience Page |
| `/activities` | `app/activities/page.tsx` | Activities Page |
| `/skills` | `app/skills/page.tsx` | Skills Page |

---

## Process

### Step 1 — Fetch the Full Page Frame

```
Fetch the top-level Figma frame for this page.
List ALL direct child sections/frames in order (top to bottom).
Do NOT reorder them — the Figma order is the scroll order.
```

### Step 2 — Identify Sections

For each child frame/section:
- What is the section's Figma layer name?
- Is there already a component file for it?
- What reusable components (`CTAButton`, `Badge`, etc.) does it use?

### Step 3 — Build Each Section

For each section, follow the `figma-component.prompt.md` skill.

> ⚠️ Never build the next section if the current one has unresolved questions.

### Step 4 — Compose the Page

```tsx
// app/[route]/page.tsx
import HeroSection from '@/sections/HeroSection'
import HighlightsSection from '@/sections/HighlightsSection'
// ...

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      {/* sections in Figma order */}
    </main>
  )
}
```

### Step 5 — Scroll Anchor for Contact

The **Contact section** on the Home page must have `id="contact"` so the Navbar "Contact" button can scroll to it:

```tsx
<section id="contact">
  <ContactSection />
</section>
```

---

## Home Page — Section Checklist

- [ ] `HeroSection` — Figma: `Home Section Hero`
- [ ] `HighlightsSection` — Figma: `Hero Section Highlights`
- [ ] `AboutMeSection` — Figma: `Home Section About Me`
- [ ] `ContactSection` — Figma: `Home Section Contact` (must have `id="contact"`)

---

### Page Implementation Notes (repo conventions)

- When mapping Figma typography for page sections, convert pixel sizes to the nearest Tailwind class and then reduce by one scale step for production/mobile-first styles. Document mappings in the component files.
- Prefer Heroicons (`@heroicons/react/24/solid`) for inline SVG icons; use `--color-accent: #AEDEFC` for icon accent color.
- Store raster assets in `public/assets` and reference them as `/assets/<name>`.
- Ensure the `ContactSection` includes `id="contact"` for the Navbar anchor to work as specified.

Confirm section order with Figma before composing the page.
