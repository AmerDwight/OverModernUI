import React from "react";

const css = `
@keyframes om-spin { to { transform: rotate(360deg); } }
.om-spinner { display: inline-block; vertical-align: middle; color: var(--_c, var(--accent)); }
.om-spinner svg { display: block; animation: om-spin var(--_dur, 0.7s) linear infinite; }
.om-spinner__track { opacity: 0.18; }
.om-spinner__head { stroke-linecap: round; }
.om-spinner-block { display: inline-flex; flex-direction: column; align-items: center; gap: 11px; }
.om-spinner-block__label {
  font-family: var(--font-mono); font-size: var(--fs-caption); letter-spacing: var(--ls-wide);
  text-transform: uppercase; color: var(--text-tertiary);
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-spinner-css")) {
  const s = document.createElement("style");
  s.id = "om-spinner-css";
  s.textContent = css;
  document.head.appendChild(s);
}

const SIZES = { sm: 16, md: 22, lg: 34 };

export function Spinner({ size = "md", color, label, speed, ...rest }) {
  const px = typeof size === "number" ? size : SIZES[size] || SIZES.md;
  const sw = Math.max(2, Math.round(px / 10));
  const r = (px - sw) / 2;
  const c = px / 2;
  const circ = 2 * Math.PI * r;
  const style = {};
  if (color) style["--_c"] = color;
  if (speed) style["--_dur"] = speed;
  const svg = (
    <span className="om-spinner" style={style} role="status" aria-label={label || "Loading"} {...rest}>
      <svg width={px} height={px} viewBox={`0 0 ${px} ${px}`} fill="none">
        <circle className="om-spinner__track" cx={c} cy={c} r={r} stroke="currentColor" strokeWidth={sw} />
        <circle className="om-spinner__head" cx={c} cy={c} r={r} stroke="currentColor" strokeWidth={sw}
          strokeDasharray={circ} strokeDashoffset={circ * 0.72} />
      </svg>
    </span>
  );
  if (label) {
    return (
      <span className="om-spinner-block">
        {svg}
        <span className="om-spinner-block__label">{label}</span>
      </span>
    );
  }
  return svg;
}
