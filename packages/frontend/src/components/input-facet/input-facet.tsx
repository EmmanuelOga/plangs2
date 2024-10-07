import { type Ref, h } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/dispatchable";
import { customEvent, on, tw } from "@plangs/frontend/utils";
import type { E, N, PlangsGraph } from "@plangs/plangs/index";

import { type EncodedFilter, isEncodedFilter } from "@plangs/graph/auxiliar";
import type { InputSelElement, Item } from "../input-sel";
import { type Entry, InputFacetState } from "./state";

export type InputFacetProps = {
  dir?: "direct" | "inverse";
  edge?: E;
  node?: N;
  pg?: PlangsGraph;
};

export const TAG_NAME = "input-facet";

const CLICKTXT = tw("w-full cursor-pointer", "hover:text-secondary hover:underline", "overflow-hidden text-ellipsis whitespace-nowrap");

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
      const entries = state.setFacets(ev.detail);
      selectionRef.current?.addItems(entries);
      state.dispatch();
    }),
  );

  return (
    <div ref={self as Ref<HTMLDivElement>}>
      <div class={tw("mb-4", "max-h-[15rem]", "overflow-x-hidden overflow-y-scroll")}>
        <table class={tw("readable w-full max-w-[unset]")}>
          <thead class="sticky top-0 bg-foreground">
            <tr>
              <th class="pt-1">
                <button
                  type="button"
                  class={tw(CLICKTXT, "text-left italic")}
                  onClick={toggleFacet}
                  onKeyDown={ev => ev.key === "Enter" && toggleFacet()}>
                  Facet
                </button>
              </th>
              <th>
                <button
                  type="button"
                  class={tw(CLICKTXT, "text-left italic")}
                  onClick={toggleCount}
                  onKeyDown={ev => ev.key === "Enter" && toggleCount()}>
                  Count
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...state.entries()].map(entry => (
              <tr key={entry.value}>
                <td>
                  <button
                    type="button"
                    class={tw(CLICKTXT, "text-left")}
                    onClick={() => addEntry(entry)}
                    onKeyDown={ev => ev.key === "Enter" && addEntry(entry)}>
                    {entry.label}
                  </button>
                </td>
                <td class="w-[4rem] text-left">{entry.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
