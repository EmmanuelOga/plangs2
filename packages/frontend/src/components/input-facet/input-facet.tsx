import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/dispatchable";
import { BORDER, HOVER } from "@plangs/frontend/styles";
import { customEvent, on, tw } from "@plangs/frontend/utils";
import { type EncodedFilter, isEncodedFilter } from "@plangs/graph/auxiliar";
import type { E, N, PlangsGraph } from "@plangs/plangs";
import { loremIpsum } from "@plangs/server/utils/lorem";

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

  const actions = (entry: Entry) => ({
    onClick: (ev: MouseEvent) => {
      ev.stopPropagation(); // Both TR and INPUT are clickable.
      state.toggleSelected(entry.value);
    },
    onKeyDown: ({ key }: { key: string }) => state.toggleSelected(entry.value, key),
  });

  const SUBGRID = tw("col-span-3", "grid grid-cols-subgrid", "items-center");
  const ROW = tw(SUBGRID, HOVER, tw("border-b-1", BORDER));

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("absolute inset-0", "overflow-y-scroll")}>
      <div class={tw("grid grid-cols-[1fr_auto_auto]", "flex-1")}>
        <div class={tw(ROW, "sticky top-0 cursor-pointer", "bg-primary text-background/80", tw(BORDER, "border-b-1"))}>
          <FacetButton class={tw("px-2 py-1", "text-left italic")} action={() => state.toggleOrder("facet")} label={state.header("facet")} />
          <FacetButton class={tw("px-2 py-1", "text-center italic")} action={() => state.toggleOrder("count")} label={state.header("count")} />
          <FacetButton class={tw("px-2 py-1", "text-right italic")} action={() => state.toggleOrder("sel")} label={state.header("sel")} />
        </div>
        {state.entries.map(entry => (
          <div key={entry.value} class={tw(ROW)} {...actions(entry)}>
            <div class={tw("p-2", "text-left", "overflow-hidden text-ellipsis", "line-clamp-3")}>{entry.label}</div>
            <div class={tw("p-2", "text-center")}>{entry.count}</div>
            <div class={tw("p-2", "text-right")}>
              <input type="checkbox" checked={state.isSelected(entry.value)} {...actions(entry)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FacetButton({ label, action, class: cssClass }: { label: string; class?: string; action: () => void }) {
  return (
    <button
      type="button"
      class={tw("cursor-pointer", "underline decoration-1 decoration-dotted", HOVER, cssClass)}
      onClick={action}
      onKeyDown={({ key }) => key === "Enter" && action()}>
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
