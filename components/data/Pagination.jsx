import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
.om-pager { display: inline-flex; align-items: center; gap: 4px; font-family: var(--font-body); }
.om-pager__btn {
  min-width: 34px; height: 34px; padding: 0 6px;
  display: inline-flex; align-items: center; justify-content: center; gap: 4px;
  font-family: var(--font-mono); font-size: var(--fs-body-sm); font-variant-numeric: tabular-nums;
  color: var(--text-secondary);
  background: transparent; border: var(--hairline) solid transparent;
  border-radius: var(--radius-sm); cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out);
}
.om-pager__btn:hover { background: var(--surface-glass-strong); color: var(--text-primary); border-color: var(--border-subtle); }
.om-pager__btn--active {
  color: var(--on-accent); background: var(--accent); border-color: transparent;
  box-shadow: var(--inset-highlight-strong), 0 2px 10px rgb(61 130 255 / 0.30);
}
.om-pager__btn--active:hover { background: var(--accent-hover); color: var(--on-accent); }
.om-pager__btn[disabled] { opacity: 0.35; pointer-events: none; }
.om-pager__ellipsis { min-width: 22px; text-align: center; color: var(--text-disabled); font-family: var(--font-mono); font-size: var(--fs-body-sm); }
.om-pager__edge { padding: 0 10px; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-pager-css")) {
  const s = document.createElement("style");
  s.id = "om-pager-css";
  s.textContent = css;
  document.head.appendChild(s);
}

function range(start, end) {
  const out = [];
  for (let i = start; i <= end; i++) out.push(i);
  return out;
}

/* Build the page list with ellipses around the active page. */
function pageList(page, total, sibling) {
  const totalNumbers = sibling * 2 + 5; // first, last, current, 2 ellipses
  if (total <= totalNumbers) return range(1, total);

  const left = Math.max(page - sibling, 1);
  const right = Math.min(page + sibling, total);
  const showLeftDots = left > 2;
  const showRightDots = right < total - 1;

  if (!showLeftDots && showRightDots) {
    return [...range(1, 3 + sibling * 2), "…", total];
  }
  if (showLeftDots && !showRightDots) {
    return [1, "…", ...range(total - (3 + sibling * 2) + 1, total)];
  }
  return [1, "…", ...range(left, right), "…", total];
}

export function Pagination({ page = 1, total = 1, onChange, siblingCount = 1, showEdges = true, ...rest }) {
  const go = (p) => {
    if (p < 1 || p > total || p === page) return;
    onChange && onChange(p);
  };
  const pages = pageList(page, total, siblingCount);

  return (
    <nav className="om-pager" aria-label="Pagination" {...rest}>
      {showEdges && (
        <button className="om-pager__btn om-pager__edge" onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Previous page">
          <Icon name="chevron-left" size={16} />
        </button>
      )}
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`e${i}`} className="om-pager__ellipsis">…</span>
        ) : (
          <button
            key={p}
            className={`om-pager__btn ${p === page ? "om-pager__btn--active" : ""}`}
            aria-current={p === page ? "page" : undefined}
            onClick={() => go(p)}
          >
            {p}
          </button>
        )
      )}
      {showEdges && (
        <button className="om-pager__btn om-pager__edge" onClick={() => go(page + 1)} disabled={page >= total} aria-label="Next page">
          <Icon name="chevron-right" size={16} />
        </button>
      )}
    </nav>
  );
}
