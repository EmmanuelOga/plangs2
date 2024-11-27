import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValBool, ValNumber, ValRegExp, ValString, Value } from "@plangs/auxiliar/value";
import type { VLicense, VParadigm, VPlang, VPlatform, VTag, VTypeSystem } from "@plangs/plangs/graph";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

type Pred<T extends Value<AnyValue>> = (pl: VPlang, value: T) => boolean;

/**
 * Predicates to use to filter programming languages.
 */
export const PLANG_FACET_PREDICATES = {
  compilesTo: (({ relCompilesTo }, flt) => flt.matches(key => relCompilesTo.has(key))) as Pred<Filter<VPlang["key"]>>,
  createdRecently: ((pl, date) => pl.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((pl, flt) => ret(pl.created.strYear, plYear => flt.matches(year => plYear === year))) as Pred<Filter<string>>,
  dialectOf: (({ relDialectOf }, flt) => flt.matches(key => relDialectOf.has(key))) as Pred<Filter<VPlang["key"]>>,
  extensions: (({ extensions }, flt) => flt.matches(key => extensions.includes(key))) as Pred<Filter<string>>,
  hasLogo: ((pl, val) => val.value === pl.images.some(img => img.kind === "logo")) as Pred<ValBool>,
  hasWikipedia: ((pl, val) => val.value === !!pl.data.extWikipediaPath) as Pred<ValBool>,
  implements: (({ relImplements }, flt) => flt.matches(key => relImplements.has(key))) as Pred<Filter<VPlang["key"]>>,
  influenced: (({ relInfluencedBy }, flt) => flt.matches(key => relInfluencedBy.has(key))) as Pred<Filter<VPlang["key"]>>,
  influencedBy: (({ relInfluencedBy }, flt) => flt.matches(key => relInfluencedBy.has(key))) as Pred<Filter<VPlang["key"]>>,
  isPopular: ((pl, val) => val.value === pl.isPopular) as Pred<ValBool>,
  isTranspiler: ((pl, val) => val.value === pl.isTranspiler) as Pred<ValBool>,
  licenses: (({ relLicense }, flt) => flt.matches(key => relLicense.has(key))) as Pred<Filter<VLicense["key"]>>,
  paradigms: (({ relParadigm }, flt) => flt.matches(key => relParadigm.has(key))) as Pred<Filter<VParadigm["key"]>>,
  plangName: ((pl, regexp) => regexp.value.test(pl.name)) as Pred<ValRegExp>,
  platforms: (({ relPlatform }, flt) => flt.matches(key => relPlatform.has(key))) as Pred<Filter<VPlatform["key"]>>,
  releasedRecently: ((pl, date) => ret(pl.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,
  tags: (({ relTag }, flt) => flt.matches(key => relTag.has(key))) as Pred<Filter<VTag["key"]>>,
  typeSystems: (({ relTypeSystem }, flt) => flt.matches(key => relTypeSystem.has(key))) as Pred<Filter<VTypeSystem["key"]>>,
  writtenIn: (({ relWrittenInPlang }, flt) => flt.matches(key => relWrittenInPlang.has(key))) as Pred<Filter<VPlang["key"]>>,
} as const;

export type PlangFacetKey = keyof typeof PLANG_FACET_PREDICATES;

export function plangMatches(pl: VPlang, values: Map<PlangFacetKey, AnyValue>): boolean {
  for (const [key, value] of values) {
    const pred = PLANG_FACET_PREDICATES[key] as Pred<AnyValue>;
    if (!pred) console.error(`No predicate found for key: ${key}`);
    if (pred && value.isPresent && !pred(pl, value)) return false;
  }
  return true;
}
