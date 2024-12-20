import type { JSX, Ref } from "preact";
import { useEffect } from "preact/hooks";

import { useRootState } from "@plangs/frontend/auxiliar/dispatchable";
import { DESELECT } from "@plangs/frontend/auxiliar/icons";
import { BORDER, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";

import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { type AnyFacetsMainState, FacetsMainContext, useFacetState } from "./use_state";

const SUBGRID = tw("col-span-2", "grid grid-cols-subgrid", "items-center", "grow-0");

export function FacetsMain({ page, pg }: { page: PlangsPage; pg: PlangsGraph }) {
  const state = useFacetState(page, pg);
  const self = useRootState(state);

  // Subscribe to user changes to reset the form when the user changes URL fragment.
  useEffect(() => window.fragment.onUserChange(ev => state?.doResetAll(ev.deserFrag)));

  const mapGroups = (state: AnyFacetsMainState, group: string[], callback: (key: string, isCurrent: boolean, hasValues: boolean) => JSX.Element) =>
    group.map(groupKey => callback(groupKey, state.currentGroupKey === groupKey, state.groupHasValues(groupKey)));

  const iconStyle = tw("scale-66", "mr-1");

  const body = (state: AnyFacetsMainState) => (
    <FacetsMainContext.Provider value={state}>
      <aside
        class={tw(
          tw("h-full", VSCROLL),
          "min-w-[10rem] sm:min-w-[12rem]",
          // ---
          tw(BORDER, "border-r-1"),
          "bg-linear-to-t from-secondary to-background",
        )}>
        <div class={tw("grid grid-cols-[auto_auto]")}>
          <header class={tw("uppercase", "text-primary", "mb-4", "ml-4")}>Filter {page}</header>

          {state.nav.groupKeys.map(group => (
            <nav key={group.join("-")} class={tw("sm:mb-6", "min-w-[12rem] max-w-[15rem]", SUBGRID)}>
              {mapGroups(state, group, (groupKey, isCurrent, hasValues) => (
                <div
                  key={groupKey}
                  class={tw(
                    SUBGRID,
                    isCurrent ? tw(tw("border-secondary border-dotted", "border-l-1"), "bg-primary/85 text-background") : "hover:bg-primary/25",
                  )}
                  style={`${hasValues ? "font-weight: bold" : ""}`}>
                  <button
                    {...onClickOnEnter(() => state.doSetCurrentGroup(groupKey))}
                    class={tw(
                      "block w-full",
                      "truncate text-left",
                      "mr-2 px-4 py-1.5 sm:mb-1 sm:ml-4",
                      "cursor-pointer",
                      isCurrent ? "text-background/85" : hasValues ? "text-primary" : "text-foreground",
                    )}>
                    {state.groupTitle(groupKey)}
                  </button>
                  <div {...onClickOnEnter(() => state.doResetGroup(groupKey))} class={tw(iconStyle, !state.groupHasValues(groupKey) && "hidden", "")}>
                    {DESELECT}
                  </div>
                </div>
              ))}
            </nav>
          ))}
        </div>
      </aside>

      <div class={tw("flex w-full flex-col", "overflow-hidden", tw(BORDER, "border-r-1"), "bg-linear-to-b to-secondary/50", "relative")}>
        <state.groupsComponent currentFacetGroup={state.currentGroupKey} />
      </div>
    </FacetsMainContext.Provider>
  );

  return (
    <aside ref={self as Ref<HTMLElement>} class={tw("flex flex-row items-stretch", "size-full overflow-hidden")}>
      {state && body(state)}
    </aside>
  );
}
