import * as React from "react";

export interface TooltipProps {
  /** The element the tooltip is anchored to (hover/focus target). */
  children: React.ReactNode;
  /** Tooltip text or content. */
  content: React.ReactNode;
  /** Optional keyboard hint rendered as a mono chip (e.g. "⌘K"). */
  kbd?: React.ReactNode;
  /** Which side the tooltip appears on. @default "top" */
  side?: "top" | "bottom" | "left" | "right";
  /** Hover-open delay in ms. @default 80 */
  delay?: number;
}

/**
 * Hairline glass tooltip that blooms on hover or keyboard focus, with an
 * optional mono keyboard-shortcut chip. Anchored to any inline element.
 *
 * @startingPoint section="Overlay" subtitle="Tooltip — 4 sides, kbd hint" viewport="640x220"
 */
export function Tooltip(props: TooltipProps): JSX.Element;
