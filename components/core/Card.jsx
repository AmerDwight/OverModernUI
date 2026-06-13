import React from "react";

const css = `
.om-card {
  position: relative;
  background: var(--surface-raised);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  color: var(--text-primary);
  padding: var(--space-5);
  transition: border-color var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-base) var(--ease-out);
}
.om-card--glass {
  background: var(--surface-glass);
  backdrop-filter: blur(var(--blur-md));
  -webkit-backdrop-filter: blur(var(--blur-md));
  box-shadow: var(--shadow-lg), var(--inset-highlight);
}
.om-card--interactive { cursor: pointer; }
.om-card--interactive:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-lg), 0 0 0 1px var(--border-accent);
  transform: translateY(-2px);
}
.om-card__eyebrow {
  font-family: var(--font-mono); font-size: var(--fs-micro);
  letter-spacing: var(--ls-overline); text-transform: uppercase;
  color: var(--text-tertiary); margin-bottom: var(--space-2);
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-card-css")) {
  const s = document.createElement("style");
  s.id = "om-card-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Card({ children, variant = "raised", interactive = false, eyebrow, style, ...rest }) {
  const cls = [
    "om-card",
    variant === "glass" && "om-card--glass",
    interactive && "om-card--interactive",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} style={style} {...rest}>
      {eyebrow && <div className="om-card__eyebrow">{eyebrow}</div>}
      {children}
    </div>
  );
}
