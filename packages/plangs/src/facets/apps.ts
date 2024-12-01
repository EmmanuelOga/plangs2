import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValNumber, ValString, Value } from "@plangs/auxiliar/value";
import type { VApp, VLicense, VPlang, VPlatform, VTag } from "@plangs/plangs/graph";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

type Pred<T extends Value<AnyValue>> = (app: VApp, value: T) => boolean;

/**
 * Predicates to filter Apps.
 */
export const APP_FACET_PREDICATES = {
  // General
  createdRecently: ((app, date) => app.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((app, flt) => ret(app.created.strYear, appYear => flt.matches(year => appYear === year))) as Pred<Filter<string>>,
  ghStars: ((app, num) => app.github.stars > num.value) as Pred<ValNumber>,
  name: ((app, str) => app.lcName.includes(str.value)) as Pred<ValString>,
  releasedRecently: ((app, date) => ret(app.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,
  licenses: ((app, flt) => flt.matches(key => app.relLicenses.has(key))) as Pred<Filter<VLicense["key"]>>,
  platforms: ((app, flt) => flt.matches(key => app.relPlatforms.has(key))) as Pred<Filter<VPlatform["key"]>>,
  tags: ((app, flt) => flt.matches(key => app.relTags.has(key))) as Pred<Filter<VTag["key"]>>,
  writtenWith: ((app, flt) => flt.matches(key => app.relWrittenWith.has(key))) as Pred<Filter<VPlang["key"]>>,
} as const;

export type AppFacetKey = keyof typeof APP_FACET_PREDICATES;

export function appMatches(app: VApp, values: Map<AppFacetKey, AnyValue>): boolean {
  for (const [key, value] of values) {
    const pred = APP_FACET_PREDICATES[key] as Pred<AnyValue>;
    if (!pred) console.error(`No predicate found for key: ${key}`);
    if (pred && value.isPresent && !pred(app, value)) return false;
  }
  return true;
}
