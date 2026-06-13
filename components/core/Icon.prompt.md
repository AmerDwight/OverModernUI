Lucide line icon that inherits the current text color — use anywhere you need an icon (buttons, nav, badges, inputs).

```jsx
<Icon name="zap" size={18} />
<Icon name="arrow-right" />
<span style={{ color: "var(--accent)" }}><Icon name="check" /></span>
```

Names are Lucide kebab-case (browse at lucide.dev). Color follows `currentColor`, so set the parent's `color` to recolor it.
