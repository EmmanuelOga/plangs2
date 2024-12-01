import { type PlangsGraph, VPlang } from "@plangs/plangs/graph";
import type { VPlangKey } from "@plangs/plangs/graph/generated";

/** Attempt to load a plang using the nearest data-key attribute. */
export function getPl(pg: PlangsGraph, target: EventTarget | null): VPlang | undefined {
  const keyHolder = (target as Element).closest("[data-vkey]") as HTMLElement;
  if (!keyHolder || !keyHolder.dataset.vertexKey) return;
  return pg.plang.get(keyHolder.dataset.vertexKey as VPlangKey);
}

/** Get the latest plang from local storage, or a default one. */
export function lastPlang(pg: PlangsGraph): VPlang | undefined {
  try {
    const { key, data } = JSON.parse(localStorage.getItem("last-plang") || "{}");
    // This instance will not be part of the plangs graph vertex map,
    // but that's okay, since it's only used for rendering once on load.
    return new VPlang(pg, key).merge(data);
  } catch (err) {
    console.warn(err);
  }
}
