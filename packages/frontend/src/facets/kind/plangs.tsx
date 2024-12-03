import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { loadLocalStorage } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { bool, defineFacetGroups, multi, table, text } from "@plangs/frontend/facets/main/types";
import { matchVertices } from "@plangs/plangs/facets";
import type { PlangFacetKey } from "@plangs/plangs/facets/plangs";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { VPlangKey } from "@plangs/plangs/graph/generated";
import type { TAB } from "@plangs/server/components/layout";

// biome-ignore format: Keep it in one line.
type GK = "creationYear" | "dialectOf" | "general" | "implements" | "influenced" | "influencedBy" | "licenses" | "paradigms" | "platforms" | "tags" | "transpiler" | "typeSystems" | "writtenWith";
type FK = PlangFacetKey;

const [GROUPS, GK_BY_FK, COMPONENT] = defineFacetGroups<GK, FK>({
  creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("plang", "created"))] },
  dialectOf: { title: "Dialect Of", facets: [table("dialectOf", "Dialect Of", rel("plang", "relDialectOf"))] },
  general: {
    title: "General",
    facets: [
      text("plangName", "Plang Name"),
      bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
      bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
      bool("isPopular", "Is Popular"),
      bool("hasLogo", "Has Logo"),
      bool("hasWikipedia", "Has Wikipedia"),
      multi("extensions", "Extensions"),
    ],
  },
  implements: {
    title: "Implements",
    facets: [
      table("implements", "Implements", { ...rel("plang", "relImplements"), minEntries: 2 }), // All plangs implement themselves.
    ],
  },
  influenced: { title: "Influenced", facets: [table("influenced", "Influenced", rel("plang", "relInfluenced"))] },
  influencedBy: { title: "Influenced By", facets: [table("influencedBy", "Influenced By", rel("plang", "relInfluencedBy"))] },
  licenses: { title: "Licenses", facets: [table("licenses", "Licenses", rel("plang", "relLicenses"))] },
  paradigms: { title: "Paradigms", facets: [table("paradigms", "Paradigms", rel("plang", "relParadigms"))] },
  platforms: { title: "Platforms", facets: [table("platforms", "Platforms", rel("plang", "relPlatforms"))] },
  tags: { title: "Tags", facets: [table("tags", "Tags", rel("plang", "relTags"))] },
  transpiler: {
    title: "Transpiler",
    facets: [bool("isTranspiler", "Is Transpiler"), table("compilesTo", "Compiles To", rel("plang", "relCompilesTo"))],
  },
  typeSystems: { title: "Type Systems", facets: [table("typeSystems", "Type Systems", rel("plang", "relTypeSystems"))] },
  writtenWith: { title: "Written With", facets: [table("writtenWith", "Written With", rel("plang", "relWrittenWith"))] },
});

/** Group keys for the navigation menu.  */
const NAV: GK[][] = [
  ["general"],
  ["platforms", "paradigms", "typeSystems"],
  ["writtenWith", "transpiler", "dialectOf", "implements", "influencedBy", "influenced"],
  ["tags", "creationYear", "licenses"],
] as const;

const DEFAULT_GROUP = "general";

/** Implementation of the state for Faceted search of Programming Languages. */
export class PlangsFacetsState extends FacetsMainState<GK, PlangFacetKey> {
  static initial(pg: PlangsGraph): PlangsFacetsState {
    const tab: TAB = "plangs";
    return new PlangsFacetsState({
      pg,
      tab,
      defaultGroup: DEFAULT_GROUP,
      currentGroupKey: loadLocalStorage(tab, "lastGroup") ?? DEFAULT_GROUP,
      values: FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? loadLocalStorage(tab, "inputs")),
    }).updateClearFacets();
  }

  override get nav() {
    return NAV;
  }

  override groupTitle(key: GK) {
    return GROUPS.get(key)?.title ?? key;
  }

  override get facetGroupsComponent() {
    return COMPONENT;
  }

  override get results(): Set<VPlangKey> {
    if (!this.pg) return new Set();
    return matchVertices(this.pg.plang, this.values.getMap2());
  }

  override get groupsByFacetKey() {
    return GK_BY_FK;
  }
}