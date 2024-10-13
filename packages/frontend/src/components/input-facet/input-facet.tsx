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

  const BG = "bg-thumbnails/75";
  const SCROLL = "overflow-y-scroll";
  const HEADER = tw("sticky top-0 cursor-pointer", "bg-primary text-background/80", tw(BORDER, "border-t-1"));

  const facets = (
    <div class={tw(SCROLL, "min-h-32", "grid grid-cols-[1fr_1fr_auto]", BG, tw(BORDER, "border-b-1"))}>
      <FacetButton class={tw(HEADER, "p-2", "text-left italic")} action={() => state.toggleOrder("facet")} label="Facet" />
      <FacetButton class={tw(HEADER, "p-2", "text-right italic")} action={() => state.toggleOrder("count")} label="Count" />
      <FacetButton class={tw(HEADER, "p-2", "text-right italic")} action={() => state.toggleOrder("sel")} label="Sel" />

      {state.entries.map(entry => (
        <Fragment key={entry.value}>
          <FacetButton
            class={tw(NOWRAP_TEXT, HOVER, "p-2", "text-left")}
            action={() => state.toggleSelected(entry.value)}
            label={entry.label}
            hoverNext={true}
          />
          <div class={tw("p-2", "text-center")}>{entry.count}</div>
          <div class={tw("p-2", "text-center")}>{state.isSelected(entry.value) ? "1" : "0"}</div>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("absolute inset-0", "flex flex-col")}>
      {facets}
    </div>
  );
}

// Would be nice to use tailwind's sibling selector for these, but it's not working for wathever reason.
const HOVER_HANDLER = {
  onMouseEnter: ({ target }: MouseEvent) => (target as Element).nextElementSibling?.classList.add(...HOVER_LIST),
  onMouseLeave: ({ target }: MouseEvent) => (target as Element).nextElementSibling?.classList.remove(...HOVER_LIST),
};

function FacetButton({ hoverNext, label, action, class: cssClass }: { hoverNext?: boolean; label: string; class?: string; action: () => void }) {
  return (
    <button
      type="button"
      class={cssClass}
      {...(hoverNext ? HOVER_HANDLER : {})}
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
