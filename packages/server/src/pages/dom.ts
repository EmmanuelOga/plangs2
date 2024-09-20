/**
 * Utilities to type check DOM "id" and "class" attributes
 * that are used in both the frontend and the backend.
 */
import type { INPUT_PROPS } from "./browse";

/** Everything with an id can be keyed with these. */
// biome-ignore format: keep a single tag per line.
export type ELEM = "TODO";

/** Elements keyed with ELEMS have a matching css class to select them all. */
// biome-ignore format: keep a single tag per line.
export type ELEMS = "TODO";

/** Similar to ELEM, but for inputs. */
export type INPUT = keyof typeof INPUT_PROPS;

export type ID = `elem-${ELEM}`;
export type CLASS = `elems-${ELEMS}`;
export type INPUT_ID = `input-${INPUT}`;

export const domId: (key: ELEM) => ID = key => `elem-${key}`;
export const domInputId: (key: INPUT) => INPUT_ID = key => `input-${key}`;
export const domClass: (key: ELEMS, others?: string) => `${CLASS} ${string}` = (key, others) => `elems-${key} ${others ?? ""}`;

export function elem<T extends ELEM>(key: T): HTMLElement {
  const element = document.getElementById(domId(key));
  if (!(element instanceof HTMLElement)) console.warn(`Element ${key} is not an HTMLElement. Actual: ${element}`);
  return element as HTMLElement;
}

export function input<T extends INPUT>(key: T): HTMLElement {
  const element = document.getElementById(domInputId(key));
  if (!(element instanceof HTMLElement)) console.warn(`Element ${key} is not an HTMLElement. Actual: ${element}`);
  return element as HTMLElement;
}

export function elems<T extends ELEMS>(key: T): HTMLCollectionOf<HTMLElement> {
  const collection = document.getElementsByClassName(domClass(key));
  if (!(collection instanceof HTMLCollection) || collection.length === 0) console.warn(`No elements found for class ${key}`);
  for (const element of collection) {
    if (!(element instanceof HTMLElement)) console.warn(`Element ${key} is not an HTMLElement. Actual: ${element}`);
  }
  return collection as HTMLCollectionOf<HTMLElement>;
}
