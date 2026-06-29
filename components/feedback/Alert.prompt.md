Inline alert / banner with a soft tinted fill and semantic icon. Use for persistent, in-flow messages (use Toast for transient pop-ups). Supports a title, body, action row, and dismiss button.

```jsx
<Alert variant="warning" title="Staging is behind production"
  actions={<Button size="sm" variant="secondary">Sync now</Button>}
  onClose={() => {}}>
  staging is 3 deploys behind prod. Promote to keep environments aligned.
</Alert>

<Alert variant="success">Build passed all 248 checks.</Alert>
```

`variant`: `info` (default) · `success` · `warning` · `danger`. Override `icon` with any Lucide name, or `icon={null}` to remove it.
