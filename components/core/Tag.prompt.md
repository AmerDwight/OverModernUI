Compact removable tag / chip for filters, selected values, and labels. Softer than Badge (a mono uppercase status marker) — Tag uses body type and can be dismissed.

```jsx
<Tag>default</Tag>
<Tag variant="accent" icon="git-branch">main</Tag>
<Tag variant="success" dot>healthy</Tag>
<Tag variant="warning" onClose={() => removeFilter("staging")}>env: staging</Tag>
```

`variant`: `neutral` (default) · `accent` · `success` · `warning` · `danger`. `size`: `sm` (default) · `md`. Pass `onClose` to make it removable.
