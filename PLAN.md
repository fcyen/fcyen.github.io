# Portfolio Remake Plan

Remake the homepage of `fcyen.github.io` in the bento-grid style of
[gianmarcocavallo.com](https://gianmarcocavallo.com/), inspired by
[astro-bento-portfolio](https://github.com/Ladvace/astro-bento-portfolio),
adapted to our existing Next.js 13 + Tailwind stack.

This first pass only covers the homepage and four widgets:
**Welcome**, **About me**, **Professional Experience**, **Personal Projects**.

> **Branching note**: `claude/remake-portfolio-site-ES6TK` is the **root branch**
> for the portfolio remake. All follow-up work (additional widgets, header/footer
> redesign, other pages, etc.) should branch off this branch — not `main` —
> until the remake is merged. Subsequent feature branches should target this
> branch as their base and merge back into it.

---

## 1. Current state

- **Stack**: Next.js 13 (App Router) + Tailwind CSS.
- **Homepage**: `src/app/page.jsx` only renders `<Hero />`; everything else is commented out.
- **Components**: `src/components/` holds many legacy components (Hero, Experience,
  Workstation, Testimonials, etc.) from the old design — most will not be reused
  in this pass, but we leave them in place until we're sure nothing else references them.
- **Styling**: `tailwind.config.js` already wires up Inter / Lexend / Gochi Hand fonts.
  `src/styles/globals.css` is essentially empty.
- **Branch**: `claude/remake-portfolio-site-ES6TK`.

---

## 2. Color palette

Use these four colors throughout the new homepage:

| Token             | Hex       | Role                                    |
| ----------------- | --------- | --------------------------------------- |
| `bento.bg`        | `#FFEAD8` | Page background (warm light peach)      |
| `bento.coral`     | `#E8988A` | Card borders, secondary accents, hover  |
| `bento.magenta`   | `#9B177E` | Primary accent (links, highlights, CTA) |
| `bento.ink`       | `#2A1458` | Primary text / headings (dark navy)     |

Card surfaces themselves will use a slightly lighter shade of the background (e.g. white
with low opacity over `bento.bg`) so they read as raised on the peach background, with
a 1px `bento.coral` border for definition.

---

## 3. Theme + design tokens

- **`tailwind.config.js`**: Add the four colors under `theme.extend.colors.bento`.
- **`src/styles/globals.css`**: Set `body` background to `bento.bg` and base text
  color to `bento.ink` so the whole page picks up the theme.
- Standardize on `font-display` (Lexend) for headings and `font-sans` (Inter) for
  body across the bento cards.

---

## 4. Bento grid scaffolding

Two new building-block components live under `src/components/bento/`:

- **`BentoGrid.jsx`** — responsive CSS grid container, e.g.
  `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`, max-width and centered.
- **`BentoCard.jsx`** — generic card wrapper that handles rounded corners, the
  coral border, padding, hover lift, and accepts a `className` prop so individual
  widgets can set their grid span (e.g. `col-span-2 row-span-2`). Every widget
  reuses this.

Then rewrite **`src/app/page.jsx`** to render `<BentoGrid>` containing the four
widgets below. Remove the imports of all old commented-out components so the file
is clean.

---

## 5. The four widgets

Each widget lives under `src/components/bento/widgets/` and is a thin wrapper
around `BentoCard`.

### 5.1 `WelcomeWidget.jsx`
- Large hero card (e.g. `col-span-2 row-span-2` on desktop).
- Big greeting: "Hi, I'm Ching Yen".
- Tagline (kept verbatim from the existing Hero):
  > "I'm a software engineer who brings a unique blend of technical expertise
  > and creative sensibility to my work"
- Small avatar from `src/images/my-avatar.jpg`.
- Replaces the role currently played by `Hero.js`.

### 5.2 `AboutMeWidget.jsx`
- Medium card.
- Short bio paragraph (placeholder for now).
- "Read more →" link to the eventual `/about` page.

### 5.3 `ProfessionalExperienceWidget.jsx`
- Title: "Professional Experience".
- Stacked list of 2–3 placeholder roles, each with company, role, year.
- Driven by a small data array at the top of the file so it's easy to edit.

### 5.4 `PersonalProjectsWidget.jsx`
- Title: "Personal Projects".
- Same shape as the professional widget, pointed at a personal-projects data
  array.

The two "Design Works" widgets share an internal helper component
**`WorksList.jsx`** that takes `{ title, items }` props, so each widget file
stays a one-liner. Keeps the structure parallel and avoids duplication.

---

## 6. Placeholder content + how to fill it in later

All four widgets ship with placeholder data so the layout renders end-to-end.
Each file contains a clearly-marked data block at the top and a comment
explaining how to edit it. Example shape for the works widgets:

```jsx
// src/components/bento/widgets/ProfessionalExperienceWidget.jsx
//
// 👉 To fill in real content:
//    1. Edit the `items` array below.
//    2. Each item has: title, company, year, and an optional `href`.
//    3. Add or remove entries freely; the layout will adapt.
//    4. To add an image thumbnail, drop the file into `src/images/work/`
//       and add an `image` field that imports it.
//
const items = [
  { title: "Project Title 1", company: "Company A", year: "2024", href: "#" },
  { title: "Project Title 2", company: "Company B", year: "2023", href: "#" },
  { title: "Project Title 3", company: "Company C", year: "2022", href: "#" },
];
```

The personal-projects widget will follow the same shape with its own array,
and the about-me widget will have a single `bio` constant at the top with a
matching comment.

No CMS / contentlayer changes for this iteration — the data is inline in each
widget file. We can extract to JSON later if it grows.

---

## 7. Verification

Run `npm run dev` and check the homepage at `http://localhost:3000`:

- **Desktop (≥1024px)**: 4-column bento with widgets at their intended sizes.
- **Tablet**: 2-column.
- **Mobile**: single-column stack.
- The orange/peach theme is consistent across all four cards.
- Avatar, headings, and accent colors match the palette in §2.

---

## 8. Out of scope for this pass (intentional)

- Header / Footer redesign — leave existing `Header.js` / `Footer.js` alone
  even though they don't match the new theme.
- Other pages (`/about`, `/work`, `/blog`, etc.) — untouched.
- Animations / hover effects beyond a basic transform.
- Removing legacy components — leave them in place; prune in a follow-up
  once we're sure nothing else references them.

---

## 9. Commit strategy

One commit at the end of the implementation pass, message along the lines of
"Add bento-style homepage with Welcome, About, and Works widgets", pushed to
`claude/remake-portfolio-site-ES6TK`. No PR unless explicitly requested.
