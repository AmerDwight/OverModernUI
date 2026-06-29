import * as React from "react";

export interface TableColumn {
  /** Key into each row object. */
  key: string;
  /** Header label. */
  header: React.ReactNode;
  /** Cell + header alignment. @default "left" */
  align?: "left" | "center" | "right";
  /** Fixed column width (CSS value). */
  width?: string;
  /** Render this column's value in mono tabular numerals. */
  numeric?: boolean;
  /** Make the header click-to-sort. Cycles asc → desc → off. */
  sortable?: boolean;
  /** Custom comparator (a, b, rowA, rowB) => number. Defaults to smart numeric/locale compare. */
  compare?: (a: any, b: any, rowA?: Record<string, any>, rowB?: Record<string, any>) => number;
  /** Custom cell renderer: (value, row, index) => node. */
  render?: (value: any, row: Record<string, any>, index: number) => React.ReactNode;
}

export interface TableSort {
  key: string;
  dir: "asc" | "desc";
}

export interface TableProps {
  /** Column definitions, in display order. */
  columns: TableColumn[];
  /** Row objects keyed by each column's `key`. */
  rows: Record<string, any>[];
  /** Tighter row padding. @default false */
  dense?: boolean;
  /** Highlight rows on hover. @default true */
  hover?: boolean;
  /** Field to use as the React key + selection key for each row. Falls back to index. */
  rowKey?: string;
  /** Show a leading checkbox column with select-all. @default false */
  selectable?: boolean;
  /** Controlled selection — array of row keys. Omit for uncontrolled. */
  selected?: (string | number)[];
  /** Fires with the next selected-keys array. */
  onSelectionChange?: (keys: (string | number)[]) => void;
  /** Initial sort (uncontrolled). */
  defaultSort?: TableSort | null;
  /** Fires when the sort changes (null = cleared). */
  onSortChange?: (sort: TableSort | null) => void;
}

/**
 * Data table: mono uppercase header, hairline dividers, hover highlight,
 * per-column alignment / numeric formatting / custom cell renderers, plus
 * optional click-to-sort headers and a selectable checkbox column with
 * select-all (indeterminate) state.
 *
 * @startingPoint section="Data" subtitle="Table — sort, select, custom cells" viewport="780x460"
 */
export function Table(props: TableProps): JSX.Element;
