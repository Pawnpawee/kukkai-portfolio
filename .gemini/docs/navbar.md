# Skill: Build Navbar Component from Figma

Use this skill specifically when building `components/Navbar.tsx`.

---

## Step 1 — Ask First

Before fetching Figma, confirm:
- **Node IDs** for Navbar frame and each button variant
- **Sticky background** — same on scroll, or transparent → solid?
- **Mobile nav pattern** — left drawer or top dropdown? (drawer is default)

---

## Step 2 — Fetch Figma Navbar Node

```
figma.getNode({ nodeId: "___" })
```

Extract ALL child layers:
- Container/wrapper (background, padding, shadow, border)
- Logo / brand area
- Navigation button group
- Each button (label, icon, variant styles for default / hover / active)
- Any blur or sticky effect

---

## Step 3 — Document Per-Button Styles

```
Button: [Label]
- Default:  bg #__ | text #__ | padding __ | border __
- Hover:    bg #__ | text #__ | border __
- Active:   bg #__ | text #__ | border __
- Icon:     [name] [left/right] [size]
```

---

## Step 4 — Routing Table

| Element | Component | Destination | Notes |
|---|---|---|---|
| Logo / Brand Name | `<Link>` | `/` | Links to Home |
| Project | `<Link>` | `/projects` | |
| Work Exp | `<Link>` | `/work-experience` | |
| Activities | `<Link>` | `/activities` | |
| Skills | `<Link>` | `/skills` | |
| Github | `<a>` | `https://github.com/Pawnpawee` | `target="_blank" rel="noopener noreferrer"` |
| Email | `<a>` | `mailto:pornpawee214@gmail.com` | |
| Contact | `<a>` | `/#contact` | smooth scroll |
| Ask Bot | `<Link>` | `/chatbot` | shake animation |

> ⚠️ Verify every label matches exact Figma layer text — ask user if different.

---

## Step 5 — Active State

```tsx
'use client'
import { usePathname } from 'next/navigation'
// Apply Figma "active/selected" variant styles when pathname matches
```

---

## Step 6 — Sticky + Scroll Offset

Navbar is **sticky** (`position: sticky; top: 0; z-50`).

```css
/* globals.css — set after extracting navbar height from Figma */
html {
  scroll-padding-top: [navbar height]px;
}
```

> ⚠️ Confirm navbar height with user before setting `scroll-padding-top`.

Contact button behavior:
- On `/`: smooth scroll to `#contact`
- On other pages: navigate to `/#contact`

---

## Step 7 — Mobile Navbar (no Figma frame)

**Confirmed pattern:** left drawer with backdrop.

```
Desktop (lg:): vertical nav — exact Figma layout
Mobile (default): hamburger button → left drawer slides in
```

- Hamburger morphs to X on open (`useState`)
- Backdrop click or toggle closes drawer
- Hamburger `z-index` > drawer content
- Mobile header layout: hamburger | logo | Ask Bot button
- Use `'use client'`, `useState` for open/close

> Describe mobile layout plan to user and confirm before implementing.

---

## Step 8 — Component Template

```tsx
'use client'
// Figma: Navbar | node: [ID]

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
// Heroicons for icons — color: #AEDEFC (--color-accent)

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      {/* Desktop nav — lg: exact Figma styles */}
      <nav className="sticky top-0 z-50 /* + Figma styles */">
        <Link href="/">{/* Logo from Figma */}</Link>

        <Link href="/projects" className={pathname === '/projects' ? '/* active */' : '/* default */'}>
          {/* Label from Figma */}
        </Link>
        {/* ... other links */}

        <a href="https://github.com/Pawnpawee" target="_blank" rel="noopener noreferrer">
          {/* Label + icon */}
        </a>
        <a href="mailto:pornpawee214@gmail.com">{/* Label */}</a>
        <a href="/#contact">{/* Label */}</a>
        <Link href="/chatbot">{/* Ask Bot — shake animation */}</Link>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && <div className="/* backdrop */" onClick={() => setDrawerOpen(false)} />}
      <div className={`/* drawer styles */ ${drawerOpen ? '/* open */' : '/* closed */'}`}>
        {/* Mobile nav links */}
      </div>
    </>
  )
}
```

---

## Icons & Assets

- Icons: `@heroicons/react/24/solid`, color `#AEDEFC` (`--color-accent`)
- GitHub image: `public/assets/Github.png` → `/assets/Github.png`
- Font sizes: Figma px → nearest Tailwind → reduce one step; comment mapping in file
