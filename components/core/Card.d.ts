import * as React from "react";

export interface CardProps {
  children?: React.ReactNode;
  /** Surface style. @default "raised" */
  variant?: "raised" | "glass";
  /** Lift + accent border on hover. @default false */
  interactive?: boolean;
  /** Optional mono uppercase eyebrow rendered at the top */
  eyebrow?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Content surface. `raised` is the solid default; `glass` is the signature
 * translucent blurred panel.
 *
 * @startingPoint section="Core" subtitle="Content surface — raised & glass" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
