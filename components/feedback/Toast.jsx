import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-toast {
  display: flex; align-items: flex-start; gap: 12px;
  width: 360px; max-width: 100%;
  padding: 14px 16px; border-radius: var(--radius-md);
  background: var(--surface-overlay);
  border: var(--hairline) solid var(--border-default);
  box-shadow: var(--shadow-xl), var(--inset-highlight);
  font-family: var(--font-body); color: var(--text-primary);
  position: relative; overflow: hidden;
}
.om-toast::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--accent);
}
.om-toast--success::before { background: var(--success); }
.om-toast--warning::before { background: var(--warning); }
.om-toast--danger::before  { background: var(--danger); }
.om-toast__icon { color: var(--accent); margin-top: 1px; flex: none; }
.om-toast--success .om-toast__icon { color: var(--success); }
.om-toast--warning .om-toast__icon { color: var(--warning); }
.om-toast--danger  .om-toast__icon { color: var(--danger); }
.om-toast__body { flex: 1; min-width: 0; }
.om-toast__title { font-size: var(--fs-body-sm); font-weight: var(--fw-semibold); }
.om-toast__msg { font-size: var(--fs-caption); color: var(--text-tertiary); margin-top: 2px; line-height: 1.5; }
.om-toast__close { background: transparent; border: none; color: var(--text-tertiary); cursor: pointer;
  padding: 2px; border-radius: var(--radius-xs); display: grid; place-items: center; flex: none; }
.om-toast__close:hover { color: var(--text-primary); background: var(--surface-glass); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-toast-css")) {
  const s = document.createElement("style");
  s.id = "om-toast-css";
  s.textContent = css;
  document.head.appendChild(s);
}

const ICONS = { info: "info", success: "check-circle-2", warning: "alert-triangle", danger: "octagon-alert" };

export function Toast({ title, message, variant = "info", onClose }) {
  return (
    <div className={`om-toast om-toast--${variant}`} role="status">
      <span className="om-toast__icon"><Icon name={ICONS[variant] || "info"} size={18} /></span>
      <div className="om-toast__body">
        {title && <div className="om-toast__title">{title}</div>}
        {message && <div className="om-toast__msg">{message}</div>}
      </div>
      {onClose && (
        <button className="om-toast__close" aria-label="Dismiss" onClick={onClose}>
          <Icon name="x" size={15} />
        </button>
      )}
    </div>
  );
}
