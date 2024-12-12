import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValNumber, ValString, Value } from "@plangs/auxiliar/value";
import type { VSubsystem } from "@plangs/plangs/graph";
import type { VLicenseKey, VPlangKey, VPlatformKey, VTagKey } from "@plangs/plangs/graph/generated";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

type Pred<T extends Value<AnyValue>> = (sys: VSubsystem, value: T) => boolean;

/** Predicates to filter Apps. */
export const SUBSYSTEM_FACET_PREDICATES = {
  createdRecently: ((sys, date) => sys.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((sys, flt) => ret(sys.created.strYear, appYear => flt.matches(year => appYear === year))) as Pred<Filter<string>>,
  ghStars: ((sys, num) => sys.github.stars > num.value) as Pred<ValNumber>,
  licenses: ((sys, flt) => flt.matches(key => sys.relLicenses.has(key))) as Pred<Filter<VLicenseKey>>,
  name: ((sys, str) => sys.lcName.includes(str.value)) as Pred<ValString>,
  platforms: ((sys, flt) => flt.matches(key => sys.relPlatforms.has(key))) as Pred<Filter<VPlatformKey>>,
  releasedRecently: ((sys, date) => ret(sys.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,
  tags: ((sys, flt) => flt.matches(key => sys.relTags.has(key))) as Pred<Filter<VTagKey>>,
  writtenWith: ((sys, flt) => flt.matches(key => sys.relWrittenWith.has(key))) as Pred<Filter<VPlangKey>>,
} as const;

export type SubsystemFacetKey = keyof typeof SUBSYSTEM_FACET_PREDICATES;
