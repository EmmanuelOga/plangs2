/**
 * {@fileoverview Some useful CSS styles }
 */

export const PROSE = "prose prose-green dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-[80ch] mx-auto";

export const BORDER = "border-primary/85 border-dotted";
export const BAR = "bg-linear-to-b from-secondary to-background";

export const HOVER = "hover:bg-hiliteb hover:text-hilitef cursor-pointer";
export const HOVER_LIST = ["bg-hiliteb", "text-hilitef"]; // for classList add/remove

export const HOVER_SVG = "hover:stroke-1 hover:stroke-hiliteb";
export const HOVER_SVG_GROUP = "group-hover:stroke-1 group-hover:stroke-hiliteb";

export const INPUT = "bg-background text-foreground placeholder:text-foreground/50";

/** Generate a stripped background image style. */
export function stripes(size = "10px", col1 = "var(--color-stripes)", col2 = "var(--color-background)") {
  const grad = "radial-gradient(transparent 0, var(--color-background) 75%) top left / 100% 100%";
  const rlg = `repeating-linear-gradient(45deg, ${col1} 0, ${col1} 1px, ${col2} 0, ${col2} 50%) top left / ${size} ${size}`;
  return `background: ${grad}, ${rlg};`;
}
