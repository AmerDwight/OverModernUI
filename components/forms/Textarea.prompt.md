Multi-line text field that mirrors Input's label / hint / error pattern. Vertically resizable, with an optional live character counter.

```jsx
<Textarea
  label="Release notes"
  placeholder="What changed in this deploy?"
  rows={5}
  maxLength={280}
  showCount
/>
```

Works controlled (`value` + `onChange`) or uncontrolled (`defaultValue`). Pass `maxLength` with `showCount` to surface a live counter that turns rose when over the cap.
