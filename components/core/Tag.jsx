import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-tag {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-body); font-size: var(--fs-caption); font-weight: var(--fw-medium);
  line-height: 1; white-space: nowrap; color: var(--_fg, var(--text-secondary));
  background: var(--_bg, var(--surface-glass-strong));
  border: var(--hairline) solid var(--_bd, var(--border-default));
  padding: 5px 9px; border-radius: var(--radius-sm);
  transition: background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.om-tag--md { font-size: var(--fs-body-sm); padding: 6px 11px; gap: 7px; }
.om-tag__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex: none; }
.om-tag__close {
  display: grid; place-items: center; width: 15px; height: 15px; margin: 0 -3px 0 1px; flex: none;
  border: none; background: transparent; cursor: pointer; color: inherit; opacity: 0.55; border-radius: var(--radius-xs);
  transition: opacity var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.om-tag__close:hover { opacity: 1; background: rgb(255 255 255 / 0.10); }
.om-tag .om-icon { flex: none; }

.om-tag--accent  { --_bg: var(--accent-soft);  --_bd: rgb(61 130 255 / 0.28); --_fg: var(--azure-300); }
.om-tag--success { --_bg: var(--success-soft); --_bd: rgb(31 201 138 / 0.28); --_fg: var(--emerald-300, var(--success)); }
.om-tag--warning { --_bg: var(--warning-soft); --_bd: rgb(239 162 31 / 0.30); --_fg: var(--amber-300, var(--warning)); }
.om-tag--danger  { --_bg: var(--danger-soft);  --_bd: rgb(245 69 90 / 0.30);  --_fg: var(--rose-300, var(--rose-400)); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-tag-css")) {
  const s = document.createElement("style");
  s.id = "om-tag-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Tag({ children, variant = "neutral", size = "sm", icon, dot = false, onClose, ...rest }) {
  const variantCls = variant !== "neutral" ? ` om-tag--${variant}` : "";
  return (
    <span className={`om-tag om-tag--${size}${variantCls}`} {...rest}>
      {dot && <span className="om-tag__dot" />}
      {icon && <Icon name={icon} size={size === "md" ? 14 : 12} />}
      <span>{children}</span>
      {onClose && (
        <button className="om-tag__close" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onClose(e); }}>
          <Icon name="x" size={12} />
        </button>
      )}
    </span>
  );
}
