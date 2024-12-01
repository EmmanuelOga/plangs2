import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValRegExp, ValString, Value } from "@plangs/auxiliar/value";
import type { VLicense, VPlang, VPlatform, VTag, VTool } from "@plangs/plangs/graph";
import type { StrDate } from "../graph/vertex_data_schemas";

type Pred<T extends Value<AnyValue>> = (tool: VTool, value: T) => boolean;

/**
 * Predicates to use to filter programming languages.
 */
export const TOOL_FACET_PREDICATES = {
  createdRecently: ((tool, date) => tool.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((tool, flt) => ret(tool.created.strYear, toolYear => flt.matches(year => toolYear === year))) as Pred<Filter<string>>,
  ghStars: ((tool, regexp) => regexp.value.test(tool.name)) as Pred<ValRegExp>,
  name: ((tool, regexp) => regexp.value.test(tool.name)) as Pred<ValRegExp>,
  releasedRecently: ((tool, date) => ret(tool.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,

  // licenses: (({ relLicenses }, flt) => flt.matches(key => relLicenses.has(key))) as Pred<Filter<VLicense["key"]>>,
  // platforms: (({ relPlatforms }, flt) => flt.matches(key => relPlatforms.has(key))) as Pred<Filter<VPlatform["key"]>>,
  // tags: (({ relTags }, flt) => flt.matches(key => relTags.has(key))) as Pred<Filter<VTag["key"]>>,
  // writtenWith: (({ relWrittenIn }, flt) => flt.matches(key => relWrittenIn.has(key))) as Pred<Filter<VPlang["key"]>>,
  // writtenFor: (({ relPlang }, flt) => flt.matches(key => relPlang.has(key))) as Pred<Filter<VPlang["key"]>>,
} as const;

export type ToolFacetKey = keyof typeof TOOL_FACET_PREDICATES;

export function toolMatches(tool: VTool, values: Map<ToolFacetKey, AnyValue>): boolean {
  for (const [key, value] of values) {
    const pred = TOOL_FACET_PREDICATES[key] as Pred<AnyValue>;
    if (!pred) console.error(`No predicate found for key: ${key}`);
    if (pred && value.isPresent && !pred(tool, value)) return false;
  }
  return true;
}
