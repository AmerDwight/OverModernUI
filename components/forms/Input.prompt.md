Labeled text input with hint/error states and optional leading icon.

```jsx
<Input label="Project name" placeholder="acme-prod" required />
<Input label="Search" iconLeft={<Icon name="search" size={16} className="lead" />} placeholder="Filter…" />
<Input label="Email" error="That address is already in use." defaultValue="x@y" />
```

Pass `hint` for helper text, `error` to flip into the error state. Spreads native `<input>` props (type, value, onChange, …).
