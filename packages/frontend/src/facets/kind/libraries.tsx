import type { FunctionComponent } from "preact";

import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { loadLocalStorage } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { type FacetsMap, type GroupsMap, bool, defineFacets, defineGroups, group, table, text } from "@plangs/frontend/facets/main/types";
import { createFacetGroups } from "@plangs/frontend/facets/misc/facet-group";
import { matchVertices } from "@plangs/plangs/facets";
import type { LibraryFacetKey } from "@plangs/plangs/facets/libraries";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { VLibraryKey } from "@plangs/plangs/graph/generated";
import type { TAB } from "@plangs/server/components/layout";

// biome-ignore format: Keep it in one line.
type GK = "creationYear" | "general" | "licenses" | "platforms" | "tags" | "writtenWith" | "writtenFor";
type FK = LibraryFacetKey;

export const FACETS: FacetsMap<FK> = defineFacets<FK>(
  bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
  bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
  table("creationYear", "Creation Year", prop("library", "created")),
  table("licenses", "Licenses", rel("library", "relLicenses")),
  table("platforms", "Platforms", rel("library", "relPlatforms")),
  table("tags", "Tags", rel("library", "relTags")),
  table("writtenWith", "Written With", rel("library", "relWrittenWith")),
  table("writtenFor", "Written For", rel("tool", "relPlangs")),
  text("ghStars", "GitHub Stars"),
  text("name", "Library Name"),
);

const [GROUPS, GROUP_BY_FACET_KEY]: readonly [GroupsMap<GK, FK>, Map<FK, GK>] = defineGroups<GK, FK>(
  group("creationYear", "Creation Year", ["creationYear"]),
  group("general", "General", ["name", "createdRecently", "releasedRecently", "ghStars"]),
  group("licenses", "Licenses", ["licenses"]),
  group("platforms", "Platforms", ["platforms"]),
  group("tags", "Tags", ["tags"]),
  group("writtenWith", "Written With", ["writtenWith"]),
  group("writtenFor", "Written For", ["writtenFor"]),
);

/** Group keys for the navigation menu.  */
const NAV: GK[][] = [["general"], ["writtenWith", "writtenFor"], ["tags", "creationYear", "licenses"], ["platforms"]] as const;

/** Create a Higher order component that wraps several groups. */
const GROUPS_COMPONENT = createFacetGroups(GROUPS, FACETS) as FunctionComponent<{ currentFacetGroup: string }>;

export const DEFAULT_GROUP = "general";

/** Implementation of the state for Faceted search of Programming Languages. */
export class LibrariesFacetsState extends FacetsMainState<GK, LibraryFacetKey> {
  static initial(pg: PlangsGraph): LibrariesFacetsState {
    const tab: TAB = "libs";
    return new LibrariesFacetsState({
      pg,
      tab,
      defaultGroup: DEFAULT_GROUP,
      currentGroupKey: loadLocalStorage(tab, "lastGroup") ?? DEFAULT_GROUP,
      values: FacetsMainState.deserialize(GROUP_BY_FACET_KEY, FragmentTracker.deserialize() ?? loadLocalStorage(tab, "inputs")),
    }).updateClearFacets();
  }

  override get nav() {
    console.log("RETURNING", NAV);
    return NAV;
  }

  override groupTitle(key: GK) {
    return GROUPS.get(key)?.label ?? key;
  }

  override get facetGroupsComponent() {
    return GROUPS_COMPONENT;
  }

  override get results(): Set<VLibraryKey> {
    if (!this.pg) return new Set();
    return matchVertices(this.pg.library, this.values.getMap2());
  }

  override get groupsByFacetKey() {
    return GROUP_BY_FACET_KEY;
  }
}
