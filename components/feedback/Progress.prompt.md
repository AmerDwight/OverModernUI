Linear progress bar with the brand azure→cyan gradient and a soft glow.

```jsx
<Progress value={64} label="Uploading build" showValue />
<Progress indeterminate label="Provisioning…" />
```

Set `value`/`max` for determinate, or `indeterminate` for the looping state. `label` and `showValue` add a meta row above the track.
