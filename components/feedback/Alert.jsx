import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-alert {
  display: flex; gap: 12px; align-items: flex-start;
  padding: 14px 16px; border-radius: var(--radius-md);
  font-family: var(--font-body); position: relative;
  border: var(--hairline) solid var(--_bd, var(--border-default));
  background: var(--_bg, var(--surface-raised));
}
.om-alert__icon { flex: none; margin-top: 1px; color: var(--_ac, var(--text-secondary)); }
.om-alert__body { flex: 1; min-width: 0; }
.om-alert__title {
  font-family: var(--font-display); font-size: var(--fs-body-sm); font-weight: var(--fw-semibold);
  color: var(--text-primary); letter-spacing: var(--ls-tight); line-height: var(--lh-snug);
}
.om-alert__msg { font-size: var(--fs-body-sm); color: var(--text-secondary); line-height: var(--lh-body); }
.om-alert__title + .om-alert__msg { margin-top: 3px; }
.om-alert__actions { display: flex; gap: 8px; margin-top: 11px; }
.om-alert__close {
  flex: none; display: grid; place-items: center; width: 26px; height: 26px; margin: -3px -4px 0 0;
  border-radius: var(--radius-sm); border: none; background: transparent; cursor: pointer;
  color: var(--text-tertiary); transition: color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.om-alert__close:hover { color: var(--text-primary); background: var(--surface-glass); }

.om-alert--info    { --_bg: var(--accent-soft);   --_bd: rgb(61 130 255 / 0.30);  --_ac: var(--info); }
.om-alert--success { --_bg: var(--success-soft);  --_bd: rgb(31 201 138 / 0.30);  --_ac: var(--success); }
.om-alert--warning { --_bg: var(--warning-soft);  --_bd: rgb(239 162 31 / 0.32);  --_ac: var(--warning); }
.om-alert--danger  { --_bg: var(--danger-soft);   --_bd: rgb(245 69 90 / 0.32);   --_ac: var(--danger); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-alert-css")) {
  const s = document.createElement("style");
  s.id = "om-alert-css";
  s.textContent = css;
  document.head.appendChild(s);
}

const ICONS = {
  info: "info",
  success: "circle-check",
  warning: "triangle-alert",
  danger: "octagon-alert",
};

export function Alert({ variant = "info", title, children, icon, actions, onClose, ...rest }) {
  const iconName = icon === null ? null : icon || ICONS[variant] || "info";
  return (
    <div className={`om-alert om-alert--${variant}`} role="alert" {...rest}>
      {iconName && (
        <span className="om-alert__icon"><Icon name={iconName} size={18} /></span>
      )}
      <div className="om-alert__body">
        {title && <div className="om-alert__title">{title}</div>}
        {children != null && <div className="om-alert__msg">{children}</div>}
        {actions && <div className="om-alert__actions">{actions}</div>}
      </div>
      {onClose && (
        <button className="om-alert__close" aria-label="Dismiss" onClick={onClose}>
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}
