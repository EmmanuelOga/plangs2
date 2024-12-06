import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { storeKey, storeLoad } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { bool, defineFacetGroups, table, text } from "@plangs/frontend/facets/main/types";
import { matchVertices } from "@plangs/plangs/facets";
import type { LibraryFacetKey } from "@plangs/plangs/facets/libraries";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { VLibraryKey } from "@plangs/plangs/graph/generated";
import type { PlangsPage } from "@plangs/server/components/layout";

// biome-ignore format: Keep it in one line.
type GK = "creationYear" | "general" | "licenses" | "platforms" | "tags" | "writtenWith" | "writtenFor";
type FK = LibraryFacetKey;

const [GROUPS, GK_BY_FK, COMPONENT] = defineFacetGroups<GK, FK>({
  creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("library", "created"))] },
  general: {
    title: "General",
    facets: [
      text("name", "Library Name"),
      bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
      bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
      text("ghStars", "GitHub Stars"),
    ],
  },
  licenses: {
    title: "Licenses",
    facets: [table("licenses", "Licenses", rel("library", "relLicenses"))],
  },
  platforms: {
    title: "Platforms",
    facets: [table("platforms", "Platforms", rel("library", "relPlatforms"))],
  },
  tags: {
    title: "Tags",
    facets: [table("tags", "Tags", rel("library", "relTags"))],
  },
  writtenWith: { title: "Written With ", facets: [table("writtenWith", "Written With", rel("library", "relWrittenWith"))] },
  writtenFor: { title: "Written For", facets: [table("writtenFor", "Written For", rel("tool", "relPlangs"))] },
});

const PAGE: PlangsPage = "libs";
const NAV: { groupKeys: GK[][]; default: GK } = {
  groupKeys: [["general"], ["writtenWith", "writtenFor"], ["tags", "creationYear", "licenses"], ["platforms"]],
  default: "general",
};

export class LibrariesFacetsState extends FacetsMainState<GK, LibraryFacetKey> {
  override readonly nav = NAV;
  override readonly page = PAGE;
  override readonly gkByFk = GK_BY_FK;
  override readonly groupsConfig = GROUPS;
  override readonly groupsComponent = COMPONENT;

  static initial(pg: PlangsGraph): LibrariesFacetsState {
    const currentGroupKey = storeLoad(storeKey(PAGE, "facets-last-group")) ?? NAV.default;
    const values = FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? storeLoad(storeKey(PAGE, "facet-value")));
    return new LibrariesFacetsState({ pg, currentGroupKey, values });
  }

  override get results(): Set<VLibraryKey> {
    if (!this.pg) return new Set();
    return matchVertices(this.pg.library, this.values.getMap2());
  }
}
