Path breadcrumb driven by `items` (root first; the last item renders as the current page). Ancestors become links (`href`) or buttons (`onClick`); deep paths collapse the middle to an ellipsis via `maxItems`.

```jsx
<Breadcrumb
  items={[
    { label: "northwind", icon: "building-2", href: "#" },
    { label: "Production", href: "#" },
    { label: "edge-gateway", href: "#" },
    { label: "Settings" },
  ]}
  maxItems={3}
/>
```

`separator` accepts a Lucide icon name (default `chevron-right`) or any node (e.g. a `/`).
