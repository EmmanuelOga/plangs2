import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { getStore } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { bool, defineFacetGroups, table, text } from "@plangs/frontend/facets/main/types";
import type { CommunityFacetKey } from "@plangs/plangs/facets/communities";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";

// biome-ignore format: Keep it in one line.
type GK = "creationYear" | "general" | "plangs" | "libraries" | "apps" | "tools" | "tags";
type FK = CommunityFacetKey;

const [GROUPS, GK_BY_FK, COMPONENT] = defineFacetGroups<GK, FK>({
  creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("community", "created"))] },
  general: {
    title: "General",
    facets: [
      text("name", "Community Name"),
      bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
    ],
  },
  apps: { title: "Licenses", facets: [table("apps", "Apps", rel("community", "relApps"))] },
  libraries: { title: "Platforms", facets: [table("libraries", "libraries", rel("community", "relLibraries"))] },
  tags: { title: "Tags", facets: [table("tags", "Tags", rel("community", "relTags"))] },
  plangs: { title: "Written For", facets: [table("plangs", "Plangs", rel("community", "relPlangs"))] },
  tools: { title: "Written With", facets: [table("tools", "Tools", rel("community", "relTools"))] },
});

const PAGE: PlangsPage = "communities";
const NAV: { groupKeys: GK[][]; default: GK } = {
  groupKeys: [["general"], ["plangs", "libraries"], ["apps", "tools"], ["tags"]],
  default: "general",
};

export class CommunitiesFacetsState extends FacetsMainState<GK, CommunityFacetKey> {
  override readonly nav = NAV;
  override readonly page = PAGE;
  override readonly vertexName = "community";
  override readonly gkByFk = GK_BY_FK;
  override readonly groupsConfig = GROUPS;
  override readonly groupsComponent = COMPONENT;

  static initial(pg: PlangsGraph): CommunitiesFacetsState {
    const store = getStore(PAGE);
    const currentGroupKey = store.load("facets-last-group") ?? NAV.default;
    const values = FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? store.load("facet-value"));
    return new CommunitiesFacetsState({ pg, currentGroupKey, values });
  }
}
