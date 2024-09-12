/**
 * Utilities to type check DOM "id" and "class" attributes
 * that are used in both the frontend and the backend.
 */
import type { INPUT_PROPS } from "./browse";

/** Everything with an id can be keyed with these. */
// biome-ignore format: keep a single tag per line.
export type ELEM =
  | "facets"
  | "nav"
  | "plangInfo"
  | "plangs"
  | "side";

/** Elements keyed with ELEMS have a matching css class to select them all. */
// biome-ignore format: keep a single tag per line.
export type ELEMS = 
  | "plThumb";

/** Similar to ELEM, but for inputs. */
export type INPUT = keyof typeof INPUT_PROPS;

export type ID = `browse-elem-${ELEM}`;
export type CLASS = `browse-elems-${ELEMS}`;
export type INPUT_ID = `browse-input-${INPUT}`;

export const domId: (key: ELEM) => ID = (key) => `browse-elem-${key}`;
export const domInputId: (key: INPUT) => INPUT_ID = (key) => `browse-input-${key}`;
export const domClass: (key: ELEMS, others?: string) => `${CLASS} ${string}` = (key, others) => `browse-elems-${key} ${others ?? ""}`;

export function elem<T extends ELEM>(key: T): HTMLElement {
  const element = document.getElementById(domId(key));
  if (!(element instanceof HTMLElement)) throw new Error(`Element ${key} is not an HTMLElement. Actual: ${element}`);
  return element;
}

export function input<T extends INPUT>(key: T): HTMLElement {
  const element = document.getElementById(domInputId(key));
  if (!(element instanceof HTMLElement)) throw new Error(`Element ${key} is not an HTMLElement. Actual: ${element}`);
  return element;
}

export function elems<T extends ELEMS>(key: T): HTMLCollectionOf<HTMLElement> {
  const collection = document.getElementsByClassName(domClass(key));
  if (!(collection instanceof HTMLCollection) || collection.length === 0) throw new Error(`No elements found for class ${key}`);
  for (const element of collection) {
    if (!(element instanceof HTMLElement)) throw new Error(`Element ${key} is not an HTMLElement. Actual: ${element}`);
  }
  return collection as HTMLCollectionOf<HTMLElement>;
}
