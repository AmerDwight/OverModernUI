# OverModern Design System

**超現代科技感 · 高級感 · 適用於網際網路設定**
*Ultra-modern technical aesthetic · premium feel · built for internet products.*

OverModern is a dark-first, glass-and-hairline design system for high-end web
products — consoles, dashboards, developer tooling, and marketing surfaces that
need to feel precise, premium, and unmistakably modern.

---

## Origin & sources

This system was generated from a brand brief, not an existing codebase. The
attached repository was empty at the time of authoring:

- **GitHub:** https://github.com/AmerDwight/OverModernUI *(no committed files —
  only the one-line brand description above)*

Because there was no source UI to recreate, OverModern is an **original** system
built to satisfy the brief. If `OverModernUI` is later populated with real
product code or a Figma library, re-run the import against it and reconcile the
tokens/components here with the source of truth. Explore the repo to do a better,
more faithful job once it contains material.

---

## The system at a glance

- **Aesthetic:** "Obsidian glass." Near-black cool surfaces, translucent blurred
  panels, hairline borders, a single electric-azure accent, restrained motion.
- **Type:** Space Grotesk (display) · Manrope (body) · JetBrains Mono (data/labels).
- **Color:** Obsidian neutral ramp + electric azure `#3D82FF` accent + iridescent
  cyan `#44DEE6` highlight + semantic emerald/amber/rose.
- **Signature tells:** the lighter top-edge "inset highlight" on glass surfaces,
  the accent glow on primary/active elements, and the fine 48px technical grid.

---

## CONTENT FUNDAMENTALS

How OverModern writes.

- **Voice:** confident, precise, engineering-literate. Calm authority — never hype.
  "Engineered for interfaces that feel inevitable." "Depth through light, not weight."
- **Person:** address the user as **you**; the product/company is **we** only when
  necessary. Most UI copy is impersonal and direct ("Sign in to your workspace,"
  "Connect repo," "Deploy").
- **Casing:** **Sentence case** for everything — buttons, headings, labels, menu
  items ("New deployment", not "New Deployment"). Reserve UPPERCASE for mono
  eyebrow/overline labels and badges only ("ENTERPRISE", "LIVE", "// ATMOSPHERE").
- **Length:** terse. Buttons are 1–2 words. Headlines are short declaratives.
  Supporting lines are one sentence. Cut adjectives before nouns.
- **Numbers & data:** numerals always (`12.4 ms`, `1.24M req/s`, `99.98%`). Pair
  values with quiet mono units. Precision signals competence — show real-looking
  figures, never "lots" or "many".
- **Mono accents:** code, hashes, regions, metrics, timestamps, and eyebrow labels
  are set in JetBrains Mono. A leading `//` is the house mark for an eyebrow
  ("// Throughput", "// System · Telemetry").
- **Emoji:** never. Iconography carries all symbolic weight.
- **Punctuation:** use a middle dot `·` as a separator in meta rows; use a true
  minus `−` for negative deltas. Avoid exclamation marks.

---

## VISUAL FOUNDATIONS

- **Theme:** **dark-first** (the brand's primary mode), with a full **opt-in light
  theme**. The default canvas is `--surface-base` (`#030407`), an almost-black with a
  faint blue cast. Light mode is a cool **paper-and-ink** palette (off-white surfaces,
  white cards, black-alpha hairlines, soft cool shadows) sharing the identical azure
  accent. Enable it by setting `data-theme="light"` on `<html>` (or any wrapper):
  `<html data-theme="light">`. Only semantic aliases remap — base ramps and accents
  are unchanged, so components adapt automatically.
- **Color usage:** overwhelmingly neutral. ~90% obsidian greys, with azure used
  *sparingly* for primary actions, focus, active state, and live data. Cyan appears
  only as a gradient partner to azure (charts, progress, gradient text). Semantic
  colors are reserved strictly for status.
- **Surfaces & depth:** depth is built from **layered translucency + light**, not
  heavy drop shadows. Order: `base → sunken → raised → overlay`, plus `glass`
  (a 4–7% white fill with `backdrop-filter: blur`). Every elevated glass surface
  carries an `inset 0 1px 0 rgba(255,255,255,.08)` top-edge highlight — this rim of
  light is the core "premium glass" tell.
- **Borders:** **hairline** (1px) is the default everywhere. Subtle `6%` white for
  dividers, `10%` default, `16%` strong, azure `55%` for accented/focused edges.
  Borders do more layout work than shadows.
- **Shadows:** cool and near-black (`rgb(3 4 7 / .4–.65)`), soft and large. Used for
  overlays, popovers, and lifted cards — not for flat content. Accent **glow**
  (`0 0 0 1px azure, 0 8–10px 28–40px azure/.3–.45`) replaces shadow on primary,
  focused, and live elements.
- **Backgrounds & atmosphere:** solid obsidian by default. Hero/login/empty areas
  add a fine **48px grid texture** (3.5% white lines, often radially masked) and a
  soft **radial accent aura** (azure from the top, cyan from a corner). No photographic
  backgrounds; no busy patterns. Gradient meshes are subtle and cool only.
- **Corner radii:** generous and consistent — controls and chips use pill/`md` (12),
  cards use `lg` (16) to `xl` (22), modals/login `xl`–`2xl`. Nothing is sharp-cornered
  except full-bleed dividers and chart gridlines.
- **Cards:** `raised` = solid `--surface-raised` + hairline + medium shadow. `glass`
  = translucent + blur + large shadow + inset highlight. Interactive cards lift 2px
  and gain an azure border on hover.
- **Motion:** quick and decisive. Signature easing is `--ease-out`
  `cubic-bezier(.16,1,.3,1)` (snappy deceleration) at 120–360ms. Toggles/checks use a
  gentle `--ease-spring` overshoot. Entrances are short fades + small transl(≤8px).
  No bounce on layout, no infinite decorative loops on content (only on live/loading
  indicators). Respect `prefers-reduced-motion`.
- **Hover states:** surfaces lighten (raise white-alpha fill), borders strengthen,
  text steps up in contrast. Primary buttons bloom their glow. Never change hue on hover.
- **Press states:** a 1px downward `translateY` — a small physical "push". No color
  change beyond the existing variant's `:active`.
- **Focus:** never removed. A 2px base-colored gap + 4px azure ring
  (`--focus-ring`), or a 3px `--accent-soft` ring on fields.
- **Transparency & blur:** used deliberately for *floating* layers only — top bars,
  glass cards, login, popovers, toasts. Body content stays opaque for legibility.
- **Imagery vibe:** cool, dark, technical. If photos are introduced, treat them
  cool/desaturated with deep blacks; never warm or bright. Prefer data-viz and
  abstract grid/aura motifs over stock imagery.

---

## ICONOGRAPHY

- **Set:** [**Lucide**](https://lucide.dev) — clean, geometric, 2px line icons that
  match the technical, precise voice. This is a **substitution**: no icon assets were
  supplied with the brief, and Lucide is the closest CDN-available match for the
  intended stroke style. Swap for the product's own set when available.
- **Delivery:** the `Icon` component renders Lucide via **CSS mask** so every icon
  inherits `currentColor` — set a parent's `color` (or use a semantic token) to recolor.
  Loaded from `unpkg.com/lucide-static`. Names are kebab-case (`arrow-right`, `rocket`).
- **Sizing:** 16px in dense controls (buttons, inputs), 18px default (nav, toolbars),
  20–24px for feature/empty states. Keep stroke visually ~2px; don't scale below 14.
- **Color:** icons are `--text-tertiary`/`--text-secondary` at rest; active nav and
  primary actions tint them `--accent`. Status icons take their semantic color.
- **Logo:** `assets/logo-wordmark.svg` (lockup) and `assets/logo-mark.svg` (aperture
  monogram). The mark is a hexagonal aperture with a center node, stroked in the
  azure→cyan gradient — an original mark created for this brief.
- **Emoji / unicode:** never used as iconography. The only non-icon glyphs in use are
  the separator `·`, the eyebrow `//`, and the true minus `−`.

---

## File index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent Skill wrapper for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`effects.css`, `base.css` (element defaults + brand utility classes:
`.om-glass`, `.om-grid-bg`, `.om-aura`, `.om-eyebrow`, `.om-accent-text`).

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown
in the Design System tab.

**`components/`** — React primitives, read from `window.OverModernDesignSystem_22ac94`:
- `core/` — **Button**, **IconButton**, **Icon**, **Badge**, **Avatar**, **Card**,
  **Tag** (removable chips), **Spinner**, **Skeleton** (loading states)
- `forms/` — **Input**, **Select**, **Switch**, **Checkbox** (+ radio), **Textarea**
  (+ counter), **Slider** (filled track)
- `navigation/` — **Tabs** (pill / line), **Breadcrumb** (path nav, collapse)
- `feedback/` — **Progress**, **Toast**, **Alert** (inline banner, 4 tones), **EmptyState** (zero-data surface)
- `overlay/` — **Tooltip** (hairline glass, 4 sides + kbd chip), **Modal** (glass
  dialog over blurred scrim), **Menu** (dropdown — icons, shortcuts, danger rows),
  **Drawer** (edge sheet, 3 sides), **Popover** (interactive anchored panel),
  **CommandPalette** (⌘K, keyboard nav)
- `data/` — **Table** (sortable headers, row selection, custom cells), **Pagination**
  (ellipsis-collapsing, accent active page), **StatCard** (KPI tile + sparkline),
  **Timeline** (connected event rail)

**`templates/`** — starting folders consuming projects can copy. Each is a
`.dc.html` Design Component that loads the system via `ds-base.js`.
- `console/` — **Cloud console** template (`Console.dc.html`): the full app shell
  (login → overview → deployments) as one importable `ConsoleApp.jsx`. This is the
  canonical, consumer-facing starting point.

**`ui_kits/`**
- `console/` — the original interactive **Console** specimen, shown as a card in the
  Design System tab. Same flow as the template; kept as a showcase. See its `README.md`.

**`assets/`** — `logo-mark.svg`, `logo-wordmark.svg`.

---

## Using the system

Consumers link one file and read components from the namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Icon } = window.OverModernDesignSystem_22ac94;
</script>
```

All visual decisions should flow from tokens — never hardcode a hex, radius, or
shadow that a token already expresses.
