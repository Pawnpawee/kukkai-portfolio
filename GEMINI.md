# Portfolio Website — Claude Code Instructions

## Stack
- Next.js (App Router) · TypeScript strict · Tailwind CSS v4 · Framer Motion
- Design source: **Figma via MCP (node ID only)**

## Critical Rule
> **NEVER assume, guess, or invent any design detail.**
> If anything is unclear — color, spacing, font, layout, icon, content — **stop and ask the user immediately.**
> This applies to every layer in every Figma node.

---

## Figma MCP

- Always fetch by **node ID**: `figma.getNode({ nodeId: "123:456" })`
- No node ID? **Ask the user before doing anything else.**
- Traverse **every layer** recursively — no skipping hidden/nested layers.
- Extract: colors (hex/rgba), typography (family/weight/size/line-height/letter-spacing), spacing (padding/gap from Auto Layout), dimensions, border radius, effects (shadow/blur), assets, variants, interaction states.
- Unclear or missing value? **Ask the user.**

@.claude/rules/figma-component.md
@.claude/rules/navbar.md
@.claude/rules/page-builder.md

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx          ← Root layout (Header + Navbar)
│   ├── page.tsx            ← Home page
│   ├── projects/page.tsx
│   ├── work-experience/page.tsx
│   ├── activities/page.tsx
│   ├── skills/page.tsx
│   └── chatbot/page.tsx    ← "Coming Soon..." placeholder
├── components/
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── CTAButton.tsx
│   ├── CTAArrowButton.tsx
│   └── Badge.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── HighlightsSection.tsx
│   ├── AboutMeSection.tsx
│   └── ContactSection.tsx
└── public/assets/          ← Raster assets (e.g. Github.png)
```

---

## Figma Layer → File Mapping

| Figma Layer Name | File |
|---|---|
| `Header` | `components/Header.tsx` |
| `Navbar` | `components/Navbar.tsx` |
| `CTA btn` | `components/CTAButton.tsx` |
| `CTA with arrow btn` | `components/CTAArrowButton.tsx` |
| `Badge` | `components/Badge.tsx` |
| `Home Section Hero` | `sections/HeroSection.tsx` |
| `Hero Section Highlights` | `sections/HighlightsSection.tsx` |
| `Home Section About Me` | `sections/AboutMeSection.tsx` |
| `Home Section Contact` | `sections/ContactSection.tsx` |

---

## Navbar Routing

| Element | Destination | Notes |
|---|---|---|
| Logo / Brand Name | `/` | `<Link>` |
| Project | `/projects` | `<Link>` |
| Work Exp | `/work-experience` | `<Link>` |
| Activities | `/activities` | `<Link>` |
| Skills | `/skills` | `<Link>` |
| Github | `https://github.com/Pawnpawee` | `<a target="_blank" rel="noopener noreferrer">` |
| Email | `mailto:pornpawee214@gmail.com` | `<a href="mailto:...">` |
| Contact | `/#contact` | smooth scroll → `#contact` on Home |
| Ask Bot | `/chatbot` | shakes animation, see Animations |

---

## Confirmed Design Decisions

**Fonts**
- Default: `Manjari` (Google Font via `next/font/google`)
- Hero "Full-Stack" word: `Bitcount` via `--font-bitcount` CSS variable (confirm license before bundling)

**Icons**
- Use `@heroicons/react/24/solid` for all UI icons
- Accent color: `#AEDEFC` → CSS variable `--color-accent` in `globals.css`
- GitHub: raster image at `public/assets/Github.png` → reference as `/assets/Github.png`

**Animations (Framer Motion)**
- Header, Navbar, Hero text, Hero badges: entrance slide-up (20px, 0.5s, 0.1s stagger)
- Hero headline: typing animation (0.1s/char) with blinking cursor, looping (type → pause → delete → pause → repeat), use `\u00A0` for non-breaking spaces
- Ask Bot button: shakes (±2deg) after 1s pause, 2 shakes/cycle, 0.4s total, looping

**Navbar — Mobile**
- Left drawer with backdrop
- Hamburger morphs to X on open
- Backdrop click or toggle closes drawer
- Hamburger `z-index` must be higher than drawer content
- Mobile header layout: hamburger | logo | Ask Bot button

---

## Tailwind Rules

- **Mobile-first**: base = mobile, `lg:` = Figma desktop values
- Map Figma px → nearest Tailwind utility, then **reduce one step** for production (e.g. Figma 56px → `text-5xl` → implement `text-4xl`)
- **No arbitrary brackets**: avoid `text-[28px]`; extend `tailwind.config.ts` or use CSS variables instead
- Document mapping in component comment: `// Figma: 56px → text-5xl → implemented: text-4xl`
- Non-standard values → `theme.extend` in `tailwind.config.ts`

## Breakpoints

| Prefix | Width | Usage |
|---|---|---|
| _(default)_ | < 768px | Mobile |
| `md:` | ≥ 768px | Tablet |
| `lg:` | ≥ 1024px | Desktop (Figma values) |
| `xl:` | ≥ 1280px | Wide desktop |

---

## TypeScript Rules

- Always define explicit prop interfaces — never use `any`
- `'use client'` only when needed (event handlers, hooks)
- Prefer server components by default
- Export Figma variants as TypeScript union types

---

## Never Do

- ❌ Invent colors, spacing, or typography
- ❌ Skip or assume Figma layers are decorative
- ❌ Use placeholder content without asking
- ❌ Use `any` type
- ❌ Add features not in Figma or confirmed by user
- ❌ Use `style={{}}` when Tailwind covers it
- ❌ Implement responsive behavior without confirming with user

## Layout Conventions

### Section Wrapper

Every page section **must** use this exact wrapper pattern:

```tsx
<section
  id="[section-id]"
  className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10 h-fit"
>
```

- `id` — ต้องมีเสมอ ตั้งตาม section นั้น (เช่น `about`, `hero`, `contact`)
- classes ชุดนี้ห้ามแก้โดยไม่ได้รับอนุญาต
- ถ้า Figma ระบุ height หรือ padding ต่างออกไป — ถามก่อนแก้
