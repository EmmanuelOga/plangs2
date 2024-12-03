import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { loadLocalStorage } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { matchVertices } from "@plangs/plangs/facets";
import type { LibraryFacetKey } from "@plangs/plangs/facets/libraries";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { VLibraryKey } from "@plangs/plangs/graph/generated";
import type { TAB } from "@plangs/server/components/layout";
import { bool, defineFacetGroups, table, text } from "../main/types";

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

const NAV: { groupKeys: GK[][]; default: GK } = {
  groupKeys: [["general"], ["writtenWith", "writtenFor"], ["tags", "creationYear", "licenses"], ["platforms"]],
  default: "general",
};

/** Implementation of the state for Faceted search of Programming Languages. */
export class LibrariesFacetsState extends FacetsMainState<GK, LibraryFacetKey> {
  static initial(pg: PlangsGraph): LibrariesFacetsState {
    const tab: TAB = "libs";
    return new LibrariesFacetsState({
      pg,
      tab,
      defaultGroup: NAV.default,
      currentGroupKey: loadLocalStorage(tab, "lastGroup") ?? NAV.default,
      values: FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? loadLocalStorage(tab, "inputs")),
    }).updateClearFacets();
  }

  override get nav() {
    return NAV.groupKeys;
  }

  override groupTitle(key: GK) {
    return GROUPS.get(key)?.title ?? key;
  }

  override get facetGroupsComponent() {
    return COMPONENT;
  }

  override get results(): Set<VLibraryKey> {
    if (!this.pg) return new Set();
    return matchVertices(this.pg.library, this.values.getMap2());
  }

  override get groupsByFacetKey() {
    return GK_BY_FK;
  }
}
