import React from "react";

const css = `
.om-progress { width: 100%; }
.om-progress__track {
  height: 8px; border-radius: var(--radius-pill);
  background: var(--surface-sunken); border: var(--hairline) solid var(--border-subtle);
  overflow: hidden;
}
.om-progress__bar {
  height: 100%; border-radius: var(--radius-pill);
  background: linear-gradient(90deg, var(--azure-500), var(--cyan-400));
  box-shadow: 0 0 12px var(--accent-glow);
  transition: width var(--dur-slow) var(--ease-out);
}
.om-progress--indeterminate .om-progress__bar {
  width: 40% !important; animation: om-prog-slide 1.3s var(--ease-in-out) infinite;
}
@keyframes om-prog-slide { 0% { transform: translateX(-110%); } 100% { transform: translateX(310%); } }
.om-progress__meta { display: flex; justify-content: space-between; margin-bottom: 8px;
  font-family: var(--font-body); font-size: var(--fs-caption); color: var(--text-secondary); }
.om-progress__val { font-family: var(--font-mono); color: var(--text-tertiary); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-progress-css")) {
  const s = document.createElement("style");
  s.id = "om-progress-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Progress({ value = 0, max = 100, label, showValue = false, indeterminate = false }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={`om-progress ${indeterminate ? "om-progress--indeterminate" : ""}`}>
      {(label || showValue) && (
        <div className="om-progress__meta">
          <span>{label}</span>
          {showValue && !indeterminate && <span className="om-progress__val">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="om-progress__track">
        <div className="om-progress__bar" style={indeterminate ? undefined : { width: `${pct}%` }} />
      </div>
    </div>
  );
}
