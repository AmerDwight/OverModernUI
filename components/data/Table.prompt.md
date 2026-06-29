Data table driven by `columns` + `rows`. Mono uppercase header, hairline dividers, hover highlight. Use `render` to drop design-system components into cells, `numeric` for tabular mono figures, `align` per column.

Add `sortable` to a column for click-to-sort headers (asc → desc → off; supply `compare` for custom ordering). Add `selectable` for a leading checkbox column with select-all.

```jsx
const [selected, setSelected] = React.useState([]);

<Table
  selectable
  rowKey="service"
  selected={selected}
  onSelectionChange={setSelected}
  defaultSort={{ key: "rps", dir: "desc" }}
  columns={[
    { key: "service", header: "Service", sortable: true },
    { key: "rps", header: "Req/s", align: "right", numeric: true, sortable: true },
    { key: "status", header: "Status", align: "right",
      render: (v) => <Badge variant={v === "up" ? "success" : "danger"} dot>{v}</Badge> },
  ]}
  rows={rows}
/>
```

`dense` for compact rows, `hover={false}` to disable row highlight. Selection and sort are uncontrolled unless you pass `selected` / `onSortChange`.
