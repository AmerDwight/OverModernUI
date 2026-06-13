import * as React from "react";

export interface PaginationProps {
  /** Current 1-based page. @default 1 */
  page?: number;
  /** Total number of pages. @default 1 */
  total?: number;
  /** Called with the next page number when a control is activated. */
  onChange?: (page: number) => void;
  /** Pages shown on each side of the current page before collapsing to "…". @default 1 */
  siblingCount?: number;
  /** Show the prev/next chevron buttons. @default true */
  showEdges?: boolean;
}

/**
 * Page navigation with mono tabular numerals, an accent-filled active page,
 * and automatic ellipsis collapsing around the current page.
 *
 * @startingPoint section="Data" subtitle="Pagination — ellipsis collapse, accent active" viewport="620x140"
 */
export function Pagination(props: PaginationProps): JSX.Element;
