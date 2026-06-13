---
name: overmodern-design
description: Use this skill to generate well-branded interfaces and assets for OverModern, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. OverModern is a dark-first, ultra-modern "obsidian glass" system — premium, technical, electric-azure accent — for internet products like consoles, dashboards, and developer tooling.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files
(`styles.css` + `tokens/` for the foundations, `components/` for React primitives,
`ui_kits/console/` for a full product recreation, `guidelines/` for specimen cards,
`assets/` for the logo).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. Link `styles.css`, load
`_ds_bundle.js`, and read components from `window.OverModernDesignSystem_22ac94`. If
working on production code, copy assets and read the rules here to become an expert in
designing with this brand.

Core rules to honor: dark-first surfaces; hairline (1px) borders; glass panels with a
top-edge inset highlight; azure used sparingly for primary/active/live; sentence-case
copy with mono `//` eyebrows; Lucide line icons inheriting currentColor; snappy
`ease-out` motion; never use emoji as iconography.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
