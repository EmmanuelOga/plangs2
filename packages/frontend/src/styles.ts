/**
 * {@fileoverview Some useful CSS styles }
 */

export const NOWRAP_TEXT = "overflow-hidden text-ellipsis whitespace-nowrap";

/** Generate a stripped background image style. */
export function stripes(size = "10px", col1 = "var(--color-secondary)", col2 = "var(--color-background)") {
  const grad = "radial-gradient(transparent 0, var(--color-background) 100%) top left / 100% 100%";
  const rlg = `repeating-linear-gradient(45deg, ${col1} 0, ${col1} 1px, ${col2} 0, ${col2} 50%) top left / ${size} ${size}`;
  return `background: ${grad}, ${rlg};`;
}
