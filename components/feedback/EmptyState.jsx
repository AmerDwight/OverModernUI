import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-empty {
  display: flex; flex-direction: column; align-items: center; text-align: center;
  padding: 48px 32px; font-family: var(--font-body);
}
.om-empty--bordered {
  border: var(--hairline) dashed var(--border-default);
  border-radius: var(--radius-lg); background: var(--surface-raised);
}
.om-empty__icon {
  display: grid; place-items: center; width: 56px; height: 56px; margin-bottom: 18px;
  border-radius: var(--radius-lg);
  background: var(--surface-glass-strong);
  border: var(--hairline) solid var(--border-default);
  box-shadow: var(--inset-highlight);
  color: var(--accent);
}
.om-empty__title {
  font-family: var(--font-display); font-size: var(--fs-h5, var(--fs-h4)); font-weight: var(--fw-semibold);
  color: var(--text-primary); letter-spacing: var(--ls-tight); line-height: var(--lh-snug);
}
.om-empty__desc {
  font-size: var(--fs-body-sm); color: var(--text-tertiary); line-height: var(--lh-body);
  margin-top: 7px; max-width: 42ch;
}
.om-empty__actions { display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap; justify-content: center; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-empty-css")) {
  const s = document.createElement("style");
  s.id = "om-empty-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function EmptyState({ icon = "inbox", title, description, actions, bordered = false, ...rest }) {
  return (
    <div className={`om-empty ${bordered ? "om-empty--bordered" : ""}`} {...rest}>
      {icon && (
        <div className="om-empty__icon">
          {typeof icon === "string" ? <Icon name={icon} size={26} /> : icon}
        </div>
      )}
      {title && <div className="om-empty__title">{title}</div>}
      {description && <div className="om-empty__desc">{description}</div>}
      {actions && <div className="om-empty__actions">{actions}</div>}
    </div>
  );
}
