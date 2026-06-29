import * as React from "react";

export interface EmptyStateProps {
  /** Leading icon — a Lucide name or a custom node. @default "inbox" */
  icon?: string | React.ReactNode;
  /** Headline. */
  title?: React.ReactNode;
  /** Supporting copy. */
  description?: React.ReactNode;
  /** Action row — typically a primary Button plus a secondary. */
  actions?: React.ReactNode;
  /** Wrap in a dashed bordered panel. @default false */
  bordered?: boolean;
}

/**
 * Centered zero-data / empty-result surface: framed icon, title, description,
 * and an action row to guide the next step.
 *
 * @startingPoint section="Feedback" subtitle="Empty state — icon, copy, actions" viewport="560x380"
 */
export function EmptyState(props: EmptyStateProps): JSX.Element;
