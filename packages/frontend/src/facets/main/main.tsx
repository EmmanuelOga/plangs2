import type { JSX, Ref } from "preact";
import { useEffect } from "preact/hooks";

import { useRootState } from "@plangs/frontend/auxiliar/dispatchable";
import { DESELECT } from "@plangs/frontend/auxiliar/icons";
import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TAB } from "@plangs/server/components/layout";

import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { type AnyFacetsMainState, FacetsMainContext, useFacetState } from "./use_state";

const SUBGRID = tw("col-span-2", "grid grid-cols-subgrid", "items-center", "grow-0");

export function FacetsMain({ tab, pg }: { tab: TAB; pg: PlangsGraph }) {
  const state = useFacetState(tab, pg);
  const self = useRootState(state);

  // Subscribe to user changes to reset the form when the user changes URL fragment.
  useEffect(() => window.fragment.onUserChange(ev => state?.doResetAll(ev.deserFrag)));

  const mapGroups = (state: AnyFacetsMainState, group: string[], callback: (key: string, isCurrent: boolean, hasValues: boolean) => JSX.Element) =>
    group.map(groupKey => callback(groupKey, state.currentGroupKey === groupKey, state.groupHasValues(groupKey)));

  const iconStyle = tw("scale-75", "mr-1");

  const body = (state: AnyFacetsMainState) => (
    <FacetsMainContext.Provider value={state}>
      <aside
        class={tw(
          "h-full",
          "bg-linear-to-t from-secondary to-background",
          "overflow-hidden overflow-y-auto",

          tw(BORDER, "border-r-1"),

          // Sizing.
          "min-w-[10rem]",
          "sm:min-w-[12rem]",
        )}>
        <div class={tw("grid grid-cols-[auto_auto]")}>
          <div class={tw(SUBGRID, "mb-2", "ml-4")}>
            <header class={tw("uppercase", "text-primary")}>Filters</header>
            <div class={iconStyle}>{DESELECT}</div>
          </div>

          {Array.from(state.nav.groupKeys.entries()).map(([idx, group]) => (
            <nav key={group.join("-")} class={tw("mb-0", "min-w-[12rem] max-w-[15rem]", SUBGRID)}>
              {mapGroups(state, group, (groupKey, isCurrent, hasValues) => (
                <div key={groupKey} class={tw(SUBGRID, isCurrent ? "bg-primary/85 text-background" : "hover:bg-primary/25")}>
                  <button
                    {...onClickOnEnter(() => state.doSetCurrentGroup(groupKey))}
                    {...(hasValues ? { style: "font-weight: bold" } : {})}
                    class={tw(
                      "block w-full",
                      "truncate text-left",
                      "sm:ml-4",
                      "mr-2 px-1 py-1",
                      "px-4 py-2 sm:mb-1",
                      "cursor-pointer",
                      isCurrent ? "text-background/85" : hasValues ? "text-primary" : "text-foreground",
                    )}>
                    {state.groupTitle(groupKey)}
                  </button>
                  <div class={iconStyle}>{DESELECT}</div>
                </div>
              ))}
            </nav>
          ))}
        </div>
      </aside>

      <div class={tw("flex w-full flex-col", "overflow-hidden", "bg-linear-to-b to-secondary/50", "relative")}>
        <state.groupsComponent currentFacetGroup={state.currentGroupKey} />
      </div>
    </FacetsMainContext.Provider>
  );

  return (
    <aside ref={self as Ref<HTMLElement>} class={tw("flex flex-row items-stretch", "h-full overflow-hidden")}>
      {state && body(state)}
    </aside>
  );
}
