import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { storeKey, storeLoad } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { bool, defineFacetGroups, table, text } from "@plangs/frontend/facets/main/types";
import { matchVertices } from "@plangs/plangs/facets";
import type { ToolFacetKey } from "@plangs/plangs/facets/tools";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { VToolKey } from "@plangs/plangs/graph/generated";
import type { TAB } from "@plangs/server/components/layout";

// biome-ignore format: Keep it in one line.
type GK = "creationYear" | "general" | "licenses" | "platforms" | "tags" | "writtenFor" | "writtenWith";
type FK = ToolFacetKey;

const [GROUPS, GK_BY_FK, COMPONENT] = defineFacetGroups<GK, FK>({
  creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("tool", "created"))] },
  general: {
    title: "General",
    facets: [
      text("name", "Tool Name"),
      bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
      bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
      text("ghStars", "GitHub Stars"),
    ],
  },
  licenses: { title: "Licenses", facets: [table("licenses", "Licenses", rel("tool", "relLicenses"))] },
  platforms: { title: "Platforms", facets: [table("platforms", "Platforms", rel("tool", "relPlatforms"))] },
  tags: { title: "Tags", facets: [table("tags", "Tags", rel("tool", "relTags"))] },
  writtenFor: { title: "Written For", facets: [table("writtenFor", "Written For", rel("tool", "relPlangs"))] },
  writtenWith: { title: "Written With", facets: [table("writtenWith", "Written With", rel("tool", "relWrittenWith"))] },
});

const TOOLS_TAB: TAB = "tools";
const NAV: { groupKeys: GK[][]; default: GK } = {
  groupKeys: [["general"], ["writtenWith", "writtenFor"], ["tags", "creationYear", "licenses"], ["platforms"]],
  default: "general",
};

export class ToolsFacetsState extends FacetsMainState<GK, ToolFacetKey> {
  override readonly nav = NAV;
  override readonly tab = TOOLS_TAB;
  override readonly gkByFk = GK_BY_FK;
  override readonly groupsConfig = GROUPS;
  override readonly groupsComponent = COMPONENT;

  static initial(pg: PlangsGraph): ToolsFacetsState {
    const currentGroupKey = storeLoad(storeKey(TOOLS_TAB, "facets-last-group")) ?? NAV.default;
    const values = FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? storeLoad(storeKey(TOOLS_TAB, "facet-value")));
    return new ToolsFacetsState({ pg, currentGroupKey, values });
  }

  override get results(): Set<VToolKey> {
    if (!this.pg) return new Set();
    return matchVertices(this.pg.tool, this.values.getMap2());
  }
}
