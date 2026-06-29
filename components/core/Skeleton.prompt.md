Shimmering placeholder for content that hasn't loaded. Rect, text (single or multi-line), and circle shapes. Respects `prefers-reduced-motion`.

```jsx
// Card placeholder
<div style={{ display: "flex", gap: 12, alignItems: "center" }}>
  <Skeleton variant="circle" width={40} />
  <div style={{ flex: 1 }}>
    <Skeleton variant="text" width="40%" />
    <Skeleton variant="text" lines={2} />
  </div>
</div>

<Skeleton width="100%" height={120} radius={12} />
```

`variant`: `rect` (default) · `text` · `circle`. For `text`, `lines` stacks rows and shortens the last one.
