import type { Filter } from "@plangs/auxiliar/filters";
import type { AnyValue, ValBool, ValNumber, ValRegExp, Value } from "@plangs/auxiliar/value";
import type { NLicense, NParadigm, NPlang, NPlatform, NTag, NTool, NTsys } from "@plangs/plangs";

type Pred<T extends Value<AnyValue>> = (tool: NTool, value: T) => boolean;

/**
 * Predicates to use to filter programming languages.
 */
export const TOOL_FACET_PREDICATES = {
  /*
  createdRecently: ((tool, year) => tool.createdRecently(year.value)) as Pred<ValNumber>,
  creationYear: ((tool, flt) => flt.matches(year => tool.year === year)) as Pred<Filter<number>>,
  ghStars: ((tool, flt) => flt.matches(year => tool.year === year)) as Pred<Filter<number>>,
  licenses: (({ relLicenses }, flt) => flt.matches(key => relLicenses.has(key))) as Pred<Filter<NLicense["key"]>>,
  name: ((tool, regexp) => regexp.value.test(tool.name)) as Pred<ValRegExp>,
  platforms: (({ relPlatforms }, flt) => flt.matches(key => relPlatforms.has(key))) as Pred<Filter<NPlatform["key"]>>,
  releasedRecently: ((tool, year) => pl.releasedRecently(year.value)) as Pred<ValNumber>,
  tags: (({ relTags }, flt) => flt.matches(key => relTags.has(key))) as Pred<Filter<NTag["key"]>>,
  writtenFor: (({ relPlangs }, flt) => flt.matches(key => relPlangs.has(key))) as Pred<Filter<NPlang["key"]>>,
  writtenIn: (({ relPlangs }, flt) => flt.matches(key => relPlangs.has(key))) as Pred<Filter<NPlang["key"]>>,
  */
} as const;

export type ToolFacetKey = keyof typeof TOOL_FACET_PREDICATES;

export function toolMatches(tool: NTool, values: Map<ToolFacetKey, AnyValue>): boolean {
  for (const [key, value] of values) {
    const pred = TOOL_FACET_PREDICATES[key] as Pred<AnyValue>;
    if (!pred) console.error(`No predicate found for key: ${key}`);
    if (pred && value.isPresent && !pred(tool, value)) return false;
  }
  return true;
}
