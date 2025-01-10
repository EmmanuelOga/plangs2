import type { PRResult } from "@plangs/frontend/app/github";
import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { tw } from "@plangs/frontend/auxiliar/styles";
import { PlangsGraph } from "@plangs/plangs/graph";

import { localEditsData } from ".";
import { JsonEditor } from "./json";
import { Relations } from "./relations";
import { type AnyRel, EditorMainState } from "./state";
import { Status } from "./status";
import { EditorToolbar } from "./toolbar";
import { VertexForm } from "./vertex-form";

/** Top level of the editor: information, editing and exporting. */
export function EditorMain({ pg, pullreq }: { pg: PlangsGraph; pullreq?: PRResult }) {
  const state = useDispatchable(() => {
    // The editor always works with a local copy of the graph.
    const pgCopy = new PlangsGraph().loadJSON(localEditsData(pg));
    const py = pgCopy.plang.get("pl+python");
    return new EditorMainState({
      pg: pgCopy,
      mainTab: "edit",
      currentKind: "plang",
      currentVertex: py,
      tab: "relations",
      currentRel: !py ? undefined : ["relInfluencedBy", py?.relations.get("relInfluencedBy") as AnyRel],
    });
  });

  return (
    <div class={tw("p-4", "flex-1", "flex flex-col gap-4", "overflow-hidden", "relative")}>
      {pullreq?.kind === "loading" && LOADING_OVERLAY}

      <EditorToolbar state={state} />

      {state.mainTab === "status" && <Status pullreq={pullreq} />}
      {state.mainTab === "edit" &&
        (!state.currentVertex ? (
          "Select a vertex to edit."
        ) : state.tab === "form" ? (
          <VertexForm key={state.currentVertex.key} vertex={state.currentVertex} />
        ) : state.tab === "relations" && state.currentRel ? (
          <Relations key={state.currentVertex.key} state={state} vertex={state.currentVertex} rel={state.currentRel[1]} />
        ) : state.tab === "json" ? (
          <JsonEditor key={state.currentVertex.key} vertex={state.currentVertex} />
        ) : (
          ""
        ))}
    </div>
  );
}

const LOADING_OVERLAY = (
  <div class="absolute inset-0 z-10 flex flex-col bg-background/85 backdrop-blur-lg">
    <div class="flex-1" />
    <div class="flex flex-row items-center justify-center">
      <div class="h-8 w-8 animate-spin rounded-full border-primary border-t-2" />
      <div class="ml-2">Creating Pull Request...</div>
    </div>
    <div class="flex-1" />
  </div>
);
