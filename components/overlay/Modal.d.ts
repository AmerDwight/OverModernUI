import * as React from "react";

export interface ModalProps {
  /** Whether the modal is visible. Render is null when false. */
  open: boolean;
  /** Called on Escape, scrim click, or close button. Omit to hide the close affordances. */
  onClose?: () => void;
  /** Dialog title (display type). */
  title?: React.ReactNode;
  /** Supporting line under the title. */
  description?: React.ReactNode;
  /** Body content. */
  children?: React.ReactNode;
  /** Footer node — typically a row of Buttons. Sits on a sunken bar. */
  footer?: React.ReactNode;
  /** Width preset. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Dismiss when the backdrop is clicked. @default true */
  closeOnScrim?: boolean;
}

/**
 * Centered glass dialog over a blurred scrim. Escape and scrim-click close it;
 * spring-pops in. Compose `footer` from Buttons for actions.
 *
 * @startingPoint section="Overlay" subtitle="Modal — glass dialog, blurred scrim" viewport="720x460"
 */
export function Modal(props: ModalProps): JSX.Element | null;
