import * as React from "react";

export interface DrawerProps {
  /** Whether the drawer is visible. Renders null when false. */
  open: boolean;
  /** Called on Escape, scrim click, or close button. */
  onClose?: () => void;
  /** Header title. */
  title?: React.ReactNode;
  /** Supporting line under the title. */
  description?: React.ReactNode;
  /** Body content (scrolls). */
  children?: React.ReactNode;
  /** Footer node — typically a row of Buttons on a sunken bar. */
  footer?: React.ReactNode;
  /** Edge the panel slides from. @default "right" */
  side?: "right" | "left" | "bottom";
  /** Panel width for left/right (CSS value or px number). @default 420 */
  width?: number | string;
  /** Dismiss when the backdrop is clicked. @default true */
  closeOnScrim?: boolean;
}

/**
 * Edge-anchored sliding panel over a blurred scrim — for detail views,
 * filters, and settings. Spring-slides from right / left / bottom; Escape and
 * scrim-click close it. Use Modal for centered, focused dialogs.
 *
 * @startingPoint section="Overlay" subtitle="Drawer — edge sheet, 3 sides" viewport="820x520"
 */
export function Drawer(props: DrawerProps): JSX.Element | null;
