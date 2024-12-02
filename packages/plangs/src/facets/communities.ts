import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValString, Value } from "@plangs/auxiliar/value";
import type { VCommunity } from "@plangs/plangs/graph";
import type { VAppKey, VLibraryKey, VPlangKey, VTagKey, VToolKey } from "@plangs/plangs/graph/generated";
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

  apps: ((comm, flt) => flt.matches(key => comm.relApps.has(key))) as Pred<Filter<VAppKey>>,
  libraries: ((comm, flt) => flt.matches(key => comm.relLibraries.has(key))) as Pred<Filter<VLibraryKey>>,
  tags: ((comm, flt) => flt.matches(key => comm.relTags.has(key))) as Pred<Filter<VTagKey>>,
  plangs: ((com, flt) => flt.matches(key => com.relPlangs.has(key))) as Pred<Filter<VPlangKey>>,
  tools: ((comm, flt) => flt.matches(key => comm.relTools.has(key))) as Pred<Filter<VToolKey>>,
} as const;

export type CommunityFacetKey = keyof typeof COMMUNITY_FACET_PREDICATES;
