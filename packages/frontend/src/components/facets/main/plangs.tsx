import { ValNil, ValNumber } from "@plangs/auxiliar/value";
import { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs";
import type { PlangFacetKey } from "@plangs/plangs/facets/plangs";
import type { FunctionComponent } from "preact";
import { FacetBool } from "../misc/facet-bool";
import { FacetGroup } from "../misc/facet-group";
import { FacetText } from "../misc/facet-text";
import { FacetMulti } from "../multisel/facet-multi";
import { FacetTable } from "../table/facet-table";
import { type FacetConfig, bool, defineFacets, defineGroups, group, mapGroups, multi, table, text } from "./types";

type FK = PlangFacetKey;

export const FACETS: Map<FK, FacetConfig<FK>> = defineFacets<FK>(
  bool("createdRecently", "Created Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 5) : new ValNil())),
  bool("hasLogo", "Has Logo"),
  bool("hasWikipedia", "Has Wikipedia"),
  bool("isPopular", "Is Popular"),
  bool("isTranspiler", "Is Transpiler"),
  bool("releasedRecently", "Released Recently", (checked: boolean) => (checked ? new ValNumber(new Date().getFullYear() - 1) : new ValNil())),
  multi("extensions", "Extensions"),
  table("compilesTo", "Compiles To", { kind: "noderel", edge: "compilesTo", node: NPlang.kind, dir: "direct" }),
  table("creationYear", "Creation Year", { kind: "year", node: NPlang.kind }),
  table("dialectOf", "Dialect Of", { kind: "noderel", edge: "dialect", node: NPlang.kind, dir: "direct" }),
  table("implements", "Implements", { kind: "noderel", edge: "impl", node: NPlang.kind, dir: "direct" }),
  table("influenced", "Influenced", { kind: "noderel", edge: "influence", node: NPlang.kind, dir: "inverse" }),
  table("influencedBy", "Influenced By", { kind: "noderel", edge: "influence", node: NPlang.kind, dir: "direct" }),
  table("licenses", "Licenses", { kind: "noderel", edge: "license", node: NLicense.kind, dir: "direct" }),
  table("paradigms", "Paradigms", { kind: "noderel", edge: "paradigm", node: NParadigm.kind, dir: "direct" }),
  table("platforms", "Platforms", { kind: "noderel", edge: "plat", node: NPlatform.kind, dir: "direct" }),
  table("tags", "Tags", { kind: "noderel", edge: "tag", node: NTag.kind, dir: "direct" }),
  table("typeSystems", "Type Systems", { kind: "noderel", edge: "tsys", node: NTsys.kind, dir: "direct" }),
  table("writtenIn", "Written In", { kind: "noderel", edge: "writtenIn", node: NPlang.kind, dir: "direct" }),
  text("plangName", "Plang Name"),
);

// biome-ignore format: Keep it in one line.
export type PlangFacetGroupKey = "creationYear" | "dialectOf" | "general" | "implements" | "influenced" | "influencedBy" | "licenses" | "paradigms" | "platforms" | "tags" | "transpiler" | "typeSystems" | "writtenIn";

type GK = PlangFacetGroupKey;

export const [GROUPS, GROUP_FOR_FACET_KEY] = defineGroups<GK, FK>(
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

export const DEFAULT_GROUP = "general";

export const PlangsFacetGroups: FunctionComponent<{ currentFacetGroup: GK }> = ({ currentFacetGroup }) => (
  <>
    {mapGroups<GK, FK>(GROUPS, currentFacetGroup, ({ groupKey, active, label, facetKeys }) => (
      <FacetGroup<GK> key={groupKey} groupKey={groupKey} label={label} active={active}>
        {facetKeys.map(facetKey => {
          const facet = FACETS.get(facetKey);
          const props = (f: FacetConfig<FK>) => ({ groupKey, facetKey, label: f.label, active });
          switch (facet?.kind) {
            case "bool":
              return <FacetBool {...props(facet)} valueMapper={facet.valueMapper} />;
            case "multi":
              return <FacetMulti {...props(facet)} />;
            case "table":
              return <FacetTable {...props(facet)} config={facet.config} />;
            case "text":
              return <FacetText {...props(facet)} />;
            default:
              console.error("Facet not found", facetKey);
          }
        })}
      </FacetGroup>
    ))}
  </>
);
