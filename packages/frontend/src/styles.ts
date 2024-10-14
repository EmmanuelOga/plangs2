/**
 * {@fileoverview Some useful CSS styles }
 */

export const PROSE = "prose prose-green dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-[80ch] mx-auto";

export const BORDER = "border-primary/85 border-dotted";

export const HOVER = "hover:bg-yellow-300 hover:text-slate-800 cursor-pointer";
export const HOVER_LIST = ["bg-yellow-300", "text-slate-800"]; // for classList add/remove

/** Generate a stripped background image style. */
export function stripes(size = "10px", col1 = "var(--color-stripes)", col2 = "var(--color-background)") {
  const grad = "radial-gradient(transparent 0, var(--color-background) 75%) top left / 100% 100%";
  const rlg = `repeating-linear-gradient(45deg, ${col1} 0, ${col1} 1px, ${col2} 0, ${col2} 50%) top left / ${size} ${size}`;
  return `background: ${grad}, ${rlg};`;
}
