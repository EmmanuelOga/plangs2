import { Fragment, type Ref, h } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/dispatchable";
import { BORDER, HOVER, HOVER_LIST, NOWRAP_TEXT } from "@plangs/frontend/styles";
import { customEvent, on, tw } from "@plangs/frontend/utils";
import { type EncodedFilter, isEncodedFilter } from "@plangs/graph/auxiliar";
import type { E, N, PlangsGraph } from "@plangs/plangs";
import { loremIpsum } from "@plangs/server/utils/lorem";

import type { InputSelElement } from "../input-sel";
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
  const selectionRef = useRef<InputSelElement | undefined>();
  const state = useDispatchable(InputFacetState.initial(props));

  // biome-ignore lint/correctness/useExhaustiveDependencies: only missing state, which is a dispatchable.
  useEffect(() => {
    state.generateEntries({ pg, edge, node, dir });
  }, [pg, edge, node, dir]);

  useEffect(() =>
    selectionRef.current?.onRemove(({ removed, itemsLeft, by }) => {
      state.removeEntry(removed);
      if (by === "enterKey" && itemsLeft === 0) self.current?.querySelector<HTMLButtonElement>("tbody button")?.focus();
    }),
  );

  useEffect(() =>
    on(self.current?.parentElement, EVENTS.inSetFacet.type, (ev: CustomEvent) => {
      if (!EVENTS.inSetFacet.valid(ev) || !isEncodedFilter(ev.detail)) return console.warn("Invalid event data on:", ev);
      const filter = ev.detail;
      const entries = state.setFacets(filter);
      selectionRef.current?.addItems(entries);
      setTimeout(() => selectionRef.current?.setMode(filter.mode), 10); // TODO: set it through state.
      state.dispatch();
    }),
  );

  const addEntry = (entry: Entry) => {
    selectionRef.current?.addItems([entry]);
    state.addEntry(entry);
  };

  const HALF = "max-h-[50%] overflow-y-scroll";
  const STICKY = "sticky top-0 bg-background border-b-2 border-secondary";

  const facets = (
    <div class={tw(HALF, "mb-1", "grid grid-cols-[1fr_auto]", "bg-background/25", BORDER, "border-b-1")}>
      <button
        type="button"
        class={tw(STICKY, "p-2", "text-left italic")}
        onClick={() => state.toggleOrder("facet")}
        onKeyDown={({ key }) => state.toggleOrder("facet", key)}>
        Facet
      </button>
      <button
        type="button"
        class={tw(STICKY, "p-2", "text-right italic")}
        onClick={() => state.toggleOrder("count")}
        onKeyDown={({ key }) => state.toggleOrder("count", key)}>
        Count
      </button>

      {[...state.entries()].map(entry => (
        <Fragment key={entry.value}>
          <button
            type="button"
            class={tw(NOWRAP_TEXT, HOVER, "p-2", "text-left")}
            onClick={() => addEntry(entry)}
            onKeyDown={ev => ev.key === "Enter" && addEntry(entry)}
            // Would be nice to use tailwind's sibling selector for these, but it's not working for wathever reason.
            onMouseEnter={({ target }) => (target as Element).nextElementSibling?.classList.add(...HOVER_LIST)}
            onMouseLeave={({ target }) => (target as Element).nextElementSibling?.classList.remove(...HOVER_LIST)}>
            {entry.label}
          </button>
          <div class={tw("p-2", "text-center")}>{entry.count}</div>
        </Fragment>
      ))}
    </div>
  );

  const selection = <div class={tw(HALF)}>{h("input-sel", { ref: selectionRef, name: `${edge}-${dir}` })}</div>;
  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("absolute inset-0 flex flex-col")}>
      {facets}
      {selection}
    </div>
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
