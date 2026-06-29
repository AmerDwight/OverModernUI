import * as React from "react";

export interface TimelineItem {
  /** Event title. */
  title: React.ReactNode;
  /** Supporting line under the title. */
  description?: React.ReactNode;
  /** Right-aligned mono timestamp. */
  time?: React.ReactNode;
  /** Lucide icon name shown in the node (otherwise a small dot). */
  icon?: string;
  /** Tints the node — maps to semantic colors. */
  variant?: "success" | "warning" | "danger" | "accent";
  /** Extra node below the description (e.g. a Badge, Avatar row, or Button). */
  meta?: React.ReactNode;
}

export interface TimelineProps {
  /** Events, newest first by convention. */
  items: TimelineItem[];
}

/**
 * Vertical event timeline with connector rail. Each node is a colored dot or
 * framed icon; rows carry a title, timestamp, description, and optional meta
 * slot. Good for deploy history, audit logs, and activity feeds.
 *
 * @startingPoint section="Data" subtitle="Timeline — connected event rail" viewport="560x440"
 */
export function Timeline(props: TimelineProps): JSX.Element;
