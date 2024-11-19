import type { ComponentChild } from "preact";

import type { AnyValue } from "@plangs/auxiliar/value";
import type { FacetBoolMapper } from "@plangs/frontend/components/facets/misc/facet-bool";
import type { FacetTableConfig } from "@plangs/frontend/components/facets/table/entries";

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

/** Define a map of facets keyed by facetKey. */
export function defineFacets<FK extends string>(...facets: readonly FacetConfig<FK>[]): FacetsMap<FK> {
  return facets.reduce(
    (map, facet) => {
      map.set(facet.facetKey, facet);
      return map;
    },
    new Map() as FacetsMap<FK>,
  );
}

////////////////////////////////////////////////////////////////////////////////
/// Facet Group Configuration
////////////////////////////////////////////////////////////////////////////////

/** Type of a group of facets. */
export type FacetGroupConfig<GK, FK> = { groupKey: GK; label: string; facetKeys: readonly FK[] };

/** Map from group key to its group of facets. */
export type GroupsMap<GK, FK> = Map<GK, FacetGroupConfig<GK, FK>>;

/** Define a gorup of facet inputs. */
export function group<GK, FK>(groupKey: GK, label: string, facetKeys: FK[]): FacetGroupConfig<GK, FK> {
  return { groupKey, label, facetKeys };
}

/** Define a map of groups keyed by group key, and derive a map of groupKey by facetKey (so we can tell which group holds which facet). */
export function defineGroups<GK, FK>(...groups: FacetGroupConfig<GK, FK>[]): readonly [GroupsMap<GK, FK>, Map<FK, GK>] {
  const groupMap = new Map<GK, FacetGroupConfig<GK, FK>>();
  const groupForFacetKey = new Map<FK, GK>();
  for (const group of groups) {
    groupMap.set(group.groupKey, group);
    for (const facetKey of group.facetKeys) groupForFacetKey.set(facetKey, group.groupKey);
  }
  return [groupMap, groupForFacetKey] as const;
}
