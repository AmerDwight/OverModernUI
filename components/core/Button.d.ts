import * as React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Control height. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Icon element rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary action control. Pill-shaped, token-driven; the primary variant
 * blooms an accent glow on hover.
 *
 * @startingPoint section="Core" subtitle="Pill button — 4 variants, 3 sizes" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
