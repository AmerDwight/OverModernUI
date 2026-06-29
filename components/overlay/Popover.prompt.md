Floating panel anchored to a trigger, with an arrow. Heavier than a Tooltip — holds interactive content (forms, filters, mini-menus). Closes on outside-click or Escape; uncontrolled by default.

```jsx
<Popover
  title="Filter deployments"
  trigger={<Button variant="secondary" iconLeft={<Icon name="filter" size={16} />}>Filter</Button>}
>
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <Switch label="Production only" />
    <Switch label="Failed builds" />
    <Button variant="primary" size="sm">Apply</Button>
  </div>
</Popover>
```

`side`: `bottom` (default) · `top`. `align`: `start` (default) · `end`. Use **Tooltip** for plain hover hints, **Menu** for action lists.
