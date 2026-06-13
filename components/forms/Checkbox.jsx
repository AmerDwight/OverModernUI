import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-check { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-body);
  font-size: var(--fs-body-sm); color: var(--text-secondary); user-select: none; }
.om-check input { position: absolute; opacity: 0; pointer-events: none; }
.om-check__box {
  width: 20px; height: 20px; border-radius: var(--radius-xs); flex: none;
  background: var(--surface-sunken); border: var(--hairline) solid var(--border-strong);
  display: grid; place-items: center; color: #fff;
  transition: background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.om-check__box .om-icon { opacity: 0; transform: scale(0.6); transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-spring); }
.om-check input:checked + .om-check__box {
  background: var(--accent); border-color: transparent; box-shadow: var(--glow-accent);
}
.om-check input:checked + .om-check__box .om-icon { opacity: 1; transform: scale(1); }
.om-check input:focus-visible + .om-check__box { box-shadow: 0 0 0 3px var(--accent-soft); }
.om-check input:disabled + .om-check__box { opacity: 0.45; }

/* radio variant */
.om-check--radio .om-check__box { border-radius: 50%; }
.om-check--radio .om-dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; opacity: 0; transform: scale(0.4);
  transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-spring); }
.om-check--radio input:checked + .om-check__box .om-dot { opacity: 1; transform: scale(1); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-check-css")) {
  const s = document.createElement("style");
  s.id = "om-check-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Checkbox({ checked, defaultChecked, onChange, label, disabled = false, radio = false, name, value, ...rest }) {
  return (
    <label className={`om-check ${radio ? "om-check--radio" : ""}`}>
      <input
        type={radio ? "radio" : "checkbox"}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        {...rest}
      />
      <span className="om-check__box">
        {radio ? <span className="om-dot" /> : <Icon name="check" size={14} />}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
