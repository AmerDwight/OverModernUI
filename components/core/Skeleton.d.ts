import * as React from "react";

export interface SkeletonProps {
  /** Shape. @default "rect" */
  variant?: "rect" | "text" | "circle";
  /** Width (CSS value or px number). */
  width?: number | string;
  /** Height (CSS value or px number). For circle, sets the diameter. */
  height?: number | string;
  /** For variant="text": number of stacked lines (last is shortened). @default 1 */
  lines?: number;
  /** Override border radius. */
  radius?: number | string;
  style?: React.CSSProperties;
}

/**
 * Shimmering placeholder for content that is still loading. Rect, text
 * (single or multi-line), and circle shapes; respects reduced-motion.
 *
 * @startingPoint section="Core" subtitle="Skeleton — loading placeholders" viewport="560x240"
 */
export function Skeleton(props: SkeletonProps): JSX.Element;
