import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { getStore } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { bool, defineFacetGroups, table, text } from "@plangs/frontend/facets/main/types";
import type { SubsystemFacetKey } from "@plangs/plangs/facets/subsystems";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";

// biome-ignore format: Keep it in one line.
type GK = "creationYear" | "general" | "licenses" | "platforms" | "tags" | "writtenWith";
type FK = SubsystemFacetKey;

const [GROUPS, GK_BY_FK, COMPONENT] = defineFacetGroups<GK, FK>({
  creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("subsystem", "created"))] },
  general: {
    title: "General",
    facets: [
      text("name", "Subsystem Name"),
      bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
      bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
      text("ghStars", "GitHub Stars"),
    ],
  },
  licenses: { title: "Licenses", facets: [table("licenses", "Licenses", rel("subsystem", "relLicenses"))] },
  platforms: { title: "Platforms", facets: [table("platforms", "Platforms", rel("subsystem", "relPlatforms"))] },
  tags: { title: "Tags", facets: [table("tags", "Tags", rel("subsystem", "relTags"))] },
  writtenWith: { title: "Written With", facets: [table("writtenWith", "Written With", rel("subsystem", "relWrittenWith"))] },
});

const PAGE: PlangsPage = "subsystems";
const NAV: { groupKeys: GK[][]; default: GK } = {
  groupKeys: [["general"], ["writtenWith"], ["tags", "creationYear", "licenses"], ["platforms"]],
  default: "general",
};

export class SubsystemsFacetsState extends FacetsMainState<GK, SubsystemFacetKey> {
  override readonly nav = NAV;
  override readonly page = PAGE;
  override readonly vertexName = "subsystem";
  override readonly gkByFk = GK_BY_FK;
  override readonly groupsConfig = GROUPS;
  override readonly groupsComponent = COMPONENT;

  static initial(pg: PlangsGraph): SubsystemsFacetsState {
    const store = getStore(PAGE);
    const currentGroupKey = store.load("facets-last-group") ?? NAV.default;
    const [{ mode }, values] = FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? store.load("facet-value"));
    return new SubsystemsFacetsState({ pg, currentGroupKey, values, mode });
  }
}
