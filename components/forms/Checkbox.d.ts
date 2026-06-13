import * as React from "react";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  /** Render as a radio (round, dot fill) instead of a checkbox */
  radio?: boolean;
  name?: string;
  value?: string;
}

/** Checkbox / radio control with accent fill and animated mark. */
export function Checkbox(props: CheckboxProps): JSX.Element;
