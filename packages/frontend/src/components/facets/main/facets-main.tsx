import { Fragment, type Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { setComponentState } from "@plangs/frontend/dispatchable";
import { FULLCIRCLE } from "@plangs/frontend/icons";
import { BORDER } from "@plangs/frontend/styles";
import { onClickOnEnter, tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";
import type { TAB } from "@plangs/server/components/layout";
import { createContext } from "preact";

import { isFacetsMainElement } from ".";
import { useFacetState } from "./state";

export type FacetsMainProps = {
  tab: TAB;
  pg?: PlangsGraph;
};

export const TAG_NAME = "facets-main";
export const PROP_KEYS: (keyof FacetsMainProps)[] = ["tab", "pg"] as const;

/** Provide the PlangsGraph through a context */
export const PGContext = createContext<PlangsGraph | undefined>(undefined);

export function FacetsMain({ tab, pg }: FacetsMainProps) {
  const self = useRef<HTMLElement>();
  const state = useFacetState({ tab, pg });

  // biome-ignore lint/correctness/useExhaustiveDependencies: state is dispatchable and should be updated when tab or pg change.
  useEffect(() => {
    state.update({ tab, pg });
  }, [tab, pg]);

  useEffect(() => {
    setComponentState(self, isFacetsMainElement, state);
  });

  return (
    <aside ref={self as Ref<HTMLElement>} class={tw("flex flex-row", "overflow-hidden", tw(BORDER, "border-b-1", "border-t-1", "sm:border-r-1"))}>
      <PGContext.Provider value={pg}>
        {/* Wrapper to avoid streteching the links to the bottom of the screen. */}
        <div class={tw(tw(BORDER, "border-r-1"), "overflow-y-scroll", "shrink-0 grow-0")}>
          <div class={tw("grid grid-cols-[auto_auto]", "gap-2", "pt-1")}>
            {state.nav.flatMap(keys => (
              // Subgrid respects the alignment of indicators while allowing to group the links and add a border.
              <div key={keys.join("-")} class={tw("col-span-2", "grid grid-cols-subgrid", "items-center", "pb-2", tw(BORDER, "border-b-1"))}>
                {keys.map(key => (
                  <Fragment key={key}>
                    <div class={tw("mt-[.45rem] pl-1", "text-foreground/20 text-xs")}>
                      <div class="-mt-[2px] scale-66">{FULLCIRCLE}</div>
                    </div>
                    <button
                      {...onClickOnEnter(() => state.doSetCurrent(key))}
                      class={tw(
                        "block",
                        "truncate text-left",
                        "py-1 pr-1",
                        "text-foreground/85",
                        "underline decoration-1 decoration-dotted",
                        "cursor-pointer",
                      )}>
                      {state.groupTitle(key)}
                    </button>
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div class={tw("grow-1", "overflow-hidden", "bg-linear-to-b to-secondary/50", "flex flex-col")}>{state.groups}</div>
      </PGContext.Provider>
    </aside>
  );
}
