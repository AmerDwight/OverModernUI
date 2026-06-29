import * as React from "react";

export interface TagProps {
  /** Tag label. */
  children: React.ReactNode;
  /** Color treatment. @default "neutral" */
  variant?: "neutral" | "accent" | "success" | "warning" | "danger";
  /** Size. @default "sm" */
  size?: "sm" | "md";
  /** Lucide icon name shown before the label. */
  icon?: string;
  /** Show a leading status dot. @default false */
  dot?: boolean;
  /** Show a trailing remove button wired to this handler. */
  onClose?: (e: React.MouseEvent) => void;
}

/**
 * Compact removable tag / chip for filters, selected values, and labels.
 * Softer and more interactive than Badge (which is a mono uppercase status
 * marker) — Tag uses sentence-case body type and can be dismissed.
 *
 * @startingPoint section="Core" subtitle="Tag — removable chips" viewport="600x180"
 */
export function Tag(props: TagProps): JSX.Element;
