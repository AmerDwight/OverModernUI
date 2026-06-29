⌘K command palette: a fuzzy-filtered, grouped command list with full keyboard navigation (↑/↓ to move, Enter to run, Esc to close). You own the `open` state and bind the hotkey.

```jsx
const [open, setOpen] = React.useState(false);
React.useEffect(() => {
  const h = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(o => !o); }
  };
  window.addEventListener("keydown", h);
  return () => window.removeEventListener("keydown", h);
}, []);

<CommandPalette
  open={open}
  onClose={() => setOpen(false)}
  items={[
    { group: "Navigation", label: "Go to Overview", icon: "layout-dashboard", onSelect: () => {} },
    { group: "Navigation", label: "Go to Deployments", icon: "rocket", hint: "12 active" },
    { group: "Actions", label: "New deployment", icon: "plus", shortcut: ["⌘", "D"], onSelect: () => {} },
    { group: "Actions", label: "Toggle theme", icon: "moon" },
  ]}
/>
```

Items are matched against `label`, `keywords`, and `group`; pass `keywords` to widen matches. `shortcut` accepts a string or an array of kbd chips.
