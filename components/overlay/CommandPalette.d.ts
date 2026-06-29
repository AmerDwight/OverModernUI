import * as React from "react";

export interface CommandItem {
  /** Visible label (also matched against the query). */
  label: string;
  /** Lucide icon name. */
  icon?: string;
  /** Section heading this item is grouped under (order preserved). */
  group?: string;
  /** Extra search terms, space-separated, not displayed. */
  keywords?: string;
  /** Trailing hint text (e.g. a path or context). */
  hint?: React.ReactNode;
  /** Shortcut key(s) rendered as kbd chips — a string or array. */
  shortcut?: string | string[];
  /** Invoked on Enter / click (the palette closes first). */
  onSelect?: () => void;
}

export interface CommandPaletteProps {
  /** Whether the palette is open. Renders null when false. */
  open: boolean;
  /** Called on Escape, scrim click, or after an item runs. */
  onClose?: () => void;
  /** Commands to show; filtered live by the query, grouped by `group`. */
  items: CommandItem[];
  /** Search input placeholder. */
  placeholder?: string;
  /** Message shown when nothing matches. */
  emptyText?: string;
}

/**
 * ⌘K command palette: fuzzy-filtered, grouped command list with full keyboard
 * navigation (↑/↓ to move, Enter to run, Esc to close) and kbd shortcut chips.
 * You own the open state and the hotkey binding.
 *
 * @startingPoint section="Overlay" subtitle="Command palette — ⌘K, keyboard nav" viewport="640x460"
 */
export function CommandPalette(props: CommandPaletteProps): JSX.Element | null;
