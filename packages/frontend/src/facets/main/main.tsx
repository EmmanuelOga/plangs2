import { Fragment, type Ref, createContext } from "preact";
import { useEffect } from "preact/hooks";

import { useRootState } from "@plangs/frontend/auxiliar/dispatchable";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { FULLCIRCLE } from "@plangs/frontend/auxiliar/icons";
import { BORDER, HOVER, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TAB } from "@plangs/server/components/layout";

import { type AnyFacetsMainState, useFacetState } from "./state";

/** Share the main component state across all other children components that may need it. */
export const FacetsMainContext = createContext<AnyFacetsMainState | undefined>(undefined);

export function FacetsMain({ tab, pg }: { tab: TAB; pg: PlangsGraph }) {
  const state = useFacetState(tab, pg);
  const self = useRootState(state);

  // Subscribe to user changes to reset the form when the user changes URL fragment.
  useEffect(() => window.fragment.onUserChange(ev => state?.doResetAll(ev.deserFrag)));

  const body = () =>
    !state ? null : (
      <FacetsMainContext.Provider value={state}>
        {/* Wrapper to avoid streteching the links to the bottom of the screen. */}
        <div class={tw(tw(BORDER, "border-r-1"), "overflow-y-scroll", "shrink-0 grow-0")}>
          <div class={tw("grid grid-cols-[auto_auto]", "gap-2", "pt-1")}>
            {state.nav.groupKeys.flatMap(keys => (
              // Subgrid respects the alignment of indicators while allowing to group the links and add a border.
              <div key={keys.join("-")} class={tw("col-span-2", "grid grid-cols-subgrid", "items-center", "pb-2", tw(BORDER, "border-b-1"))}>
                {/* biome-ignore lint/suspicious/noExplicitAny: we set as any here since the groupKey is actually a string that can belong to _any_ facet group. */}
                {keys.map((groupKey: any) => (
                  <Fragment key={groupKey}>
                    <div class={tw("mt-[.45rem] pl-1", state.groupHasValues(groupKey) ? "text-primary" : "text-foreground/20 text-xs")}>
                      <div class="-mt-[2px] scale-66">{FULLCIRCLE}</div>
                    </div>
                    <button
                      {...onClickOnEnter(() => state.doSetCurrentGroup(groupKey))}
                      class={tw(
                        "block",
                        "truncate text-left",
                        "mr-2 px-1 py-1",
                        state.currentGroupKey === groupKey ? "text-primary" : "text-foreground/85",
                        "underline decoration-1 decoration-dotted",
                        "cursor-pointer",
                        HOVER,
                      )}>
                      {state.groupTitle(groupKey)}
                    </button>
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div class={tw("flex w-full flex-col", "overflow-hidden", "bg-linear-to-b to-secondary/50")}>
          <state.groupsComponent currentFacetGroup={state.currentGroupKey} />
        </div>
      </FacetsMainContext.Provider>
    );

  return (
    <aside
      ref={self as Ref<HTMLElement>}
      class={tw("flex flex-row", "max-h-full overflow-hidden", tw(BORDER, "border-b-1", "border-t-1", "sm:border-r-1"))}>
      {body()}
    </aside>
  );
}
