import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValString, Value } from "@plangs/auxiliar/value";
import type { VApp, VCommunity, VLibrary, VPlang, VTag, VTool } from "@plangs/plangs/graph";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

type Pred<T extends Value<AnyValue>> = (community: VCommunity, value: T) => boolean;

/**
 * Predicates to filter Communities.
 */
export const COMMUNITY_FACET_PREDICATES = {
  // General
  createdRecently: ((comm, date) => comm.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((comm, flt) => ret(comm.created.strYear, communityYear => flt.matches(year => communityYear === year))) as Pred<Filter<string>>,
  name: ((comm, str) => comm.lcName.includes(str.value)) as Pred<ValString>,

  apps: ((comm, flt) => flt.matches(key => comm.relApps.has(key))) as Pred<Filter<VApp["key"]>>,
  libraries: ((comm, flt) => flt.matches(key => comm.relLibraries.has(key))) as Pred<Filter<VLibrary["key"]>>,
  tags: ((comm, flt) => flt.matches(key => comm.relTags.has(key))) as Pred<Filter<VTag["key"]>>,
  plangs: ((com, flt) => flt.matches(key => com.relPlangs.has(key))) as Pred<Filter<VPlang["key"]>>,
  tools: ((comm, flt) => flt.matches(key => comm.relTools.has(key))) as Pred<Filter<VTool["key"]>>,
} as const;

export type communityFacetKey = keyof typeof COMMUNITY_FACET_PREDICATES;

export function communityMatches(community: VCommunity, values: Map<communityFacetKey, AnyValue>): boolean {
  for (const [key, value] of values) {
    const pred = COMMUNITY_FACET_PREDICATES[key] as Pred<AnyValue>;
    if (!pred) console.error(`No predicate found for key: ${key}`);
    if (pred && value.isPresent && !pred(community, value)) return false;
  }
  return true;
}
