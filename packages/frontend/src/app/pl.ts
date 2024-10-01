import type { NPlang, PlangsGraph } from "@plangs/plangs/index";

/** Attempt to load a plang using the nearest data-key attribute. */
export function getPl(pg: PlangsGraph, target: EventTarget | null): NPlang | undefined {
  const keyHolder = (target as Element).closest("[data-key]") as HTMLElement;
  if (!keyHolder || !keyHolder.dataset.key) return;
  return pg.nodes.pl.get(keyHolder.dataset.key as NPlang["key"]);
}
