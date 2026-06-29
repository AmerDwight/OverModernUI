KPI metric tile: framed icon, mono label, large tabular value with unit, a trend-tinted delta, and an optional corner sparkline. Lay several out in a grid for a dashboard header.

```jsx
<StatCard icon="arrow-up-right" label="Requests" value="1.24M" unit="/min"
  delta="+12.4%" sub="vs last hour" spark={[40,44,42,50,48,58,62,60,72]} />

<StatCard icon="timer" label="p99 latency" value="12.4" unit="ms"
  delta="−3.1%" trend="up" />
```

`delta`'s sign drives the arrow + color (`+` green, `−`/`-` red); set `trend` to override (e.g. a falling latency is good). Omit `delta` for a plain figure.
