Styled native `<select>` with a custom chevron and accent focus ring.

```jsx
<Select label="Region" options={["us-east", "eu-west", "ap-south"]} placeholder="Choose…" />
<Select label="Plan" options={[{value:"pro",label:"Pro"},{value:"team",label:"Team"}]} />
```

Pass `options` (strings or `{value,label}`) or raw `<option>` children. Spreads native select props.
