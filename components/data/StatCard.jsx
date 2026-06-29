import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-stat {
  position: relative; display: flex; flex-direction: column; gap: 10px;
  padding: 18px 20px; border-radius: var(--radius-lg);
  background: var(--surface-raised);
  border: var(--hairline) solid var(--border-subtle);
  box-shadow: var(--inset-highlight);
  font-family: var(--font-body); overflow: hidden;
}
.om-stat__top { display: flex; align-items: center; gap: 8px; }
.om-stat__icon {
  display: grid; place-items: center; width: 30px; height: 30px; border-radius: var(--radius-sm);
  background: var(--surface-glass-strong); border: var(--hairline) solid var(--border-default);
  color: var(--accent); flex: none;
}
.om-stat__label {
  font-family: var(--font-mono); font-size: var(--fs-micro); letter-spacing: var(--ls-overline);
  text-transform: uppercase; color: var(--text-tertiary);
}
.om-stat__value {
  font-family: var(--font-display); font-size: var(--fs-h2, 30px); font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-tight); color: var(--text-primary); line-height: 1.05;
  font-variant-numeric: tabular-nums;
}
.om-stat__value small { font-size: 0.5em; font-weight: var(--fw-medium); color: var(--text-tertiary); margin-left: 3px; }
.om-stat__foot { display: flex; align-items: center; gap: 8px; }
.om-stat__delta {
  display: inline-flex; align-items: center; gap: 3px;
  font-family: var(--font-mono); font-size: var(--fs-caption); font-weight: var(--fw-medium);
}
.om-stat__delta--up   { color: var(--success); }
.om-stat__delta--down { color: var(--danger); }
.om-stat__delta--flat { color: var(--text-tertiary); }
.om-stat__sub { font-size: var(--fs-caption); color: var(--text-disabled); }
.om-stat__spark { position: absolute; right: 0; bottom: 0; width: 96px; height: 44px; opacity: 0.9; pointer-events: none; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-stat-css")) {
  const s = document.createElement("style");
  s.id = "om-stat-css";
  s.textContent = css;
  document.head.appendChild(s);
}

function Spark({ data, trend }) {
  const W = 96, H = 44, max = Math.max(...data), min = Math.min(...data);
  const span = max - min || 1;
  const step = W / (data.length - 1);
  const pts = data.map((v, i) => [i * step, H - ((v - min) / span) * (H - 8) - 4]);
  const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const stroke = trend === "down" ? "var(--danger)" : "var(--accent)";
  const fillId = "omStatSpark" + trend;
  return (
    <svg className="om-stat__spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={stroke} stopOpacity="0.22" />
          <stop offset="1" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L ${W} ${H} L 0 ${H} Z`} fill={`url(#${fillId})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StatCard({ icon, label, value, unit, delta, trend, sub, spark, ...rest }) {
  const dir = trend || (delta && /^[+\-−]/.test(String(delta)) ? (String(delta)[0] === "+" ? "up" : "down") : "flat");
  const deltaIco = dir === "up" ? "trending-up" : dir === "down" ? "trending-down" : "minus";
  return (
    <div className="om-stat" {...rest}>
      {spark && spark.length > 1 && <Spark data={spark} trend={dir} />}
      <div className="om-stat__top">
        {icon && <span className="om-stat__icon"><Icon name={icon} size={16} /></span>}
        <span className="om-stat__label">{label}</span>
      </div>
      <div className="om-stat__value">{value}{unit && <small>{unit}</small>}</div>
      {(delta != null || sub) && (
        <div className="om-stat__foot">
          {delta != null && (
            <span className={`om-stat__delta om-stat__delta--${dir}`}>
              <Icon name={deltaIco} size={13} />{delta}
            </span>
          )}
          {sub && <span className="om-stat__sub">{sub}</span>}
        </div>
      )}
    </div>
  );
}
