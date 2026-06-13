Notification toast with a semantic accent rail and matching icon.

```jsx
<Toast variant="success" title="Deployed" message="acme-prod is live in us-east-1." onClose={dismiss} />
<Toast variant="danger" title="Build failed" message="3 type errors in api/handlers.ts." />
```

Variants: `info`, `success`, `warning`, `danger`. Pass `onClose` to render a dismiss button.
