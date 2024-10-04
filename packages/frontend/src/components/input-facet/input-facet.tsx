import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/dispatchable";
import { tw } from "@plangs/frontend/utils";
import type { E, PlangsGraph } from "@plangs/plangs/index";

import type { InputSelElement } from "../input-sel";
import { type Entry, InputFacetState } from "./state";

export type InputFacetProps = {
  pg?: PlangsGraph;
  edge?: E;
  dir?: "direct" | "inverse";
};

export const TAG_NAME = "input-facet";

const CLICKTXT = tw("w-full cursor-pointer", "hover:text-secondary hover:underline", "overflow-hidden text-ellipsis whitespace-nowrap");

export function InputFacet({ pg, edge, dir }: InputFacetProps) {
  if (!pg || !edge || !dir) return <div>...</div>;

  const selectionRef = useRef<InputSelElement | undefined>();
  const state = useDispatchable(new InputFacetState({ pg, edge, dir, entries: [], order: "facet-asc", selected: new Set() }).generateEntries());

  const toggleFacet = () => state.toggleOrder("facet");
  const toggleCount = () => state.toggleOrder("count");

  const addEntry = (entry: Entry) => {
    selectionRef.current?.addItem(entry);
    state.addSelected(entry);
  };

  useEffect(() => selectionRef.current?.onRemove(entry => state.removeSelected(entry.removed)));

  return (
    <div>
      <div class={tw("mb-4", "max-h-[15rem]", "overflow-x-hidden overflow-y-scroll")}>
        <table class={tw("readable w-full max-w-[unset]")}>
          <thead class="sticky top-0 bg-foreground">
            <tr>
              <th class="pt-1">
                <button class={tw(CLICKTXT, "text-left italic")} type="button" onClick={toggleFacet} onKeyDown={toggleFacet}>
                  Facet
                </button>
              </th>
              <th>
                <button class={tw(CLICKTXT, "text-left italic")} type="button" onClick={toggleCount} onKeyDown={toggleCount}>
                  Count
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...state.entries()].map(entry => (
              <tr key={entry.value}>
                <td>
                  <button type="button" class={tw(CLICKTXT, "text-left")} onClick={() => addEntry(entry)}>
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

export const EVENTS = {} as const;
