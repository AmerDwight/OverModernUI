import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-timeline { display: flex; flex-direction: column; font-family: var(--font-body); }
.om-tl-item { display: grid; grid-template-columns: auto 1fr; gap: 14px; }
.om-tl-item__rail { display: flex; flex-direction: column; align-items: center; }
.om-tl-item__dot {
  display: grid; place-items: center; flex: none; margin-top: 1px;
  width: 26px; height: 26px; border-radius: var(--radius-pill);
  background: var(--surface-glass-strong); border: var(--hairline) solid var(--border-default);
  color: var(--_ac, var(--text-tertiary)); z-index: 1;
}
.om-tl-item__dot--bare {
  width: 11px; height: 11px; margin-top: 7px;
  background: var(--_ac, var(--text-tertiary)); border: 2px solid var(--surface-base); box-shadow: 0 0 0 1px var(--border-default);
}
.om-tl-item__line { flex: 1; width: 2px; background: var(--border-subtle); margin: 4px 0; min-height: 10px; }
.om-tl-item:last-child .om-tl-item__line { display: none; }
.om-tl-item__body { padding-bottom: 22px; min-width: 0; }
.om-tl-item:last-child .om-tl-item__body { padding-bottom: 0; }
.om-tl-item__head { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
.om-tl-item__title {
  font-family: var(--font-display); font-size: var(--fs-body-sm); font-weight: var(--fw-semibold);
  color: var(--text-primary); letter-spacing: var(--ls-tight); line-height: var(--lh-snug);
}
.om-tl-item__time { font-family: var(--font-mono); font-size: var(--fs-caption); color: var(--text-disabled); margin-left: auto; white-space: nowrap; }
.om-tl-item__desc { font-size: var(--fs-body-sm); color: var(--text-tertiary); line-height: var(--lh-body); margin-top: 4px; }
.om-tl-item__meta { margin-top: 8px; }
.om-tl--var-success { --_ac: var(--success); }
.om-tl--var-warning { --_ac: var(--warning); }
.om-tl--var-danger  { --_ac: var(--danger); }
.om-tl--var-accent  { --_ac: var(--accent); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-timeline-css")) {
  const s = document.createElement("style");
  s.id = "om-timeline-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Timeline({ items = [], ...rest }) {
  return (
    <div className="om-timeline" {...rest}>
      {items.map((it, i) => {
        const varCls = it.variant ? ` om-tl--var-${it.variant}` : "";
        return (
          <div className={"om-tl-item" + varCls} key={i}>
            <div className="om-tl-item__rail">
              {it.icon ? (
                <span className="om-tl-item__dot"><Icon name={it.icon} size={14} /></span>
              ) : (
                <span className="om-tl-item__dot om-tl-item__dot--bare" />
              )}
              <span className="om-tl-item__line" />
            </div>
            <div className="om-tl-item__body">
              <div className="om-tl-item__head">
                <span className="om-tl-item__title">{it.title}</span>
                {it.time && <span className="om-tl-item__time">{it.time}</span>}
              </div>
              {it.description && <div className="om-tl-item__desc">{it.description}</div>}
              {it.meta && <div className="om-tl-item__meta">{it.meta}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
