Indeterminate loading spinner — a rotating accent arc on a faint track. Inline by default; pass `label` for a centered captioned block.

```jsx
<Spinner />
<Spinner size="sm" />
<Spinner size="lg" label="Provisioning…" />
<Button variant="primary" disabled>
  <Spinner size="sm" color="currentColor" /> Deploying
</Button>
```

`size`: `sm` · `md` (default) · `lg`, or a pixel number. Use **Progress** instead when you know the completion percentage.
