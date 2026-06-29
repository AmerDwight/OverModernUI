import * as React from "react";

export interface StatCardProps {
  /** Lucide icon name shown in the framed badge. */
  icon?: string;
  /** Mono uppercase metric label. */
  label: React.ReactNode;
  /** Primary figure (large display type). */
  value: React.ReactNode;
  /** Small trailing unit on the value (e.g. "ms", "/min"). */
  unit?: React.ReactNode;
  /** Change indicator text (e.g. "+12.4%"). Color/arrow derive from its sign unless `trend` is set. */
  delta?: React.ReactNode;
  /** Force the delta tone/arrow. Otherwise inferred from the delta's leading sign. */
  trend?: "up" | "down" | "flat";
  /** Caption beside the delta (e.g. "vs last hour"). */
  sub?: React.ReactNode;
  /** Sparkline data points — renders a subtle trend line in the corner. */
  spark?: number[];
}

/**
 * Metric tile: framed icon, mono label, large tabular value with unit, a
 * trend-tinted delta, and an optional corner sparkline. The console
 * Overview's KPI cards as a reusable primitive.
 *
 * @startingPoint section="Data" subtitle="Stat card — KPI tile with sparkline" viewport="760x200"
 */
export function StatCard(props: StatCardProps): JSX.Element;
