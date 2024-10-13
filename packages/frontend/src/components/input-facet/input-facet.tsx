import { Fragment, type Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/dispatchable";
import { BORDER, HOVER, HOVER_LIST, NOWRAP_TEXT } from "@plangs/frontend/styles";
import { customEvent, on, tw } from "@plangs/frontend/utils";
import { type EncodedFilter, isEncodedFilter } from "@plangs/graph/auxiliar";
import type { E, N, PlangsGraph } from "@plangs/plangs";

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

  useEffect(() =>
    on(self.current?.parentElement, EVENTS.inSetFacet.type, (ev: CustomEvent) => {
      if (!EVENTS.inSetFacet.valid(ev) || !isEncodedFilter(ev.detail)) return console.warn("Invalid event data on:", ev);
      const filter = ev.detail;
      state.setFacets(filter);
      state.dispatch();
    }),
  );

  const actions = (entry: Entry) => ({
    onClick: () => state.toggleSelected(entry.value),
    onKeyDown: ({ key }: { key: string }) => state.toggleSelected(entry.value, key),
  });

  const facets = (
    <table class={tw("bg-thumbnails/75", "overflow-y-scroll")}>
      <thead class={tw("sticky top-0 cursor-pointer", "bg-primary text-background/80", tw(BORDER, "border-b-1"))}>
        <tr>
          <td>
            <FacetButton class={tw("p-2", "text-left italic")} action={() => state.toggleOrder("facet")} label="Facet" />
          </td>
          <td>
            <FacetButton class={tw("p-2", "text-right italic")} action={() => state.toggleOrder("count")} label="Count" />
          </td>
          <td>
            <FacetButton class={tw("p-2", "text-right italic")} action={() => state.toggleOrder("sel")} label="Sel" />
          </td>
        </tr>
      </thead>

      <tbody>
        {state.entries.map(entry => (
          <tr key={entry.value} class={HOVER} {...actions(entry)}>
            <td class={tw(NOWRAP_TEXT, "p-2", "text-left")}>{entry.label}</td>
            <td class={tw("p-2", "text-center")}>{entry.count}</td>
            <td class={tw("p-2", "text-center")}>
              <input type="checkbox" checked={state.isSelected(entry.value)} {...actions(entry)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("absolute inset-0", "flex flex-col")}>
      {facets}
    </div>
  );
}

function FacetButton({ label, action, class: cssClass }: { label: string; class?: string; action: () => void }) {
  return (
    <button type="button" class={cssClass} onClick={action} onKeyDown={({ key }) => key === "Enter" && action()}>
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
