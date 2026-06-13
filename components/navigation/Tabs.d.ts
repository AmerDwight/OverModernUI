import * as React from "react";

export interface TabItem {
  value: string;
  label: React.ReactNode;
  /** Optional count chip */
  count?: number;
}

export interface TabsProps {
  /** Tabs as strings or {value,label,count} */
  tabs: (string | TabItem)[];
  /** Controlled active value */
  value?: string;
  /** Uncontrolled initial value */
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** @default "pill" */
  variant?: "pill" | "line";
}

/**
 * Segmented tab control. `pill` is the inset capsule style; `line` is an
 * underlined bottom-border style.
 *
 * @startingPoint section="Navigation" subtitle="Segmented tabs — pill & line" viewport="700x120"
 */
export function Tabs(props: TabsProps): JSX.Element;
