import React from "react";

const css = `
@keyframes om-pop-in {
  from { opacity: 0; transform: translateY(var(--_fy, -6px)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.om-pop-wrap { position: relative; display: inline-flex; }
.om-pop {
  position: absolute; z-index: 72; min-width: var(--_mw, 240px); max-width: 340px;
  background: var(--surface-overlay);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg), var(--inset-highlight);
  font-family: var(--font-body); color: var(--text-secondary);
  animation: om-pop-in var(--dur-base) var(--ease-out);
}
.om-pop--bottom { top: calc(100% + 9px); --_fy: -6px; }
.om-pop--top { bottom: calc(100% + 9px); --_fy: 6px; }
.om-pop--start { left: 0; transform-origin: top left; }
.om-pop--end { right: 0; transform-origin: top right; }
.om-pop--top.om-pop--start { transform-origin: bottom left; }
.om-pop--top.om-pop--end { transform-origin: bottom right; }
.om-pop__head {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 13px 15px 0;
}
.om-pop__title {
  font-family: var(--font-display); font-size: var(--fs-body-sm); font-weight: var(--fw-semibold);
  color: var(--text-primary); letter-spacing: var(--ls-tight);
}
.om-pop__body { padding: 10px 15px 14px; font-size: var(--fs-body-sm); line-height: var(--lh-body); }
.om-pop__arrow {
  position: absolute; width: 8px; height: 8px; rotate: 45deg;
  background: var(--surface-overlay); border: var(--hairline) solid var(--border-default);
}
.om-pop--bottom > .om-pop__arrow { top: -4.5px; border-bottom: none; border-right: none; }
.om-pop--top > .om-pop__arrow { bottom: -4.5px; border-top: none; border-left: none; }
.om-pop--start > .om-pop__arrow { left: 18px; }
.om-pop--end > .om-pop__arrow { right: 18px; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-pop-css")) {
  const s = document.createElement("style");
  s.id = "om-pop-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Popover({ trigger, children, title, side = "bottom", align = "start", open: controlledOpen, onOpenChange, ...rest }) {
  const isControlled = controlledOpen != null;
  const [internal, setInternal] = React.useState(false);
  const open = isControlled ? controlledOpen : internal;
  const setOpen = (v) => { if (!isControlled) setInternal(v); onOpenChange && onOpenChange(v); };
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const trig = React.isValidElement(trigger)
    ? React.cloneElement(trigger, {
        onClick: (e) => { trigger.props.onClick && trigger.props.onClick(e); setOpen(!open); },
      })
    : trigger;

  return (
    <span className="om-pop-wrap" ref={ref}>
      {trig}
      {open && (
        <div className={`om-pop om-pop--${side} om-pop--${align}`} role="dialog" {...rest}>
          <span className="om-pop__arrow" aria-hidden="true" />
          {title && <div className="om-pop__head"><span className="om-pop__title">{title}</span></div>}
          <div className="om-pop__body">{children}</div>
        </div>
      )}
    </span>
  );
}
