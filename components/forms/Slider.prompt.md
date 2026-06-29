Range slider with an accent-filled track, glowing thumb, and a live mono value readout.

```jsx
const [cpu, setCpu] = React.useState(4);

<Slider label="vCPU" min={1} max={16} step={1} value={cpu} onChange={setCpu}
  ticks={["1", "8", "16"]} />

<Slider label="Memory" min={0} max={100} defaultValue={60}
  formatValue={(v) => `${v} GB`} />
```

Works controlled (`value` + `onChange`) or uncontrolled (`defaultValue`). `formatValue` customizes the readout; `ticks` adds evenly-spaced labels.
