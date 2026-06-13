import React from "react";

const css = `
.om-tabs { display: inline-flex; gap: 2px; padding: 4px;
  background: var(--surface-sunken); border: var(--hairline) solid var(--border-subtle);
  border-radius: var(--radius-pill); }
.om-tab {
  position: relative; font-family: var(--font-body); font-size: var(--fs-body-sm);
  font-weight: var(--fw-medium); color: var(--text-tertiary);
  padding: 7px 16px; border-radius: var(--radius-pill); border: none; background: transparent;
  cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 7px;
  transition: color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.om-tab:hover { color: var(--text-secondary); }
.om-tab--active {
  color: var(--text-primary);
  background: var(--surface-glass-strong);
  box-shadow: var(--inset-highlight), 0 1px 3px rgb(3 4 7 / 0.4);
}
.om-tab--active::after {
  content: ""; position: absolute; left: 50%; bottom: 3px; transform: translateX(-50%);
  width: 16px; height: 2px; border-radius: 2px; background: var(--accent); box-shadow: 0 0 8px var(--accent-glow);
}
/* underline variant */
.om-tabs--line { background: transparent; border: none; border-bottom: var(--hairline) solid var(--border-subtle);
  border-radius: 0; padding: 0; gap: 4px; }
.om-tabs--line .om-tab { border-radius: 0; padding: 12px 4px; margin: 0 8px; }
.om-tabs--line .om-tab--active { background: transparent; box-shadow: none; }
.om-tabs--line .om-tab--active::after { left: 0; transform: none; width: 100%; bottom: -1px; }
.om-tab__count { font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary);
  background: var(--surface-glass); border-radius: var(--radius-pill); padding: 1px 7px; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-tabs-css")) {
  const s = document.createElement("style");
  s.id = "om-tabs-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Tabs({ tabs = [], value, defaultValue, onChange, variant = "pill" }) {
  const [internal, setInternal] = React.useState(
    defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0]))
  );
  const active = value !== undefined ? value : internal;
  const select = (v) => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return (
    <div className={`om-tabs ${variant === "line" ? "om-tabs--line" : ""}`} role="tablist">
      {tabs.map((t) => {
        const tab = typeof t === "string" ? { value: t, label: t } : t;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active === tab.value}
            className={`om-tab ${active === tab.value ? "om-tab--active" : ""}`}
            onClick={() => select(tab.value)}
          >
            {tab.label}
            {tab.count != null && <span className="om-tab__count">{tab.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
