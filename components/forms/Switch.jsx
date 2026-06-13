import React from "react";

const css = `
.om-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-body);
  font-size: var(--fs-body-sm); color: var(--text-secondary); user-select: none; }
.om-switch input { position: absolute; opacity: 0; pointer-events: none; }
.om-switch__track {
  position: relative; width: 40px; height: 24px; border-radius: var(--radius-pill);
  background: var(--surface-sunken); border: var(--hairline) solid var(--border-strong);
  transition: background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.om-switch__thumb {
  position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; border-radius: 50%;
  background: var(--ob-200); box-shadow: var(--shadow-sm);
  transition: transform var(--dur-base) var(--ease-spring), background var(--dur-base) var(--ease-out);
}
.om-switch input:checked + .om-switch__track {
  background: var(--accent); border-color: transparent; box-shadow: var(--glow-accent);
}
.om-switch input:checked + .om-switch__track .om-switch__thumb { transform: translateX(16px); background: #fff; }
.om-switch input:focus-visible + .om-switch__track { box-shadow: 0 0 0 3px var(--accent-soft); }
.om-switch input:disabled + .om-switch__track { opacity: 0.45; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-switch-css")) {
  const s = document.createElement("style");
  s.id = "om-switch-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Switch({ checked, defaultChecked, onChange, label, disabled = false, ...rest }) {
  return (
    <label className="om-switch">
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <span className="om-switch__track">
        <span className="om-switch__thumb" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
