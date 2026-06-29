import * as React from "react";

export interface PopoverProps {
  /** Trigger element — its onClick is augmented to toggle the popover. */
  trigger: React.ReactElement;
  /** Rich, interactive content (forms, lists, buttons). */
  children: React.ReactNode;
  /** Optional bold title row. */
  title?: React.ReactNode;
  /** Vertical placement relative to the trigger. @default "bottom" */
  side?: "bottom" | "top";
  /** Horizontal edge alignment. @default "start" */
  align?: "start" | "end";
  /** Controlled open state. Omit for uncontrolled. */
  open?: boolean;
  /** Fires with the next open state. */
  onOpenChange?: (open: boolean) => void;
}

/**
 * Floating panel anchored to a trigger with an arrow — heavier than a Tooltip,
 * holds interactive content (forms, filters, mini-menus). Closes on
 * outside-click or Escape. Use Tooltip for plain hover hints, Menu for action
 * lists.
 *
 * @startingPoint section="Overlay" subtitle="Popover — interactive anchored panel" viewport="640x380"
 */
export function Popover(props: PopoverProps): JSX.Element;
