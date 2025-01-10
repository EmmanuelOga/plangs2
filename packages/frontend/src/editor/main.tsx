import { useState } from "preact/hooks";

import type { PRResult } from "@plangs/frontend/app/github";
import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { INPUT, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { localEditsData } from ".";
import { EditorButton } from "./button";
import { JsonEditor } from "./json";
import { Relations } from "./relations";
import { type AnyRel, EditorMainState } from "./state";
import { Status } from "./status";
import { VertexForm } from "./vertex-form";

/** Top level of the editor: information, editing and exporting. */
export function EditorMain({ pg, pullreq }: { pg: PlangsGraph; pullreq?: PRResult }) {
  const [tab, setTab] = useState<"status" | "edit">("status");

  const editorState = useDispatchable(() => {
    // The editor always works with a local copy of the graph.
    const pgCopy = new PlangsGraph().loadJSON(localEditsData(pg));
    const py = pgCopy.plang.get("pl+python");
    return new EditorMainState({
      pg: pgCopy,
      currentKind: "plang",
      currentVertex: py,
      currentRel: !py ? undefined : ["relInfluencedBy", py?.relations.get("relInfluencedBy") as AnyRel],
      tab: "relations",
    });
  });

  const editor = () =>
    !editorState.currentVertex ? (
      "Select a vertex to edit."
    ) : editorState.tab === "form" ? (
      <VertexForm key={editorState.currentVertex.key} vertex={editorState.currentVertex} />
    ) : editorState.tab === "relations" && editorState.currentRel ? (
      <Relations key={editorState.currentVertex.key} state={editorState} vertex={editorState.currentVertex} rel={editorState.currentRel[1]} />
    ) : editorState.tab === "json" ? (
      <JsonEditor key={editorState.currentVertex.key} vertex={editorState.currentVertex} />
    ) : (
      ""
    );

  return (
    <div class={tw("p-4", "flex-1", "flex flex-col gap-4", "overflow-hidden", "relative")}>
      {pullreq?.kind === "loading" && (
        <div class="absolute inset-0 z-10 flex flex-col bg-background/85 backdrop-blur-lg">
          <div class="flex-1" />
          <div class="flex flex-row items-center justify-center">
            <div class="h-8 w-8 animate-spin rounded-full border-primary border-t-2" />
            <div class="ml-2">Creating Pull Request...</div>
          </div>
          <div class="flex-1" />
        </div>
      )}

      <div
        class={tw(
          "hidden sm:flex",
          "flex-row gap-4",
          "bg-secondary/25 text-primary",
          "border-secondary border-b-1",
          "shadow-secondary/25 shadow-sm",
        )}>
        <EditorButton class="w-[8rem]" label="STATUS" isCurrent={() => tab === "status"} onClick={() => setTab("status")} />
        <EditorButton class="w-[8rem]" label="EDIT" isCurrent={() => tab === "edit"} onClick={() => setTab("edit")} />

        <div class="flex-1" />

        {tab === "edit" && editorState.currentVertex && vertexControls(editorState, editorState.currentVertex)}
      </div>
      {tab === "status" && <Status pullreq={pullreq} />}
      {tab === "edit" && editor()}
    </div>
  );
}

const vertexControls = (editorState: EditorMainState, vertex: TPlangsVertex) => (
  <>
    <div class="grid grid-cols-3 gap-4">
      <div class={tw("flex flex-row gap-4")}>
        <select class={tw(INPUT, "py-0 text-black/85")} onChange={ev => editorState.doSetCurrentKind(ev.currentTarget.value as TPlangsVertexName)}>
          {editorState.vertexNames.map(vn => (
            <option key={vn} value={vn} selected={editorState.currentKind === vn} children={vn} />
          ))}
        </select>
        <div class={tw("w-[11.5rem] pr-2", "flex flex-col gap-4", VSCROLL)}>
          <select class={INPUT} onChange={({ currentTarget: sel }) => editorState.doSetCurrentVertex(sel.value)}>
            {editorState.currentVertices.map(v => (
              <option key={v.key} selected={editorState.currentVertex?.key === v.key} value={v.key} children={v.name} />
            ))}
          </select>
        </div>
      </div>
    </div>

    <div class="flex flex-row gap-4">
      <EditorButton label="FORM" isCurrent={() => editorState.tab === "form"} onClick={() => editorState.doSetTab("form")} />
      <EditorButton label="RELATIONS" isCurrent={() => editorState.tab === "relations"} onClick={() => editorState.doSetTab("relations")} />
      <EditorButton label="JSON" isCurrent={() => editorState.tab === "json"} onClick={() => editorState.doSetTab("json")} />
    </div>
    {editorState.tab === "relations" ? (
      <select
        class={tw(INPUT, "max-w-[15rem]")}
        onChange={({ currentTarget }) => editorState.doSetRel([currentTarget.value, vertex.relations.get(currentTarget.value as never) as AnyRel])}>
        {[...vertex.relations.entries()]
          .filter(([key]) => key !== "relPosts" && key !== "relAuthors")
          .map(([key, rel]) => (
            <option key={`${vertex.key}-${key}`} selected={editorState.currentRel?.[0] === key} value={key}>
              {rel.edgeDesc}
            </option>
          ))}
      </select>
    ) : (
      <div />
    )}
  </>
);
