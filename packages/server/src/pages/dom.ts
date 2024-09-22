import { INPUT_PROPS } from "./browse";

/**
 * Utilities to type check DOM "id" and "class" attributes
 * that are used in both the frontend and the backend.
 */
export const FILTER_KEY = Object.keys(INPUT_PROPS) as (keyof typeof INPUT_PROPS)[];
export const ID_KEYS = ["todo", "filterToggle", "filters", ...FILTER_KEY] as const;
export const CL_KEYS = ["todo", "plThumb"] as const;

export type IDKey = (typeof ID_KEYS)[number];
export type CLKey = (typeof CL_KEYS)[number];

export function cssId(key: IDKey): `id-${IDKey}` {
  return `id-${key}`;
}

export function cssCl(key: CLKey): `cl-${CLKey}` {
  return `cl-${key}`;
}
