import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValBool, ValNumber, ValRegExp, ValString, Value } from "@plangs/auxiliar/value";
import type { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs";
import type { StrDate } from "@plangs/plangs/schema";

type Pred<T extends Value<AnyValue>> = (pl: NPlang, value: T) => boolean;

/**
 * Predicates to use to filter programming languages.
 */
export const PLANG_FACET_PREDICATES = {
  compilesTo: (({ relCompilesTo }, flt) => flt.matches(key => relCompilesTo.has(key))) as Pred<Filter<NPlang["key"]>>,
  createdRecently: ((pl, year) => pl.created.isRecent(year.value as StrDate)) as Pred<ValString>,
  creationYear: ((pl, flt) => ret(pl.created.strYear, plYear => flt.matches(year => plYear === year))) as Pred<Filter<string>>,
  dialectOf: (({ relDialectOf }, flt) => flt.matches(key => relDialectOf.has(key))) as Pred<Filter<NPlang["key"]>>,
  extensions: (({ extensions }, flt) => flt.matches(key => extensions.includes(key))) as Pred<Filter<string>>,
  hasLogo: ((pl, val) => val.value === pl.images.some(img => img.kind === "logo")) as Pred<ValBool>,
  hasWikipedia: ((pl, val) => val.value === !!pl.data.extWikipediaPath) as Pred<ValBool>,
  implements: (({ relImplements }, flt) => flt.matches(key => relImplements.has(key))) as Pred<Filter<NPlang["key"]>>,
  influenced: (({ relInfluenced }, flt) => flt.matches(key => relInfluenced.has(key))) as Pred<Filter<NPlang["key"]>>,
  influencedBy: (({ relInfluencedBy }, flt) => flt.matches(key => relInfluencedBy.has(key))) as Pred<Filter<NPlang["key"]>>,
  isPopular: ((pl, val) => val.value === pl.isPopular) as Pred<ValBool>,
  isTranspiler: ((pl, val) => val.value === pl.isTranspiler) as Pred<ValBool>,
  licenses: (({ relLicenses }, flt) => flt.matches(key => relLicenses.has(key))) as Pred<Filter<NLicense["key"]>>,
  paradigms: (({ relParadigms }, flt) => flt.matches(key => relParadigms.has(key))) as Pred<Filter<NParadigm["key"]>>,
  plangName: ((pl, regexp) => regexp.value.test(pl.name)) as Pred<ValRegExp>,
  platforms: (({ relPlatforms }, flt) => flt.matches(key => relPlatforms.has(key))) as Pred<Filter<NPlatform["key"]>>,
  releasedRecently: ((pl, date) => ret(pl.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,
  tags: (({ relTags }, flt) => flt.matches(key => relTags.has(key))) as Pred<Filter<NTag["key"]>>,
  typeSystems: (({ relTsys }, flt) => flt.matches(key => relTsys.has(key))) as Pred<Filter<NTsys["key"]>>,
  writtenIn: (({ relWrittenIn }, flt) => flt.matches(key => relWrittenIn.has(key))) as Pred<Filter<NPlang["key"]>>,
} as const;

export type PlangFacetKey = keyof typeof PLANG_FACET_PREDICATES;

export function plangMatches(pl: NPlang, values: Map<PlangFacetKey, AnyValue>): boolean {
  for (const [key, value] of values) {
    const pred = PLANG_FACET_PREDICATES[key] as Pred<AnyValue>;
    if (!pred) console.error(`No predicate found for key: ${key}`);
    if (pred && value.isPresent && !pred(pl, value)) return false;
  }
  return true;
}
