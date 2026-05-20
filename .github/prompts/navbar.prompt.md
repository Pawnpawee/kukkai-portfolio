# Skill: Build Navbar Component from Figma

## Trigger

Use this prompt specifically when building the **Navbar component**.

---

## Figma Source

- Layer name: `Navbar`
- Output file: `components/Navbar.tsx`

---

## Step 1 — Fetch Figma Navbar Node

```
Fetch the full Navbar layer from Figma.
Extract ALL child layers including:
- Container/wrapper frame (background, padding, shadow, border)
- Logo or brand area (if present)
- Navigation button group
- Each individual button (label, icon, variant styles)
- Mobile/hamburger menu (if present)
- Any sticky or blur effect on the nav bar
```

> ⚠️ If the Figma Navbar has a mobile variant or responsive behavior — ask the user before implementing.

---

## Step 2 — Extract Per-Button Styles

For each button in the Navbar, document:

```
Button: [Label]
- Default state: bg, text color, padding, border, font
- Hover state: bg, text color, border (from Figma hover variant)
- Active/current page state: (from Figma selected variant)
- Icon: (name, position left/right, size)
```

---

## Step 3 — Routing Table

Implement each button according to this routing table:

| Button Label (from Figma) | Component | Destination | Notes |
|---|---|---|---|
| Logo / Brand Name | `<Link>` | `/` | Links back to Home page |
| Project | `<Link>` | `/projects` | Internal, Next.js router |
| Work Exp | `<Link>` | `/work-experience` | Internal, Next.js router |
| Activities | `<Link>` | `/activities` | Internal, Next.js router |
| Skills | `<Link>` | `/skills` | Internal, Next.js router |
| Github | `<a>` | `https://github.com/Pawnpawee` | `target="_blank"` `rel="noopener noreferrer"` |
| Email | `<a>` | `mailto:pornpawee214@gmail.com` | `href="mailto:pornpawee214@gmail.com"` |
| Contact | `<a>` or scroll fn | `/#contact` | Smooth scroll to `#contact` on Home page |

> ⚠️ Verify button labels match exactly with the Figma layer text. Ask user if any label differs.

---

## Step 4 — Active State Logic

```tsx
'use client'
import { usePathname } from 'next/navigation'

// Use pathname to determine active link
// Apply Figma "active/selected" variant styles to the matching link
```

---

## Step 5 — Contact Scroll Behavior

For the **Contact** button:
- If the user is already on the Home page (`/`): smooth scroll to `#contact`
- If the user is on another page: navigate to `/#contact`

```tsx
// Behavior to implement (confirm scroll offset with user if Navbar is sticky)
href="/#contact"
// OR implement custom scroll handler if Figma shows specific behavior
```

> ⚠️ Ask the user if there is a scroll offset needed (e.g., sticky navbar height compensation).

## Step 6 — Scroll Offset (Only If Sticky)

If the Navbar is made sticky in Figma, apply a scroll offset for `#contact` anchors:

```css
/* globals.css */
html {
  scroll-padding-top: /* navbar height in px — extract from Figma */;
}
```

> ⚠️ Ask user to confirm the navbar height value before setting `scroll-padding-top`.

---

## Step 7 — Mobile Navbar

There is **no mobile Figma design**. Design the mobile Navbar to match the overall site aesthetic.

**Recommended approach (confirm with user first):**
- Desktop (`lg:`): vertical nav from Figma
- Mobile (default): hamburger icon button that morphs into an X and toggles a drawer or dropdown menu

```
Before building the mobile nav, describe your planned approach to the user
and ask: "Does this mobile nav pattern work for you?"
```

Implement with `useState` for open/close toggle. Use `'use client'` directive.

---

## Step 7 — Component Template

```tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// All values below must come from Figma — do not invent them

interface NavbarProps {
  // Add props if Navbar has variants
}

export default function Navbar({}: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav className="/* exact Figma styles */">
      {/* Internal links */}
      <Link
        href="/projects"
        className={`/* base styles */ ${pathname === '/projects' ? '/* active styles */' : ''}`}
      >
        {/* Label from Figma */}
      </Link>

      {/* ... other internal links */}

      {/* GitHub external link */}
      <a
        href="https://github.com/Pawnpawee"
        target="_blank"
        rel="noopener noreferrer"
        className="/* Figma styles */"
      >
        {/* Label + icon from Figma */}
      </a>

      {/* Email link */}
      <a href="mailto:pornpawee214@gmail.com" className="/* Figma styles */">
        {/* Label from Figma */}
      </a>

      {/* Contact scroll link */}
      <a href="/#contact" className="/* Figma styles */">
        {/* Label from Figma */}
      </a>
    </nav>
  )
}
```

---

## Questions to Ask User Before Building

1. **Node IDs** — What are the Figma node IDs for the Navbar and each button variant?
2. **Mobile nav pattern** — Hamburger + sliding drawer (from side), or hamburger + dropdown (from top)? Any preference?
3. **Sticky background** — Does the Navbar background change on scroll (e.g., transparent → solid), or stay the same?

---

### Navbar Implementation Notes (repo conventions)

- Use `@heroicons/react/24/solid` for icons in the Navbar. Color icons with `#AEDEFC` (`--color-accent` in `globals.css`).
- Place the GitHub image at `public/assets/Github.png` and reference it as `/assets/Github.png` when using a raster asset.
- Mobile navbar should be a left drawer with a backdrop; clicking the backdrop or the hamburger toggle closes it. Ensure the hamburger button has higher `z-index` than the drawer.
- Map Figma font sizes to Tailwind utilities and reduce one step for production (document mapping in component comments and PRs).
