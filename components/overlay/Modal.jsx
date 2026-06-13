import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
@keyframes om-modal-scrim-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes om-modal-pop-in {
  from { opacity: 0; transform: translateY(8px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.om-modal__scrim {
  position: fixed; inset: 0; z-index: 80;
  display: grid; place-items: center; padding: 24px;
  background: rgb(3 4 7 / 0.62);
  backdrop-filter: blur(var(--blur-sm));
  animation: om-modal-scrim-in var(--dur-base) var(--ease-out);
}
.om-modal {
  width: 100%; max-width: var(--_w, 480px); max-height: calc(100vh - 48px);
  display: flex; flex-direction: column;
  background: var(--surface-overlay);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl), var(--inset-highlight-strong);
  font-family: var(--font-body); color: var(--text-primary);
  animation: om-modal-pop-in var(--dur-slow) var(--ease-spring);
  overflow: hidden;
}
.om-modal--sm { --_w: 380px; }
.om-modal--md { --_w: 480px; }
.om-modal--lg { --_w: 640px; }
.om-modal__head {
  display: flex; align-items: flex-start; gap: 16px;
  padding: 22px 24px 0;
}
.om-modal__titles { flex: 1; min-width: 0; }
.om-modal__title {
  font-family: var(--font-display); font-size: var(--fs-h4); font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-tight); line-height: var(--lh-snug);
}
.om-modal__desc { font-size: var(--fs-body-sm); color: var(--text-tertiary); margin-top: 5px; line-height: var(--lh-body); }
.om-modal__close {
  flex: none; display: grid; place-items: center; width: 30px; height: 30px;
  border-radius: var(--radius-sm); border: none; background: transparent; cursor: pointer;
  color: var(--text-tertiary); transition: color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.om-modal__close:hover { color: var(--text-primary); background: var(--surface-glass); }
.om-modal__body { padding: 18px 24px; overflow-y: auto; font-size: var(--fs-body-sm); color: var(--text-secondary); line-height: var(--lh-body); }
.om-modal__body--flush { padding-top: 20px; }
.om-modal__foot {
  display: flex; align-items: center; justify-content: flex-end; gap: 10px;
  padding: 16px 24px; border-top: var(--hairline) solid var(--border-subtle);
  background: var(--surface-sunken);
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-modal-css")) {
  const s = document.createElement("style");
  s.id = "om-modal-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnScrim = true,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="om-modal__scrim"
      onMouseDown={(e) => {
        if (closeOnScrim && e.target === e.currentTarget && onClose) onClose();
      }}
    >
      <div className={`om-modal om-modal--${size}`} role="dialog" aria-modal="true" {...rest}>
        {(title || onClose) && (
          <div className="om-modal__head">
            <div className="om-modal__titles">
              {title && <div className="om-modal__title">{title}</div>}
              {description && <div className="om-modal__desc">{description}</div>}
            </div>
            {onClose && (
              <button className="om-modal__close" aria-label="Close" onClick={onClose}>
                <Icon name="x" size={17} />
              </button>
            )}
          </div>
        )}
        {children != null && (
          <div className={`om-modal__body ${title ? "" : "om-modal__body--flush"}`}>{children}</div>
        )}
        {footer && <div className="om-modal__foot">{footer}</div>}
      </div>
    </div>
  );
}
