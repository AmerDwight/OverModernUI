import React from "react";

/* OverModern uses Lucide — clean geometric line icons matching the technical,
   precise brand voice. The SVG markup is fetched once per name and inlined, so
   every icon inherits currentColor (set the parent's `color` to recolor it). */

const VERSION = "0.460.0";
const CDN = `https://cdn.jsdelivr.net/npm/lucide-static@${VERSION}/icons`;
const cache = {};

const css = `
.om-icon { display: inline-flex; align-items: center; justify-content: center; flex: none; vertical-align: middle; color: inherit; }
.om-icon svg { width: 100%; height: 100%; display: block; stroke: currentColor; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-icon-css")) {
  const s = document.createElement("style");
  s.id = "om-icon-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Icon({ name, size = 20, style, className = "", ...rest }) {
  const [svg, setSvg] = React.useState(cache[name] || null);
  React.useEffect(() => {
    let alive = true;
    if (cache[name]) {
      setSvg(cache[name]);
      return;
    }
    fetch(`${CDN}/${name}.svg`)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((t) => {
        // drop fixed dimensions so it scales to the span; keep viewBox
        t = t.replace(/\s(width|height)="[^"]*"/g, "");
        cache[name] = t;
        if (alive) setSvg(t);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [name]);

  return (
    <span
      className={`om-icon ${className}`}
      aria-hidden="true"
      style={{ width: size, height: size, ...style }}
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
      {...rest}
    />
  );
}
