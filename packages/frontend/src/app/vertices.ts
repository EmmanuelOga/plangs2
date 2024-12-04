import { data } from "@plangs/frontend/auxiliar/dom";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexClass, TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { dataKey } from "@plangs/server/elements";

/** Attempt to load a vertex using the nearest data-key attribute. */
export function getClosestVertex(pg: PlangsGraph, target: EventTarget | null): TPlangsVertexClass | undefined {
  const elem = (target as Element).closest(`[${dataKey("vertex-key")}]`);
  const key = data(elem, "vertex-key");
  const vertexName = data(elem, "vertex-name");
  const vertices = key && vertexName && pg[vertexName as TPlangsVertexName];
  if (!vertices) return;
  return vertices.get(key as any);
}
