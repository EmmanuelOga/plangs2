import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/dispatchable";
import { BORDER, HOVER, HOVER_SVG_GROUP } from "@plangs/frontend/styles";
import { customEvent, on, onClickOnEnter, tap, tw } from "@plangs/frontend/utils";
import { type EncodedFilter, isEncodedFilter } from "@plangs/graph/auxiliar";
import type { E, N, PlangsGraph } from "@plangs/plangs";

import { DESELECT } from "@plangs/frontend/icons";
import { InputToggle } from "../input-toggle/input-toggle";
import { type Entry, InputFacetState } from "./state";

export type InputFacetProps = {
  dir?: "direct" | "inverse";
  edge?: E;
  node?: N;
  pg?: PlangsGraph;
};

export const TAG_NAME = "input-facet";

export function InputFacet(props: InputFacetProps) {
  const { pg, edge, node, dir } = props;

  const self = useRef<HTMLDivElement>();
  const state = useDispatchable(InputFacetState.initial(props));

  // biome-ignore lint/correctness/useExhaustiveDependencies: only missing state, which is a dispatchable.
  useEffect(() => {
    state.generateEntries({ pg, edge, node, dir });
  }, [pg, edge, node, dir]);

  useEffect(() => {
    on(self.current?.parentElement, EVENTS.inSetFacet.type, (ev: CustomEvent) => {
      if (!EVENTS.inSetFacet.valid(ev) || !isEncodedFilter(ev.detail)) return console.warn("Invalid event data on:", ev);
      const filter = ev.detail;
      state.setFacets(filter);
      state.dispatch();
    });
  });

  const SUBGRID = tw("col-span-3", "grid grid-cols-subgrid", "items-center");
  const ROW = tw(SUBGRID, tw("border-b-1", BORDER));

  const CENTER_ROW = tw("items-center justify-between");

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("absolute inset-0", "flex flex-col")}>
      <div class={tw("grid grid-cols-[1fr_auto_auto]", "flex-1", "overflow-y-scroll")}>
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
            <FacetButton class={tw("px-2 py-1", "text-left italic")} action={() => state.toggleOrder("facet")} label={state.header("facet")} />
            <FacetButton class={tw("px-2 py-1", "text-center italic")} action={() => state.toggleOrder("count")} label={state.header("count")} />
            <FacetButton class={tw("px-2 py-1", "text-right italic")} action={() => state.toggleOrder("sel")} label={state.header("sel")} />
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

function FacetButton({ label, action, class: cssClass }: { label: string; class?: string; action: () => void }) {
  return (
    <button type="button" class={tw("cursor-pointer", "underline decoration-1 decoration-dotted", HOVER, cssClass)} {...onClickOnEnter(action)}>
      {label}
    </button>
  );
}

/** Catalog of incoming and outgoing events, and factory functions for those events. */
export const EVENTS = {
  /** Incoming event: request to add an item. */
  inSetFacet: {
    type: `${TAG_NAME}:in-add"`,
    create: (facet: EncodedFilter) => customEvent(EVENTS.inSetFacet.type, facet),
    /** Validate data extracted from a CustomEvent detail field. */
    valid: ({ detail }: CustomEvent) => isEncodedFilter(detail),
  },
} as const;
