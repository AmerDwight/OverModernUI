import * as React from "react";

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional trailing label */
  label?: React.ReactNode;
  disabled?: boolean;
}

/** Toggle switch — accent track + spring thumb when on. */
export function Switch(props: SwitchProps): JSX.Element;
