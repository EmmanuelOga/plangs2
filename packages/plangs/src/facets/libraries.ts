import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValNumber, ValString, Value } from "@plangs/auxiliar/value";
import type { VLibrary } from "@plangs/plangs/graph";
import type { VLicenseKey, VPlangKey, VPlatformKey, VTagKey } from "@plangs/plangs/graph/generated";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

type Pred<T extends Value<AnyValue>> = (library: VLibrary, value: T) => boolean;

/** Predicates to filter Libraries. */
export const LIBRARY_FACET_PREDICATES = {
  createdRecently: ((lib, date) => lib.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((lib, flt) => ret(lib.created.strYear, libraryYear => flt.matches(year => libraryYear === year))) as Pred<Filter<string>>,
  ghStars: ((lib, num) => lib.github.stars > num.value) as Pred<ValNumber>,
  licenses: ((lib, flt) => flt.matches(key => lib.relLicenses.has(key))) as Pred<Filter<VLicenseKey>>,
  name: ((lib, str) => lib.lcName.includes(str.value)) as Pred<ValString>,
  platforms: ((lib, flt) => flt.matches(key => lib.relPlatforms.has(key))) as Pred<Filter<VPlatformKey>>,
  releasedRecently: ((lib, date) => ret(lib.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,
  tags: ((lib, flt) => flt.matches(key => lib.relTags.has(key))) as Pred<Filter<VTagKey>>,
  writtenFor: ((lib, flt) => flt.matches(key => lib.relPlangs.has(key))) as Pred<Filter<VPlangKey>>,
  writtenWith: ((lib, flt) => flt.matches(key => lib.relWrittenWith.has(key))) as Pred<Filter<VPlangKey>>,
} as const;

export type LibraryFacetKey = keyof typeof LIBRARY_FACET_PREDICATES;
