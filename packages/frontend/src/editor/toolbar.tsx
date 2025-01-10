import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { INPUT, tw } from "../auxiliar/styles";
import { EditorButton } from "./button";
import type { AnyRel, EditorMainState } from "./state";

export function EditorToolbar({ state }: { state: EditorMainState }) {
  const edit = state.mainTab === "edit";
  const vert = edit && state.currentVertex;
  const showRel = vert && state.tab === "relations";
  return (
    <div class={tw("flex flex-col gap-1 2xl:flex-row 2xl:gap-0")}>
      <div class="grid max-w-fit grid-cols-2 gap-4 pr-4">
        <EditorButton label="STATUS" isCurrent={() => state.mainTab === "status"} onClick={() => state.doSetMainTab("status")} />
        <EditorButton label="EDIT" isCurrent={() => state.mainTab === "edit"} onClick={() => state.doSetMainTab("edit")} />
      </div>
      {edit && sep("bg-transparent", "bg-primary")}
      {edit && (
        <div class="flex flex-row">
          {selVertex(state, "bg-primary px-4")}
          <div class="flex-1 bg-primary" />
        </div>
      )}
      {edit && sep("bg-primary", vert ? "bg-secondary" : "bg-background")}
      {vert && (
        <>
          {state.mainTab === "edit" && (
            <div class="flex flex-row">
              <div class="grid max-w-fit grid-cols-3 gap-4 bg-secondary px-2 sm:px-6">
                <EditorButton label="FORM" isCurrent={() => state.tab === "form"} onClick={() => state.doSetTab("form")} />
                <EditorButton label="JSON" isCurrent={() => state.tab === "json"} onClick={() => state.doSetTab("json")} />
                <EditorButton label="RELS" isCurrent={() => state.tab === "relations"} onClick={() => state.doSetTab("relations")} />
              </div>
              <div class="flex-1 bg-secondary" />
            </div>
          )}
          {sep("bg-secondary", showRel ? "bg-primary" : "bg-background")}
          {showRel && (
            <div
              class={tw("flex-1", "flex", "px-4 py-1", state.mainTab === "edit" && (showRel ? "bg-primary" : "bg-secondary"))}
              children={showRel && selRelations(state, state.currentVertex)}
            />
          )}
        </>
      )}
    </div>
  );
}
const sep = (color1: string, color2: string) => (
  <div class={tw("hidden 2xl:block", "w-[1rem]", color1)} children={<div class={tw("breadcrumb", "size-full", color2)} />} />
);

const selVertex = (state: EditorMainState, klass: string) => (
  <div class={tw("grid gap-4 p-1", "grid-cols-[1fr_auto_1fr_auto]", klass)}>
    <label for="editor-kind" class="hidden flex-row items-center gap-2 py-1 pl-1 text-background sm:inline-flex">
      Kind
    </label>
    <select id="editor-kind" class={tw(INPUT)} onChange={ev => state.doSetCurrentKind(ev.currentTarget.value as TPlangsVertexName)}>
      {state.vertexNames.map(vn => (
        <option key={vn} value={vn} selected={state.currentKind === vn} children={vn} />
      ))}
    </select>
    <label for="editor-vertex" class="hidden flex-row items-center gap-2 py-1 pl-1 text-background sm:inline-flex">
      Vertex
    </label>
    <select id="editor-vertex" class={INPUT} onChange={({ currentTarget: sel }) => state.doSetCurrentVertex(sel.value)}>
      {state.currentVertices.map(v => (
        <option key={v.key} selected={state.currentVertex?.key === v.key} value={v.key} children={v.name} />
      ))}
    </select>
  </div>
);

const selRelations = (state: EditorMainState, vertex: TPlangsVertex) => (
  <label class="inline-flex flex-row items-center gap-2">
    <span class="text-background">Relation</span>
    <select
      class={tw(INPUT)}
      onChange={({ currentTarget }) => state.doSetRel([currentTarget.value, vertex.relations.get(currentTarget.value as never) as AnyRel])}>
      {[...vertex.relations.entries()]
        .filter(([key]) => key !== "relPosts" && key !== "relAuthors")
        .map(([key, rel]) => (
          <option key={`${vertex.key}-${key}`} selected={state.currentRel?.[0] === key} value={key}>
            {rel.edgeDesc}
          </option>
        ))}
    </select>
  </label>
);
