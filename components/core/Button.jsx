import React from "react";

/* Self-injecting component styles (token-driven) */
const css = `
.om-btn {
  --_h: var(--control-md);
  font-family: var(--font-body);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-body-sm);
  letter-spacing: var(--ls-tight);
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: var(--_h); padding: 0 18px;
  border-radius: var(--radius-pill);
  border: var(--hairline) solid transparent;
  cursor: pointer; white-space: nowrap; user-select: none;
  transition: background var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out);
}
.om-btn:active { transform: translateY(1px); }
.om-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px var(--surface-base), 0 0 0 4px var(--focus-ring); }
.om-btn[disabled] { opacity: 0.45; pointer-events: none; }
.om-btn svg { width: 1.05em; height: 1.05em; }

/* sizes */
.om-btn--sm { --_h: var(--control-sm); font-size: var(--fs-caption); padding: 0 14px; }
.om-btn--lg { --_h: var(--control-lg); font-size: var(--fs-body); padding: 0 26px; }

/* primary — electric azure with glow on hover */
.om-btn--primary {
  background: var(--accent); color: var(--on-accent);
  box-shadow: var(--inset-highlight-strong), 0 4px 14px rgb(61 130 255 / 0.30);
}
.om-btn--primary:hover { background: var(--accent-hover); box-shadow: var(--glow-accent-strong); }
.om-btn--primary:active { background: var(--accent-press); }

/* secondary — glass */
.om-btn--secondary {
  background: var(--surface-glass-strong); color: var(--text-primary);
  border-color: var(--border-default);
  backdrop-filter: blur(var(--blur-sm));
  box-shadow: var(--inset-highlight);
}
.om-btn--secondary:hover { border-color: var(--border-strong); background: rgb(255 255 255 / 0.10); }

/* ghost */
.om-btn--ghost { background: transparent; color: var(--text-secondary); }
.om-btn--ghost:hover { background: var(--surface-glass); color: var(--text-primary); }

/* danger */
.om-btn--danger { background: var(--danger); color: #fff; box-shadow: var(--inset-highlight-strong); }
.om-btn--danger:hover { box-shadow: 0 0 0 1px rgb(245 69 90 / 0.6), 0 8px 28px rgb(245 69 90 / 0.4); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-btn-css")) {
  const s = document.createElement("style");
  s.id = "om-btn-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  disabled = false,
  type = "button",
  onClick,
  ...rest
}) {
  const cls = ["om-btn", `om-btn--${variant}`, size !== "md" && `om-btn--${size}`]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick} {...rest}>
      {iconLeft}
      {children && <span>{children}</span>}
      {iconRight}
    </button>
  );
}
