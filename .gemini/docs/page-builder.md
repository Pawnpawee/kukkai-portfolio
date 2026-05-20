# Skill: Build Full Page from Figma

Use this skill when building a **full page** (not a single component).

---

## Pages

| Route | File | Figma Frame |
|---|---|---|
| `/` | `app/page.tsx` | Home Page |
| `/projects` | `app/projects/page.tsx` | Projects Page |
| `/work-experience` | `app/work-experience/page.tsx` | Work Experience Page |
| `/activities` | `app/activities/page.tsx` | Activities Page |
| `/skills` | `app/skills/page.tsx` | Skills Page |
| `/chatbot` | `app/chatbot/page.tsx` | "Coming Soon..." placeholder |

---

## Process

### Step 1 — Fetch Page Frame

```
figma.getNode({ nodeId: "___" })
```

List ALL direct child sections in order (top → bottom).
Do NOT reorder — Figma order = scroll order.

> ⚠️ No node ID? Ask the user before anything else.

### Step 2 — Identify Sections

For each child frame:
- Figma layer name
- Does a component file already exist?
- Which reusable components does it use? (`CTAButton`, `Badge`, etc.)

### Step 3 — Build Each Section

Follow `figma-component.md` for each section.

> ⚠️ Never start the next section while the current one has unresolved questions.

### Step 4 — Compose the Page

```tsx
// app/[route]/page.tsx
import HeroSection from '@/sections/HeroSection'
import HighlightsSection from '@/sections/HighlightsSection'
import AboutMeSection from '@/sections/AboutMeSection'
import ContactSection from '@/sections/ContactSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <AboutMeSection />
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
}
```

### Step 5 — Contact Anchor

`ContactSection` **must** be wrapped in `<section id="contact">` — required for Navbar scroll link.

---

## Home Page Checklist

- [ ] `HeroSection` — node: `Home Section Hero`
- [ ] `HighlightsSection` — node: `Hero Section Highlights`
- [ ] `AboutMeSection` — node: `Home Section About Me`
- [ ] `ContactSection` — node: `Home Section Contact` · wrapped in `<section id="contact">`

---

## Conventions

- Mobile-first Tailwind: base = mobile, `lg:` = Figma desktop
- Font sizes: Figma px → nearest Tailwind → reduce one step; comment mapping in file
- Icons: `@heroicons/react/24/solid` · accent `--color-accent` (`#AEDEFC`)
- Assets: `public/assets/` → `/assets/<name>`
- Confirm section order with Figma before composing
