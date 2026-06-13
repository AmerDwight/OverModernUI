import React from "react";

/* Self-injecting component styles (token-driven) */
const css = `
.om-tip-wrap { position: relative; display: inline-flex; }
.om-tip {
  position: absolute; z-index: 60; pointer-events: none;
  font-family: var(--font-body); font-size: var(--fs-caption); font-weight: var(--fw-medium);
  line-height: 1.4; color: var(--text-primary); white-space: nowrap;
  padding: 7px 11px; border-radius: var(--radius-sm);
  background: var(--surface-overlay);
  border: var(--hairline) solid var(--border-default);
  box-shadow: var(--shadow-lg), var(--inset-highlight);
  opacity: 0; transform: scale(0.94); transform-origin: var(--_origin, bottom center);
  transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out);
}
.om-tip__kbd {
  font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary);
  margin-left: 8px; padding: 1px 6px; border-radius: var(--radius-xs);
  background: var(--surface-glass); border: var(--hairline) solid var(--border-subtle);
}
.om-tip::after {
  content: ""; position: absolute; width: 7px; height: 7px; rotate: 45deg;
  background: var(--surface-overlay); border: var(--hairline) solid var(--border-default);
}
.om-tip--show { opacity: 1; transform: scale(1); }

/* top */
.om-tip--top { bottom: calc(100% + 9px); left: 50%; translate: -50% 0; --_origin: bottom center; }
.om-tip--top::after { bottom: -4px; left: 50%; translate: -50% 0; border-top: none; border-left: none; }
/* bottom */
.om-tip--bottom { top: calc(100% + 9px); left: 50%; translate: -50% 0; --_origin: top center; }
.om-tip--bottom::after { top: -4px; left: 50%; translate: -50% 0; border-bottom: none; border-right: none; }
/* left */
.om-tip--left { right: calc(100% + 9px); top: 50%; translate: 0 -50%; --_origin: center right; }
.om-tip--left::after { right: -4px; top: 50%; translate: 0 -50%; border-bottom: none; border-left: none; }
/* right */
.om-tip--right { left: calc(100% + 9px); top: 50%; translate: 0 -50%; --_origin: center left; }
.om-tip--right::after { left: -4px; top: 50%; translate: 0 -50%; border-top: none; border-right: none; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-tip-css")) {
  const s = document.createElement("style");
  s.id = "om-tip-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Tooltip({ children, content, kbd, side = "top", delay = 80, ...rest }) {
  const [show, setShow] = React.useState(false);
  const timer = React.useRef(null);
  const open = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(true), delay);
  };
  const close = () => {
    clearTimeout(timer.current);
    setShow(false);
  };
  React.useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <span
      className="om-tip-wrap"
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={close}
      {...rest}
    >
      {children}
      <span className={`om-tip om-tip--${side} ${show ? "om-tip--show" : ""}`} role="tooltip">
        {content}
        {kbd && <span className="om-tip__kbd">{kbd}</span>}
      </span>
    </span>
  );
}
