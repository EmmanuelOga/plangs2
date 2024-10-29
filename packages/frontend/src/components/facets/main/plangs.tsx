import type { JSX } from "preact";

import { FacetBool } from "@plangs/frontend/components/facets/misc/facet-bool";
import { FacetGroup } from "@plangs/frontend/components/facets/misc/facet-group";
import { FacetText } from "@plangs/frontend/components/facets/misc/facet-text";
import { FacetMulti } from "@plangs/frontend/components/facets/multisel/facet-multi";
import { FacetTable, type FacetTableConfig } from "@plangs/frontend/components/facets/table/facet-table";
import { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs";
import { PLANG_FACETS_LABELS, type PlangFacetKey } from "@plangs/plangs/facets";

export const GROUP_LABELS = {
  general: "General",
  platforms: "Platforms",
  paradigms: "Paradigms",
  typeSystems: "Type Systems",
  writtenIn: "Written In",
  transpiler: "Transpiler",
  dialectOf: "Dialect Of",
  implements: "Implements",
  influencedBy: "Influenced By",
  influenced: "Influenced",
  tags: "Tags",
  creationYear: "Creation Year",
  licenses: "Licenses",
} as const;

/** Group keys for the navigation menu.  */
export const NAV: GK[][] = [
  ["general"],
  ["platforms", "paradigms", "typeSystems"],
  ["writtenIn", "transpiler", "dialectOf", "implements", "influencedBy", "influenced"],
  ["tags", "creationYear", "licenses"],
] as const;

export const DEFAULT_GROUP = "general";

export type PlangFacetGroupKey = keyof typeof GROUP_LABELS;

/** Aliases for brevity. */
type GK = PlangFacetGroupKey;
type FK = PlangFacetKey;

export function PlangsFacetGroups({ currentFacetGroup }: { currentFacetGroup: GK }) {
  // Common props.
  const props = (groupKey: GK, facetKey: FK) => ({
    facetKey,
    groupKey,
    active: groupKey === currentFacetGroup,
    label: PLANG_FACETS_LABELS[facetKey],
  });

  const text = (facetKey: FK) => (groupKey: GK) => <FacetText<GK, FK> {...props(groupKey, facetKey)} />;
  const bool = (facetKey: FK) => (groupKey: GK) => <FacetBool<GK, FK> {...props(groupKey, facetKey)} />;
  const multi = (facetKey: FK) => (groupKey: GK) => <FacetMulti<GK, FK> {...props(groupKey, facetKey)} />;
  const table = (facetKey: FK, config: FacetTableConfig) => (groupKey: GK) => <FacetTable<GK, FK> {...props(groupKey, facetKey)} config={config} />;

  const group = (groupKey: GK, children: ((gk: GK) => JSX.Element)[]) => (
    <FacetGroup<GK> groupKey={groupKey} label={GROUP_LABELS[groupKey]} active={currentFacetGroup === groupKey}>
      {children.map(factory => factory(groupKey))}
    </FacetGroup>
  );

  return (
    <>
      {group("general", [
        text("plangName"),
        bool("createdRecently"),
        bool("releasedRecently"),
        bool("hasLogo"),
        bool("hasWikipedia"),
        bool("isMainstream"),
        multi("extensions"),
      ])}
      {group("platforms", [table("platforms", { kind: "noderel", edge: "plat", node: NPlatform.kind, dir: "direct" })])}
      {group("paradigms", [table("paradigms", { kind: "noderel", edge: "paradigm", node: NParadigm.kind, dir: "direct" })])}
      {group("typeSystems", [table("paradigms", { kind: "noderel", edge: "paradigm", node: NParadigm.kind, dir: "direct" })])}
      {group("typeSystems", [table("typeSystems", { kind: "noderel", edge: "tsys", node: NTsys.kind, dir: "direct" })])}
      {group("writtenIn", [table("writtenIn", { kind: "noderel", edge: "writtenIn", node: NPlang.kind, dir: "direct" })])}
      {group("transpiler", [bool("isTranspiler"), table("compilesTo", { kind: "noderel", edge: "compilesTo", node: NPlang.kind, dir: "direct" })])}
      {group("dialectOf", [table("dialectOf", { kind: "noderel", edge: "dialect", node: NPlang.kind, dir: "direct" })])}
      {group("implements", [table("implements", { kind: "noderel", edge: "impl", node: NPlang.kind, dir: "direct" })])}
      {group("influencedBy", [table("influencedBy", { kind: "noderel", edge: "influence", node: NPlang.kind, dir: "direct" })])}
      {group("influenced", [table("influenced", { kind: "noderel", edge: "influence", node: NPlang.kind, dir: "inverse" })])}
      {group("tags", [table("tags", { kind: "noderel", edge: "tag", node: NTag.kind, dir: "direct" })])}
      {group("creationYear", [table("creationYear", { kind: "year", node: NPlang.kind })])}
      {group("licenses", [table("licenses", { kind: "noderel", edge: "license", node: NLicense.kind, dir: "direct" })])}
    </>
  );
}
