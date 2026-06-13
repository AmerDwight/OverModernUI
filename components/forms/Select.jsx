import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-select-field { display: flex; flex-direction: column; gap: 7px; font-family: var(--font-body); }
.om-select-field__label { font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-secondary); }
.om-select-wrap { position: relative; display: flex; align-items: center; }
.om-select-wrap .om-icon { position: absolute; right: 12px; color: var(--text-tertiary); pointer-events: none; }
.om-select {
  appearance: none; -webkit-appearance: none;
  width: 100%; height: var(--control-md);
  font-family: var(--font-body); font-size: var(--fs-body-sm); color: var(--text-primary);
  background: var(--surface-sunken);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 38px 0 14px; cursor: pointer;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.om-select:hover { border-color: var(--border-strong); }
.om-select:focus { outline: none; border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.om-select[disabled] { opacity: 0.5; pointer-events: none; }
.om-select option { background: var(--surface-overlay); color: var(--text-primary); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-select-css")) {
  const s = document.createElement("style");
  s.id = "om-select-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Select({ label, options = [], placeholder, id, children, ...rest }) {
  const fieldId = id || (label ? `om-sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <div className="om-select-field">
      {label && <label className="om-select-field__label" htmlFor={fieldId}>{label}</label>}
      <div className="om-select-wrap">
        <select id={fieldId} className="om-select" {...rest}>
          {placeholder && <option value="" disabled hidden>{placeholder}</option>}
          {children ||
            options.map((o) => {
              const opt = typeof o === "string" ? { value: o, label: o } : o;
              return <option key={opt.value} value={opt.value}>{opt.label}</option>;
            })}
        </select>
        <Icon name="chevron-down" size={16} />
      </div>
    </div>
  );
}
