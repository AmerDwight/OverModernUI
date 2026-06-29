import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-crumb { display: flex; align-items: center; flex-wrap: wrap; gap: 2px;
  font-family: var(--font-body); font-size: var(--fs-body-sm); }
.om-crumb__item {
  display: inline-flex; align-items: center; gap: 6px;
  color: var(--text-tertiary); text-decoration: none; padding: 4px 7px;
  border-radius: var(--radius-sm); white-space: nowrap;
  transition: color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.om-crumb__item[href], .om-crumb__item--button { cursor: pointer; }
.om-crumb__item[href]:hover, .om-crumb__item--button:hover { color: var(--text-primary); background: var(--surface-glass); }
.om-crumb__item .om-icon { color: var(--text-disabled); }
.om-crumb__item--current { color: var(--text-primary); font-weight: var(--fw-medium); }
.om-crumb__sep { color: var(--text-disabled); display: inline-flex; flex: none; }
.om-crumb__ellipsis {
  color: var(--text-tertiary); background: transparent; border: none; cursor: pointer;
  padding: 4px 6px; border-radius: var(--radius-sm); display: inline-flex; align-items: center;
}
.om-crumb__ellipsis:hover { color: var(--text-primary); background: var(--surface-glass); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-crumb-css")) {
  const s = document.createElement("style");
  s.id = "om-crumb-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Breadcrumb({ items = [], separator = "chevron-right", maxItems = 0, ...rest }) {
  let display = items;
  let collapsed = false;
  if (maxItems > 0 && items.length > maxItems) {
    display = [items[0], { _ellipsis: true }, ...items.slice(items.length - (maxItems - 1))];
    collapsed = true;
  }

  const Sep = () => (
    <span className="om-crumb__sep" aria-hidden="true">
      {typeof separator === "string" ? <Icon name={separator} size={14} /> : separator}
    </span>
  );

  return (
    <nav className="om-crumb" aria-label="Breadcrumb" {...rest}>
      {display.map((it, i) => {
        const last = i === display.length - 1;
        if (it._ellipsis) {
          return (
            <React.Fragment key="ell">
              <span className="om-crumb__ellipsis" title="Collapsed path"><Icon name="ellipsis" size={15} /></span>
              {!last && <Sep />}
            </React.Fragment>
          );
        }
        const current = last;
        const cls =
          "om-crumb__item" +
          (current ? " om-crumb__item--current" : "") +
          (it.onClick && !current ? " om-crumb__item--button" : "");
        const inner = (
          <>
            {it.icon && <Icon name={it.icon} size={14} />}
            <span>{it.label}</span>
          </>
        );
        const node = it.href && !current ? (
          <a key={i} className={cls} href={it.href}>{inner}</a>
        ) : it.onClick && !current ? (
          <button key={i} type="button" className={cls} onClick={it.onClick}>{inner}</button>
        ) : (
          <span key={i} className={cls} aria-current={current ? "page" : undefined}>{inner}</span>
        );
        return (
          <React.Fragment key={i}>
            {node}
            {!last && <Sep />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
