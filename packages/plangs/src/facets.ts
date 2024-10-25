import type { Filter } from "packages/auxiliar/src/filters";
import type { AnyValue, ValBool, ValNumber, ValRegExp, Value } from "packages/auxiliar/src/value";

import type { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from ".";

export type Pred<T extends Value<AnyValue>> = (pl: NPlang, value: T) => boolean;

/**
 * Predicates to use to filter programming languages.
 */
export const PLANG_FACET_PREDICATES = {
  compilesTo: (({ relCompilesTo }, flt) => flt.matches(key => relCompilesTo.has(key))) as Pred<Filter<NPlang["key"]>>,
  createdRecently: ((pl, year) => pl.createdRecently(year.value)) as Pred<ValNumber>,
  creationYear: ((pl, flt) => flt.matches(year => pl.year === year)) as Pred<Filter<number>>,
  dialectOf: (({ relDialectOf }, flt) => flt.matches(key => relDialectOf.has(key))) as Pred<Filter<NPlang["key"]>>,
  extensions: (({ extensions }, flt) => flt.matches(key => extensions.includes(key))) as Pred<Filter<string>>,
  hasLogo: ((pl, val) => val.value === pl.images.some(img => img.kind === "logo")) as Pred<ValBool>,
  hasWikipedia: ((pl, val) => val.value === pl.websites.some(site => site.kind === "wikipedia")) as Pred<ValBool>,
  implements: (({ relImplements }, flt) => flt.matches(key => relImplements.has(key))) as Pred<Filter<NPlang["key"]>>,
  influenced: (({ relInfluenced }, flt) => flt.matches(key => relInfluenced.has(key))) as Pred<Filter<NPlang["key"]>>,
  influencedBy: (({ relInfluencedBy }, flt) => flt.matches(key => relInfluencedBy.has(key))) as Pred<Filter<NPlang["key"]>>,
  isMainstream: ((pl, val) => val.value === pl.isMainstream) as Pred<ValBool>,
  isTranspiler: ((pl, val) => val.value === pl.isTranspiler) as Pred<ValBool>,
  licenses: (({ relLicenses }, flt) => flt.matches(key => relLicenses.has(key))) as Pred<Filter<NLicense["key"]>>,
  paradigms: (({ relParadigms }, flt) => flt.matches(key => relParadigms.has(key))) as Pred<Filter<NParadigm["key"]>>,
  plangName: ((pl, regexp) => regexp.value.test(pl.name)) as Pred<ValRegExp>,
  platforms: (({ relPlatforms }, flt) => flt.matches(key => relPlatforms.has(key))) as Pred<Filter<NPlatform["key"]>>,
  releasedRecently: ((pl, year) => pl.releasedRecently(year.value)) as Pred<ValNumber>,
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
