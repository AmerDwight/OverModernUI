import * as React from "react";

export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "arrow-right", "settings", "zap") */
  name: string;
  /** Pixel size (width & height). @default 20 */
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Line icon from the Lucide set, rendered via CSS mask so it inherits
 * currentColor. Browse names at lucide.dev.
 */
export function Icon(props: IconProps): JSX.Element;
