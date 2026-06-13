Content surface container — the building block for panels, tiles, and list items.

```jsx
<Card eyebrow="// Metrics" variant="glass">
  <h3>Throughput</h3>
  <p>1.2M req/s</p>
</Card>
<Card interactive onClick={open}>…</Card>
```

Variants: `raised` (solid, default), `glass` (translucent + blur). Set `interactive` for hover lift + accent border. Optional `eyebrow` renders a mono overline.
