import React from "react";

const css = `
@keyframes om-skel-shimmer { 100% { transform: translateX(100%); } }
.om-skel {
  position: relative; overflow: hidden; display: block;
  background: var(--surface-glass-strong);
  border-radius: var(--radius-sm);
}
.om-skel::after {
  content: ""; position: absolute; inset: 0; transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.06), transparent);
  animation: om-skel-shimmer 1.4s var(--ease-in-out, ease-in-out) infinite;
}
.om-skel--text { height: 0.72em; border-radius: var(--radius-xs); margin: 0.18em 0; }
.om-skel--circle { border-radius: 50%; }
@media (prefers-reduced-motion: reduce) {
  .om-skel::after { animation: none; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-skel-css")) {
  const s = document.createElement("style");
  s.id = "om-skel-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Skeleton({ variant = "rect", width, height, lines = 1, radius, style, ...rest }) {
  const base = { ...style };
  if (width != null) base.width = typeof width === "number" ? width + "px" : width;
  if (height != null) base.height = typeof height === "number" ? height + "px" : height;
  if (radius != null) base.borderRadius = typeof radius === "number" ? radius + "px" : radius;

  if (variant === "text" && lines > 1) {
    return (
      <span style={{ display: "block" }} {...rest}>
        {Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            className="om-skel om-skel--text"
            style={{ ...base, width: i === lines - 1 ? "62%" : base.width || "100%" }}
          />
        ))}
      </span>
    );
  }

  if (variant === "circle") {
    const d = base.width || base.height || "40px";
    return <span className="om-skel om-skel--circle" style={{ ...base, width: d, height: d }} {...rest} />;
  }

  return <span className={`om-skel ${variant === "text" ? "om-skel--text" : ""}`} style={base} {...rest} />;
}
