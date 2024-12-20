import type { ComponentChildren, FunctionComponent } from "preact";
import { useContext } from "preact/hooks";

import { tw } from "@plangs/frontend/auxiliar/styles";
import type { FacetConfig } from "@plangs/frontend/facets/main/types";
import { type AnyFacetsMainState, FacetsMainContext } from "@plangs/frontend/facets/main/use_state";
import { FacetBool } from "@plangs/frontend/facets/misc/facet-bool";
import { FacetText } from "@plangs/frontend/facets/misc/facet-text";
import { FacetMulti } from "@plangs/frontend/facets/multisel/facet-multi";
import { FacetTable } from "@plangs/frontend/facets/table/facet-table";

/** Higher order component: Return a component wrapping several FacetGroup components. */
export function createFacetGroupsComponent<GK extends string, FK extends string>(
  groups: Map<GK, { title: string; facets: FacetConfig<FK>[] }>,
): FunctionComponent<{ currentFacetGroup: GK }> {
  return ({ currentFacetGroup }) => (
    <>
      {[...groups.entries()].map(([groupKey, { title, facets }]) => (
        <FacetGroup<GK> key={groupKey} groupKey={groupKey} label={title} active={currentFacetGroup === groupKey}>
          {facets.map(facet => {
            const { kind, label, facetKey } = facet;
            const props = { groupKey, facetKey, label, active: currentFacetGroup === groupKey };
            switch (kind) {
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

export function FacetGroup<GroupKey extends string>({
  active,
  children,
}: { label: string; groupKey: GroupKey; active: boolean; children: ComponentChildren }) {
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.
  return (
    <div
      class={tw(
        "relative",
        !active && "hidden",

        // Self.
        "flex-1",
        "self-center",
        "size-full overflow-hidden overflow-y-auto",

        // Children.
        "flex flex-col gap-4",
      )}>
      {children}
    </div>
  );
}
