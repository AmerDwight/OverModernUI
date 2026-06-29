import * as React from "react";

export interface TextareaProps {
  /** Field label. */
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — replaces hint and applies error styling. */
  error?: React.ReactNode;
  /** Mark the field required (adds an accent asterisk). */
  required?: boolean;
  /** Initial visible rows. @default 4 */
  rows?: number;
  /** Character cap. Enables the over-limit count color. */
  maxLength?: number;
  /** Show a live character counter at the trailing edge. @default false */
  showCount?: boolean;
  /** Minimum height (CSS value or px number). */
  minHeight?: number | string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * Multi-line text field matching the Input's label / hint / error pattern,
 * vertically resizable, with an optional live character counter.
 *
 * @startingPoint section="Forms" subtitle="Textarea — multiline + counter" viewport="560x300"
 */
export function Textarea(props: TextareaProps): JSX.Element;
