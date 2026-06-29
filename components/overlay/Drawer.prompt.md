Edge-anchored sliding panel over a blurred scrim — for detail views, filters, and settings. Controlled via `open` / `onClose` (Escape and scrim-click both close). Compose actions with `footer`.

```jsx
const [open, setOpen] = React.useState(false);

<Drawer
  open={open}
  onClose={() => setOpen(false)}
  side="right"
  title="Deployment details"
  description="a3f9c1 · edge-gateway"
  footer={<>
    <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
    <Button variant="primary" iconLeft={<Icon name="rotate-cw" size={16} />}>Redeploy</Button>
  </>}
>
  Build logs, environment variables, and rollout status go here.
</Drawer>
```

`side`: `right` (default) · `left` · `bottom`. Set `width` for left/right panels. Use **Modal** instead for centered, focused dialogs.
