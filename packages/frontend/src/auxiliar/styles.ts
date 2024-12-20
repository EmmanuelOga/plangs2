/**
 * Some CSS styles we reuse across the app.
 */

export const VSCROLL = "overflow-hidden overflow-y-auto";

export const BAR = "bg-linear-to-b from-secondary to-background";
export const BORDER = "border-primary/85 border-dotted";

export const INPUT = "bg-background text-foreground placeholder:text-foreground/50 mx-2";

export const HOVER = "hover:bg-hiliteb/75 hover:text-hilitef cursor-pointer";
export const HOVER_ICON = "rounded p-1 hover:bg-primary/20 hover:text-hiliteb hover:ring-2 hover:ring-primary";
export const HOVER_ICON_BG = "rounded-2xl hover:bg-background/20 hover:text-hiliteb";

export const PROSE_BASIC = "prose dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl"; // 2xl:prose-2xl; // prose-green
export const PROSE = `${PROSE_BASIC} max-w-[80ch] mx-auto`;

/** Generate a stripped background image style. */
export function stripes(backdrop = true, col1 = "var(--color-stripes)", col2 = "var(--color-background)", size = "10px") {
  const grad = "radial-gradient(transparent 0, var(--color-background) 75%) top left / 100% 100%";
  const rlg = `repeating-linear-gradient(45deg, ${col1} 0, ${col1} 1px, ${col2} 0, ${col2} 50%) top left / ${size} ${size}`;
  return `background: ${grad}, ${rlg}; ${backdrop ? "backdrop-filter: blur(1.25px);" : ""}`;
}

/** Collect tailwind classes. Adding a semicolon at the end or start of a class string filters that string out. */
export function tw(...classes: (string | undefined | boolean | string[])[]): string {
  return classes
    .flat(5) // Arbirtrary depth to flatten 🤷‍♂ (in practice we don't really use more than 1 level).
    .filter(s => typeof s === "string" && !/^;|;$/.test(s))
    .join(" ");
}

/** Allow classList.toggle with more than one class. */
export function toggleClasses(element: HTMLElement | null | undefined, classes: string | string[], check: boolean) {
  if (!element) return;
  const all = Array.isArray(classes) ? classes : classes.split(" ");
  for (const c of all) element.classList.toggle(c, check);
}
