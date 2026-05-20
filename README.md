# Portfolio Website — GitHub Copilot Setup

## File Structure

```
.github/
├── copilot-instructions.md          ← Global rules for ALL Copilot interactions
└── prompts/
    ├── figma-component.prompt.md    ← How to build any component from Figma
    ├── page-builder.prompt.md       ← How to build a full page from Figma
    └── navbar.prompt.md             ← Navbar-specific instructions
```

---

## How to Use

### In GitHub Copilot Chat (VS Code)

1. **Global instructions** in `copilot-instructions.md` are automatically applied to every chat.

2. **Use a specific skill** by referencing it in your prompt:
   ```
   #figma-component.prompt.md Build the CTAButton component
   ```
   ```
   #navbar.prompt.md Build the Navbar component
   ```
   ```
   #page-builder.prompt.md Build the Home page
   ```

3. **Make sure Figma MCP is connected** in your VS Code MCP settings before starting.

---

## Workflow Summary

```
Connect Figma MCP
      ↓
Open GitHub Copilot Chat
      ↓
Reference the relevant .prompt.md file
      ↓
Copilot fetches Figma → extracts tokens → asks if unclear → writes code
      ↓
Review output against Figma design
      ↓
Repeat for next component/page
```

---

## Pages to Build

| Priority | Page | Route | Status |
|---|---|---|---|
| 1 | Home | `/` | ⬜ Not started |
| 2 | Projects | `/projects` | ⬜ Not started |
| 3 | Work Experience | `/work-experience` | ⬜ Not started |
| 4 | Activities | `/activities` | ⬜ Not started |
| 5 | Skills | `/skills` | ⬜ Not started |

## Reusable Components to Build First

| Component | Figma Layer | Status |
|---|---|---|
| Header | `Header` | ⬜ Not started |
| Navbar | `Navbar` | ⬜ Not started |
| CTAButton | `CTA btn` | ⬜ Not started |
| CTAArrowButton | `CTA with arrow btn` | ⬜ Not started |
| Badge | `Badge` | ⬜ Not started |

---

## Questions Still Needed from User

- [ ] **Figma node IDs** — ต้องถามทุกครั้งก่อน build แต่ละ component (จะได้ตอน build จริง)
- [ ] **Mobile Navbar pattern** — hamburger + drawer (เลื่อนออกจากข้าง) หรือ hamburger + dropdown (กางลงมา)?

## Confirmed Settings

- ✅ Figma access: via **node ID**
- ✅ Navbar: **sticky** (`position: sticky, top: 0`)
- ✅ Navbar: has **logo/brand name** linking back to `/`
- ✅ GitHub URL: `https://github.com/Pawnpawee`
- ✅ Responsive: **mobile-first**, no mobile Figma frame — Copilot designs mobile layout and confirms with user
- ✅ Additional pages: will be added later
