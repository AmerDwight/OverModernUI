import React from "react";

const css = `
.om-textarea {
  width: 100%; min-height: var(--_minh, 96px); resize: vertical;
  font-family: var(--font-body); font-size: var(--fs-body-sm); color: var(--text-primary);
  line-height: var(--lh-body);
  background: var(--surface-sunken);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 11px 14px;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.om-textarea::placeholder { color: var(--text-disabled); }
.om-textarea:hover { border-color: var(--border-strong); }
.om-textarea:focus {
  outline: none; border-color: var(--border-accent);
  box-shadow: 0 0 0 3px var(--accent-soft); background: var(--surface-base);
}
.om-textarea[disabled] { opacity: 0.5; pointer-events: none; }
.om-field--error .om-textarea { border-color: rgb(245 69 90 / 0.6); }
.om-field--error .om-textarea:focus { box-shadow: 0 0 0 3px var(--danger-soft); }
.om-textarea__foot { display: flex; align-items: center; gap: 10px; }
.om-textarea__count { margin-left: auto; font-family: var(--font-mono); font-size: var(--fs-caption); color: var(--text-disabled); font-variant-numeric: tabular-nums; }
.om-textarea__count--over { color: var(--rose-400); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-textarea-css")) {
  const s = document.createElement("style");
  s.id = "om-textarea-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Textarea({ label, hint, error, required = false, rows = 4, maxLength, showCount = false, value, defaultValue, onChange, id, minHeight, ...rest }) {
  const fieldId = id || (label ? `om-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [internal, setInternal] = React.useState(defaultValue || "");
  const val = value != null ? value : internal;
  const count = String(val || "").length;
  const over = maxLength != null && count > maxLength;
  const handle = (e) => { if (value == null) setInternal(e.target.value); onChange && onChange(e); };
  return (
    <div className={`om-field ${error ? "om-field--error" : ""}`}>
      {label && (
        <label className="om-field__label" htmlFor={fieldId}>
          {label}
          {required && <span className="om-field__req">*</span>}
        </label>
      )}
      <textarea
        id={fieldId}
        className="om-textarea"
        rows={rows}
        maxLength={maxLength}
        value={value != null ? value : undefined}
        defaultValue={value == null ? defaultValue : undefined}
        onChange={handle}
        style={minHeight ? { "--_minh": typeof minHeight === "number" ? minHeight + "px" : minHeight } : undefined}
        {...rest}
      />
      {(error || hint || showCount) && (
        <div className="om-textarea__foot">
          {(error || hint) && <span className="om-field__hint">{error || hint}</span>}
          {showCount && (
            <span className={`om-textarea__count ${over ? "om-textarea__count--over" : ""}`}>
              {count}{maxLength != null ? ` / ${maxLength}` : ""}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
