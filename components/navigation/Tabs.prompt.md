Segmented tab switcher with an animated accent indicator.

```jsx
<Tabs tabs={["Overview", "Activity", "Settings"]} defaultValue="Overview" onChange={setTab} />
<Tabs variant="line" tabs={[{value:"all",label:"All",count:128},{value:"open",label:"Open",count:12}]} />
```

Variants: `pill` (inset capsule) and `line` (underline). Controlled via `value`+`onChange` or uncontrolled via `defaultValue`. Items can carry a `count` chip.
