import React from "react";

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

const SIZES = { sm: 28, md: 36, lg: 48, xl: 64 };
const STATUS = { online: "var(--success)", busy: "var(--danger)", away: "var(--warning)", offline: "var(--ob-500)" };

export function Avatar({ src, name = "", size = "md", accent = false, status, ...rest }) {
  const px = SIZES[size] || SIZES.md;
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      className={`om-avatar ${accent && !src ? "om-avatar--accent" : ""}`}
      style={{ width: px, height: px, fontSize: px * 0.4 }}
      {...rest}
    >
      {src ? <img src={src} alt={name} /> : initials}
      {status && <span className="om-avatar__status" style={{ background: STATUS[status] }} />}
    </span>
  );
}
