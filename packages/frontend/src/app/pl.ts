import { type PlangsGraph, VPlang } from "@plangs/plangs/graph";

/** Attempt to load a plang using the nearest data-key attribute. */
export function getPl(pg: PlangsGraph, target: EventTarget | null): VPlang | undefined {
  const keyHolder = (target as Element).closest("[data-node-key]") as HTMLElement;
  if (!keyHolder || !keyHolder.dataset.nodeKey) return;
  return pg.plang.get(keyHolder.dataset.nodeKey as VPlang["key"]);
}

/** Get the latest plang from local storage, or a default one. */
export function lastPlang(pg: PlangsGraph): VPlang | undefined {
  try {
    const { key, data } = JSON.parse(localStorage.getItem("last-plang") || "{}");
    // This instance will not be part of the plangs graph node map,
    // but that's okay, since it's only used for rendering once on load.
    return new VPlang(pg, key).merge(data);
  } catch (err) {
    console.warn(err);
  }
}
