import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { StrDate } from "@plangs/auxiliar/str_date";
import type { AnyValue, ValBool, ValString, Value } from "@plangs/auxiliar/value";
import type { VPlang } from "@plangs/plangs/graph";
import type { VLicenseKey, VParadigmKey, VPlangKey, VPlatformKey, VTagKey, VTypeSystemKey } from "@plangs/plangs/graph/generated";

type Pred<T extends Value<AnyValue>> = (pl: VPlang, value: T) => boolean;

/** Predicates to filter Plangs. */
export const PLANG_FACET_PREDICATES = {
  compilesTo: ((pl, flt) => flt.matches(key => pl.relCompilesTo.has(key))) as Pred<Filter<VPlangKey>>,
  created: ((pl, date) => pl.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((pl, flt) => ret(pl.created.strYear, plYear => flt.matches(year => plYear === year))) as Pred<Filter<string>>,
  dialectOf: ((pl, flt) => flt.matches(key => pl.key === key || pl.relDialectOf.has(key))) as Pred<Filter<VPlangKey>>,
  extensions: ((pl, flt) => flt.matches(key => pl.extensions.includes(key))) as Pred<Filter<string>>,
  hasLogo: ((pl, val) => val.value === "" || ret(pl.hasLogo, hl => (hl && val.value === "1") || (!hl && val.value === "0"))) as Pred<ValString>,
  hasWikipedia: ((pl, val) => val.value === !!pl.data.extWikipediaPath) as Pred<ValBool>,
  implements: ((pl, flt) => flt.matches(key => key === pl.key || pl.relImplements.has(key))) as Pred<Filter<VPlangKey>>,
  influenced: ((pl, flt) => flt.matches(key => pl.relInfluenced.has(key))) as Pred<Filter<VPlangKey>>,
  influencedBy: ((pl, flt) => flt.matches(key => pl.relInfluencedBy.has(key))) as Pred<Filter<VPlangKey>>,
  isPopular: ((pl, val) => val.value === pl.isPopular) as Pred<ValBool>,
  isTranspiler: ((pl, val) => val.value === pl.isTranspiler) as Pred<ValBool>,
  licenses: ((pl, flt) => flt.matches(key => pl.relLicenses.has(key))) as Pred<Filter<VLicenseKey>>,
  name: ((pl, str) => pl.lcName.includes(str.value)) as Pred<ValString>,
  paradigms: ((pl, flt) => flt.matches(key => pl.relParadigms.has(key))) as Pred<Filter<VParadigmKey>>,
  platforms: ((pl, flt) => flt.matches(key => pl.relPlatforms.has(key))) as Pred<Filter<VPlatformKey>>,
  released: ((pl, date) => ret(pl.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,
  tags: ((pl, flt) => flt.matches(key => pl.relTags.has(key))) as Pred<Filter<VTagKey>>,
  typeSystems: ((pl, flt) => flt.matches(key => pl.relTypeSystems.has(key))) as Pred<Filter<VTypeSystemKey>>,
  writtenWith: ((pl, flt) => flt.matches(key => pl.relWrittenWith.has(key))) as Pred<Filter<VPlangKey>>,

  // These relationships are probably less useful for filtering.
  // dialects: // "Dialects", rel("plang", "relDialects")). Ex. Pick "VisualBasic" and see "Basic".
  // implementedBy: // "Implemented By", rel("plang", "relImplementedBy")). Ex. Pick "CPython" and see "Python".
  // targetOf: // "Target of", rel("plang", "relTargetOf")). Ex. Pick "Haxe" and see what languages it targets.
  // usedToWrite: //  "Used to Write", rel("plang", "relUsedToWrite")). Ex Pick "C++" and see "C".
} as const;

export type PlangFacetKey = keyof typeof PLANG_FACET_PREDICATES;
