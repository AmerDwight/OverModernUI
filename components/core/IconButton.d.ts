import * as React from "react";

export interface IconButtonProps {
  /** Lucide icon name (string) or a React node */
  icon: string | React.ReactNode;
  /** @default "ghost" */
  variant?: "ghost" | "solid" | "accent";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Accessible label (also used as tooltip title) */
  label?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/** Square icon-only button for toolbars and dense controls. */
export function IconButton(props: IconButtonProps): JSX.Element;
