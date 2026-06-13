import * as React from "react";

export interface ToastProps {
  title?: React.ReactNode;
  message?: React.ReactNode;
  /** @default "info" */
  variant?: "info" | "success" | "warning" | "danger";
  /** Show a dismiss button; called on click */
  onClose?: () => void;
}

/** Notification toast with semantic accent rail and icon. */
export function Toast(props: ToastProps): JSX.Element;
