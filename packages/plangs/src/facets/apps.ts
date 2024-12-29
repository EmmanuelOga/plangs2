import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { StrDate } from "@plangs/auxiliar/str_date";
import type { AnyValue, ValNumber, ValString, Value } from "@plangs/auxiliar/value";
import type { VApp } from "@plangs/plangs/graph";
import type { VLicenseKey, VPlangKey, VPlatformKey, VTagKey } from "@plangs/plangs/graph/generated";

type Pred<T extends Value<AnyValue>> = (app: VApp, value: T) => boolean;

/** Predicates to filter Apps. */
export const APP_FACET_PREDICATES = {
  createdRecently: ((app, date) => app.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((app, flt) => ret(app.created.strYear, appYear => flt.matches(year => appYear === year))) as Pred<Filter<string>>,
  ghStars: ((app, num) => app.github.stars > num.value) as Pred<ValNumber>,
  licenses: ((app, flt) => flt.matches(key => app.relLicenses.has(key))) as Pred<Filter<VLicenseKey>>,
  name: ((app, str) => app.lcName.includes(str.value)) as Pred<ValString>,
  platforms: ((app, flt) => flt.matches(key => app.relPlatforms.has(key))) as Pred<Filter<VPlatformKey>>,
  releasedRecently: ((app, date) => ret(app.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,
  tags: ((app, flt) => flt.matches(key => app.relTags.has(key))) as Pred<Filter<VTagKey>>,
  writtenWith: ((app, flt) => flt.matches(key => app.relWrittenWith.has(key))) as Pred<Filter<VPlangKey>>,
} as const;

export type AppFacetKey = keyof typeof APP_FACET_PREDICATES;
