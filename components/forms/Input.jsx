import React from "react";

const css = `
.om-field { display: flex; flex-direction: column; gap: 7px; font-family: var(--font-body); }
.om-field__label {
  font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-secondary);
}
.om-field__req { color: var(--accent); margin-left: 2px; }
.om-input-wrap { position: relative; display: flex; align-items: center; }
.om-input-wrap .om-icon { position: absolute; color: var(--text-tertiary); pointer-events: none; }
.om-input-wrap .om-icon.lead { left: 13px; }
.om-input {
  width: 100%; height: var(--control-md);
  font-family: var(--font-body); font-size: var(--fs-body-sm); color: var(--text-primary);
  background: var(--surface-sunken);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 14px;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.om-input--has-lead { padding-left: 38px; }
.om-input::placeholder { color: var(--text-disabled); }
.om-input:hover { border-color: var(--border-strong); }
.om-input:focus {
  outline: none; border-color: var(--border-accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
  background: var(--surface-base);
}
.om-input[disabled] { opacity: 0.5; pointer-events: none; }
.om-field--error .om-input { border-color: rgb(245 69 90 / 0.6); }
.om-field--error .om-input:focus { box-shadow: 0 0 0 3px var(--danger-soft); }
.om-field__hint { font-size: var(--fs-caption); color: var(--text-tertiary); }
.om-field--error .om-field__hint { color: var(--rose-400); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-input-css")) {
  const s = document.createElement("style");
  s.id = "om-input-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Input({
  label,
  hint,
  error,
  required = false,
  iconLeft,
  id,
  ...rest
}) {
  const fieldId = id || (label ? `om-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <div className={`om-field ${error ? "om-field--error" : ""}`}>
      {label && (
        <label className="om-field__label" htmlFor={fieldId}>
          {label}
          {required && <span className="om-field__req">*</span>}
        </label>
      )}
      <div className="om-input-wrap">
        {iconLeft}
        <input
          id={fieldId}
          className={`om-input ${iconLeft ? "om-input--has-lead" : ""}`}
          {...rest}
        />
      </div>
      {(error || hint) && <span className="om-field__hint">{error || hint}</span>}
    </div>
  );
}
