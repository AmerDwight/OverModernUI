import * as React from "react";

export interface SliderProps {
  /** Field label (sits left of the live value). */
  label?: React.ReactNode;
  /** Range bounds. @default 0 / 100 */
  min?: number;
  max?: number;
  /** Step increment. @default 1 */
  step?: number;
  /** Controlled value. Omit for uncontrolled. */
  value?: number;
  defaultValue?: number;
  /** Fires with (nextValue, event). */
  onChange?: (value: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Show the current value at the trailing edge. @default true */
  showValue?: boolean;
  /** Format the displayed value (e.g. v => `${v}%`). */
  formatValue?: (value: number) => React.ReactNode;
  /** Tick labels rendered evenly below the track. */
  ticks?: React.ReactNode[];
  disabled?: boolean;
}

/**
 * Range slider with an accent-filled track, glowing thumb, live value
 * readout, and optional tick labels.
 *
 * @startingPoint section="Forms" subtitle="Slider — filled track, live value" viewport="560x220"
 */
export function Slider(props: SliderProps): JSX.Element;
