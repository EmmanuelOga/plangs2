import type { FunctionComponent } from "preact";

import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { loadLocalStorage } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { type FacetsMap, type GroupsMap, bool, defineFacets, defineGroups, group, multi, table, text } from "@plangs/frontend/facets/main/types";
import { createFacetGroups } from "@plangs/frontend/facets/misc/facet-group";
import { matchVertices } from "@plangs/plangs/facets";
import type { PlangFacetKey } from "@plangs/plangs/facets/plangs";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { VPlangKey } from "@plangs/plangs/graph/generated";
import type { TAB } from "@plangs/server/components/layout";

type GK = PlangFacetGroupKey;
type FK = PlangFacetKey;

export const FACETS: FacetsMap<FK> = defineFacets<FK>(
  bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
  bool("hasLogo", "Has Logo"),
  bool("hasWikipedia", "Has Wikipedia"),
  bool("isPopular", "Is Popular"),
  bool("isTranspiler", "Is Transpiler"),
  bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
  multi("extensions", "Extensions"),
  table("compilesTo", "Compiles To", rel("plang", "relCompilesTo")),
  table("creationYear", "Creation Year", prop("plang", "created")),
  table("dialectOf", "Dialect Of", rel("plang", "relDialectOf")),
  table("implements", "Implements", { ...rel("plang", "relImplements"), minEntries: 2 }), // All plangs implement themselves.
  table("influenced", "Influenced", rel("plang", "relInfluenced")),
  table("influencedBy", "Influenced By", rel("plang", "relInfluencedBy")),
  table("licenses", "Licenses", rel("plang", "relLicenses")),
  table("paradigms", "Paradigms", rel("plang", "relParadigms")),
  table("platforms", "Platforms", rel("plang", "relPlatforms")),
  table("tags", "Tags", rel("plang", "relTags")),
  table("typeSystems", "Type Systems", rel("plang", "relTypeSystems")),
  table("writtenWith", "Written With", rel("plang", "relWrittenWith")),
  text("plangName", "Plang Name"),
);

// biome-ignore format: Keep it in one line.
export type PlangFacetGroupKey = "creationYear" | "dialectOf" | "general" | "implements" | "influenced" | "influencedBy" | "licenses" | "paradigms" | "platforms" | "tags" | "transpiler" | "typeSystems" | "writtenWith";

const [GROUPS, GROUP_BY_FACET_KEY]: readonly [GroupsMap<GK, FK>, Map<FK, GK>] = defineGroups<GK, FK>(
  group("creationYear", "Creation Year", ["creationYear"]),
  group("dialectOf", "Dialect Of", ["dialectOf"]),
  group("general", "General", ["plangName", "createdRecently", "releasedRecently", "isPopular", "hasLogo", "hasWikipedia", "extensions"]),
  group("implements", "Implements", ["implements"]),
  group("influenced", "Influenced", ["influenced"]),
  group("influencedBy", "Influenced By", ["influencedBy"]),
  group("licenses", "Licenses", ["licenses"]),
  group("paradigms", "Paradigms", ["paradigms"]),
  group("platforms", "Platforms", ["platforms"]),
  group("tags", "Tags", ["tags"]),
  group("transpiler", "Transpiler", ["isTranspiler", "compilesTo"]),
  group("typeSystems", "Type Systems", ["typeSystems"]),
  group("writtenWith", "Written With", ["writtenWith"]),
);

/** Group keys for the navigation menu.  */
const NAV: GK[][] = [
  ["general"],
  ["platforms", "paradigms", "typeSystems"],
  ["writtenWith", "transpiler", "dialectOf", "implements", "influencedBy", "influenced"],
  ["tags", "creationYear", "licenses"],
] as const;

/** Create a Higher order component that wraps several groups. */
const GROUPS_COMPONENT = createFacetGroups(GROUPS, FACETS) as FunctionComponent<{ currentFacetGroup: string }>;

const DEFAULT_GROUP = "general";

/** Implementation of the state for Faceted search of Programming Languages. */
export class PlangsFacetsState extends FacetsMainState<PlangFacetGroupKey, PlangFacetKey> {
  static initial(pg: PlangsGraph): PlangsFacetsState {
    const tab: TAB = "plangs";
    return new PlangsFacetsState({
      pg,
      tab,
      defaultGroup: DEFAULT_GROUP,
      currentGroupKey: loadLocalStorage(tab, "lastGroup") ?? DEFAULT_GROUP,
      values: FacetsMainState.deserialize(GROUP_BY_FACET_KEY, FragmentTracker.deserialize() ?? loadLocalStorage(tab, "inputs")),
    }).updateClearFacets();
  }

  override get nav() {
    return NAV;
  }

  override groupTitle(key: PlangFacetGroupKey) {
    return GROUPS.get(key)?.label ?? key;
  }

  override get facetGroupsComponent() {
    return GROUPS_COMPONENT;
  }

  override get results(): Set<VPlangKey> {
    if (!this.pg) return new Set();
    return matchVertices(this.pg.plang, this.values.getMap2());
  }

  override get groupsByFacetKey() {
    return GROUP_BY_FACET_KEY;
  }
}
