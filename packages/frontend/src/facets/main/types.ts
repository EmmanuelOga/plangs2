import type { FunctionComponent } from "preact";

import type { AnyValue } from "@plangs/auxiliar/value";
import type { FacetBoolMapper } from "@plangs/frontend/facets/misc/facet-bool";
import { createFacetGroupsComponent } from "@plangs/frontend/facets/misc/facet-group";
import type { FacetTableConfig } from "@plangs/frontend/facets/table/entries";

////////////////////////////////////////////////////////////////////////////////
/// Facet Input Configuration
////////////////////////////////////////////////////////////////////////////////

export type FacetConfigBase<Kind extends string, FK> = { kind: Kind; label: string; facetKey: FK };

export type FacetConfigBool<FK> = FacetConfigBase<"bool", FK> & { valueMapper?: (checked: boolean) => AnyValue };
export type FacetConfigMulti<FK> = FacetConfigBase<"multi", FK>;
export type FacetConfigTable<FK> = FacetConfigBase<"table", FK> & { config: FacetTableConfig };
export type FacetConfigText<FK> = FacetConfigBase<"text", FK>;

/** Type for the input for a facet. */
export type FacetConfig<FK> = FacetConfigBool<FK> | FacetConfigMulti<FK> | FacetConfigTable<FK> | FacetConfigText<FK>;

/** A Map from the facet key to the facet configuration. */
export type FacetsMap<FK> = Map<FK, FacetConfig<FK>>;

export function bool<FK>(facetKey: FK, label: string, valueMapper?: FacetBoolMapper): FacetConfigBool<FK> {
  return { kind: "bool", facetKey, label, valueMapper };
}

export function multi<FK>(facetKey: FK, label: string): FacetConfigMulti<FK> {
  return { kind: "multi", facetKey, label };
}

export function table<FK>(facetKey: FK, label: string, config: FacetTableConfig): FacetConfigTable<FK> {
  return { kind: "table", facetKey, label, config };
}

export function text<FK>(facetKey: FK, label: string): FacetConfigText<FK> {
  return { kind: "text", facetKey, label };
}

/** Returns a map of group config, a map of group key by facet key, and a preact componetn to render the group. */
export function defineFacetGroups<GK extends string, FK extends string>(
  groups: Record<GK, { title: string; facets: FacetConfig<FK>[] }>,
): [Map<GK, { title: string; facets: FacetConfig<FK>[] }>, Map<FK, GK>, FunctionComponent<{ currentFacetGroup: string }>] {
  const groupsMap = new Map(Object.entries(groups) as [GK, { title: string; facets: FacetConfig<FK>[] }][]);
  const gkByFk = new Map<FK, GK>();
  type GEntry = { title: string; facets: FacetConfig<FK>[] };
  for (const [groupKey, { facets }] of Object.entries(groups) as [GK, GEntry][]) {
    for (const facet of facets) gkByFk.set(facet.facetKey, groupKey);
  }
  const component = createFacetGroupsComponent(groupsMap);

  return [groupsMap, gkByFk, component as FunctionComponent<{ currentFacetGroup: string }>];
}
