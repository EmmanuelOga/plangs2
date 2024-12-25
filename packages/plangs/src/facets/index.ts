import type { Map2 } from "@plangs/auxiliar/map2";
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
  mode: "all" | "any" = "any",
): boolean {
  let someFilter = false;

  for (const [key, value] of facetValues) {
    if (!value.isPresent) continue; // This facet is not set, so we skip it.
    someFilter = true;

    const pred = predicates[key];
    if (!pred) {
      console.error(`No predicate found for key: ${key}`);
      continue;
    }

    const predResult = pred(vertex, value);
    if (mode === "all" && !predResult) return false;
    if (mode === "any" && predResult) return true;
  }

  if (!someFilter) return true; // No filters set, so we can't filter the vertex out.

  // If we get here in mode "all", all predicates matched.
  // If we get here in mode "any", no predicates matched.
  return mode === "all";
}

/**
 * Match all vertices of a container against several predicates.
 * We can match a vertex if it complies with all predicates or any of them.
 */
export function matchVertices<T extends TPlangsVertex, PredKey extends string>(
  vertices: Vertices<T>,
  facetValues: Map<PredKey, AnyValue>,
  mode: "all" | "any" = "all",
): Set<T["key"]> {
  const predicates = vertexPredicates(vertices.name as TPlangsVertexName) as Predicates<string> | undefined;

  // If we don't have predicates, we can't filter anything out.
  if (!predicates) {
    console.warn(`No predicates found for vertex name: ${vertices.name}`);
    return new Set(vertices.keys);
  }

  return new Set([...vertices.values].filter(v => matchVertex(v, predicates, facetValues, mode)).map(v => v.key));
}

/**
 * Match all vertices of a container against several predicates.
 * This function is used to match against filters from different groups.
 * We can unite or intersect the results from the filters of different groups.
 *
 * NOTE: if the facetValues is empty, it will return all vertices, but in a roundabout way.
 * Is more efficient to don't even call this function in that case.
 */
export function matchVerticesFromGroups<T extends TPlangsVertex, PredKey extends string>(
  vertices: Vertices<T>,
  facetValues: Map2<string, PredKey, AnyValue>,
  mode: "all" | "any" = "any",
): Set<T["key"]> {
  // In "all" mode, we start with all vertices and remove (intersect) results.
  // In "any" mode we start with an empty set and add (union) results.
  let results = mode === "all" ? new Set(vertices.keys) : new Set<T["key"]>();

  for (const [_, fkValueMap] of facetValues.entries()) {
    const groupResult = matchVertices(vertices, fkValueMap, "all"); // Per group match all set filters.

    // To match all, we can exit early as soon as one group has no results.
    if (mode === "all") {
      if (groupResult.size === 0) return new Set(); // Intersection will be empty.
      results = results.intersection(groupResult);
      if (results.size === 0) return results; // No vertex matched
    } else {
      // For "any", we need to test all groups and union the results.
      results = results.union(groupResult);
    }
  }

  return results;
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
