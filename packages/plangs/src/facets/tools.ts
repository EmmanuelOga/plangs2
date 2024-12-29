import type { Filter } from "@plangs/auxiliar/filters";
import { ret } from "@plangs/auxiliar/misc";
import type { StrDate } from "@plangs/auxiliar/str_date";
import type { AnyValue, ValNumber, ValString, Value } from "@plangs/auxiliar/value";
import type { VTool } from "@plangs/plangs/graph";
import type { VLicenseKey, VPlangKey, VPlatformKey, VTagKey } from "@plangs/plangs/graph/generated";

type Pred<T extends Value<AnyValue>> = (tool: VTool, value: T) => boolean;

/** Predicates to filter Tools.*/
export const TOOL_FACET_PREDICATES = {
  createdRecently: ((tool, date) => tool.created.isRecent(date.value as StrDate)) as Pred<ValString>,
  creationYear: ((tool, flt) => ret(tool.created.strYear, toolYear => flt.matches(year => toolYear === year))) as Pred<Filter<string>>,
  ghStars: ((tool, num) => tool.github.stars > num.value) as Pred<ValNumber>,
  licenses: ((tool, flt) => flt.matches(key => tool.relLicenses.has(key))) as Pred<Filter<VLicenseKey>>,
  name: ((tool, str) => tool.lcName.includes(str.value)) as Pred<ValString>,
  platforms: ((tool, flt) => flt.matches(key => tool.relPlatforms.has(key))) as Pred<Filter<VPlatformKey>>,
  releasedRecently: ((tool, date) => ret(tool.releases.last, lastRel => lastRel?.isRecent(date.value as StrDate))) as Pred<ValString>,
  tags: ((tool, flt) => flt.matches(key => tool.relTags.has(key))) as Pred<Filter<VTagKey>>,
  writtenFor: ((tool, flt) => flt.matches(key => tool.relPlangs.has(key))) as Pred<Filter<VPlangKey>>,
  writtenWith: ((tool, flt) => flt.matches(key => tool.relWrittenWith.has(key))) as Pred<Filter<VPlangKey>>,
} as const;

export type ToolFacetKey = keyof typeof TOOL_FACET_PREDICATES;
