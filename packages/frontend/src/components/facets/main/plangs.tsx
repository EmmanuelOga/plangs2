import type { FunctionComponent } from "preact";

import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { loadLocalStorage } from "@plangs/frontend/auxiliar/storage";
import type { PlangFacetKey } from "@plangs/plangs/facets/plangs";
import { type PlangsGraph, VLicense, VParadigm, type VPlang, VPlatform, VTag, VTypeSystem } from "@plangs/plangs/graph";
import type { TAB } from "@plangs/server/components/layout";

import { createFacetGroups } from "./groups-util";
import { FacetsMainState } from "./state";
import { type FacetsMap, type GroupsMap, bool, defineFacets, defineGroups, group, multi, table, text } from "./types";

type FK = PlangFacetKey;

export const FACETS: FacetsMap<FK> = defineFacets<FK>(
  bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
  bool("hasLogo", "Has Logo"),
  bool("hasWikipedia", "Has Wikipedia"),
  bool("isPopular", "Is Popular"),
  bool("isTranspiler", "Is Transpiler"),
  bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
  multi("extensions", "Extensions"),
  table("compilesTo", "Compiles To", { kind: "noderel", edge: "plangCompilesToPlang", dir: "direct" }),
  table("creationYear", "Creation Year", { kind: "year", node: "plang" }),
  table("dialectOf", "Dialect Of", { kind: "noderel", edge: "plangDialectOfPlang", dir: "direct" }),
  table("implements", "Implements", { kind: "noderel", edge: "plangImplementsPlang", dir: "direct" }),
  table("influenced", "Influenced", { kind: "noderel", edge: "plangInfluencedByPlang", dir: "inverse" }),
  table("influencedBy", "Influenced By", { kind: "noderel", edge: "plangInfluencedByPlang", dir: "direct" }),
  table("licenses", "Licenses", { kind: "noderel", edge: "licensePlang", dir: "direct" }),
  table("paradigms", "Paradigms", { kind: "noderel", edge: "plangParadigm", dir: "direct" }),
  table("platforms", "Platforms", { kind: "noderel", edge: "plangPlatform", dir: "direct" }),
  table("tags", "Tags", { kind: "noderel", edge: "plangTag", dir: "direct" }),
  table("typeSystems", "Type Systems", { kind: "noderel", edge: "plangTypeSystem", dir: "direct" }),
  table("writtenIn", "Written In", { kind: "noderel", edge: "plangWrittenInPlangPlang", dir: "direct" }),
  text("plangName", "Plang Name"),
);

// biome-ignore format: Keep it in one line.
export type PlangFacetGroupKey = "creationYear" | "dialectOf" | "general" | "implements" | "influenced" | "influencedBy" | "licenses" | "paradigms" | "platforms" | "tags" | "transpiler" | "typeSystems" | "writtenIn";

type GK = PlangFacetGroupKey;

export const [GROUPS, GROUP_FOR_FACET_KEY]: readonly [GroupsMap<GK, FK>, Map<FK, GK>] = defineGroups<GK, FK>(
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
  group("writtenIn", "Written In", ["writtenIn"]),
);

/** Group keys for the navigation menu.  */
export const NAV: GK[][] = [
  ["general"],
  ["platforms", "paradigms", "typeSystems"],
  ["writtenIn", "transpiler", "dialectOf", "implements", "influencedBy", "influenced"],
  ["tags", "creationYear", "licenses"],
] as const;

export const PlangsFacetGroups = createFacetGroups(GROUPS, FACETS);
export const DEFAULT_GROUP = "general";

/** Implementation of the state for Faceted search of Programming Languages. */
export class PlangsFacetsState extends FacetsMainState<PlangFacetGroupKey, PlangFacetKey> {
  static initial(pg: PlangsGraph): PlangsFacetsState {
    const tab: TAB = "plangs";
    return new PlangsFacetsState({
      pg,
      tab,
      defaultGroup: DEFAULT_GROUP,
      currentGroupKey: loadLocalStorage(tab, "lastGroup") ?? DEFAULT_GROUP,
      values: FacetsMainState.dataToValue(GROUP_FOR_FACET_KEY, FragmentTracker.deserialize() ?? loadLocalStorage(tab, "inputs")),
    }).updateClearFacets();
  }

  override get nav() {
    return NAV;
  }

  override groupTitle(key: PlangFacetGroupKey) {
    return GROUPS.get(key)?.label ?? key;
  }

  override get facetGroupsComponent() {
    return PlangsFacetGroups as FunctionComponent<{ currentFacetGroup: string }>;
  }

  override get results(): Set<VPlang["key"]> {
    if (!this.pg) return new Set();
    return this.pg.filterPlangs(this.values.getMap2());
  }
}
