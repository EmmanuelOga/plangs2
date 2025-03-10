import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { getStore } from "@plangs/frontend/auxiliar/storage";
import { FacetsMainState } from "@plangs/frontend/facets/main/state";
import { bool, defineFacetGroups, multi, select, table, text } from "@plangs/frontend/facets/main/types";
import type { PlangFacetKey } from "@plangs/plangs/facets/plangs";
import { type PlangsGraph, prop, rel } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";

// biome-ignore format: Keep it in one line.
type GK = "creationYear" | "dialectOf" | "general" | "implements" | "influenced" | "influencedBy" | "licenses" | "paradigms" | "platforms" | "tags" | "transpiler" | "typeSystems" | "writtenWith";
type FK = PlangFacetKey;

const [GROUPS, GK_BY_FK, COMPONENT] = defineFacetGroups<GK, FK>({
  creationYear: { title: "Creation Year", facets: [table("creationYear", "Creation Year", prop("plang", "created"))] },
  dialectOf: { title: "Dialect Of", facets: [table("dialectOf", "Dialect Of", rel("plang", "relDialectOf"))] },
  general: {
    title: "General",
    facets: [
      text("name", "Plang Name"),
      multi("extensions", "Extensions"),
      select("created", "Created"),
      select("released", "Released"),
      select("hasLogo", "Logo", [
        { label: "Any", value: "" },
        { label: "Present", value: "1" },
        { label: "Absent", value: "0" },
      ]),
      bool("isPopular", "Is Popular"),
      bool("hasWikipedia", "Has Wikipedia"),
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
    facets: [bool("isTranspiler", "Transpiler to Anything"), table("compilesTo", "Compiles To", rel("plang", "relCompilesTo"))],
  },
  typeSystems: { title: "Type Systems", facets: [table("typeSystems", "Type Systems", rel("plang", "relTypeSystems"))] },
  writtenWith: { title: "Written With", facets: [table("writtenWith", "Written With", rel("plang", "relWrittenWith"))] },
});

const PAGE: PlangsPage = "plangs";
const NAV: { groupKeys: GK[][]; default: GK } = {
  groupKeys: [
    ["general"],
    ["platforms", "paradigms", "typeSystems"],
    ["writtenWith", "transpiler", "dialectOf", "implements", "influencedBy", "influenced"],
    ["tags", "creationYear", "licenses"],
  ],
  default: "general",
};

export class PlangsFacetsState extends FacetsMainState<GK, PlangFacetKey> {
  override readonly nav = NAV;
  override readonly page = PAGE;
  override readonly vertexName = "plang";
  override readonly gkByFk = GK_BY_FK;
  override readonly groupsConfig = GROUPS;
  override readonly groupsComponent = COMPONENT;

  static initial(pg: PlangsGraph): PlangsFacetsState {
    const store = getStore(PAGE);
    const currentGroupKey = store.load("facets-last-group") ?? NAV.default;
    const [{ mode }, values] = FacetsMainState.deserialize(GK_BY_FK, FragmentTracker.deserialize() ?? store.load("facet-value"));
    return new PlangsFacetsState({ pg, currentGroupKey, values, mode });
  }
}
