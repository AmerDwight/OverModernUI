Centered empty / zero-data surface with a framed icon, headline, description, and action row. Use it for empty lists, no search results, or unconfigured features.

```jsx
<EmptyState
  bordered
  icon="rocket"
  title="No deployments yet"
  description="Connect a repository and push to main to ship your first build."
  actions={<>
    <Button variant="primary" iconLeft={<Icon name="git-branch" size={16} />}>Connect repo</Button>
    <Button variant="ghost">Read the docs</Button>
  </>}
/>
```

`icon` accepts a Lucide name (default `inbox`) or a custom node. `bordered` wraps it in a dashed panel.
