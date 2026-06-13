Data table driven by `columns` + `rows`. Mono uppercase header, hairline dividers, hover highlight. Use `render` to drop design-system components into cells, `numeric` for tabular mono figures, and `align` per column.

```jsx
<Table
  columns={[
    { key: "service", header: "Service" },
    { key: "region", header: "Region" },
    { key: "rps", header: "Req/s", align: "right", numeric: true },
    { key: "status", header: "Status", align: "right",
      render: (v) => <Badge variant={v === "up" ? "success" : "danger"} dot>{v}</Badge> },
  ]}
  rows={[
    { service: "edge-gateway", region: "us-east-1", rps: "12,408", status: "up" },
    { service: "billing-api", region: "eu-west-2", rps: "3,920", status: "down" },
  ]}
/>
```

Set `dense` for compact rows, `hover={false}` to disable row highlight, `rowKey` to key rows by a field.
