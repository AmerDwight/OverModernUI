Vertical event timeline with a connector rail. Each node is a small colored dot, or a framed icon when `icon` is set; rows carry a title, mono timestamp, description, and an optional `meta` slot for badges/avatars.

```jsx
<Timeline items={[
  { icon: "rocket", variant: "success", title: "Deployed to production",
    time: "2m ago", description: "a3f9c1 · edge cache invalidation",
    meta: <Badge variant="success" dot>Live</Badge> },
  { icon: "git-commit-horizontal", title: "Pushed 3 commits", time: "18m ago" },
  { icon: "triangle-alert", variant: "warning", title: "Rolled back billing webhook",
    time: "3h ago", description: "Reverted to 7b2e08." },
]} />
```

`variant`: `success` · `warning` · `danger` · `accent`. Omit `icon` for a plain dot node.
