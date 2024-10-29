import { type CLKey, type IDKey, cssClass, cssID } from "@plangs/server/elements";

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export const elem = <T extends HTMLElement>(key: IDKey) => $<T>(`#${cssID(key)}`) ?? undefined;
export const elems = <T extends HTMLElement>(key: CLKey) => $$<T>(`.${cssClass(key)}`);

/** Return computed width and height of the element. */
export function size(el: HTMLElement): { width: number; height: number } {
  try {
    const style = getComputedStyle(el);
    return { width: Number.parseInt(style.width), height: Number.parseInt(style.height) };
  } catch (err) {
    console.error("Error getting size", el, err);
  }
  return { width: 0, height: 0 };
}

/** Call the same action on Enter or Click. */
export function onClickOnEnter(action: (ev: UIEvent) => void) {
  return {
    onClick: (ev: MouseEvent) => {
      ev.stopPropagation();
      action(ev);
    },
    onKeyDown: (ev: KeyboardEvent) => {
      ev.stopPropagation();
      if (ev.key === "Enter") {
        ev.preventDefault();
        action(ev);
      }
    },
  };
}

/** Check if the min-width breakpoint applies right now.  */
export const minWidthBP = (size: string) => window.matchMedia(`(min-width: ${size})`).matches ?? false;
