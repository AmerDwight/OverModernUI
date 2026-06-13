import React from "react";
import { Icon } from "./Icon.jsx";

const css = `
.om-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-md); cursor: pointer;
  border: var(--hairline) solid transparent;
  color: var(--text-secondary); background: transparent;
  transition: background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out);
}
.om-iconbtn:hover { background: var(--surface-glass); color: var(--text-primary); }
.om-iconbtn:active { transform: translateY(1px); }
.om-iconbtn:focus-visible { outline: none; box-shadow: 0 0 0 2px var(--surface-base), 0 0 0 4px var(--focus-ring); }
.om-iconbtn[disabled] { opacity: 0.45; pointer-events: none; }
.om-iconbtn--solid { background: var(--surface-glass-strong); border-color: var(--border-default); box-shadow: var(--inset-highlight); }
.om-iconbtn--solid:hover { border-color: var(--border-strong); }
.om-iconbtn--accent { background: var(--accent); color: var(--on-accent); box-shadow: var(--inset-highlight-strong); }
.om-iconbtn--accent:hover { background: var(--accent-hover); box-shadow: var(--glow-accent); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-iconbtn-css")) {
  const s = document.createElement("style");
  s.id = "om-iconbtn-css";
  s.textContent = css;
  document.head.appendChild(s);
}

const SIZES = { sm: 32, md: 40, lg: 48 };

export function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  onClick,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const cls = ["om-iconbtn", variant !== "ghost" && `om-iconbtn--${variant}`]
    .filter(Boolean)
    .join(" ");
  return (
    <button
      className={cls}
      style={{ width: px, height: px }}
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {typeof icon === "string" ? <Icon name={icon} size={size === "sm" ? 16 : 18} /> : icon}
    </button>
  );
}
