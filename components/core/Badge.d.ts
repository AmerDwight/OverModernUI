import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  variant?: "neutral" | "accent" | "success" | "warning" | "danger" | "solid";
  /** Show a leading status dot. @default false */
  dot?: boolean;
}

/** Small uppercase status/label pill in mono type. */
export function Badge(props: BadgeProps): JSX.Element;
