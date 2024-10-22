import type { JSX } from "preact/jsx-runtime";

import { FacetBool } from "@plangs/frontend/components/facets/misc/facet-bool";
import { FacetGroup } from "@plangs/frontend/components/facets/misc/facet-group";
import { FacetText } from "@plangs/frontend/components/facets/misc/facet-text";
import { FacetMulti } from "@plangs/frontend/components/facets/multisel/facet-multi";
import { FacetTable } from "@plangs/frontend/components/facets/table/facet-table";
import { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs";
import type { PlangFacetKey } from "@plangs/plangs/facets";

/** Alias for readability. */
type FK = PlangFacetKey;

/** Every Facet Group for Plang Nodes. */
export const PLANGS_FACET_GROUPS = {
  general: (
    <FacetGroup title="General">
      <FacetText<FK> facetKey="plangName" label="PLang Name" />
      <FacetBool<FK> facetKey="createdRecently" label="Created Recently" />
      <FacetBool<FK> facetKey="releasedRecently" label="Released Recently" />
      <FacetBool<FK> facetKey="hasLogo" label="Has Logo" />
      <FacetBool<FK> facetKey="hasWikipedia" label="Has Wikipedia" />
      <FacetBool<FK> facetKey="isMainstream" label="Is Mainstream" />
      <FacetMulti<FK> facetKey="extensions" label="File Extension" />
    </FacetGroup>
  ),
  platforms: (
    <FacetGroup title="Platforms">
      <FacetTable<FK> facetKey="platforms" config={{ kind: "noderel", edge: "plat", node: NPlatform.kind, dir: "direct" }} />
    </FacetGroup>
  ),
  paradigms: (
    <FacetGroup title="Paradigms">
      <FacetTable<FK> facetKey="paradigms" config={{ kind: "noderel", edge: "paradigm", node: NParadigm.kind, dir: "direct" }} />
    </FacetGroup>
  ),
  typeSystems: (
    <FacetGroup title="Type Systems">
      <FacetTable<FK> facetKey="typeSystems" config={{ kind: "noderel", edge: "tsys", node: NTsys.kind, dir: "direct" }} />
    </FacetGroup>
  ),
  writtenIn: (
    <FacetGroup title="Written In">
      <FacetTable<FK> facetKey="writtenIn" config={{ kind: "noderel", edge: "writtenIn", node: NPlang.kind, dir: "direct" }} />
    </FacetGroup>
  ),
  transpiler: (
    <FacetGroup title="Transpiler">
      <FacetBool<FK> facetKey="isTranspiler" label="Is Transpiler" />
      <FacetTable<FK> facetKey="compilesTo" config={{ kind: "noderel", edge: "compilesTo", node: NPlang.kind, dir: "direct" }} />
    </FacetGroup>
  ),
  dialectOf: (
    <FacetGroup title="DialectOf">
      <FacetTable<FK> facetKey="dialectOf" config={{ kind: "noderel", edge: "dialect", node: NPlang.kind, dir: "direct" }} />
    </FacetGroup>
  ),
  implements: (
    <FacetGroup title="Implements">
      <FacetTable<FK> facetKey="implements" config={{ kind: "noderel", edge: "impl", node: NPlang.kind, dir: "direct" }} />
    </FacetGroup>
  ),
  influencedBy: (
    <FacetGroup title="Influenced By">
      <FacetTable<FK> facetKey="influencedBy" config={{ kind: "noderel", edge: "influence", node: NPlang.kind, dir: "direct" }} />
    </FacetGroup>
  ),
  influenced: (
    <FacetGroup title="Influenced">
      <FacetTable<FK> facetKey="influenced" config={{ kind: "noderel", edge: "influence", node: NPlang.kind, dir: "inverse" }} />
    </FacetGroup>
  ),
  tags: (
    <FacetGroup title="Tags">
      <FacetTable<FK> facetKey="tags" config={{ kind: "noderel", edge: "tag", node: NTag.kind, dir: "direct" }} />
    </FacetGroup>
  ),
  creationYear: (
    <FacetGroup title="Creation Year">
      <FacetTable<FK> facetKey="creationYear" config={{ kind: "year", node: NPlang.kind }} />
    </FacetGroup>
  ),
  licenses: (
    <FacetGroup title="Licenses">
      <FacetTable<FK> facetKey="licenses" config={{ kind: "noderel", edge: "license", node: NLicense.kind, dir: "direct" }} />
    </FacetGroup>
  ),
};

/** Every group will have one of these keys. */
export type PlangsFacetGroup = keyof typeof PLANGS_FACET_GROUPS;

/** Group keys for the navigation menu.  */
export const PLANGS_NAV: PlangsFacetGroup[][] = [
  ["general"],
  ["platforms", "paradigms", "typeSystems"],
  ["writtenIn", "transpiler", "dialectOf", "implements", "influencedBy", "influenced"],
  ["tags", "creationYear", "licenses"],
] as const;

export const PLANGS_DEFAULT_FACET = "general";
