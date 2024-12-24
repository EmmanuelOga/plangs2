/**
 * Some CSS styles we reuse across the app.
 */

export const HOVER = "hover:bg-hiliteb/75 hover:text-hilitef cursor-pointer";
export const HOVER_ICON = "rounded p-1 hover:text-hiliteb hover:ring-1 hover:ring-primary";
export const HOVER_ICON_BG = "rounded-2xl hover:bg-background/20 hover:text-hiliteb";

export const BORDER = "border-primary/85 border-dotted";
export const INPUT = "bg-background text-foreground placeholder:text-foreground/50";
export const PROSE_BASIC = "prose dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl";
export const PROSE = `${PROSE_BASIC} max-w-[80ch] mx-auto`;
export const VSCROLL = "overflow-hidden overflow-y-auto";

export const gradRadial = (col1 = "transparent", col2 = "var(--color-background)") => `radial-gradient(${col1} 0, ${col2}  75%) top left / 100% 100%`;

export const gradLinear = (col1 = "var(--color-stripes)", col2 = "var(--color-background)", size = "10px") =>
  `repeating-linear-gradient(45deg, ${col1} 0, ${col1} 1px, ${col2} 0, ${col2} 50%) top left / ${size} ${size}`;

export const background = ({ bgs = [gradRadial(), gradLinear()], backdrop = "1.25px" } = {}) =>
  `background: ${bgs.join(", ")};${backdrop ? ` backdrop-filter: blur(${backdrop});` : ""}`;

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
