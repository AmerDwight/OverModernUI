Centered glass dialog over a blurred scrim. Controlled via `open` / `onClose` (Escape and scrim-click both call `onClose`). Build the action row with `footer`.

```jsx
const [open, setOpen] = React.useState(false);

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Delete deployment"
  description="This permanently removes the build and its edge cache. This cannot be undone."
  footer={<>
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" iconLeft={<Icon name="trash-2" size={16} />}>Delete</Button>
  </>}
>
  Type the service name to confirm.
</Modal>
```

`size`: `sm` · `md` (default) · `lg`. Set `closeOnScrim={false}` to require an explicit action.
