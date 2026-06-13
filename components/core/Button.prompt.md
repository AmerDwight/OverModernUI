Pill-shaped action button — use for any primary/secondary action; the primary variant carries the brand's electric-azure glow.

```jsx
<Button variant="primary" onClick={save}>Deploy</Button>
<Button variant="secondary" iconLeft={<Icon name="plus" />}>New project</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger">Delete</Button>
```

Variants: `primary` (azure, glows on hover), `secondary` (glass), `ghost` (transparent), `danger`. Sizes: `sm` / `md` / `lg`. Pass `iconLeft` / `iconRight` for icons.
