import type { ComponentChildren, FunctionComponent } from "preact";
import { useContext } from "preact/hooks";

import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { DESELECT } from "@plangs/frontend/auxiliar/icons";
import { BAR, BORDER, HOVER_SVG_GROUP, tw } from "@plangs/frontend/auxiliar/styles";
import { type AnyFacetsMainState, FacetsMainContext } from "@plangs/frontend/facets/main/main";
import type { FacetConfig } from "@plangs/frontend/facets/main/types";
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
  label,
  groupKey,
  active,
  children,
}: { label: string; groupKey: GroupKey; active: boolean; children: ComponentChildren }) {
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.
  const hasValues = main.groupHasValues(groupKey);
  return (
    <div class={tw("flex-1", "flex flex-col", "overflow-hidden", !active && "hidden")}>
      <header
        class={tw(
          "sticky top-0 z-10",
          "shrink-0",
          "p-2",
          "flex flex-row",
          "items-center justify-between",
          "truncate",
          "text-primary",
          tw(BORDER, "border-b-1"),
          BAR,
        )}>
        <span class="inline-block">{label}</span>

        <span
          // biome-ignore lint/a11y/noNoninteractiveTabindex: we make it interactive.
          tabIndex={0}
          class={tw("group", "cursor-pointer", hasValues ? "text-foreground" : "text-foreground/50")}
          {...onClickOnEnter(() => {
            main.doResetGroup(groupKey);
          })}>
          <div class="inline-flex flex-row items-center">
            <span class={tw(hasValues && "group-hover:text-hiliteb")}>Reset</span>
            <span class={tw(hasValues && HOVER_SVG_GROUP, "scale-50")}>{DESELECT}</span>
          </div>
        </span>
      </header>

      <div class={tw("flex-1", "flex flex-col", "gap-4", "overflow-y-scroll", "relative")}>{children}</div>
    </div>
  );
}
