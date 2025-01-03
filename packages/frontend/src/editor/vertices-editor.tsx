import type { ComponentChildren } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { groupBy } from "@plangs/auxiliar/array";
import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { ADD, CLOSE } from "@plangs/frontend/auxiliar/icons";
import { getStore } from "@plangs/frontend/auxiliar/storage";
import { INPUT, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { ret } from "@plangs/auxiliar/misc";
import { localEditsData, updateLocalEdits } from ".";
import { VertexForm } from "./vertex-form";
import { type AnyRel, VerticesEditorState } from "./vertices-editor-state";

/**
 * Editor component which includes 3 sections:
 * * A form for the data of the Vertex.
 * * An editor for relationships (edges) of the Vertex.
 * * A JSON editor for the raw data of the Vertex.
 */
export function VerticesEditor({ pg: referencePG }: { pg: PlangsGraph }) {
  // The editor always works with a local copy of the graph.
  const pg = new PlangsGraph().loadJSON(localEditsData(referencePG));
  const py = pg.plang.get("pl+python");

  const self = useRef<HTMLDivElement>(null);
  const state = useDispatchable(
    () =>
      new VerticesEditorState({
        pg,
        currentKind: "plang",
        currentVertex: py,
        currentRel: !py ? undefined : ["relInfluencedBy", py?.relations.get("relInfluencedBy") as AnyRel],
        filter: "",
        tab: "relations",
      }),
  );

  useEffect(() => {
    for (const b of self.current?.querySelectorAll("button.current") ?? []) b.scrollIntoView({ block: "nearest" });
  });

  return (
    <div ref={self} class={tw("p-2", "flex-1", "flex flex-row gap-8", "overflow-hidden")}>
      <div class={tw("w-[11.5rem] pr-2", "flex flex-col gap-4")}>
        <select class={tw(INPUT, "py-0 text-black/85")} onChange={ev => state.doSetCurrentKind(ev.currentTarget.value as TPlangsVertexName)}>
          {state.vertexNames.map(vn => (
            <option key={vn} value={vn} selected={state.currentKind === vn}>
              {vn}
            </option>
          ))}
        </select>
        <input
          type="search"
          aria-label="Filter Key"
          placeholder="Filter"
          value={state.filter}
          onInput={ev => state.doSetFilter((ev.target as HTMLInputElement).value)}
          class={tw(INPUT, "px-2 py-1")}
        />
        <div class={tw("w-[11.5rem] pr-2", "flex flex-col gap-4", VSCROLL)}>
          {state.currentVertices.map(v =>
            EditorButton({ label: v.key, isCurrent: () => state.currentVertex?.key === v.key, onClick: () => state.doSetCurrentVertex(v) }),
          )}
        </div>
      </div>
      {state.currentVertex ? (
        <div class={tw("flex-1", "flex flex-col gap-4", "bg-secondary/10", "overflow-hidden")}>
          <div class="flex w-full flex-row gap-4">
            <EditorButton label="FORM" isCurrent={() => state.tab === "form"} onClick={() => state.doSetTab("form")} />
            <EditorButton label="RELATIONS" isCurrent={() => state.tab === "relations"} onClick={() => state.doSetTab("relations")} />
            <EditorButton label="JSON" isCurrent={() => state.tab === "json"} onClick={() => state.doSetTab("json")} />
            <div class="flex-1" />
            {state.tab === "relations" &&
              ret(state.currentVertex, vertex => (
                <select
                  class={INPUT}
                  onChange={({ currentTarget }) =>
                    state.doSetRel([currentTarget.value, vertex.relations.get(currentTarget.value as never) as AnyRel])
                  }>
                  {[...vertex.relations.entries()]
                    .filter(([key]) => key !== "relPosts" && key !== "relAuthors")
                    .map(([key, rel]) => (
                      <option key={`${vertex.key}-${key}`} selected={state.currentRel?.[0] === key} value={key}>
                        {rel.edgeDesc}
                      </option>
                    ))}
                </select>
              ))}
          </div>
          <div class="flex flex-1 justify-center overflow-hidden">
            {state.tab === "form" ? (
              <VertexForm key={state.currentVertex.key} vertex={state.currentVertex} />
            ) : state.tab === "relations" && state.currentRel ? (
              <Relations key={state.currentVertex.key} state={state} vertex={state.currentVertex} rel={state.currentRel[1]} />
            ) : state.tab === "json" ? (
              <JsonEditor key={state.currentVertex.key} vertex={state.currentVertex} />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div class="flex-1 bg-secondary/25 p-4">Select a vertex to edit.</div>
      )}
    </div>
  );
}

export function EditorButton({
  label,
  isCurrent,
  onClick,
  class: klass,
}: { label: string; class?: string; isCurrent?: () => boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      class={tw(
        "inline-flex items-start align-middle",
        "cursor-pointer",
        "hover:bg-hiliteb hover:text-hilitef",
        "m-0.5 ring-1 ring-primary",
        isCurrent?.() && "current bg-secondary",
        klass,
      )}
      onClick={onClick}>
      <span class={tw("mx-1 px-1 py-0.5", "inline-block w-full", "truncate")}>{label}</span>
    </button>
  );
}

function JsonEditor({ vertex }: { vertex: TPlangsVertex }): ComponentChildren {
  const vertexJson = () => JSON.stringify(vertex.data, null, 2);

  const textarea = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState("");

  const reload = () => {
    if (textarea.current) textarea.current.value = vertexJson();
    setStatus(`Reloadad at ${new Date().toLocaleTimeString()}`);
  };

  const save = () => {
    try {
      const newData = JSON.parse(textarea.current?.value ?? "");
      Object.assign(vertex.clearData().data, newData);
      updateLocalEdits(vertex.graph.toJSON());
      setStatus(`Saved at ${new Date().toLocaleTimeString()}`);
    } catch (e) {
      setStatus(`Error: ${e}`);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: This effect should only run once.
  useEffect(() => {
    if (textarea.current) textarea.current.value = vertexJson();
  }, []);

  return (
    <div class={tw("w-full", "flex flex-col gap-4 justify-self-center", "bg-secondary/25")}>
      <header class={tw("px-4 py-2", "flex flex-row gap-4", "items-center align-middle", "bg-secondary/50", "text-center text-xl")}>
        <div children={`${vertex.name}: ${vertex.vertexName} (${vertex.key}) / Full Vertex Data`} />
        <div class="flex-1" />
        <EditorButton label="Reload" onClick={reload} />
        <EditorButton label="Save" onClick={save} />
      </header>
      <div class="text-center">{status}</div>
      <textarea ref={textarea} class={tw(INPUT, "m-4", "text-xl", "flex-1 overflow-hidden overflow-y-auto")} style={"font-family: monospace;"} />
    </div>
  );
}

/** Partition vertices from a relationship: those with an edge and those without. */
function Relations({ state, vertex, rel }: { state: VerticesEditorState; vertex: TPlangsVertex; rel: AnyRel }) {
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
    <div class={tw("flex-1", "flex flex-col gap-4", "bg-primary/10", "overflow-hidden")}>
      <header class={tw("px-4 py-2", "flex flex-row gap-4", "items-center align-middle", "bg-secondary/50", "text-center text-xl")}>
        <div children={`${vertex.name}: ${vertex.vertexName} (${vertex.key}) / ${rel.edgeDesc}`} />
      </header>

      <div class={tw("flex flex-row gap-4", "p-2")}>
        <h2 class="flex-1 uppercase">Related</h2>
        <h2 class="flex-1 uppercase">Unrelated</h2>
      </div>

      <div class={tw("flex flex-row gap-4", "overflow-hidden", "p-2")}>
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
          <h3 class="w-4 p-4 pr-5 text-foreground text-xl! uppercase" style="color: var(--color-foreground) !important;">
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
