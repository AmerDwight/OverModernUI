Binary toggle — the track turns accent-azure with a soft glow when on.

```jsx
<Switch label="Enable telemetry" defaultChecked />
<Switch checked={dark} onChange={e => setDark(e.target.checked)} label="Dark mode" />
```

Controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`). Optional `label` renders to the right.
