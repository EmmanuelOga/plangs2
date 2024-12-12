import type { AnyValue } from "@plangs/auxiliar/value";
import type { Vertices } from "@plangs/graphgen/library";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { APP_FACET_PREDICATES } from "./apps";
import { COMMUNITY_FACET_PREDICATES } from "./communities";
import { LEARNING_FACET_PREDICATES } from "./learning";
import { LIBRARY_FACET_PREDICATES } from "./libraries";
import { PLANG_FACET_PREDICATES } from "./plangs";
import { SUBSYSTEM_FACET_PREDICATES } from "./subsystems";
import { TOOL_FACET_PREDICATES } from "./tools";

/** A Map of predicates from an arbitrary name to a predicate function. */
export type Predicates<PredKey extends string> = Record<PredKey, (vertex: TPlangsVertex, value: AnyValue) => boolean>;

/** Match a single Vertex against several predicates. */
export function matchVertex<PredKey extends string>(
  vertex: TPlangsVertex,
  predicates: Predicates<PredKey>,
  facetValues: Map<PredKey, AnyValue>,
): boolean {
  for (const [key, value] of facetValues) {
    const pred = predicates[key];
    if (!pred) console.error(`No predicate found for key: ${key}`);
    if (pred && value.isPresent && !pred(vertex, value)) return false;
  }
  return true;
}

/** Match all vertices of a container against several predicates. */
export function matchVertices<T extends TPlangsVertex, PredKey extends string>(
  vertices: Vertices<T>,
  facetValues: Map<PredKey, AnyValue>,
  limit = -1,
): Set<T["key"]> {
  let predicates = vertexPredicates(vertices.name as TPlangsVertexName) as Predicates<string> | undefined;
  const result = new Set<T["key"]>();

  if (!predicates) {
    console.warn(`No predicates found for vertex name: ${vertices.name}`);
    predicates = {};
  }

  for (const vertex of vertices.values) {
    if (limit >= 0 && result.size >= limit) break;
    if (matchVertex(vertex, predicates, facetValues)) result.add(vertex.key);
  }
  return result;
}

/** Return the available facet predicates for the given Vertex name. */
export function vertexPredicates(name: TPlangsVertexName) {
  switch (name) {
    case "app":
      return APP_FACET_PREDICATES;
    case "community":
      return COMMUNITY_FACET_PREDICATES;
    case "learning":
      return LEARNING_FACET_PREDICATES;
    case "library":
      return LIBRARY_FACET_PREDICATES;
    case "plang":
      return PLANG_FACET_PREDICATES;
    case "tool":
      return TOOL_FACET_PREDICATES;
    case "subsystem":
      return SUBSYSTEM_FACET_PREDICATES;
  }
}
