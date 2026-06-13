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
  /** Custom cell renderer: (value, row, index) => node. */
  render?: (value: any, row: Record<string, any>, index: number) => React.ReactNode;
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
  /** Field to use as the React key for each row. Falls back to index. */
  rowKey?: string;
}

/**
 * Data table with a mono uppercase header on a sunken bar, hairline row
 * dividers, hover highlight, and per-column alignment / numeric formatting /
 * custom cell renderers (drop in Badges, Avatars, Buttons).
 *
 * @startingPoint section="Data" subtitle="Table — sortable header, custom cells" viewport="760x420"
 */
export function Table(props: TableProps): JSX.Element;
