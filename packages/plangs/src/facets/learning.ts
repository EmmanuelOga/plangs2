import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValNumber, ValString, Value } from "@plangs/auxiliar/value";
import type { VApp, VLearning, VLibrary, VLicense, VPlang, VPlatform, VTag, VTool } from "@plangs/plangs/graph";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

type Pred<T extends Value<AnyValue>> = (learning: VLearning, value: T) => boolean;

/**
 * Predicates to filter Learning Resources.
 */
export const LEARNING_FACET_PREDICATES = {
  createdRecently: ((learn, date) => learn.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((learn, flt) => ret(learn.created.strYear, learningYear => flt.matches(year => learningYear === year))) as Pred<Filter<string>>,
  name: ((learn, str) => learn.lcName.includes(str.value)) as Pred<ValString>,

  apps: ((learn, flt) => flt.matches(key => learn.relApps.has(key))) as Pred<Filter<VApp["key"]>>,
  libraries: ((learn, flt) => flt.matches(key => learn.relLibraries.has(key))) as Pred<Filter<VLibrary["key"]>>,
  plangs: ((learn, flt) => flt.matches(key => learn.relPlangs.has(key))) as Pred<Filter<VPlang["key"]>>,
  tags: ((learn, flt) => flt.matches(key => learn.relTags.has(key))) as Pred<Filter<VTag["key"]>>,
  tools: ((learn, flt) => flt.matches(key => learn.relTools.has(key))) as Pred<Filter<VTool["key"]>>,
} as const;

export type learningFacetKey = keyof typeof LEARNING_FACET_PREDICATES;

export function learningMatches(learning: VLearning, values: Map<learningFacetKey, AnyValue>): boolean {
  for (const [key, value] of values) {
    const pred = LEARNING_FACET_PREDICATES[key] as Pred<AnyValue>;
    if (!pred) console.error(`No predicate found for key: ${key}`);
    if (pred && value.isPresent && !pred(learning, value)) return false;
  }
  return true;
}
