import { Fragment, type Ref, h } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/dispatchable";
import { HOVER, HOVER_LIST, NOWRAP_TEXT } from "@plangs/frontend/styles";
import { customEvent, on, tw } from "@plangs/frontend/utils";
import { type EncodedFilter, isEncodedFilter } from "@plangs/graph/auxiliar";
import type { E, N, PlangsGraph } from "@plangs/plangs";

import type { InputSelElement } from "../input-sel";
import { type Entry, InputFacetState } from "./state";

export type InputFacetProps = {
  dir?: "direct" | "inverse";
  edge?: E;
  node?: N;
  pg?: PlangsGraph;
};

export const TAG_NAME = "input-facet";

export function InputFacet({ pg, edge, node, dir }: InputFacetProps) {
  const self = useRef<HTMLDivElement>();
  const selectionRef = useRef<InputSelElement | undefined>();

  const state = useDispatchable(new InputFacetState({ pg, edge, node, dir, entries: [], order: "facet-asc", selected: new Set() }).generateEntries());

  const toggleFacet = () => state.toggleOrder("facet");
  const toggleCount = () => state.toggleOrder("count");

  const addEntry = (entry: Entry) => {
    selectionRef.current?.addItems([entry]);
    state.addEntry(entry);
  };

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

  const STICKY = "sticky top-0 bg-background border-b-2 border-secondary";

  return (
    <div ref={self as Ref<HTMLDivElement>}>
      <div class={tw("mb-1", "max-h-[10rem] max-w-full", "overflow-x-hidden overflow-y-scroll", "bg-background")}>
        <div class="grid grid-cols-[1fr_auto]">
          <button
            type="button"
            class={tw(STICKY, "p-2", "text-left italic")}
            onClick={toggleFacet}
            onKeyDown={ev => ev.key === "Enter" && toggleFacet()}>
            Facet
          </button>
          <button
            type="button"
            class={tw(STICKY, "p-2", "text-right italic")}
            onClick={toggleCount}
            onKeyDown={ev => ev.key === "Enter" && toggleCount()}>
            Count
          </button>

          {[...state.entries()].map(entry => (
            <Fragment key={entry.value}>
              <button
                type="button"
                class={tw(NOWRAP_TEXT, HOVER, "p-2", "text-left")}
                onClick={() => addEntry(entry)}
                // Would be nice to use tailwind's sibling selector, but it's not working for wathever reason.
                onMouseEnter={({ target }) => (target as Element).nextElementSibling?.classList.add(...HOVER_LIST)}
                onMouseLeave={({ target }) => (target as Element).nextElementSibling?.classList.remove(...HOVER_LIST)}
                onKeyDown={ev => ev.key === "Enter" && addEntry(entry)}>
                {entry.label}
              </button>
              <div class={tw("p-2", "text-center")}>{entry.count}</div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* @ts-ignore TODO: need to add the definition so preact won't complain. */}
      {h("input-sel", { ref: selectionRef, name: `${edge}-${dir}` })}
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
