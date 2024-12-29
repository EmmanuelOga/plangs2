import type { ComponentChildren } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { ADD, CLOSE } from "@plangs/frontend/auxiliar/icons";
import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import type { PlangsGraph, VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

import { text } from "stream/consumers";
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
  const py = pg.plang.get("pl+python") as VPlang;
  const state = useDispatchable(
    () =>
      new VerticesEditorState({
        pg,
        currentKind: "plang",
        filter: "",
        currentVertex: py,
        currentRel: ["relInfluenced", py.relations.get("relInfluenced") as AnyRel],
        tab: "json",
      }),
  );

  useEffect(() => {
    self.current?.querySelectorAll("button.current")[1]?.scrollIntoView({ block: "nearest" });
  });

  return (
    <div ref={self} class="flex w-full flex-col gap-2">
      <div class="flex flex-1 flex-row gap-8 overflow-hidden p-4">
        <div class="flex flex-col gap-4">
          {state.vertexNames.map(vn => button({ label: vn, isCurrent: () => state.currentKind === vn, onClick: () => state.doSetCurrentKind(vn) }))}
        </div>
        <div class="flex max-h-full flex-col overflow-hidden">
          <input
            aria-label="Filter Key"
            placeholder="Filter"
            value={state.filter}
            onInput={ev => state.doSetFilter((ev.target as HTMLInputElement).value)}
            class={tw(INPUT, "mb-4 px-2 py-1")}
          />
          <div class="flex flex-1 flex-col gap-4 overflow-y-scroll pr-4">
            {state.currentVertices.map(v =>
              button({ label: v.key, isCurrent: () => state.currentVertex?.key === v.key, onClick: () => state.doSetCurrentVertex(v) }),
            )}
          </div>
        </div>
        {state.currentVertex ? tabs(state, state.currentVertex) : <div class="flex-1 bg-secondary/25 p-2 text-2xl">Select a vertex to edit.</div>}
      </div>
    </div>
  );
}

export function button({ label, isCurrent, onClick }: { label: string; isCurrent?: () => boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      class={tw(
        "block",
        "px-4 py-1",
        "border-1 border-primary",
        "cursor-pointer",
        "hover:bg-hiliteb hover:text-hilitef",
        isCurrent?.() && "current bg-secondary",
      )}
      onClick={onClick}>
      {label}
    </button>
  );
}

function tabs(state: VerticesEditorState, vertex: TPlangsVertex) {
  return (
    <div class={tw("flex-1", "flex flex-col gap-4", "bg-secondary/10", "overflow-hidden")}>
      <div class="flex flex-row gap-4">
        <div>{button({ label: "FORM", isCurrent: () => state.tab === "form", onClick: () => state.doSetTab("form") })}</div>
        <div>{button({ label: "RELATIONS", isCurrent: () => state.tab === "relations", onClick: () => state.doSetTab("relations") })}</div>
        <div>{button({ label: "JSON", isCurrent: () => state.tab === "json", onClick: () => state.doSetTab("json") })}</div>
      </div>
      <header class="border-1 border-primary bg-secondary/75 py-2 text-center text-xl">
        {vertex.vertexName}: {vertex.key}: {vertex.name}
      </header>
      <div class="flex flex-1 justify-center overflow-hidden">
        {!state.currentVertex ? (
          "Please select a Vertex"
        ) : state.tab === "form" ? (
          <VertexForm vertex={state.currentVertex} />
        ) : state.tab === "relations" ? (
          relations(state, vertex)
        ) : (
          <JsonEditor vertex={state.currentVertex} />
        )}
      </div>
    </div>
  );
}

function JsonEditor({ vertex }: { vertex: TPlangsVertex }): ComponentChildren {
  const vertexJson = () => JSON.stringify(vertex.data, null, 2);

  const textarea = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState("");

  const reload = () => {
    if (textarea.current) {
      textarea.current.value = vertexJson();
      setStatus(`Reloadad at ${new Date().toLocaleTimeString()}`);
    }
  };

  const save = () => {
    try {
      vertex.merge(JSON.parse(textarea.current?.value ?? ""));
      setStatus("Saved.");
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
        {button({ label: "Reload", onClick: reload })}
        {button({ label: "Save", onClick: save })}
      </header>
      <div class="text-center">{status}</div>
      <textarea ref={textarea} class={tw(INPUT, "text-xl", "flex-1 overflow-hidden overflow-y-auto")} style={"font-family: monospace;"} />
    </div>
  );
}
// <div class="grid grid-cols-[auto_1fr] items-start gap-4 pt-4">{textArea("Raw JSON Data", JSON.stringify(vertex.data, null, 2), 80)}</div>

function relations(state: VerticesEditorState, vertex: TPlangsVertex): ComponentChildren {
  return (
    <div class="flex flex-1 flex-row gap-4 overflow-hidden">
      <div class="flex flex-col gap-4 overflow-hidden overflow-y-scroll">
        {[...vertex.relations.entries()]
          .filter(([key]) => key !== "relPosts" && key !== "relAuthors")
          .map(([key, vertices]) =>
            button({
              label: vertices.edgeDesc,
              isCurrent: () => state.currentRel?.[0] === key,
              onClick: () => state.doSetRel([key, vertices as AnyRel]),
            }),
          )}
      </div>
      <div class="flex flex-1 flex-col gap-4">
        <header class="border-1 border-primary bg-secondary/75 p-2 text-center text-xl">Related {state.currentRel?.[1].edgeDesc}</header>
        <div class="flex flex-1 flex-col gap-4 bg-primary/10 p-4">{state.currentRel ? partition(state, state.currentRel) : "Select a Relation."}</div>
      </div>
    </div>
  );
}

/** Partition vertices from a relationship: those with an edge and those without. */
function partition(state: VerticesEditorState, [key, rel]: [string, AnyRel]) {
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
    state.dispatch();
  }

  function connect(v: TPlangsVertex): void {
    rel.add(v.key);
    state.dispatch();
  }

  return (
    <>
      <div class="flex flex-row flex-wrap gap-1">
        <h2 class="w-full pb-2">Connected</h2>
        {related.map(v => (
          <Pill key={v.key} class="group cursor-pointer hover:bg-primary/25">
            <button type="button" class="inline-flex items-center gap-1" onClick={() => disconnect(v)}>
              {v.name}
              <div class={tw("inline-block", "group-hover:text-hiliteb")}>{CLOSE}</div>
            </button>
          </Pill>
        ))}
      </div>
      <div class="flex flex-row flex-wrap gap-1">
        <h2 class="w-full pb-2">Unconnected</h2>
        {unrelated.map(v => (
          <Pill key={v.key} class="group hover:bg-primary/25">
            <button type="button" class="inline-flex cursor-pointer items-center gap-1" onClick={() => connect(v)}>
              {v.name}
              <div class={tw("inline-block", "group-hover:text-hiliteb")}>{ADD}</div>
            </button>
          </Pill>
        ))}
      </div>
    </>
  );
}
