import { FacetBool } from "@plangs/frontend/components/facets/misc/facet-bool";
import { FacetGroup } from "@plangs/frontend/components/facets/misc/facet-group";
import { FacetText } from "@plangs/frontend/components/facets/misc/facet-text";
import { FacetMulti } from "@plangs/frontend/components/facets/multisel/facet-multi";
import { FacetTable } from "@plangs/frontend/components/facets/table/facet-table";
import { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs";
import type { PlangFacetKey } from "@plangs/plangs/facets";
import type { ComponentChildren } from "preact";

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
export const NAV: FG[][] = [
  ["general"],
  ["platforms", "paradigms", "typeSystems"],
  ["writtenIn", "transpiler", "dialectOf", "implements", "influencedBy", "influenced"],
  ["tags", "creationYear", "licenses"],
] as const;

export const DEFAULT_GROUP = "general";

export type PlangFacetGroupKey = keyof typeof GROUP_LABELS;

/** Aliases for brevity. */
type FK = PlangFacetKey;
type FG = PlangFacetGroupKey;

function Group({ groupKey, current, children }: { groupKey: FG; current: string; children: ComponentChildren }) {
  return (
    <FacetGroup<FG> title={GROUP_LABELS[groupKey]} visible={current === groupKey} groupKey={groupKey}>
      {children}
    </FacetGroup>
  );
}

export function PlangsFacetGroups({ currentFacetGroup: current }: { currentFacetGroup: string }) {
  return (
    <>
      <Group groupKey="general" current={current}>
        <FacetText<FK> facetKey="plangName" label="PLang Name" />
        <FacetBool<FK> facetKey="createdRecently" label="Created Recently" />
        <FacetBool<FK> facetKey="releasedRecently" label="Released Recently" />
        <FacetBool<FK> facetKey="hasLogo" label="Has Logo" />
        <FacetBool<FK> facetKey="hasWikipedia" label="Has Wikipedia" />
        <FacetBool<FK> facetKey="isMainstream" label="Is Mainstream" />
        <FacetMulti<FK> facetKey="extensions" label="File Extension" />
      </Group>
      <Group groupKey="platforms" current={current}>
        <FacetTable<FK> facetKey="platforms" config={{ kind: "noderel", edge: "plat", node: NPlatform.kind, dir: "direct" }} />
      </Group>
      <Group groupKey="paradigms" current={current}>
        <FacetTable<FK> facetKey="paradigms" config={{ kind: "noderel", edge: "paradigm", node: NParadigm.kind, dir: "direct" }} />
      </Group>
      <Group groupKey="typeSystems" current={current}>
        <FacetTable<FK> facetKey="typeSystems" config={{ kind: "noderel", edge: "tsys", node: NTsys.kind, dir: "direct" }} />
      </Group>
      <Group groupKey="writtenIn" current={current}>
        <FacetTable<FK> facetKey="writtenIn" config={{ kind: "noderel", edge: "writtenIn", node: NPlang.kind, dir: "direct" }} />
      </Group>
      <Group groupKey="transpiler" current={current}>
        <FacetBool<FK> facetKey="isTranspiler" label="Is Transpiler" />
        <FacetTable<FK> facetKey="compilesTo" config={{ kind: "noderel", edge: "compilesTo", node: NPlang.kind, dir: "direct" }} />
      </Group>
      <Group groupKey="dialectOf" current={current}>
        <FacetTable<FK> facetKey="dialectOf" config={{ kind: "noderel", edge: "dialect", node: NPlang.kind, dir: "direct" }} />
      </Group>
      <Group groupKey="implements" current={current}>
        <FacetTable<FK> facetKey="implements" config={{ kind: "noderel", edge: "impl", node: NPlang.kind, dir: "direct" }} />
      </Group>
      <Group groupKey="influencedBy" current={current}>
        <FacetTable<FK> facetKey="influencedBy" config={{ kind: "noderel", edge: "influence", node: NPlang.kind, dir: "direct" }} />
      </Group>
      <Group groupKey="influenced" current={current}>
        <FacetTable<FK> facetKey="influenced" config={{ kind: "noderel", edge: "influence", node: NPlang.kind, dir: "inverse" }} />
      </Group>
      <Group groupKey="tags" current={current}>
        <FacetTable<FK> facetKey="tags" config={{ kind: "noderel", edge: "tag", node: NTag.kind, dir: "direct" }} />
      </Group>
      <Group groupKey="creationYear" current={current}>
        <FacetTable<FK> facetKey="creationYear" config={{ kind: "year", node: NPlang.kind }} />
      </Group>
      <Group groupKey="licenses" current={current}>
        <FacetTable<FK> facetKey="licenses" config={{ kind: "noderel", edge: "license", node: NLicense.kind, dir: "direct" }} />
      </Group>
    </>
  );
}
