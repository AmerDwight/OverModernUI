import * as React from "react";

export interface AvatarProps {
  /** Image URL; falls back to initials from `name` */
  src?: string;
  /** Full name — used for initials and alt text */
  name?: string;
  /** @default "md" */
  size?: "sm" | "md" | "lg" | "xl";
  /** Use accent gradient fill for the initials state */
  accent?: boolean;
  /** Presence indicator dot */
  status?: "online" | "busy" | "away" | "offline";
}

/** User/entity avatar with image, initials fallback, and presence dot. */
export function Avatar(props: AvatarProps): JSX.Element;
