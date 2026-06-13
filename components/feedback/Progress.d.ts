import * as React from "react";

export interface ProgressProps {
  /** Current value @default 0 */
  value?: number;
  /** Max value @default 100 */
  max?: number;
  label?: React.ReactNode;
  /** Show the percent readout on the right */
  showValue?: boolean;
  /** Animated indeterminate state */
  indeterminate?: boolean;
}

/** Linear progress bar with azure→cyan gradient fill and glow. */
export function Progress(props: ProgressProps): JSX.Element;
