import * as React from "react";

export interface AlertProps {
  /** Semantic tone — sets color, soft fill, and default icon. @default "info" */
  variant?: "info" | "success" | "warning" | "danger";
  /** Bold title line. */
  title?: React.ReactNode;
  /** Message body. */
  children?: React.ReactNode;
  /** Override the leading icon (Lucide name), or pass null to remove it. */
  icon?: string | null;
  /** Action row — typically small Buttons. */
  actions?: React.ReactNode;
  /** Show a dismiss button wired to this handler. */
  onClose?: () => void;
}

/**
 * Inline alert / banner with a soft tinted fill, semantic icon, optional
 * title, action row, and dismiss button. For toast-style transient
 * notifications use Toast instead.
 *
 * @startingPoint section="Feedback" subtitle="Alert — 4 tones, actions, dismiss" viewport="640x360"
 */
export function Alert(props: AlertProps): JSX.Element;
