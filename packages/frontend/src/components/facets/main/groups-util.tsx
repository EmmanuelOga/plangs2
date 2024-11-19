import type { FunctionComponent } from "preact";

import { FacetBool } from "@plangs/frontend/components/facets/misc/facet-bool";
import { FacetGroup } from "@plangs/frontend/components/facets/misc/facet-group";
import { FacetText } from "@plangs/frontend/components/facets/misc/facet-text";
import { FacetMulti } from "@plangs/frontend/components/facets/multisel/facet-multi";
import { FacetTable } from "@plangs/frontend/components/facets/table/facet-table";

import type { FacetConfig, FacetsMap, GroupsMap } from "./types";

/** Return a preact component given the configuration of groups of facets. */
export function createFacetGroups<GK extends string, FK extends string>(
  groups: GroupsMap<GK, FK>,
  facets: FacetsMap<FK>,
): FunctionComponent<{ currentFacetGroup: GK }> {
  return ({ currentFacetGroup }) => (
    <>
      {[...groups.values()].map(({ groupKey, label, facetKeys }) => (
        <FacetGroup<GK> key={groupKey} groupKey={groupKey} label={label} active={currentFacetGroup === groupKey}>
          {facetKeys.map(facetKey => {
            const facet = facets.get(facetKey) as FacetConfig<FK>;
            const props = { groupKey, facetKey, label: facet.label, active: currentFacetGroup === groupKey };
            switch (facet?.kind) {
              case "bool":
                return <FacetBool {...props} valueMapper={facet.valueMapper} />;
              case "multi":
                return <FacetMulti {...props} />;
              case "table":
                return <FacetTable {...props} config={facet.config} />;
              case "text":
                return <FacetText {...props} />;
              default:
                console.error("Facet not found", facetKey);
            }
          })}
        </FacetGroup>
      ))}
    </>
  );
}
