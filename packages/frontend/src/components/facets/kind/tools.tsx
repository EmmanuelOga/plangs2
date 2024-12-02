import type { FunctionComponent } from "preact";

import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { loadLocalStorage } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/components/facets/main/state";
import { type FacetsMap, type GroupsMap, bool, defineFacets, defineGroups, group, table, text } from "@plangs/frontend/components/facets/main/types";
import { createFacetGroups } from "@plangs/frontend/components/facets/misc/facet-group";
import { matchVertices } from "@plangs/plangs/facets";
import type { ToolFacetKey } from "@plangs/plangs/facets/tools";
import { PlangsGraph } from "@plangs/plangs/graph";
import type { VToolKey } from "@plangs/plangs/graph/generated";
import type { TAB } from "@plangs/server/components/layout";

type FK = ToolFacetKey;

const rel = PlangsGraph.relConfig;
const prop = PlangsGraph.propConfig;

export const FACETS: FacetsMap<FK> = defineFacets<FK>(
  text("name", "Tool Name"),
  text("ghStars", "GitHub Stars"),
  bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
  bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
  table("creationYear", "Creation Year", prop("tool", "created")),

  table("licenses", "Licenses", rel("tool", "relLicenses")),
  table("platforms", "Platforms", rel("tool", "relPlatforms")),
  table("tags", "Tags", rel("tool", "relTags")),
  table("writtenWith", "Written With", rel("tool", "relWrittenWith")),
  table("writtenFor", "Written For", rel("tool", "relPlangs")),
);

// biome-ignore format: Keep it in one line.
export type PlangFacetGroupKey = "creationYear" | "general" | "licenses" | "platforms" | "tags" | "writtenFor" | "writtenWith";

type GK = PlangFacetGroupKey;

export const [GROUPS, GROUP_FOR_FACET_KEY]: readonly [GroupsMap<GK, FK>, Map<FK, GK>] = defineGroups<GK, FK>(
  group("general", "General", ["name", "createdRecently", "releasedRecently", "ghStars"]),

  group("writtenWith", "Written With", ["writtenWith"]),
  group("writtenFor", "Written For", ["writtenFor"]),

  group("tags", "Tags", ["tags"]),
  group("creationYear", "Creation Year", ["creationYear"]),
  group("licenses", "Licenses", ["licenses"]),

  group("platforms", "Platforms", ["platforms"]),
);

/** Group keys for the navigation menu.  */
export const NAV: GK[][] = [["general"], ["writtenWith", "writtenFor"], ["tags", "creationYear", "licenses"], ["platforms"]] as const;

export const ToolsFacetGroups = createFacetGroups(GROUPS, FACETS);
export const DEFAULT_GROUP = "general";

/** Implementation of the state for Faceted search of Programming Languages. */
export class ToolsFacetsState extends FacetsMainState<PlangFacetGroupKey, ToolFacetKey> {
  static initial(pg: PlangsGraph): ToolsFacetsState {
    const tab: TAB = "tools";
    return new ToolsFacetsState({
      pg,
      tab,
      defaultGroup: DEFAULT_GROUP,
      currentGroupKey: loadLocalStorage(tab, "lastGroup") ?? DEFAULT_GROUP,
      values: FacetsMainState.deserialize(GROUP_FOR_FACET_KEY, FragmentTracker.deserialize() ?? loadLocalStorage(tab, "inputs")),
    }).updateClearFacets();
  }

  override get nav() {
    return NAV;
  }

  override groupTitle(key: PlangFacetGroupKey) {
    return GROUPS.get(key)?.label ?? key;
  }

  override get facetGroupsComponent() {
    return ToolsFacetGroups as FunctionComponent<{ currentFacetGroup: string }>;
  }

  override get results(): Set<VToolKey> {
    if (!this.pg) return new Set();
    return matchVertices(this.pg.tool, this.values.getMap2());
  }

  override get groupsByFacetKey() {
    return GROUP_FOR_FACET_KEY;
  }
}
