Dropdown menu anchored to any trigger element. Closes on outside-click, Escape, or item select. Each item supports an icon, shortcut, danger tint, check mark, or `disabled` state; insert `{ type: "separator" }` and `{ type: "label" }` for structure.

```jsx
<Menu
  align="end"
  trigger={<IconButton icon="ellipsis" label="Actions" />}
  items={[
    { type: "label", label: "Deployment" },
    { label: "View logs", icon: "scroll-text", shortcut: "⌘L", onClick: () => {} },
    { label: "Redeploy", icon: "rotate-cw", onClick: () => {} },
    { type: "separator" },
    { label: "Promote to prod", icon: "arrow-up", checked: true },
    { type: "separator" },
    { label: "Delete", icon: "trash-2", variant: "danger", onClick: () => {} },
  ]}
/>
```

`align`: `start` (default) anchors left, `end` anchors right.
