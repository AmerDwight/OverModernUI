import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
@keyframes om-menu-in {
  from { opacity: 0; transform: translateY(-6px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.om-menu-wrap { position: relative; display: inline-flex; }
.om-menu {
  position: absolute; top: calc(100% + 8px); z-index: 70;
  min-width: var(--_mw, 200px); padding: 6px;
  background: var(--surface-overlay);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg), var(--inset-highlight);
  transform-origin: top var(--_align, left);
  animation: om-menu-in var(--dur-base) var(--ease-out);
}
.om-menu--start { left: 0; --_align: left; }
.om-menu--end { right: 0; --_align: right; }
.om-menu__item {
  display: flex; align-items: center; gap: 10px; width: 100%;
  font-family: var(--font-body); font-size: var(--fs-body-sm); font-weight: var(--fw-medium);
  color: var(--text-secondary); text-align: left;
  padding: 8px 10px; border-radius: var(--radius-sm); border: none; background: transparent;
  cursor: pointer; white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}
.om-menu__item .om-icon { color: var(--text-tertiary); transition: color var(--dur-fast) var(--ease-out); }
.om-menu__item:hover { background: var(--surface-glass-strong); color: var(--text-primary); }
.om-menu__item:hover .om-icon { color: var(--text-primary); }
.om-menu__item[disabled] { opacity: 0.4; pointer-events: none; }
.om-menu__item--danger { color: var(--rose-400); }
.om-menu__item--danger .om-icon { color: var(--rose-400); }
.om-menu__item--danger:hover { background: var(--danger-soft); color: var(--rose-400); }
.om-menu__item--danger:hover .om-icon { color: var(--rose-400); }
.om-menu__shortcut { margin-left: auto; font-family: var(--font-mono); font-size: 11px; color: var(--text-disabled); }
.om-menu__check { margin-left: auto; color: var(--accent); }
.om-menu__sep { height: 1px; margin: 6px 4px; background: var(--border-subtle); }
.om-menu__label {
  font-family: var(--font-mono); font-size: var(--fs-micro); letter-spacing: var(--ls-overline);
  text-transform: uppercase; color: var(--text-tertiary); padding: 8px 10px 4px;
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-menu-css")) {
  const s = document.createElement("style");
  s.id = "om-menu-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Menu({ trigger, items = [], align = "start", ...rest }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const trig = React.isValidElement(trigger)
    ? React.cloneElement(trigger, {
        onClick: (e) => {
          trigger.props.onClick && trigger.props.onClick(e);
          setOpen((o) => !o);
        },
      })
    : trigger;

  return (
    <span className="om-menu-wrap" ref={ref} {...rest}>
      {trig}
      {open && (
        <div className={`om-menu om-menu--${align}`} role="menu">
          {items.map((it, i) => {
            if (it.type === "separator") return <div key={i} className="om-menu__sep" />;
            if (it.type === "label") return <div key={i} className="om-menu__label">{it.label}</div>;
            return (
              <button
                key={i}
                role="menuitem"
                disabled={it.disabled}
                className={`om-menu__item ${it.variant === "danger" ? "om-menu__item--danger" : ""}`}
                onClick={() => {
                  setOpen(false);
                  it.onClick && it.onClick();
                }}
              >
                {it.icon && <Icon name={it.icon} size={16} />}
                <span>{it.label}</span>
                {it.shortcut && <span className="om-menu__shortcut">{it.shortcut}</span>}
                {it.checked && <Icon name="check" size={15} className="om-menu__check" />}
              </button>
            );
          })}
        </div>
      )}
    </span>
  );
}
