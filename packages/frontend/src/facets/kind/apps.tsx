import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { loadLocalStorage } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { bool, defineFacetGroups, table, text } from "@plangs/frontend/facets/main/types";
import { matchVertices } from "@plangs/plangs/facets";
import type { AppFacetKey } from "@plangs/plangs/facets/apps";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { VAppKey } from "@plangs/plangs/graph/generated";
import type { TAB } from "@plangs/server/components/layout";

// biome-ignore format: Keep it in one line.
type GK = "creationYear" | "general" | "licenses" | "platforms" | "tags" | "writtenWith";
type FK = AppFacetKey;

const [GROUPS, GK_BY_FK, COMPONENT] = defineFacetGroups<GK, FK>({
  creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("app", "created"))] },
  general: {
    title: "General",
    facets: [
      text("name", "App Name"),
      bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
      bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
      text("ghStars", "GitHub Stars"),
    ],
  },
  licenses: { title: "Licenses", facets: [table("licenses", "Licenses", rel("app", "relLicenses"))] },
  platforms: { title: "Platforms", facets: [table("platforms", "Platforms", rel("app", "relPlatforms"))] },
  tags: { title: "Tags", facets: [table("tags", "Tags", rel("app", "relTags"))] },
  writtenWith: { title: "Written With", facets: [table("writtenWith", "Written With", rel("app", "relWrittenWith"))] },
});

const APPS_TAB: TAB = "apps";
const NAV: { groupKeys: GK[][]; default: GK } = {
  groupKeys: [["general"], ["writtenWith"], ["tags", "creationYear", "licenses"], ["platforms"]],
  default: "general",
};

/** Implementation of the state for Faceted search of Programming Languages. */
export class AppsFacetsState extends FacetsMainState<GK, AppFacetKey> {
  override readonly nav = NAV;
  override readonly tab = APPS_TAB;
  override readonly gkByFk = GK_BY_FK;
  override readonly groupsConfig = GROUPS;
  override readonly groupsComponent = COMPONENT;

  static initial(pg: PlangsGraph): AppsFacetsState {
    const currentGroupKey = loadLocalStorage(APPS_TAB, "lastGroup") ?? NAV.default;
    const values = FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? loadLocalStorage(APPS_TAB, "inputs"));
    return new AppsFacetsState({ pg, currentGroupKey, values });
  }

  override get results(): Set<VAppKey> {
    if (!this.pg) return new Set();
    return matchVertices(this.pg.app, this.values.getMap2());
  }
}
