import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { loadLocalStorage } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { bool, defineFacetGroups, table, text } from "@plangs/frontend/facets/main/types";
import { matchVertices } from "@plangs/plangs/facets";
import type { LearningFacetKey } from "@plangs/plangs/facets/learning";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { VLearningKey } from "@plangs/plangs/graph/generated";
import type { TAB } from "@plangs/server/components/layout";

// biome-ignore format: Keep it in one line.
type GK = "creationYear" | "general" | "plangs" | "libraries" | "apps" | "tools" | "tags";
type FK = LearningFacetKey;

const [GROUPS, GK_BY_FK, COMPONENT] = defineFacetGroups<GK, FK>({
  creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("learning", "created"))] },
  general: {
    title: "General",
    facets: [
      text("name", "Learning Name"),
      bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
    ],
  },
  apps: { title: "Apps", facets: [table("apps", "Apps", rel("learning", "relApps"))] },
  libraries: { title: "Libraries", facets: [table("libraries", "libraries", rel("learning", "relLibraries"))] },
  tags: { title: "Tags", facets: [table("tags", "Tags", rel("learning", "relTags"))] },
  plangs: { title: "Plangs", facets: [table("plangs", "Plangs", rel("learning", "relPlangs"))] },
  tools: { title: "Tools", facets: [table("tools", "Tools", rel("learning", "relTools"))] },
});

const COMMUNITY_TAB: TAB = "communities";
const NAV: { groupKeys: GK[][]; default: GK } = {
  groupKeys: [["general"], ["plangs", "libraries"], ["apps", "tools"], ["tags"]],
  default: "general",
};

export class LearningFacetsState extends FacetsMainState<GK, LearningFacetKey> {
  override readonly nav = NAV;
  override readonly tab = COMMUNITY_TAB;
  override readonly gkByFk = GK_BY_FK;
  override readonly groupsConfig = GROUPS;
  override readonly groupsComponent = COMPONENT;

  static initial(pg: PlangsGraph): LearningFacetsState {
    const currentGroupKey = loadLocalStorage(COMMUNITY_TAB, "lastGroup") ?? NAV.default;
    const values = FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? loadLocalStorage(COMMUNITY_TAB, "inputs"));
    return new LearningFacetsState({ pg, currentGroupKey, values });
  }

  override get results(): Set<VLearningKey> {
    if (!this.pg) return new Set();
    return matchVertices(this.pg.learning, this.values.getMap2());
  }
}
