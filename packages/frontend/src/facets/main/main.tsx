import type { JSX, Ref } from "preact";
import { useEffect } from "preact/hooks";

import { useRootState } from "@plangs/frontend/auxiliar/dispatchable";
import { DESELECT } from "@plangs/frontend/auxiliar/icons";
import { HOVER_ICON_BG, INPUT, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";

import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { IconButton } from "@plangs/frontend/components/icon-button/icon-button";
import { cssClass } from "@plangs/server/elements";
import { type AnyFacetsMainState, FacetsMainContext, useFacetState } from "./use_state";

const SUBGRID = tw("col-span-2", "grid grid-cols-subgrid", "items-center", "grow-0");

export function FacetsMain({ page, pg }: { page: PlangsPage; pg: PlangsGraph }) {
  const state = useFacetState(page, pg);
  const self = useRootState(state);

  // Subscribe to user changes to reset the form when the user changes URL fragment.
  useEffect(() => window.fragment.onUserChange(ev => state?.doResetAll(ev.deserFrag)));

  const body = (state: AnyFacetsMainState) => (
    <FacetsMainContext.Provider value={state}>
      <FacetsAsideMenu page={page} state={state} class={cssClass("facetsBar")} />

      <div class={tw(cssClass("facetsSelect"), "flex-row items-center gap-2 bg-primary/85 p-2")}>
        <select class={tw(INPUT, "block h-8 w-full flex-1 py-0 text-black/85")} onChange={ev => state.doSetCurrentGroup(ev.currentTarget.value)}>
          {state.nav.groupKeys.map(group => (
            <optgroup key={group.join("-")}>
              {group.map(gk => (
                <option key={gk} value={gk} selected={state.currentGroupKey === gk}>
                  {state.groupTitle(gk)}
                  {state.groupHasValues(gk) ? " ☑" : ""}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <span class="text-background" title="Show items matching either all or any of the categories on the select box.">
          <IconButton action="allAny" />
        </span>
      </div>

      <div class={tw("w-full ", "flex flex-col", "overflow-hidden", "bg-linear-to-b to-secondary/50", "relative")}>
        <state.groupsComponent currentFacetGroup={state.currentGroupKey} />
      </div>
    </FacetsMainContext.Provider>
  );

  return (
    <aside
      ref={self as Ref<HTMLElement>}
      class={tw(
        //
        cssClass("facetsWrapper"),
        "flex",
        "size-full overflow-hidden",
        "border-1 border-primary/25 border-t-0",
      )}>
      {state && body(state)}
    </aside>
  );
}

function FacetsAsideMenu({ state, page, class: klass }: { state: AnyFacetsMainState; page: PlangsPage; class?: string }) {
  const mapGroups = (state: AnyFacetsMainState, group: string[], callback: (key: string, isCurrent: boolean, hasValues: boolean) => JSX.Element) =>
    group.map(groupKey => callback(groupKey, state.currentGroupKey === groupKey, state.groupHasValues(groupKey)));

  return (
    <aside class={tw("h-full min-w-[12rem] sm:pt-2", VSCROLL, "bg-linear-to-r from-secondary/50 to-transparent", klass)}>
      <div class={tw("grid grid-cols-[1fr_auto]", "ml-2")}>
        <header class={tw("text-primary uppercase", "col-span-2 py-2")}>Filter {page}</header>
        {state.nav.groupKeys.map(group => (
          <nav key={group.join("-")} class={tw("md:mb-6", SUBGRID)}>
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
                  class={tw("block w-full", "truncate text-left", "px-4 py-1.5", "cursor-pointer", isCurrent && "text-background/85")}>
                  {state.groupTitle(groupKey)}
                </button>
                <div
                  {...onClickOnEnter(() => state.doResetGroup(groupKey))}
                  class={tw(
                    "p-1",
                    "scale-75",
                    "cursor-pointer",
                    state.groupHasValues(groupKey) ? tw("hover:text-hiliteb", HOVER_ICON_BG) : "hidden",
                  )}>
                  {DESELECT}
                </div>
              </div>
            ))}
          </nav>
        ))}
      </div>
    </aside>
  );
}
