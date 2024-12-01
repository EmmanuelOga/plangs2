import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { AnyValue, ValNumber, ValString, Value } from "@plangs/auxiliar/value";
import type { VTool } from "@plangs/plangs/graph";
import type { VLicenseKey, VPlangKey, VPlatformKey, VTagKey } from "@plangs/plangs/graph/generated";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

type Pred<T extends Value<AnyValue>> = (tool: VTool, value: T) => boolean;

/**
 * Predicates to filter Tools.
 */
export const TOOL_FACET_PREDICATES = {
  // General
  createdRecently: ((tool, date) => tool.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((tool, flt) => ret(tool.created.strYear, toolYear => flt.matches(year => toolYear === year))) as Pred<Filter<string>>,
  ghStars: ((tool, num) => tool.github.stars > num.value) as Pred<ValNumber>,
  name: ((tool, str) => tool.lcName.includes(str.value)) as Pred<ValString>,
  releasedRecently: ((tool, date) => ret(tool.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,

  licenses: ((tool, flt) => flt.matches(key => tool.relLicenses.has(key))) as Pred<Filter<VLicenseKey>>,
  platforms: ((tool, flt) => flt.matches(key => tool.relPlatforms.has(key))) as Pred<Filter<VPlatformKey>>,
  tags: ((tool, flt) => flt.matches(key => tool.relTags.has(key))) as Pred<Filter<VTagKey>>,
  writtenWith: ((tool, flt) => flt.matches(key => tool.relWrittenWith.has(key))) as Pred<Filter<VPlangKey>>,
  writtenFor: ((tool, flt) => flt.matches(key => tool.relPlangs.has(key))) as Pred<Filter<VPlangKey>>,
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
