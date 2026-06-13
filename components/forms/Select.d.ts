import * as React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  /** Options as strings or {value,label}. Alternatively pass <option> children. */
  options?: (string | SelectOption)[];
  /** Disabled placeholder shown first */
  placeholder?: string;
}

/** Styled native select with custom chevron and accent focus ring. */
export function Select(props: SelectProps): JSX.Element;
