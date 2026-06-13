import * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Field label rendered above the control */
  label?: string;
  /** Helper text below the field */
  hint?: string;
  /** Error message — switches the field into the error state */
  error?: string;
  required?: boolean;
  /** Leading icon node (e.g. <Icon name="search" size={16} className="lead" />) */
  iconLeft?: React.ReactNode;
}

/**
 * Text input with label, hint/error states, and optional leading icon.
 *
 * @startingPoint section="Forms" subtitle="Text input with label & states" viewport="700x140"
 */
export function Input(props: InputProps): JSX.Element;
