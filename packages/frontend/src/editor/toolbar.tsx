import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { INPUT, tw } from "../auxiliar/styles";
import { EditorButton } from "./button";
import type { AnyRel, EditorMainState } from "./state";

export function EditorToolbar({ state }: { state: EditorMainState }) {
  return (
    <div class={tw("hidden sm:grid", "grid-cols-[auto_1fr] gap-8", "p-1")}>
      <div class="grid max-w-fit grid-cols-[auto_auto_1fr] gap-8">
        <EditorButton label="STATUS" isCurrent={() => state.mainTab === "status"} onClick={() => state.doSetMainTab("status")} />
        <EditorButton label="EDIT" isCurrent={() => state.mainTab === "edit"} onClick={() => state.doSetMainTab("edit")} />
      </div>
      {state.mainTab === "edit" && (
        <div class="grid max-w-fit grid-cols-[auto_1fr] gap-8">
          <div class="flex flex-row gap-4">
            {selVertKind(state)}
            {selVertices(state)}
          </div>

          <div class="grid max-w-fit grid-cols-[auto_auto_auto_1fr] gap-8">
            <EditorButton label="FORM" isCurrent={() => state.tab === "form"} onClick={() => state.doSetTab("form")} />
            <EditorButton label="RELATIONS" isCurrent={() => state.tab === "relations"} onClick={() => state.doSetTab("relations")} />
            <EditorButton label="JSON" isCurrent={() => state.tab === "json"} onClick={() => state.doSetTab("json")} />
            {state.tab === "relations" && state.currentVertex && selRelations(state, state.currentVertex)}
          </div>
        </div>
      )}
    </div>
  );
}

const selVertKind = (state: EditorMainState) => (
  <label class="flex flex-row items-center gap-2">
    <span class="text-primary">Kind</span>
    <select class={tw(INPUT)} onChange={ev => state.doSetCurrentKind(ev.currentTarget.value as TPlangsVertexName)}>
      {state.vertexNames.map(vn => (
        <option key={vn} value={vn} selected={state.currentKind === vn} children={vn} />
      ))}
    </select>
  </label>
);

const selVertices = (state: EditorMainState) => (
  <label class="flex flex-row items-center gap-2">
    <span class="text-primary">Vertex</span>
    <select class={INPUT} onChange={({ currentTarget: sel }) => state.doSetCurrentVertex(sel.value)}>
      {state.currentVertices.map(v => (
        <option key={v.key} selected={state.currentVertex?.key === v.key} value={v.key} children={v.name} />
      ))}
    </select>
  </label>
);

const selRelations = (state: EditorMainState, vertex: TPlangsVertex) => (
  <label class="flex flex-row items-center gap-2">
    <span class="text-primary">Rel</span>
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
