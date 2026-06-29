import * as React from "react";

export interface SpinnerProps {
  /** Preset size or an explicit pixel diameter. @default "md" */
  size?: "sm" | "md" | "lg" | number;
  /** Stroke color (CSS value). Defaults to the accent. */
  color?: string;
  /** Optional caption rendered below — also sets the aria-label. */
  label?: React.ReactNode;
  /** Rotation duration (CSS time, e.g. "0.6s"). */
  speed?: string;
}

/**
 * Indeterminate loading spinner — a rotating arc on a faint track. Inline by
 * default; pass `label` to render a centered captioned block.
 *
 * @startingPoint section="Core" subtitle="Spinner — indeterminate loader" viewport="520x180"
 */
export function Spinner(props: SpinnerProps): JSX.Element;
