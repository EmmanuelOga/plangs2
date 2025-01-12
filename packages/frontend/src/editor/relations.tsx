import type { ComponentChildren } from "preact";

import { groupBy } from "@plangs/auxiliar/array";
import { ADD, CLOSE } from "@plangs/frontend/auxiliar/icons";
import { VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

import { updateLocalEdits } from ".";
import type { AnyRel, EditorMainState } from "./state";

/** Partition vertices from a relationship: those with an edge and those without. */
export function Relations({ state, vertex, rel }: { state: EditorMainState; vertex: TPlangsVertex; rel: AnyRel }) {
  const related: TPlangsVertex[] = [];
  const unrelated: TPlangsVertex[] = [];

  for (const vertex of rel.targetVertices.values) {
    if (rel.has(vertex.key)) {
      related.push(vertex);
    } else {
      unrelated.push(vertex);
    }
  }

  return (
    <div class={tw("flex-1", "flex flex-col sm:gap-4", "bg-primary/10", "overflow-hidden")}>
      <header class={tw("px-2 sm:py-2", "flex flex-row gap-4", "items-center align-middle", "bg-secondary/50")}>
        <div class="text-xl" children={`${vertex.key}: ${rel.edgeDesc}`} />
      </header>

      <div class={tw("flex flex-row gap-4", "p-2")}>
        <h2 class="flex-1 uppercase">Related</h2>
        <h2 class="flex-1 uppercase">Unrelated</h2>
      </div>

      <div class={tw("flex flex-row sm:gap-4", "overflow-hidden", "sm:p-2")}>
        {renderGroup(CLOSE, related, v => {
          rel.remove(v.key);
          updateLocalEdits(vertex.graph.toJSON());
          state.dispatch();
        })}
        {renderGroup(ADD, unrelated, v => {
          rel.add(v.key);
          updateLocalEdits(vertex.graph.toJSON());
          state.dispatch();
        })}
      </div>
    </div>
  );
}

function renderGroup(icon: ComponentChildren, vgroup: TPlangsVertex[], action: (v: TPlangsVertex) => void): ComponentChildren {
  return (
    <div class={tw("mr-2 flex-1 p-1", VSCROLL)}>
      {[...groupBy(vgroup, v => v.name[0].toLowerCase()).entries()].map(([name, vertices]) => (
        <div key={name} class={tw("mr-4 mb-4", "flex flex-row items-center gap-4 align-middle", "ring-1 ring-primary/15", "hover:bg-hiliteb/10")}>
          <h3 class="hidden w-4 p-4 pr-5 text-foreground text-xl! uppercase sm:block" style="color: var(--color-foreground) !important;">
            {name}
          </h3>
          <div class="flex flex-1 flex-row flex-wrap">
            {vertices.map(other => (
              <Pill key={other.key} class="group mt-3 hover:bg-primary/25">
                <button type="button" class="inline-flex cursor-pointer items-center gap-1" onClick={() => action(other)}>
                  {other.name}
                  <div class={tw("inline-block", "group-hover:text-hiliteb")}>{icon}</div>
                </button>
              </Pill>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
