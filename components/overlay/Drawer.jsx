import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
@keyframes om-drawer-scrim-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes om-drawer-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
@keyframes om-drawer-in-left  { from { transform: translateX(-100%); } to { transform: translateX(0); } }
@keyframes om-drawer-in-bottom{ from { transform: translateY(100%); } to { transform: translateY(0); } }
.om-drawer__scrim {
  position: fixed; inset: 0; z-index: 85; display: flex;
  background: rgb(3 4 7 / 0.55); backdrop-filter: blur(var(--blur-sm));
  animation: om-drawer-scrim-in var(--dur-base) var(--ease-out);
}
.om-drawer__scrim--right  { justify-content: flex-end; }
.om-drawer__scrim--left   { justify-content: flex-start; }
.om-drawer__scrim--bottom { align-items: flex-end; }
.om-drawer {
  display: flex; flex-direction: column;
  background: var(--surface-overlay);
  border: var(--hairline) solid var(--border-default);
  box-shadow: var(--shadow-xl); font-family: var(--font-body); color: var(--text-primary);
}
.om-drawer--right, .om-drawer--left {
  width: var(--_w, 420px); max-width: 92vw; height: 100%;
}
.om-drawer--right  { border-top-left-radius: var(--radius-lg); border-bottom-left-radius: var(--radius-lg);
  animation: om-drawer-in-right var(--dur-slow) var(--ease-spring); }
.om-drawer--left   { border-top-right-radius: var(--radius-lg); border-bottom-right-radius: var(--radius-lg);
  animation: om-drawer-in-left var(--dur-slow) var(--ease-spring); }
.om-drawer--bottom {
  width: 100%; max-height: 88vh; border-top-left-radius: var(--radius-lg); border-top-right-radius: var(--radius-lg);
  animation: om-drawer-in-bottom var(--dur-slow) var(--ease-spring);
}
.om-drawer__head {
  display: flex; align-items: flex-start; gap: 16px; padding: 20px 22px;
  border-bottom: var(--hairline) solid var(--border-subtle);
}
.om-drawer__titles { flex: 1; min-width: 0; }
.om-drawer__title {
  font-family: var(--font-display); font-size: var(--fs-h4); font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-tight); line-height: var(--lh-snug);
}
.om-drawer__desc { font-size: var(--fs-body-sm); color: var(--text-tertiary); margin-top: 4px; line-height: var(--lh-body); }
.om-drawer__close {
  flex: none; display: grid; place-items: center; width: 30px; height: 30px;
  border-radius: var(--radius-sm); border: none; background: transparent; cursor: pointer;
  color: var(--text-tertiary); transition: color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.om-drawer__close:hover { color: var(--text-primary); background: var(--surface-glass); }
.om-drawer__body { flex: 1; padding: 20px 22px; overflow-y: auto; font-size: var(--fs-body-sm); color: var(--text-secondary); line-height: var(--lh-body); }
.om-drawer__foot {
  display: flex; align-items: center; justify-content: flex-end; gap: 10px;
  padding: 16px 22px; border-top: var(--hairline) solid var(--border-subtle); background: var(--surface-sunken);
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-drawer-css")) {
  const s = document.createElement("style");
  s.id = "om-drawer-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Drawer({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  side = "right",
  width,
  closeOnScrim = true,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={`om-drawer__scrim om-drawer__scrim--${side}`}
      onMouseDown={(e) => { if (closeOnScrim && e.target === e.currentTarget && onClose) onClose(); }}
    >
      <div
        className={`om-drawer om-drawer--${side}`}
        role="dialog"
        aria-modal="true"
        style={width ? { "--_w": typeof width === "number" ? width + "px" : width } : undefined}
        {...rest}
      >
        {(title || onClose) && (
          <div className="om-drawer__head">
            <div className="om-drawer__titles">
              {title && <div className="om-drawer__title">{title}</div>}
              {description && <div className="om-drawer__desc">{description}</div>}
            </div>
            {onClose && (
              <button className="om-drawer__close" aria-label="Close" onClick={onClose}>
                <Icon name="x" size={17} />
              </button>
            )}
          </div>
        )}
        {children != null && <div className="om-drawer__body">{children}</div>}
        {footer && <div className="om-drawer__foot">{footer}</div>}
      </div>
    </div>
  );
}
