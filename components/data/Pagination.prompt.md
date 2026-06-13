Page navigation with mono numerals and an accent-filled active page. Controlled via `page` / `total` / `onChange`; long ranges collapse to ellipses automatically.

```jsx
const [page, setPage] = React.useState(1);

<Pagination page={page} total={24} onChange={setPage} />
```

`siblingCount` widens how many neighbours stay visible before collapsing; `showEdges={false}` hides the prev/next chevrons.
