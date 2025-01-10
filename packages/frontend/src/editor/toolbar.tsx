import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { INPUT, tw } from "../auxiliar/styles";
import { EditorButton } from "./button";
import type { AnyRel, EditorMainState } from "./state";

export function EditorToolbar({ state }: { state: EditorMainState }) {
  const selVertKind = () => (
    <select class={tw(INPUT, "py-0 text-black/85")} onChange={ev => state.doSetCurrentKind(ev.currentTarget.value as TPlangsVertexName)}>
      {state.vertexNames.map(vn => (
        <option key={vn} value={vn} selected={state.currentKind === vn} children={vn} />
      ))}
    </select>
  );

  const selVertices = () => (
    <select class={INPUT} onChange={({ currentTarget: sel }) => state.doSetCurrentVertex(sel.value)}>
      {state.currentVertices.map(v => (
        <option key={v.key} selected={state.currentVertex?.key === v.key} value={v.key} children={v.name} />
      ))}
    </select>
  );

  const selRelations = (vertex: TPlangsVertex) => (
    <select
      class={tw(INPUT, "max-w-[15rem]")}
      onChange={({ currentTarget }) => state.doSetRel([currentTarget.value, vertex.relations.get(currentTarget.value as never) as AnyRel])}>
      {[...vertex.relations.entries()]
        .filter(([key]) => key !== "relPosts" && key !== "relAuthors")
        .map(([key, rel]) => (
          <option key={`${vertex.key}-${key}`} selected={state.currentRel?.[0] === key} value={key}>
            {rel.edgeDesc}
          </option>
        ))}
    </select>
  );

  const vertexControls = (vertex: TPlangsVertex) => (
    <>
      <div class="flex flex-row gap-4">
        {selVertKind()}
        {selVertices()}
      </div>
      <div class="flex flex-row gap-4">
        <EditorButton label="FORM" isCurrent={() => state.tab === "form"} onClick={() => state.doSetTab("form")} />
        <EditorButton label="RELATIONS" isCurrent={() => state.tab === "relations"} onClick={() => state.doSetTab("relations")} />
        <EditorButton label="JSON" isCurrent={() => state.tab === "json"} onClick={() => state.doSetTab("json")} />
      </div>
      {state.tab === "relations" ? selRelations(vertex) : <div />}
    </>
  );

  return (
    <div
      class={tw("hidden sm:flex", "flex-row gap-4", "bg-secondary/25 text-primary", "border-secondary border-b-1", "shadow-secondary/25 shadow-sm")}>
      <EditorButton class="w-[8rem]" label="STATUS" isCurrent={() => state.mainTab === "status"} onClick={() => state.doSetMainTab("status")} />
      <EditorButton class="w-[8rem]" label="EDIT" isCurrent={() => state.mainTab === "edit"} onClick={() => state.doSetMainTab("edit")} />

      <div class="flex-1" />

      {state.mainTab === "edit" && state.currentVertex && vertexControls(state.currentVertex)}
    </div>
  );
}
