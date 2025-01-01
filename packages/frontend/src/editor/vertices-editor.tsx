import type { ComponentChildren } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { ADD, CLOSE } from "@plangs/frontend/auxiliar/icons";
import { INPUT, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { updateLocalEdits } from ".";
import { VertexForm } from "./vertex-form";
import { type AnyRel, VerticesEditorState } from "./vertices-editor-state";

/**
 * Editor component which includes 3 sections:
 * * A form for the data of the Vertex.
 * * An editor for relationships (edges) of the Vertex.
 * * A JSON editor for the raw data of the Vertex.
 */
export function VerticesEditor({ pg }: { pg: PlangsGraph }) {
  const self = useRef<HTMLDivElement>(null);
  const state = useDispatchable(() => new VerticesEditorState({ pg, currentKind: "plang", filter: "", tab: "relations" }));

  useEffect(() => {
    self.current?.querySelectorAll("button.current")[1]?.scrollIntoView({ block: "nearest" });
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
          <header class="border-1 border-primary bg-secondary/75 py-2 text-center text-xl">
            {state.currentVertex.vertexName}: {state.currentVertex.key}: {state.currentVertex.name}
          </header>
          <div class="flex flex-row gap-4">
            <EditorButton label="FORM" isCurrent={() => state.tab === "form"} onClick={() => state.doSetTab("form")} />
            <EditorButton label="RELATIONS" isCurrent={() => state.tab === "relations"} onClick={() => state.doSetTab("relations")} />
            <EditorButton label="JSON" isCurrent={() => state.tab === "json"} onClick={() => state.doSetTab("json")} />
          </div>
          <div class="flex flex-1 justify-center overflow-hidden">
            {state.tab === "form" ? (
              <VertexForm key={state.currentVertex.key} vertex={state.currentVertex} />
            ) : state.tab === "relations" ? (
              <Relations key={state.currentVertex.key} state={state} />
            ) : (
              <JsonEditor key={state.currentVertex.key} vertex={state.currentVertex} />
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
      <header class={tw("px-4 py-2", "flex flex-row gap-4", "justify-end", "bg-secondary/50", "text-center text-xl")}>
        <EditorButton label="Reload" onClick={reload} />
        <EditorButton label="Save" onClick={save} />
      </header>
      <div class="text-center">{status}</div>
      <textarea ref={textarea} class={tw(INPUT, "text-xl", "flex-1 overflow-hidden overflow-y-auto")} style={"font-family: monospace;"} />
    </div>
  );
}
// <div class="grid grid-cols-[auto_1fr] items-start gap-4 pt-4">{textArea("Raw JSON Data", JSON.stringify(vertex.data, null, 2), 80)}</div>

function Relations({ state }: { state: VerticesEditorState }): ComponentChildren {
  const vertex = state.currentVertex as TPlangsVertex;
  return (
    <div key={vertex.key} class="flex flex-1 flex-row gap-4 overflow-hidden">
      <div class={tw("flex flex-col gap-4", VSCROLL, "pr-4", "max-w-[10rem]")}>
        {[...vertex.relations.entries()]
          .filter(([key]) => key !== "relPosts" && key !== "relAuthors")
          .map(([key, vertices]) => (
            <EditorButton
              key={`${vertex.key}-${key}`}
              label={vertices.edgeDesc}
              isCurrent={() => state.currentRel?.[0] === key}
              onClick={() => state.doSetRel([key, vertices as AnyRel])}
            />
          ))}
      </div>
      {state.currentRel ? (
        <Partition
          key={`${vertex.key}-${state.currentRel[1]}`}
          state={state}
          vertex={vertex}
          relKey={state.currentRel[0]}
          rel={state.currentRel[1]}
        />
      ) : (
        <div class="p-4">Select a Relation.</div>
      )}
    </div>
  );
}

/** Partition vertices from a relationship: those with an edge and those without. */
function Partition({ state, vertex, relKey, rel }: { state: VerticesEditorState; vertex: TPlangsVertex; relKey: string; rel: AnyRel }) {
  const related: TPlangsVertex[] = [];
  const unrelated: TPlangsVertex[] = [];

  for (const vertex of rel.targetVertices.values) {
    if (rel.has(vertex.key)) {
      related.push(vertex);
    } else {
      unrelated.push(vertex);
    }
  }

  function disconnect(v: TPlangsVertex): void {
    rel.remove(v.key);
    updateLocalEdits(vertex.graph.toJSON());
    state.dispatch();
  }

  function connect(v: TPlangsVertex): void {
    rel.add(v.key);
    updateLocalEdits(vertex.graph.toJSON());
    state.dispatch();
  }

  return (
    <div class={tw("p-4", "flex-1", "flex flex-col gap-4", "bg-primary/10", "overflow-hidden overflow-y-scroll")}>
      <header class="text-2xl">
        {vertex.name} {rel.edgeDesc}
      </header>
      <div class="flex flex-row flex-wrap gap-1">
        <h2 class="w-full pb-2 uppercase">Connected</h2>
        {related.map(other => (
          <Pill key={`${vertex.key}-${relKey}-${other.key}`} class="group cursor-pointer hover:bg-primary/25">
            <button type="button" class="inline-flex items-center gap-1" onClick={() => disconnect(other)}>
              {other.name}
              <div class={tw("inline-block", "group-hover:text-hiliteb")}>{CLOSE}</div>
            </button>
          </Pill>
        ))}
      </div>
      <div class="flex flex-row flex-wrap gap-1">
        <h2 class="w-full pb-2 uppercase" style="color: var(--color-hiliteb) !important;">
          Unconnected
        </h2>
        {unrelated.map(other => (
          <Pill key={`${vertex.key}-${relKey}-${other.key}`} class="group hover:bg-primary/25">
            <button type="button" class="inline-flex cursor-pointer items-center gap-1" onClick={() => connect(other)}>
              {other.name}
              <div class={tw("inline-block", "group-hover:text-hiliteb")}>{ADD}</div>
            </button>
          </Pill>
        ))}
      </div>
    </div>
  );
}
