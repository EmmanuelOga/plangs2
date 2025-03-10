import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { StrDate } from "@plangs/auxiliar/str_date";
import type { AnyValue, ValString, Value } from "@plangs/auxiliar/value";
import type { VLearning } from "@plangs/plangs/graph";
import type { VAppKey, VLibraryKey, VPlangKey, VTagKey, VToolKey } from "@plangs/plangs/graph/generated";

type Pred<T extends Value<AnyValue>> = (learning: VLearning, value: T) => boolean;

/** Predicates to filter Learning Resources. */
export const LEARNING_FACET_PREDICATES = {
  apps: ((learn, flt) => flt.matches(key => learn.relApps.has(key))) as Pred<Filter<VAppKey>>,
  createdRecently: ((learn, date) => learn.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((learn, flt) => ret(learn.created.strYear, learningYear => flt.matches(year => learningYear === year))) as Pred<Filter<string>>,
  libraries: ((learn, flt) => flt.matches(key => learn.relLibraries.has(key))) as Pred<Filter<VLibraryKey>>,
  name: ((learn, str) => learn.lcName.includes(str.value)) as Pred<ValString>,
  plangs: ((learn, flt) => flt.matches(key => learn.relPlangs.has(key))) as Pred<Filter<VPlangKey>>,
  tags: ((learn, flt) => flt.matches(key => learn.relTags.has(key))) as Pred<Filter<VTagKey>>,
  tools: ((learn, flt) => flt.matches(key => learn.relTools.has(key))) as Pred<Filter<VToolKey>>,
} as const;

export type LearningFacetKey = keyof typeof LEARNING_FACET_PREDICATES;
