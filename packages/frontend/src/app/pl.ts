import type { NPlang, PlangsGraph } from "@plangs/plangs";

/** Attempt to load a plang using the nearest data-key attribute. */
export function getPl(pg: PlangsGraph, target: EventTarget | null): NPlang | undefined {
  const keyHolder = (target as Element).closest("[data-node-key]") as HTMLElement;
  if (!keyHolder || !keyHolder.dataset.nodeKey) return;
  return pg.nodes.pl.get(keyHolder.dataset.nodeKey as NPlang["key"]);
}

/** Get the latest plang from local storage, or a default one. */
export function lastPlang(pg: PlangsGraph): NPlang {
  try {
    const { key, data } = JSON.parse(localStorage.getItem("last-plang") || "{}");
    if (key && data) return pg.nodes.pl.set(key as NPlang["key"], data);
  } catch (err) {
    console.warn(err);
  }
  return pg.nodes.pl.set("pl+python", { name: "Python", description: "Python" });
}
