import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValBool, ValString, Value } from "@plangs/auxiliar/value";
import type { VPlang } from "@plangs/plangs/graph";
import type { VLicenseKey, VParadigmKey, VPlangKey, VPlatformKey, VTagKey, VTypeSystemKey } from "@plangs/plangs/graph/generated";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

type Pred<T extends Value<AnyValue>> = (pl: VPlang, value: T) => boolean;

/**
 * Predicates to use to filter programming languages.
 */
export const PLANG_FACET_PREDICATES = {
  compilesTo: (({ relCompilesTo }, flt) => flt.matches(key => relCompilesTo.has(key))) as Pred<Filter<VPlangKey>>,
  createdRecently: ((pl, date) => pl.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((pl, flt) => ret(pl.created.strYear, plYear => flt.matches(year => plYear === year))) as Pred<Filter<string>>,
  dialectOf: (({ relDialectOf }, flt) => flt.matches(key => relDialectOf.has(key))) as Pred<Filter<VPlangKey>>,
  extensions: (({ extensions }, flt) => flt.matches(key => extensions.includes(key))) as Pred<Filter<string>>,
  hasLogo: ((pl, val) => val.value === pl.images.some(img => img.kind === "logo")) as Pred<ValBool>,
  hasWikipedia: ((pl, val) => val.value === !!pl.data.extWikipediaPath) as Pred<ValBool>,
  implements: (({ relImplements }, flt) => flt.matches(key => relImplements.has(key))) as Pred<Filter<VPlangKey>>,
  influenced: (({ relInfluenced }, flt) => flt.matches(key => relInfluenced.has(key))) as Pred<Filter<VPlangKey>>,
  influencedBy: (({ relInfluencedBy }, flt) => flt.matches(key => relInfluencedBy.has(key))) as Pred<Filter<VPlangKey>>,
  isPopular: ((pl, val) => val.value === pl.isPopular) as Pred<ValBool>,
  isTranspiler: ((pl, val) => val.value === pl.isTranspiler) as Pred<ValBool>,
  licenses: (({ relLicenses }, flt) => flt.matches(key => relLicenses.has(key))) as Pred<Filter<VLicenseKey>>,
  paradigms: (({ relParadigms }, flt) => flt.matches(key => relParadigms.has(key))) as Pred<Filter<VParadigmKey>>,
  plangName: ((pl, str) => pl.lcName.includes(str.value)) as Pred<ValString>,
  platforms: (({ relPlatforms }, flt) => flt.matches(key => relPlatforms.has(key))) as Pred<Filter<VPlatformKey>>,
  releasedRecently: ((pl, date) => ret(pl.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,
  tags: (({ relTags }, flt) => flt.matches(key => relTags.has(key))) as Pred<Filter<VTagKey>>,
  typeSystems: (({ relTypeSystems }, flt) => flt.matches(key => relTypeSystems.has(key))) as Pred<Filter<VTypeSystemKey>>,
  writtenWith: (({ relWrittenWith }, flt) => flt.matches(key => relWrittenWith.has(key))) as Pred<Filter<VPlangKey>>,
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
