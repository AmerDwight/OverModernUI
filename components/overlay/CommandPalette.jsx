import React from "react";
import { Icon } from "../core/Icon.jsx";

const css = `
@keyframes om-cmdk-scrim-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes om-cmdk-pop-in {
  from { opacity: 0; transform: translateY(-10px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.om-cmdk__scrim {
  position: fixed; inset: 0; z-index: 90; display: flex; justify-content: center;
  padding: 14vh 24px 24px; background: rgb(3 4 7 / 0.6); backdrop-filter: blur(var(--blur-sm));
  animation: om-cmdk-scrim-in var(--dur-base) var(--ease-out);
}
.om-cmdk {
  width: 100%; max-width: 580px; max-height: 60vh; align-self: flex-start;
  display: flex; flex-direction: column; overflow: hidden;
  background: var(--surface-overlay); border: var(--hairline) solid var(--border-default);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-xl), var(--inset-highlight-strong);
  font-family: var(--font-body); animation: om-cmdk-pop-in var(--dur-slow) var(--ease-spring);
}
.om-cmdk__search { display: flex; align-items: center; gap: 11px; padding: 15px 18px; border-bottom: var(--hairline) solid var(--border-subtle); }
.om-cmdk__search .om-icon { color: var(--text-tertiary); flex: none; }
.om-cmdk__input {
  flex: 1; min-width: 0; background: transparent; border: none; outline: none;
  font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-primary);
}
.om-cmdk__input::placeholder { color: var(--text-disabled); }
.om-cmdk__esc {
  font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary); flex: none;
  padding: 2px 7px; border-radius: var(--radius-xs); background: var(--surface-glass); border: var(--hairline) solid var(--border-subtle);
}
.om-cmdk__list { overflow-y: auto; padding: 6px; }
.om-cmdk__group {
  font-family: var(--font-mono); font-size: var(--fs-micro); letter-spacing: var(--ls-overline);
  text-transform: uppercase; color: var(--text-tertiary); padding: 10px 10px 5px;
}
.om-cmdk__item {
  display: flex; align-items: center; gap: 11px; width: 100%; text-align: left;
  padding: 9px 11px; border-radius: var(--radius-sm); border: none; background: transparent; cursor: pointer;
  font-family: var(--font-body); font-size: var(--fs-body-sm); color: var(--text-secondary);
}
.om-cmdk__item .om-icon { color: var(--text-tertiary); flex: none; }
.om-cmdk__item--active { background: var(--surface-glass-strong); color: var(--text-primary); }
.om-cmdk__item--active .om-icon { color: var(--accent); }
.om-cmdk__item-label { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.om-cmdk__item-hint { font-size: var(--fs-caption); color: var(--text-disabled); }
.om-cmdk__shortcut { display: flex; gap: 3px; flex: none; }
.om-cmdk__shortcut kbd {
  font-family: var(--font-mono); font-size: 10px; color: var(--text-tertiary);
  padding: 2px 6px; border-radius: var(--radius-xs); background: var(--surface-glass); border: var(--hairline) solid var(--border-subtle);
}
.om-cmdk__empty { padding: 34px 16px; text-align: center; color: var(--text-disabled); font-size: var(--fs-body-sm); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-cmdk-css")) {
  const s = document.createElement("style");
  s.id = "om-cmdk-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function CommandPalette({ open, onClose, items = [], placeholder = "Type a command or search…", emptyText = "No results found", ...rest }) {
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const inputRef = React.useRef(null);
  const listRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [open]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? items.filter((it) => (it.label + " " + (it.keywords || "") + " " + (it.group || "")).toLowerCase().includes(q))
    : items;

  // group while preserving order
  const groups = [];
  filtered.forEach((it) => {
    const g = it.group || "";
    let bucket = groups.find((x) => x.name === g);
    if (!bucket) { bucket = { name: g, items: [] }; groups.push(bucket); }
    bucket.items.push(it);
  });
  const flat = filtered;

  React.useEffect(() => { setActive(0); }, [query]);

  const run = (it) => { if (!it) return; onClose && onClose(); it.onSelect && it.onSelect(); };

  const onKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, flat.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); run(flat[active]); }
    else if (e.key === "Escape") { onClose && onClose(); }
  };

  React.useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector(".om-cmdk__item--active");
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  let idx = -1;
  return (
    <div className="om-cmdk__scrim" onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className="om-cmdk" role="dialog" aria-modal="true" onKeyDown={onKey} {...rest}>
        <div className="om-cmdk__search">
          <Icon name="search" size={18} />
          <input
            ref={inputRef}
            className="om-cmdk__input"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="om-cmdk__esc">ESC</span>
        </div>
        <div className="om-cmdk__list" ref={listRef}>
          {flat.length === 0 && <div className="om-cmdk__empty">{emptyText}</div>}
          {groups.map((g) => (
            <React.Fragment key={g.name || "_"}>
              {g.name && <div className="om-cmdk__group">{g.name}</div>}
              {g.items.map((it) => {
                idx += 1;
                const i = idx;
                return (
                  <button
                    key={i}
                    className={`om-cmdk__item ${i === active ? "om-cmdk__item--active" : ""}`}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => run(it)}
                  >
                    {it.icon && <Icon name={it.icon} size={17} />}
                    <span className="om-cmdk__item-label">{it.label}</span>
                    {it.hint && <span className="om-cmdk__item-hint">{it.hint}</span>}
                    {it.shortcut && (
                      <span className="om-cmdk__shortcut">
                        {(Array.isArray(it.shortcut) ? it.shortcut : [it.shortcut]).map((k, ki) => <kbd key={ki}>{k}</kbd>)}
                      </span>
                    )}
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
