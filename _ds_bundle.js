/* @ds-bundle: {"format":3,"namespace":"OverModernDesignSystem_22ac94","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Menu","sourcePath":"components/overlay/Menu.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"f633f8746ea4","components/core/Badge.jsx":"bcfd58112c05","components/core/Button.jsx":"e2fcc1ac0b26","components/core/Card.jsx":"2bb7401bded5","components/core/Icon.jsx":"0ecc2b7ce859","components/core/IconButton.jsx":"fdacb7b550b4","components/data/Pagination.jsx":"6cc67a6ad3d8","components/data/Table.jsx":"22b8ba2daaf3","components/feedback/Progress.jsx":"c6ebbfc70bc0","components/feedback/Toast.jsx":"3ebddd8c08a4","components/forms/Checkbox.jsx":"1b4662c22520","components/forms/Input.jsx":"180884c24bec","components/forms/Select.jsx":"ab6871282c97","components/forms/Switch.jsx":"b491a1f17e65","components/navigation/Tabs.jsx":"c43d0052d464","components/overlay/Menu.jsx":"47c9e0e64246","components/overlay/Modal.jsx":"76340394021c","components/overlay/Tooltip.jsx":"406f3c90c06d","ui_kits/console/App.jsx":"87db040883f4","ui_kits/console/DeploymentsScreen.jsx":"7e15e1f10703","ui_kits/console/LoginScreen.jsx":"e54dd9d78515","ui_kits/console/OverviewScreen.jsx":"936aaccd6842","ui_kits/console/Sidebar.jsx":"0b612c8b9be9","ui_kits/console/Topbar.jsx":"4347d1cd9cd9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OverModernDesignSystem_22ac94 = window.OverModernDesignSystem_22ac94 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.om-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-pill); overflow: hidden; flex: none;
  font-family: var(--font-display); font-weight: var(--fw-semibold);
  color: var(--text-primary); background: var(--surface-glass-strong);
  border: var(--hairline) solid var(--border-default);
  box-shadow: var(--inset-highlight);
  position: relative;
}
.om-avatar img { width: 100%; height: 100%; object-fit: cover; }
.om-avatar--accent { background: linear-gradient(135deg, var(--azure-500), var(--cyan-500)); color: #fff; border-color: transparent; }
.om-avatar__status {
  position: absolute; right: -1px; bottom: -1px;
  width: 28%; height: 28%; min-width: 8px; min-height: 8px;
  border-radius: 50%; border: 2px solid var(--surface-base);
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-avatar-css")) {
  const s = document.createElement("style");
  s.id = "om-avatar-css";
  s.textContent = css;
  document.head.appendChild(s);
}
const SIZES = {
  sm: 28,
  md: 36,
  lg: 48,
  xl: 64
};
const STATUS = {
  online: "var(--success)",
  busy: "var(--danger)",
  away: "var(--warning)",
  offline: "var(--ob-500)"
};
function Avatar({
  src,
  name = "",
  size = "md",
  accent = false,
  status,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `om-avatar ${accent && !src ? "om-avatar--accent" : ""}`,
    style: {
      width: px,
      height: px,
      fontSize: px * 0.4
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials, status && /*#__PURE__*/React.createElement("span", {
    className: "om-avatar__status",
    style: {
      background: STATUS[status]
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.om-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: var(--font-mono); font-size: var(--fs-micro);
  font-weight: var(--fw-medium); letter-spacing: 0.04em; text-transform: uppercase;
  height: 20px; padding: 0 8px; border-radius: var(--radius-sm);
  border: var(--hairline) solid transparent; white-space: nowrap;
}
.om-badge--neutral { background: var(--surface-glass-strong); color: var(--text-secondary); border-color: var(--border-default); }
.om-badge--accent  { background: var(--accent-soft); color: var(--azure-300); border-color: var(--border-accent); }
.om-badge--success { background: var(--success-soft); color: var(--emerald-400); border-color: rgb(31 201 138 / 0.4); }
.om-badge--warning { background: var(--warning-soft); color: var(--amber-400); border-color: rgb(239 162 31 / 0.4); }
.om-badge--danger  { background: var(--danger-soft); color: var(--rose-400); border-color: rgb(245 69 90 / 0.4); }
.om-badge--solid   { background: var(--accent); color: var(--on-accent); }
.om-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-badge-css")) {
  const s = document.createElement("style");
  s.id = "om-badge-css";
  s.textContent = css;
  document.head.appendChild(s);
}
function Badge({
  children,
  variant = "neutral",
  dot = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `om-badge om-badge--${variant}`
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "om-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ["om-btn", `om-btn--${variant}`, size !== "md" && `om-btn--${size}`].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    onClick: onClick
  }, rest), iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  children,
  variant = "raised",
  interactive = false,
  eyebrow,
  style,
  ...rest
}) {
  const cls = ["om-card", variant === "glass" && "om-card--glass", interactive && "om-card--interactive"].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "om-card__eyebrow"
  }, eyebrow), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Icon({
  name,
  size = 20,
  style,
  className = "",
  ...rest
}) {
  const [svg, setSvg] = React.useState(cache[name] || null);
  React.useEffect(() => {
    let alive = true;
    if (cache[name]) {
      setSvg(cache[name]);
      return;
    }
    fetch(`${CDN}/${name}.svg`).then(r => r.ok ? r.text() : Promise.reject(r.status)).then(t => {
      // drop fixed dimensions so it scales to the span; keep viewBox
      t = t.replace(/\s(width|height)="[^"]*"/g, "");
      cache[name] = t;
      if (alive) setSvg(t);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `om-icon ${className}`,
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      ...style
    },
    dangerouslySetInnerHTML: svg ? {
      __html: svg
    } : undefined
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  onClick,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const cls = ["om-iconbtn", variant !== "ghost" && `om-iconbtn--${variant}`].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    style: {
      width: px,
      height: px
    },
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick
  }, rest), typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 16 : 18
  }) : icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Pagination({
  page = 1,
  total = 1,
  onChange,
  siblingCount = 1,
  showEdges = true,
  ...rest
}) {
  const go = p => {
    if (p < 1 || p > total || p === page) return;
    onChange && onChange(p);
  };
  const pages = pageList(page, total, siblingCount);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: "om-pager",
    "aria-label": "Pagination"
  }, rest), showEdges && /*#__PURE__*/React.createElement("button", {
    className: "om-pager__btn om-pager__edge",
    onClick: () => go(page - 1),
    disabled: page <= 1,
    "aria-label": "Previous page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    className: "om-pager__ellipsis"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    className: `om-pager__btn ${p === page ? "om-pager__btn--active" : ""}`,
    "aria-current": p === page ? "page" : undefined,
    onClick: () => go(p)
  }, p)), showEdges && /*#__PURE__*/React.createElement("button", {
    className: "om-pager__btn om-pager__edge",
    onClick: () => go(page + 1),
    disabled: page >= total,
    "aria-label": "Next page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.om-table-wrap {
  width: 100%; overflow-x: auto;
  border: var(--hairline) solid var(--border-subtle);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
}
.om-table { width: 100%; border-collapse: collapse; font-family: var(--font-body); }
.om-table thead th {
  font-family: var(--font-mono); font-size: var(--fs-micro); font-weight: var(--fw-medium);
  letter-spacing: var(--ls-overline); text-transform: uppercase; color: var(--text-tertiary);
  text-align: left; padding: 12px 16px; white-space: nowrap;
  background: var(--surface-sunken);
  border-bottom: var(--hairline) solid var(--border-subtle);
}
.om-table tbody td {
  font-size: var(--fs-body-sm); color: var(--text-secondary);
  padding: 14px 16px; border-bottom: var(--hairline) solid var(--border-subtle);
  vertical-align: middle;
}
.om-table tbody tr:last-child td { border-bottom: none; }
.om-table tbody tr { transition: background var(--dur-fast) var(--ease-out); }
.om-table--hover tbody tr:hover { background: var(--surface-glass); }
.om-table--hover tbody tr { cursor: default; }
.om-table--dense thead th { padding: 9px 14px; }
.om-table--dense tbody td { padding: 9px 14px; }
.om-table__align-right { text-align: right; }
.om-table__align-center { text-align: center; }
.om-table__num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; color: var(--text-primary); }
.om-table__sortable { cursor: pointer; user-select: none; }
.om-table__sortable:hover { color: var(--text-secondary); }
.om-table__sort-ico { display: inline-block; margin-left: 5px; vertical-align: -1px; opacity: 0.55; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-table-css")) {
  const s = document.createElement("style");
  s.id = "om-table-css";
  s.textContent = css;
  document.head.appendChild(s);
}
function Table({
  columns = [],
  rows = [],
  dense = false,
  hover = true,
  rowKey,
  ...rest
}) {
  const cls = ["om-table", hover && "om-table--hover", dense && "om-table--dense"].filter(Boolean).join(" ");
  const alignCls = a => a === "right" ? " om-table__align-right" : a === "center" ? " om-table__align-center" : "";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "om-table-wrap"
  }, rest), /*#__PURE__*/React.createElement("table", {
    className: cls
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: alignCls(c.align).trim(),
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: rowKey ? row[rowKey] : ri
  }, columns.map(c => {
    const raw = row[c.key];
    const content = c.render ? c.render(raw, row, ri) : raw;
    const numCls = c.numeric ? " om-table__num" : "";
    return /*#__PURE__*/React.createElement("td", {
      key: c.key,
      className: (alignCls(c.align) + numCls).trim() || undefined
    }, content);
  }))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
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
function Progress({
  value = 0,
  max = 100,
  label,
  showValue = false,
  indeterminate = false
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    className: `om-progress ${indeterminate ? "om-progress--indeterminate" : ""}`
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "om-progress__meta"
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    className: "om-progress__val"
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    className: "om-progress__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "om-progress__bar",
    style: indeterminate ? undefined : {
      width: `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const css = `
.om-toast {
  display: flex; align-items: flex-start; gap: 12px;
  width: 360px; max-width: 100%;
  padding: 14px 16px; border-radius: var(--radius-md);
  background: var(--surface-overlay);
  border: var(--hairline) solid var(--border-default);
  box-shadow: var(--shadow-xl), var(--inset-highlight);
  font-family: var(--font-body); color: var(--text-primary);
  position: relative; overflow: hidden;
}
.om-toast::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--accent);
}
.om-toast--success::before { background: var(--success); }
.om-toast--warning::before { background: var(--warning); }
.om-toast--danger::before  { background: var(--danger); }
.om-toast__icon { color: var(--accent); margin-top: 1px; flex: none; }
.om-toast--success .om-toast__icon { color: var(--success); }
.om-toast--warning .om-toast__icon { color: var(--warning); }
.om-toast--danger  .om-toast__icon { color: var(--danger); }
.om-toast__body { flex: 1; min-width: 0; }
.om-toast__title { font-size: var(--fs-body-sm); font-weight: var(--fw-semibold); }
.om-toast__msg { font-size: var(--fs-caption); color: var(--text-tertiary); margin-top: 2px; line-height: 1.5; }
.om-toast__close { background: transparent; border: none; color: var(--text-tertiary); cursor: pointer;
  padding: 2px; border-radius: var(--radius-xs); display: grid; place-items: center; flex: none; }
.om-toast__close:hover { color: var(--text-primary); background: var(--surface-glass); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-toast-css")) {
  const s = document.createElement("style");
  s.id = "om-toast-css";
  s.textContent = css;
  document.head.appendChild(s);
}
const ICONS = {
  info: "info",
  success: "check-circle-2",
  warning: "alert-triangle",
  danger: "octagon-alert"
};
function Toast({
  title,
  message,
  variant = "info",
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `om-toast om-toast--${variant}`,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "om-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[variant] || "info",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "om-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "om-toast__title"
  }, title), message && /*#__PURE__*/React.createElement("div", {
    className: "om-toast__msg"
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "om-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.om-check { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-body);
  font-size: var(--fs-body-sm); color: var(--text-secondary); user-select: none; }
.om-check input { position: absolute; opacity: 0; pointer-events: none; }
.om-check__box {
  width: 20px; height: 20px; border-radius: var(--radius-xs); flex: none;
  background: var(--surface-sunken); border: var(--hairline) solid var(--border-strong);
  display: grid; place-items: center; color: #fff;
  transition: background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.om-check__box .om-icon { opacity: 0; transform: scale(0.6); transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-spring); }
.om-check input:checked + .om-check__box {
  background: var(--accent); border-color: transparent; box-shadow: var(--glow-accent);
}
.om-check input:checked + .om-check__box .om-icon { opacity: 1; transform: scale(1); }
.om-check input:focus-visible + .om-check__box { box-shadow: 0 0 0 3px var(--accent-soft); }
.om-check input:disabled + .om-check__box { opacity: 0.45; }

/* radio variant */
.om-check--radio .om-check__box { border-radius: 50%; }
.om-check--radio .om-dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; opacity: 0; transform: scale(0.4);
  transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-spring); }
.om-check--radio input:checked + .om-check__box .om-dot { opacity: 1; transform: scale(1); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-check-css")) {
  const s = document.createElement("style");
  s.id = "om-check-css";
  s.textContent = css;
  document.head.appendChild(s);
}
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  radio = false,
  name,
  value,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `om-check ${radio ? "om-check--radio" : ""}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: radio ? "radio" : "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    name: name,
    value: value
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "om-check__box"
  }, radio ? /*#__PURE__*/React.createElement("span", {
    className: "om-dot"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.om-field { display: flex; flex-direction: column; gap: 7px; font-family: var(--font-body); }
.om-field__label {
  font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-secondary);
}
.om-field__req { color: var(--accent); margin-left: 2px; }
.om-input-wrap { position: relative; display: flex; align-items: center; }
.om-input-wrap .om-icon { position: absolute; color: var(--text-tertiary); pointer-events: none; }
.om-input-wrap .om-icon.lead { left: 13px; }
.om-input {
  width: 100%; height: var(--control-md);
  font-family: var(--font-body); font-size: var(--fs-body-sm); color: var(--text-primary);
  background: var(--surface-sunken);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 14px;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.om-input--has-lead { padding-left: 38px; }
.om-input::placeholder { color: var(--text-disabled); }
.om-input:hover { border-color: var(--border-strong); }
.om-input:focus {
  outline: none; border-color: var(--border-accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
  background: var(--surface-base);
}
.om-input[disabled] { opacity: 0.5; pointer-events: none; }
.om-field--error .om-input { border-color: rgb(245 69 90 / 0.6); }
.om-field--error .om-input:focus { box-shadow: 0 0 0 3px var(--danger-soft); }
.om-field__hint { font-size: var(--fs-caption); color: var(--text-tertiary); }
.om-field--error .om-field__hint { color: var(--rose-400); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-input-css")) {
  const s = document.createElement("style");
  s.id = "om-input-css";
  s.textContent = css;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  required = false,
  iconLeft,
  id,
  ...rest
}) {
  const fieldId = id || (label ? `om-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: `om-field ${error ? "om-field--error" : ""}`
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "om-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "om-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "om-input-wrap"
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: `om-input ${iconLeft ? "om-input--has-lead" : ""}`
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "om-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.om-select-field { display: flex; flex-direction: column; gap: 7px; font-family: var(--font-body); }
.om-select-field__label { font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-secondary); }
.om-select-wrap { position: relative; display: flex; align-items: center; }
.om-select-wrap .om-icon { position: absolute; right: 12px; color: var(--text-tertiary); pointer-events: none; }
.om-select {
  appearance: none; -webkit-appearance: none;
  width: 100%; height: var(--control-md);
  font-family: var(--font-body); font-size: var(--fs-body-sm); color: var(--text-primary);
  background: var(--surface-sunken);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 38px 0 14px; cursor: pointer;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.om-select:hover { border-color: var(--border-strong); }
.om-select:focus { outline: none; border-color: var(--border-accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.om-select[disabled] { opacity: 0.5; pointer-events: none; }
.om-select option { background: var(--surface-overlay); color: var(--text-primary); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-select-css")) {
  const s = document.createElement("style");
  s.id = "om-select-css";
  s.textContent = css;
  document.head.appendChild(s);
}
function Select({
  label,
  options = [],
  placeholder,
  id,
  children,
  ...rest
}) {
  const fieldId = id || (label ? `om-sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "om-select-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "om-select-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "om-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "om-select"
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), children || options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.om-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-family: var(--font-body);
  font-size: var(--fs-body-sm); color: var(--text-secondary); user-select: none; }
.om-switch input { position: absolute; opacity: 0; pointer-events: none; }
.om-switch__track {
  position: relative; width: 40px; height: 24px; border-radius: var(--radius-pill);
  background: var(--surface-sunken); border: var(--hairline) solid var(--border-strong);
  transition: background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.om-switch__thumb {
  position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; border-radius: 50%;
  background: var(--ob-200); box-shadow: var(--shadow-sm);
  transition: transform var(--dur-base) var(--ease-spring), background var(--dur-base) var(--ease-out);
}
.om-switch input:checked + .om-switch__track {
  background: var(--accent); border-color: transparent; box-shadow: var(--glow-accent);
}
.om-switch input:checked + .om-switch__track .om-switch__thumb { transform: translateX(16px); background: #fff; }
.om-switch input:focus-visible + .om-switch__track { box-shadow: 0 0 0 3px var(--accent-soft); }
.om-switch input:disabled + .om-switch__track { opacity: 0.45; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-switch-css")) {
  const s = document.createElement("style");
  s.id = "om-switch-css";
  s.textContent = css;
  document.head.appendChild(s);
}
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "om-switch"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "om-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "om-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const css = `
.om-tabs { display: inline-flex; gap: 2px; padding: 4px;
  background: var(--surface-sunken); border: var(--hairline) solid var(--border-subtle);
  border-radius: var(--radius-pill); }
.om-tab {
  position: relative; font-family: var(--font-body); font-size: var(--fs-body-sm);
  font-weight: var(--fw-medium); color: var(--text-tertiary);
  padding: 7px 16px; border-radius: var(--radius-pill); border: none; background: transparent;
  cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 7px;
  transition: color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.om-tab:hover { color: var(--text-secondary); }
.om-tab--active {
  color: var(--text-primary);
  background: var(--surface-glass-strong);
  box-shadow: var(--inset-highlight), 0 1px 3px rgb(3 4 7 / 0.4);
}
.om-tab--active::after {
  content: ""; position: absolute; left: 50%; bottom: 3px; transform: translateX(-50%);
  width: 16px; height: 2px; border-radius: 2px; background: var(--accent); box-shadow: 0 0 8px var(--accent-glow);
}
/* underline variant */
.om-tabs--line { background: transparent; border: none; border-bottom: var(--hairline) solid var(--border-subtle);
  border-radius: 0; padding: 0; gap: 4px; }
.om-tabs--line .om-tab { border-radius: 0; padding: 12px 4px; margin: 0 8px; }
.om-tabs--line .om-tab--active { background: transparent; box-shadow: none; }
.om-tabs--line .om-tab--active::after { left: 0; transform: none; width: 100%; bottom: -1px; }
.om-tab__count { font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary);
  background: var(--surface-glass); border-radius: var(--radius-pill); padding: 1px 7px; }
`;
if (typeof document !== "undefined" && !document.getElementById("om-tabs-css")) {
  const s = document.createElement("style");
  s.id = "om-tabs-css";
  s.textContent = css;
  document.head.appendChild(s);
}
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "pill"
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `om-tabs ${variant === "line" ? "om-tabs--line" : ""}`,
    role: "tablist"
  }, tabs.map(t => {
    const tab = typeof t === "string" ? {
      value: t,
      label: t
    } : t;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": active === tab.value,
      className: `om-tab ${active === tab.value ? "om-tab--active" : ""}`,
      onClick: () => select(tab.value)
    }, tab.label, tab.count != null && /*#__PURE__*/React.createElement("span", {
      className: "om-tab__count"
    }, tab.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
@keyframes om-menu-in {
  from { opacity: 0; transform: translateY(-6px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.om-menu-wrap { position: relative; display: inline-flex; }
.om-menu {
  position: absolute; top: calc(100% + 8px); z-index: 70;
  min-width: var(--_mw, 200px); padding: 6px;
  background: var(--surface-overlay);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg), var(--inset-highlight);
  transform-origin: top var(--_align, left);
  animation: om-menu-in var(--dur-base) var(--ease-out);
}
.om-menu--start { left: 0; --_align: left; }
.om-menu--end { right: 0; --_align: right; }
.om-menu__item {
  display: flex; align-items: center; gap: 10px; width: 100%;
  font-family: var(--font-body); font-size: var(--fs-body-sm); font-weight: var(--fw-medium);
  color: var(--text-secondary); text-align: left;
  padding: 8px 10px; border-radius: var(--radius-sm); border: none; background: transparent;
  cursor: pointer; white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
}
.om-menu__item .om-icon { color: var(--text-tertiary); transition: color var(--dur-fast) var(--ease-out); }
.om-menu__item:hover { background: var(--surface-glass-strong); color: var(--text-primary); }
.om-menu__item:hover .om-icon { color: var(--text-primary); }
.om-menu__item[disabled] { opacity: 0.4; pointer-events: none; }
.om-menu__item--danger { color: var(--rose-400); }
.om-menu__item--danger .om-icon { color: var(--rose-400); }
.om-menu__item--danger:hover { background: var(--danger-soft); color: var(--rose-400); }
.om-menu__item--danger:hover .om-icon { color: var(--rose-400); }
.om-menu__shortcut { margin-left: auto; font-family: var(--font-mono); font-size: 11px; color: var(--text-disabled); }
.om-menu__check { margin-left: auto; color: var(--accent); }
.om-menu__sep { height: 1px; margin: 6px 4px; background: var(--border-subtle); }
.om-menu__label {
  font-family: var(--font-mono); font-size: var(--fs-micro); letter-spacing: var(--ls-overline);
  text-transform: uppercase; color: var(--text-tertiary); padding: 8px 10px 4px;
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-menu-css")) {
  const s = document.createElement("style");
  s.id = "om-menu-css";
  s.textContent = css;
  document.head.appendChild(s);
}
function Menu({
  trigger,
  items = [],
  align = "start",
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const trig = React.isValidElement(trigger) ? React.cloneElement(trigger, {
    onClick: e => {
      trigger.props.onClick && trigger.props.onClick(e);
      setOpen(o => !o);
    }
  }) : trigger;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "om-menu-wrap",
    ref: ref
  }, rest), trig, open && /*#__PURE__*/React.createElement("div", {
    className: `om-menu om-menu--${align}`,
    role: "menu"
  }, items.map((it, i) => {
    if (it.type === "separator") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "om-menu__sep"
    });
    if (it.type === "label") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "om-menu__label"
    }, it.label);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "menuitem",
      disabled: it.disabled,
      className: `om-menu__item ${it.variant === "danger" ? "om-menu__item--danger" : ""}`,
      onClick: () => {
        setOpen(false);
        it.onClick && it.onClick();
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", null, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
      className: "om-menu__shortcut"
    }, it.shortcut), it.checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 15,
      className: "om-menu__check"
    }));
  })));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
@keyframes om-modal-scrim-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes om-modal-pop-in {
  from { opacity: 0; transform: translateY(8px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.om-modal__scrim {
  position: fixed; inset: 0; z-index: 80;
  display: grid; place-items: center; padding: 24px;
  background: rgb(3 4 7 / 0.62);
  backdrop-filter: blur(var(--blur-sm));
  animation: om-modal-scrim-in var(--dur-base) var(--ease-out);
}
.om-modal {
  width: 100%; max-width: var(--_w, 480px); max-height: calc(100vh - 48px);
  display: flex; flex-direction: column;
  background: var(--surface-overlay);
  border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl), var(--inset-highlight-strong);
  font-family: var(--font-body); color: var(--text-primary);
  animation: om-modal-pop-in var(--dur-slow) var(--ease-spring);
  overflow: hidden;
}
.om-modal--sm { --_w: 380px; }
.om-modal--md { --_w: 480px; }
.om-modal--lg { --_w: 640px; }
.om-modal__head {
  display: flex; align-items: flex-start; gap: 16px;
  padding: 22px 24px 0;
}
.om-modal__titles { flex: 1; min-width: 0; }
.om-modal__title {
  font-family: var(--font-display); font-size: var(--fs-h4); font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-tight); line-height: var(--lh-snug);
}
.om-modal__desc { font-size: var(--fs-body-sm); color: var(--text-tertiary); margin-top: 5px; line-height: var(--lh-body); }
.om-modal__close {
  flex: none; display: grid; place-items: center; width: 30px; height: 30px;
  border-radius: var(--radius-sm); border: none; background: transparent; cursor: pointer;
  color: var(--text-tertiary); transition: color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.om-modal__close:hover { color: var(--text-primary); background: var(--surface-glass); }
.om-modal__body { padding: 18px 24px; overflow-y: auto; font-size: var(--fs-body-sm); color: var(--text-secondary); line-height: var(--lh-body); }
.om-modal__body--flush { padding-top: 20px; }
.om-modal__foot {
  display: flex; align-items: center; justify-content: flex-end; gap: 10px;
  padding: 16px 24px; border-top: var(--hairline) solid var(--border-subtle);
  background: var(--surface-sunken);
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-modal-css")) {
  const s = document.createElement("style");
  s.id = "om-modal-css";
  s.textContent = css;
  document.head.appendChild(s);
}
function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnScrim = true,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "om-modal__scrim",
    onMouseDown: e => {
      if (closeOnScrim && e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: `om-modal om-modal--${size}`,
    role: "dialog",
    "aria-modal": "true"
  }, rest), (title || onClose) && /*#__PURE__*/React.createElement("div", {
    className: "om-modal__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "om-modal__titles"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "om-modal__title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "om-modal__desc"
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "om-modal__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 17
  }))), children != null && /*#__PURE__*/React.createElement("div", {
    className: `om-modal__body ${title ? "" : "om-modal__body--flush"}`
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "om-modal__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Tooltip({
  children,
  content,
  kbd,
  side = "top",
  delay = 80,
  ...rest
}) {
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
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "om-tip-wrap",
    onMouseEnter: open,
    onMouseLeave: close,
    onFocus: open,
    onBlur: close
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: `om-tip om-tip--${side} ${show ? "om-tip--show" : ""}`,
    role: "tooltip"
  }, content, kbd && /*#__PURE__*/React.createElement("span", {
    className: "om-tip__kbd"
  }, kbd)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/App.jsx
try { (() => {
/* Console — App orchestrator (ties screens together) */
function ConsolePlaceholder({
  title
}) {
  const {
    Icon
  } = window.OverModernDesignSystem_22ac94;
  return /*#__PURE__*/React.createElement("div", {
    className: "cx-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-pagehead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", null, "This surface is part of the kit's navigation shell."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      height: 320,
      color: "var(--text-disabled)",
      gap: 14,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 40,
    style: {
      color: "var(--ob-600)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, title, " \xB7 placeholder")));
}
function App() {
  const [authed, setAuthed] = React.useState(false);
  const [nav, setNav] = React.useState("overview");
  const [env, setEnv] = React.useState("prod");
  const [theme, setTheme] = React.useState("dark");
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme(t => t === "light" ? "dark" : "light");
  if (!authed) return /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: () => setAuthed(true)
  });
  const labels = {
    overview: "Overview",
    deployments: "Deployments",
    observability: "Observability",
    databases: "Databases",
    edge: "Edge network",
    members: "Members",
    settings: "Settings"
  };
  let screen;
  if (nav === "overview") screen = /*#__PURE__*/React.createElement(OverviewScreen, null);else if (nav === "deployments") screen = /*#__PURE__*/React.createElement(DeploymentsScreen, null);else screen = /*#__PURE__*/React.createElement(ConsolePlaceholder, {
    title: labels[nav]
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "cx-app"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: nav,
    onNav: setNav
  }), /*#__PURE__*/React.createElement("div", {
    className: "cx-main"
  }, /*#__PURE__*/React.createElement(Topbar, {
    crumb: labels[nav],
    env: env,
    onEnv: setEnv,
    theme: theme,
    onTheme: toggleTheme
  }), screen));
}
window.ConsoleApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/DeploymentsScreen.jsx
try { (() => {
/* Console — Deployments screen */
function DeploymentsScreen() {
  const {
    Card,
    Icon,
    Badge,
    Button,
    Tabs,
    Avatar
  } = window.OverModernDesignSystem_22ac94;
  const [filter, setFilter] = React.useState("all");
  const rows = [{
    hash: "a3f9c1",
    branch: "main",
    msg: "Add edge cache invalidation",
    who: "Ada Mercer",
    env: "prod",
    dur: "42s",
    time: "2m ago",
    state: "live"
  }, {
    hash: "7b2e08",
    branch: "main",
    msg: "Bump runtime to v4.2.0",
    who: "Marco Vidal",
    env: "prod",
    dur: "1m 04s",
    time: "1h ago",
    state: "live"
  }, {
    hash: "c19df4",
    branch: "fix/billing",
    msg: "Refactor billing webhooks",
    who: "Lena Cho",
    env: "staging",
    dur: "38s",
    time: "3h ago",
    state: "failed"
  }, {
    hash: "e84a55",
    branch: "main",
    msg: "Patch auth token rotation",
    who: "Ada Mercer",
    env: "prod",
    dur: "51s",
    time: "6h ago",
    state: "live"
  }, {
    hash: "12bb90",
    branch: "exp/edge",
    msg: "Prototype regional failover",
    who: "Marco Vidal",
    env: "staging",
    dur: "1m 22s",
    time: "9h ago",
    state: "building"
  }];
  const stateMap = {
    live: ["success", "Live"],
    failed: ["danger", "Failed"],
    building: ["accent", "Building"]
  };
  const shown = rows.filter(r => filter === "all" || (filter === "prod" ? r.env === "prod" : r.env === "staging"));
  return /*#__PURE__*/React.createElement("div", {
    className: "cx-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-pagehead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Deployments"), /*#__PURE__*/React.createElement("p", null, "Every build shipped across your environments.")), /*#__PURE__*/React.createElement("div", {
    className: "cx-pagehead__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "git-branch",
      size: 16
    })
  }, "Connect repo"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "rocket",
      size: 16
    })
  }, "New deployment"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: filter,
    onChange: setFilter,
    tabs: [{
      value: "all",
      label: "All",
      count: rows.length
    }, {
      value: "prod",
      label: "Production",
      count: rows.filter(r => r.env === "prod").length
    }, {
      value: "staging",
      label: "Staging",
      count: rows.filter(r => r.env === "staging").length
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, shown.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "cx-deploy",
    key: r.hash,
    style: {
      padding: "16px 20px",
      borderBottom: i === shown.length - 1 ? "none" : undefined
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: stateMap[r.state][0],
    dot: true
  }, stateMap[r.state][1]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-deploy__msg"
  }, r.msg), /*#__PURE__*/React.createElement("div", {
    className: "cx-deploy__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-deploy__hash"
  }, r.hash), " \xB7 ", r.branch, " \xB7 ", r.env)), /*#__PURE__*/React.createElement("div", {
    className: "cx-deploy__right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-deploy__time"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "timer",
    size: 12,
    style: {
      verticalAlign: "-2px",
      marginRight: 4,
      color: "var(--text-disabled)"
    }
  }), r.dur), /*#__PURE__*/React.createElement(Avatar, {
    name: r.who,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cx-deploy__time"
  }, r.time), /*#__PURE__*/React.createElement(Icon, {
    name: "ellipsis",
    size: 18,
    style: {
      color: "var(--text-tertiary)",
      cursor: "pointer"
    }
  }))))));
}
window.DeploymentsScreen = DeploymentsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/DeploymentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/LoginScreen.jsx
try { (() => {
/* Console — Login screen */
function LoginScreen({
  onLogin
}) {
  const {
    Input,
    Button,
    Icon
  } = window.OverModernDesignSystem_22ac94;
  const submit = e => {
    e.preventDefault();
    onLogin && onLogin();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cx-login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-login__grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cx-login__aura"
  }), /*#__PURE__*/React.createElement("form", {
    className: "cx-login__card",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-login__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "OverModern"
  })), /*#__PURE__*/React.createElement("h2", null, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Sign in to your OverModern workspace."), /*#__PURE__*/React.createElement("div", {
    className: "cx-login__fields"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "ada@northwind.io",
    defaultValue: "ada@northwind.io",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16,
      className: "lead"
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    defaultValue: "supersecret",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 16,
      className: "lead"
    })
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    }),
    style: {
      width: "100%"
    }
  }, "Sign in")), /*#__PURE__*/React.createElement("div", {
    className: "cx-divider"
  }, "or"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "key-round",
      size: 16
    }),
    style: {
      width: "100%"
    }
  }, "Continue with SSO"), /*#__PURE__*/React.createElement("div", {
    className: "cx-login__foot"
  }, "Protected by hardware-key MFA")));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/OverviewScreen.jsx
try { (() => {
/* Console — Overview screen */
function AreaChart() {
  // simple deterministic area chart (data viz, not iconography)
  const pts = [38, 42, 35, 50, 46, 58, 54, 66, 60, 72, 68, 82, 78, 90];
  const W = 640,
    H = 188,
    max = 100;
  const step = W / (pts.length - 1);
  const coords = pts.map((v, i) => [i * step, H - v / max * H]);
  const line = coords.map((c, i) => (i ? "L" : "M") + c[0].toFixed(1) + " " + c[1].toFixed(1)).join(" ");
  const area = line + ` L ${W} ${H} L 0 ${H} Z`;
  return /*#__PURE__*/React.createElement("div", {
    className: "cx-chart"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "cxArea",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "rgb(61 130 255 / 0.35)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "rgb(61 130 255 / 0)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "cxStroke",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#3D82FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#44DEE6"
  }))), [0.25, 0.5, 0.75].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: "0",
    x2: W,
    y1: H * g,
    y2: H * g,
    stroke: "rgb(255 255 255 / 0.05)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#cxArea)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "url(#cxStroke)",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: coords[coords.length - 1][0],
    cy: coords[coords.length - 1][1],
    r: "4",
    fill: "#44DEE6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cx-chart__axis"
  }, /*#__PURE__*/React.createElement("span", null, "00:00"), /*#__PURE__*/React.createElement("span", null, "06:00"), /*#__PURE__*/React.createElement("span", null, "12:00"), /*#__PURE__*/React.createElement("span", null, "18:00"), /*#__PURE__*/React.createElement("span", null, "now")));
}
function OverviewScreen() {
  const {
    Card,
    Icon,
    Badge,
    Button
  } = window.OverModernDesignSystem_22ac94;
  const stats = [{
    icon: "arrow-up-right",
    label: "Requests",
    value: "1.24M",
    unit: "/min",
    delta: "+12.4%",
    up: true
  }, {
    icon: "timer",
    label: "p99 latency",
    value: "12.4",
    unit: "ms",
    delta: "−3.1%",
    up: true
  }, {
    icon: "triangle-alert",
    label: "Error rate",
    value: "0.02",
    unit: "%",
    delta: "+0.01%",
    up: false
  }, {
    icon: "server",
    label: "Active nodes",
    value: "48",
    unit: "/ 50",
    delta: "stable",
    up: true
  }];
  const regions = [{
    name: "us-east-1",
    v: 92
  }, {
    name: "eu-west-2",
    v: 74
  }, {
    name: "ap-south-1",
    v: 58
  }, {
    name: "sa-east-1",
    v: 31
  }];
  const deploys = [{
    hash: "a3f9c1",
    msg: "Add edge cache invalidation",
    who: "ada",
    time: "2m ago",
    state: "success"
  }, {
    hash: "7b2e08",
    msg: "Bump runtime to v4.2.0",
    who: "marco",
    time: "1h ago",
    state: "success"
  }, {
    hash: "c19df4",
    msg: "Refactor billing webhooks",
    who: "lena",
    time: "3h ago",
    state: "warning"
  }, {
    hash: "e84a55",
    msg: "Patch auth token rotation",
    who: "ada",
    time: "6h ago",
    state: "success"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "cx-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-pagehead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Overview"), /*#__PURE__*/React.createElement("p", null, "Real-time health across all production regions.")), /*#__PURE__*/React.createElement("div", {
    className: "cx-pagehead__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 16
    })
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "rocket",
      size: 16
    })
  }, "Deploy"))), /*#__PURE__*/React.createElement("div", {
    className: "cx-stats"
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-stat__label"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 14
  }), s.label), /*#__PURE__*/React.createElement("div", {
    className: "cx-stat__value"
  }, s.value, /*#__PURE__*/React.createElement("small", null, " ", s.unit)), /*#__PURE__*/React.createElement("div", {
    className: "cx-stat__delta " + (s.up ? "cx-up" : "cx-down")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.up ? "trending-up" : "trending-down",
    size: 13
  }), s.delta)))), /*#__PURE__*/React.createElement("div", {
    className: "cx-row2"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "glass"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-panel-title"
  }, /*#__PURE__*/React.createElement("h3", null, "Request throughput"), /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement(AreaChart, null)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "cx-panel-title"
  }, /*#__PURE__*/React.createElement("h3", null, "Traffic by region")), regions.map(r => /*#__PURE__*/React.createElement("div", {
    className: "cx-region",
    key: r.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-region__name"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "cx-region__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-region__fill",
    style: {
      width: r.v + "%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "cx-region__val"
  }, r.v, "%"))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "cx-panel-title"
  }, /*#__PURE__*/React.createElement("h3", null, "Recent deployments"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "View all")), deploys.map(d => /*#__PURE__*/React.createElement("div", {
    className: "cx-deploy",
    key: d.hash
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "git-commit-horizontal",
    size: 18,
    style: {
      color: "var(--text-tertiary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cx-deploy__msg"
  }, d.msg), /*#__PURE__*/React.createElement("div", {
    className: "cx-deploy__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-deploy__hash"
  }, d.hash), " \xB7 pushed by ", d.who)), /*#__PURE__*/React.createElement("div", {
    className: "cx-deploy__right"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: d.state === "warning" ? "warning" : "success",
    dot: true
  }, d.state === "warning" ? "Rolled back" : "Deployed"), /*#__PURE__*/React.createElement("span", {
    className: "cx-deploy__time"
  }, d.time))))));
}
window.OverviewScreen = OverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Sidebar.jsx
try { (() => {
/* Console — Sidebar (UI kit screen; loaded via Babel, no imports) */
function Sidebar({
  active,
  onNav
}) {
  const {
    Icon,
    Avatar,
    Badge
  } = window.OverModernDesignSystem_22ac94;
  const main = [{
    id: "overview",
    icon: "layout-dashboard",
    label: "Overview"
  }, {
    id: "deployments",
    icon: "rocket",
    label: "Deployments",
    count: "12"
  }, {
    id: "observability",
    icon: "activity",
    label: "Observability"
  }, {
    id: "databases",
    icon: "database",
    label: "Databases"
  }, {
    id: "edge",
    icon: "globe",
    label: "Edge network"
  }];
  const sys = [{
    id: "members",
    icon: "users",
    label: "Members"
  }, {
    id: "settings",
    icon: "settings",
    label: "Settings"
  }];
  const Item = it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    className: "cx-nav" + (active === it.id ? " cx-nav--active" : ""),
    onClick: () => onNav && onNav(it.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.count && /*#__PURE__*/React.createElement("span", {
    className: "cx-nav__count"
  }, it.count));
  return /*#__PURE__*/React.createElement("aside", {
    className: "cx-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-side__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "OverModern"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cx-ws"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Northwind Labs",
    accent: true,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-ws__name"
  }, "Northwind Labs"), /*#__PURE__*/React.createElement("div", {
    className: "cx-ws__plan"
  }, "ENTERPRISE")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 15,
    style: {
      marginLeft: "auto",
      color: "var(--text-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "cx-navlabel"
  }, "Platform"), main.map(Item), /*#__PURE__*/React.createElement("div", {
    className: "cx-navlabel"
  }, "Organization"), sys.map(Item), /*#__PURE__*/React.createElement("div", {
    className: "cx-side__foot"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Ada Mercer",
    status: "online",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, "Ada Mercer"), /*#__PURE__*/React.createElement("div", {
    className: "em"
  }, "ada@northwind.io")), /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 16,
    style: {
      marginLeft: "auto",
      color: "var(--text-tertiary)"
    }
  })));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Topbar.jsx
try { (() => {
/* Console — Topbar */
function Topbar({
  crumb,
  env,
  onEnv,
  theme,
  onTheme
}) {
  const {
    Input,
    IconButton,
    Icon,
    Tabs
  } = window.OverModernDesignSystem_22ac94;
  return /*#__PURE__*/React.createElement("header", {
    className: "cx-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-top__crumb"
  }, "northwind\xA0/\xA0", /*#__PURE__*/React.createElement("b", null, crumb)), /*#__PURE__*/React.createElement("div", {
    className: "cx-search"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search resources, deploys, logs\u2026",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      className: "lead"
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "cx-top__right"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: "prod",
      label: "Prod"
    }, {
      value: "staging",
      label: "Staging"
    }],
    value: env,
    onChange: onEnv
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    variant: "solid",
    label: "Notifications"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: theme === "light" ? "moon" : "sun",
    variant: "solid",
    label: "Toggle theme",
    onClick: onTheme
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "life-buoy",
    variant: "solid",
    label: "Help"
  })));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Topbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
