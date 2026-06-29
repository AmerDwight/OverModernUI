import * as React from "react";

export interface BreadcrumbItem {
  /** Visible label. */
  label: React.ReactNode;
  /** Lucide icon name shown before the label. */
  icon?: string;
  /** Anchor href — renders the crumb as a link (ignored on the last item). */
  href?: string;
  /** Click handler — renders the crumb as a button (ignored on the last item). */
  onClick?: () => void;
}

export interface BreadcrumbProps {
  /** Path items, root first; the last is rendered as the current page. */
  items: BreadcrumbItem[];
  /** Separator between crumbs — a Lucide icon name or a custom node. @default "chevron-right" */
  separator?: string | React.ReactNode;
  /** Collapse the middle into an ellipsis when more than this many items. 0 = never. @default 0 */
  maxItems?: number;
}

/**
 * Path breadcrumb. Links/buttons for ancestors, plain current page, optional
 * middle-collapse to an ellipsis for deep paths.
 *
 * @startingPoint section="Navigation" subtitle="Breadcrumb — path nav, collapse" viewport="680x140"
 */
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
