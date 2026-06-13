import * as React from "react";

export interface MenuItem {
  /** Item label. */
  label?: React.ReactNode;
  /** Lucide icon name shown before the label. */
  icon?: string;
  /** Click handler — the menu closes after it fires. */
  onClick?: () => void;
  /** Mono shortcut hint shown at the trailing edge (e.g. "⌘⌫"). */
  shortcut?: string;
  /** Render a trailing check (for toggle/selected rows). */
  checked?: boolean;
  /** "danger" tints the row rose. */
  variant?: "default" | "danger";
  disabled?: boolean;
  /** Use { type: "separator" } for a divider or { type: "label" } for a section caption. */
  type?: "separator" | "label";
}

export interface MenuProps {
  /** Trigger element — its onClick is augmented to toggle the menu. */
  trigger: React.ReactElement;
  /** Item rows, separators, and labels in order. */
  items: MenuItem[];
  /** Horizontal anchor relative to the trigger. @default "start" */
  align?: "start" | "end";
}

/**
 * Dropdown menu anchored to a trigger. Closes on outside-click, Escape, or
 * item select. Supports icons, shortcuts, checks, danger rows, separators,
 * and section labels.
 *
 * @startingPoint section="Overlay" subtitle="Menu — dropdown with icons & shortcuts" viewport="640x360"
 */
export function Menu(props: MenuProps): JSX.Element;
