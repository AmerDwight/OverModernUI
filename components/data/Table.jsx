import React from "react";
import { Icon } from "../core/Icon.jsx";

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
.om-table--dense thead th { padding: 9px 14px; }
.om-table--dense tbody td { padding: 9px 14px; }
.om-table__align-right { text-align: right; }
.om-table__align-center { text-align: center; }
.om-table__num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; color: var(--text-primary); }
.om-table__sortable { cursor: pointer; user-select: none; transition: color var(--dur-fast) var(--ease-out); }
.om-table__sortable:hover { color: var(--text-secondary); }
.om-table__sorth { display: inline-flex; align-items: center; gap: 5px; }
.om-table__sortable--active { color: var(--text-primary); }
.om-table__sort-ico { display: inline-flex; opacity: 0.4; transition: opacity var(--dur-fast) var(--ease-out); }
.om-table__sortable:hover .om-table__sort-ico { opacity: 0.7; }
.om-table__sortable--active .om-table__sort-ico { opacity: 1; color: var(--accent); }
.om-table__selcell { width: 1px; padding-right: 0 !important; }
.om-table tbody tr[data-selected="true"] { background: var(--accent-soft); }
.om-table tbody tr[data-selected="true"]:hover { background: var(--accent-soft); }
.om-table__check {
  appearance: none; -webkit-appearance: none; width: 16px; height: 16px; margin: 0; display: block;
  border: var(--hairline) solid var(--border-strong, var(--border-default)); border-radius: var(--radius-xs);
  background: var(--surface-glass); cursor: pointer; position: relative;
  transition: background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
}
.om-table__check:hover { border-color: var(--accent); }
.om-table__check:checked, .om-table__check:indeterminate { background: var(--accent); border-color: transparent; }
.om-table__check:checked::after {
  content: ""; position: absolute; left: 5px; top: 2px; width: 4px; height: 8px;
  border: solid var(--on-accent); border-width: 0 2px 2px 0; rotate: 45deg;
}
.om-table__check:indeterminate::after {
  content: ""; position: absolute; left: 3px; top: 6.5px; width: 8px; height: 2px; background: var(--on-accent); border-radius: 1px;
}
`;
if (typeof document !== "undefined" && !document.getElementById("om-table-css")) {
  const s = document.createElement("style");
  s.id = "om-table-css";
  s.textContent = css;
  document.head.appendChild(s);
}

const alignCls = (a) =>
  a === "right" ? " om-table__align-right" : a === "center" ? " om-table__align-center" : "";

function defaultCompare(a, b) {
  if (a == null) return -1;
  if (b == null) return 1;
  const na = typeof a === "string" ? parseFloat(a.replace(/[^0-9.-]/g, "")) : a;
  const nb = typeof b === "string" ? parseFloat(b.replace(/[^0-9.-]/g, "")) : b;
  if (!isNaN(na) && !isNaN(nb) && a !== "" && b !== "") return na - nb;
  return String(a).localeCompare(String(b));
}

export function Table({
  columns = [],
  rows = [],
  dense = false,
  hover = true,
  rowKey,
  selectable = false,
  selected,
  onSelectionChange,
  defaultSort,
  onSortChange,
  ...rest
}) {
  const keyOf = (row, i) => (rowKey ? row[rowKey] : i);

  // Sorting (uncontrolled unless a column provides controlled handling via onSortChange).
  const [sortState, setSortState] = React.useState(defaultSort || null);
  const sort = sortState;
  const handleSort = (col) => {
    if (!col.sortable) return;
    let next;
    if (!sort || sort.key !== col.key) next = { key: col.key, dir: "asc" };
    else if (sort.dir === "asc") next = { key: col.key, dir: "desc" };
    else next = null;
    setSortState(next);
    onSortChange && onSortChange(next);
  };

  let body = rows;
  if (sort) {
    const col = columns.find((c) => c.key === sort.key);
    const cmp = (col && col.compare) || defaultCompare;
    body = [...rows].sort((ra, rb) => {
      const r = cmp(ra[sort.key], rb[sort.key], ra, rb);
      return sort.dir === "asc" ? r : -r;
    });
  }

  // Selection (controlled if `selected` provided, else internal).
  const [selInternal, setSelInternal] = React.useState([]);
  const sel = selected != null ? selected : selInternal;
  const selSet = new Set(sel);
  const allKeys = body.map(keyOf);
  const allChecked = allKeys.length > 0 && allKeys.every((k) => selSet.has(k));
  const someChecked = allKeys.some((k) => selSet.has(k));
  const setSel = (next) => {
    if (selected == null) setSelInternal(next);
    onSelectionChange && onSelectionChange(next);
  };
  const toggleRow = (k) => {
    const next = selSet.has(k) ? sel.filter((x) => x !== k) : [...sel, k];
    setSel(next);
  };
  const toggleAll = () => setSel(allChecked ? [] : allKeys);

  const cls = ["om-table", hover && "om-table--hover", dense && "om-table--dense"].filter(Boolean).join(" ");
  const headerRef = React.useRef(null);
  React.useEffect(() => {
    if (headerRef.current) headerRef.current.indeterminate = someChecked && !allChecked;
  }, [someChecked, allChecked]);

  return (
    <div className="om-table-wrap" {...rest}>
      <table className={cls}>
        <thead>
          <tr>
            {selectable && (
              <th className="om-table__selcell">
                <input ref={headerRef} type="checkbox" className="om-table__check" checked={allChecked} onChange={toggleAll} aria-label="Select all rows" />
              </th>
            )}
            {columns.map((c) => {
              const active = sort && sort.key === c.key;
              const thCls =
                (alignCls(c.align) + (c.sortable ? " om-table__sortable" : "") + (active ? " om-table__sortable--active" : "")).trim() || undefined;
              return (
                <th key={c.key} className={thCls} style={c.width ? { width: c.width } : undefined} onClick={() => handleSort(c)}>
                  <span className="om-table__sorth" style={c.align === "right" ? { flexDirection: "row-reverse" } : undefined}>
                    {c.header}
                    {c.sortable && (
                      <span className="om-table__sort-ico">
                        <Icon name={active ? (sort.dir === "asc" ? "arrow-up" : "arrow-down") : "chevrons-up-down"} size={13} />
                      </span>
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => {
            const k = keyOf(row, ri);
            const isSel = selSet.has(k);
            return (
              <tr key={k} data-selected={selectable && isSel ? "true" : undefined}>
                {selectable && (
                  <td className="om-table__selcell">
                    <input type="checkbox" className="om-table__check" checked={isSel} onChange={() => toggleRow(k)} aria-label="Select row" />
                  </td>
                )}
                {columns.map((c) => {
                  const raw = row[c.key];
                  const content = c.render ? c.render(raw, row, ri) : raw;
                  const numCls = c.numeric ? " om-table__num" : "";
                  return (
                    <td key={c.key} className={(alignCls(c.align) + numCls).trim() || undefined}>{content}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
