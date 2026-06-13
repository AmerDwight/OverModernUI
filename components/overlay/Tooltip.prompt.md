Hairline glass tooltip that appears on hover or keyboard focus. Wrap any element; supply `content` and an optional `kbd` shortcut chip.

```jsx
<Tooltip content="Redeploy this service" side="top">
  <IconButton icon="rocket" label="Deploy" />
</Tooltip>

<Tooltip content="Command palette" kbd="⌘K" side="bottom">
  <Button variant="secondary">Search</Button>
</Tooltip>
```

`side`: `top` (default), `bottom`, `left`, `right`. `delay` controls hover-open timing (ms).
