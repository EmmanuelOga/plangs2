import type { ComponentChildren, Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { InputToggle } from "@plangs/frontend/components/input-toggle/input-toggle";
import { setComponentState, useDispatchable } from "@plangs/frontend/dispatchable";
import { DESELECT } from "@plangs/frontend/icons";
import { BORDER, HOVER, HOVER_SVG_GROUP } from "@plangs/frontend/styles";
import { $, onClickOnEnter, tap, tw } from "@plangs/frontend/utils";
import type { E, N, PlangsGraph } from "@plangs/plangs";
import { cl } from "@plangs/server/elements";

import { isInputFacetElement } from ".";
import { InputFacetState } from "./state";

export type InputFacetProps = {
  pg?: PlangsGraph;
  node?: N;
  edge?: E;
  dir?: "direct" | "inverse";
};

export const TAG_NAME = "input-facet";
export const PROP_KEYS: (keyof InputFacetProps)[] = ["pg", "node", "edge", "dir"];

export function InputFacet({ pg, edge, node, dir }: InputFacetProps) {
  const self = useRef<HTMLDivElement>();
  const state = useDispatchable(InputFacetState.initial({ pg, edge, node, dir }));

  // biome-ignore lint/correctness/useExhaustiveDependencies: only missing state, which is a dispatchable.
  useEffect(() => {
    state.generateEntries({ pg, edge, node, dir });
  }, [pg, edge, node, dir]);

  useEffect(() => {
    const wrapper = setComponentState(self, isInputFacetElement, state);
    if (!wrapper) return;

    // Toggle indicator.
    const facet = wrapper.closest(`.${cl("facet")}`);
    $(`.${cl("facetIndicator")}[data-facet=${facet?.id}]`)?.classList.toggle("text-primary", state.hasSelection);
  });

  const SUBGRID = tw("col-span-3", "grid grid-cols-subgrid", "items-center");
  const ROW = tw(SUBGRID, tw("border-b-1", BORDER));
  const CENTER_ROW = tw("items-center justify-between");

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("absolute inset-0", "flex flex-col")}>
      <div class={tw("grid grid-cols-[1fr_auto_auto]", "overflow-y-auto")}>
        <div class={tw(ROW, "sticky top-0 cursor-pointer", tw(BORDER, "border-b-1"))}>
          <div class={tw("col-span-3", "py-1", "flex shrink-0 flex-row", "bg-background", CENTER_ROW, tw(BORDER, "border-t-1"))}>
            <span class={tw("inline-flex", CENTER_ROW, state.selected.size < 2 ? "text-foreground/50" : "text-foreground", "pl-2")}>
              <InputToggle action="allAny" disabled={state.selected.size < 2} />
            </span>
            <span
              // biome-ignore lint/a11y/noNoninteractiveTabindex: we make it interactive.
              tabIndex={0}
              {...onClickOnEnter(() => state.resetSelected())}
              class={tw("group", "inline-flex", CENTER_ROW, state.hasSelection ? "text-foreground" : "text-foreground/50")}>
              <span class={tw(state.hasSelection && "group-hover:text-hiliteb")}>Reset</span>
              <span class={tw(state.hasSelection && HOVER_SVG_GROUP, "scale-50")}>{DESELECT}</span>
            </span>
          </div>

          <div class={tw(ROW, "col-span-3", "bg-primary text-background/80")}>
            <FacetButton class={tw("px-2 py-1", "text-left italic")} action={() => state.toggleOrder("facet")}>
              {state.header("facet")}
            </FacetButton>

            <FacetButton class={tw("px-2 py-1", "text-center italic")} action={() => state.toggleOrder("count")}>
              {state.header("count")}
            </FacetButton>

            <FacetButton class={tw("px-2 py-1", "text-right italic")} action={() => state.toggleOrder("sel")}>
              {state.header("sel")}
            </FacetButton>
          </div>
        </div>

        {state.entries.map(entry =>
          tap(
            onClickOnEnter(() => state.toggleSelected(entry.value)),
            toggle => (
              <div key={entry.value} class={tw(ROW, state.isSelected(entry.value) && "bg-primary/20", HOVER)} {...toggle}>
                <div class={tw("p-2", "text-left", "overflow-hidden text-ellipsis", "line-clamp-3")}>{entry.label}</div>
                <div class={tw("p-2", "text-center")}>{entry.count}</div>
                <div class={tw("p-2", "text-right")}>
                  <input type="checkbox" checked={state.isSelected(entry.value)} {...toggle} />
                </div>
              </div>
            ),
          ),
        )}
      </div>
    </div>
  );
}

function FacetButton({ action, class: cssClass, children }: { class?: string; action: () => void; children: ComponentChildren }) {
  return (
    <button type="button" class={tw("cursor-pointer", "underline decoration-1 decoration-dotted", HOVER, cssClass)} {...onClickOnEnter(action)}>
      {children}
    </button>
  );
}
