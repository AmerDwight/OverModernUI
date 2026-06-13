import React from "react";

const css = `
.om-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: var(--font-mono); font-size: var(--fs-micro);
  font-weight: var(--fw-medium); letter-spacing: 0.04em; text-transform: uppercase;
  height: 20px; padding: 0 8px; border-radius: var(--radius-sm);
  border: var(--hairline) solid transparent; white-space: nowrap;
}
.om-badge--neutral { background: var(--surface-glass-strong); color: var(--text-secondary); border-color: var(--border-default); }
.om-badge--accent  { background: var(--accent-soft); color: var(--azure-300); border-color: var(--border-accent); }
.om-badge--success { background: var(--success-soft); color: var(--emerald-400); border-color: rgb(31 201 138 / 0.4); }
.om-badge--warning { background: var(--warning-soft); color: var(--amber-400); border-color: rgb(239 162 31 / 0.4); }
.om-badge--danger  { background: var(--danger-soft); color: var(--rose-400); border-color: rgb(245 69 90 / 0.4); }
.om-badge--solid   { background: var(--accent); color: var(--on-accent); }
.om-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-badge-css")) {
  const s = document.createElement("style");
  s.id = "om-badge-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Badge({ children, variant = "neutral", dot = false, ...rest }) {
  return (
    <span className={`om-badge om-badge--${variant}`} {...rest}>
      {dot && <span className="om-badge__dot" />}
      {children}
    </span>
  );
}
