/**
 * {@fileoverview Some useful CSS styles }
 */

export const NOWRAP_TEXT = "overflow-hidden text-ellipsis whitespace-nowrap";

export const HOVER = "hover:bg-yellow-200 hover:text-slate-800 cursor-pointer";

/** Generate a stripped background image style. */
export function stripes(size = "10px", col1 = "var(--color-secondary)", col2 = "var(--color-background)") {
  const grad = "radial-gradient(transparent 0, var(--color-background) 75%) top left / 100% 100%";
  const rlg = `repeating-linear-gradient(45deg, ${col1} 0, ${col1} 1px, ${col2} 0, ${col2} 50%) top left / ${size} ${size}`;
  return `background: ${grad}, ${rlg};`;
}
