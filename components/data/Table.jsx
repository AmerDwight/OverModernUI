import React from "react";

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

export function Table({
  columns = [],
  rows = [],
  dense = false,
  hover = true,
  rowKey,
  ...rest
}) {
  const cls = [
    "om-table",
    hover && "om-table--hover",
    dense && "om-table--dense",
  ]
    .filter(Boolean)
    .join(" ");

  const alignCls = (a) =>
    a === "right" ? " om-table__align-right" : a === "center" ? " om-table__align-center" : "";

  return (
    <div className="om-table-wrap" {...rest}>
      <table className={cls}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={alignCls(c.align).trim()} style={c.width ? { width: c.width } : undefined}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={rowKey ? row[rowKey] : ri}>
              {columns.map((c) => {
                const raw = row[c.key];
                const content = c.render ? c.render(raw, row, ri) : raw;
                const numCls = c.numeric ? " om-table__num" : "";
                return (
                  <td key={c.key} className={(alignCls(c.align) + numCls).trim() || undefined}>
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
