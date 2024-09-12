import type { ELEM, ELEMS, INPUT } from "@plangs/server/pages/browse_dom";

import { elem, elems, input } from "@plangs/server/pages/browse_dom";

export function getByIds(): Record<ELEM, HTMLElement> {
  const get = <T extends ELEM>(key: T) => ({ [key]: elem(key) }) as Record<T, HTMLElement>;
  return {
    ...get("facets"),
    ...get("nav"),
    ...get("plangInfo"),
    ...get("plangs"),
    ...get("side"),
  } as const;
}

export function getByClasses(): Record<ELEMS, HTMLCollectionOf<HTMLElement>> {
  const get = <T extends ELEMS>(key: T) => ({ [key]: elems(key) }) as Record<T, HTMLCollectionOf<HTMLElement>>;
  return {
    ...get("plThumb"),
  } as const;
}

/** Collect all inputs generated by the backend into a map. */
export function getInputs(): Record<INPUT, HTMLElement> {
  const get = <T extends INPUT>(key: T) => ({ [key]: input(key) }) as Record<T, HTMLElement>;
  return {
    ...get("plangName"),

    ...get("appearedAfter"),
    ...get("releasedAfter"),

    ...get("hasLogo"),
    ...get("hasReleases"),
    ...get("hasWikipedia"),
    ...get("isMainstream"),
    ...get("isTranspiler"),

    ...get("dialectOf"),
    ...get("extensions"),
    ...get("implements"),
    ...get("influenced"),
    ...get("influencedBy"),
    ...get("licenses"),
    ...get("paradigms"),
    ...get("platforms"),
    ...get("tags"),
    ...get("typeSystems"),
    ...get("writtenIn"),
  } as const;
}

/** Query the DOM for all relevant elements. */
export function getDom(): {
  readonly elem: Record<ELEM, HTMLElement>;
  readonly elems: Record<ELEMS, HTMLCollectionOf<HTMLElement>>;
  readonly inputs: Record<INPUT, HTMLElement>;
} {
  return {
    elem: getByIds(),
    elems: getByClasses(),
    inputs: getInputs(),
  } as const;
}
